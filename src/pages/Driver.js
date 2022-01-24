import { Fragment, useEffect, useState } from 'react';
import DriverListCard from '../components/card/DriverListCard'; //komponen driver card
import Icons from '../components/icons'; //import list icon
import SearchInput from '../components/input/SearchInput'; //custom input
import { getDriver } from '../redux/reducers/driver/request'; //import fungsi getdriver dr redux
import { useSelector, useDispatch } from 'react-redux'; // redux action

const Driver = (props) => {
	//get state redux store
	const driverState = useSelector((state) => state?.driver);

	const [page, setPage] = useState({
		curentPage: 1,
		limit: 5,
	});

	const [driverList, setDriverList] = useState([]);
	const [displayData, setDisplayData] = useState([]);
	const [filterDt, setFilterDt] = useState('');



	//mendefinisikan dispatch redux
	const dispatch = useDispatch();

	//get driver dengan redux
	useEffect(() => {
		//jika data sudah ada tidak akan get lg
		if (driverState.drivers === null) {
			dispatch(getDriver());
		}
	}, []);

	useEffect(() => {
		setDriverList(driverState.drivers);
	}, [driverState]);

	// funsi manual paginate
	const getPaginatedData = () => {
		let startIndex = page.curentPage * page.limit - page.limit;
		let endIndex = startIndex + page.limit;
		setDisplayData(driverList && driverList.slice(startIndex, endIndex));
	};

	//setiap halaman berubah memperbarui halaman mapping
	useEffect(() => {
		getPaginatedData();
	}, [page, driverList]);

	//next page
	const nextPage = () => {
		if (driverList.length / page.limit !== page.curentPage)
			setPage({ ...page, curentPage: page.curentPage + 1 });
	};

	//previous page
	const prevPage = () => {
		if (page.curentPage !== 1)
			setPage({ ...page, curentPage: page.curentPage - 1 });
	};

	//fungsi filter berdasarkan nama first name
	const onFilterData = () => {
		if (filterDt !== '') {
			const filtered = driverState.drivers.filter((dt) =>
				dt.name.first.toLowerCase().includes(filterDt.toLowerCase())
			);
			setDriverList(filtered);
			if (page.curentPage !== 1) setPage({ ...page, curentPage: 1 });
		} else {
			setDriverList(driverState.drivers);
			if (page.curentPage !== 1) setPage({ ...page, curentPage: 1 });
		}
	};

	useEffect(() => {
		onFilterData();
	}, [filterDt]);

	return (
		<div className='driver-management'>
			<div className='wrapper-header'>
				<div className='wrapper-title'>
					<h2 className='title' data-testid='menu-driver-title'>
						DRIVER MANAGEMENT
					</h2>
					<p className='text' data-testid='menu-driver-title-desc'>
						Data driver yang bekerja dengan Anda.
					</p>
				</div>
				<div className='wrapper-action'>
					<div className='search'>
						<SearchInput
							prefixIcon={
								<Icons type='search' size={20} className='colorPrimary' />
							}
							onChange={(e) => setFilterDt(e.target.value)}
							value={filterDt}
							dataTestId='menu-driver-filter-driver'
						/>
					</div>
					<button className='btn-add-driver' data-testid='menu-driver-btn-add'>
						TAMBAH DRIVER
						<Icons type='add' size={20} />
					</button>
				</div>
			</div>

			<div className='wrapper-driver-list'>
				<div className='wrapper-driver-card'>
					{displayData &&
						displayData.map((item, i) => (
							<Fragment key={i}>
								<DriverListCard data={item} />
							</Fragment>
						))}
				</div>
			</div>

			<div className='wrapper-navigation'>
				<div
					className={`navigation-left ${
						page.curentPage !== 1 ? '' : 'disabled'
					}`}
					onClick={() => prevPage()}
					data-testid='menu-driver-btn-previous-page'
				>
					<Icons type='previous' size={20} />
					Previous Page
				</div>
				<div
					className={`navigation-right ${
						driverList && driverList.length / page.limit !== page.curentPage
							? ''
							: 'disabled'
					}`}
					onClick={() => nextPage()}
					data-testid='menu-driver-btn-next-page'
				>
					Next Page
					<Icons type='next' size={20} />
				</div>
			</div>
		</div>
	);
};

export default Driver;
