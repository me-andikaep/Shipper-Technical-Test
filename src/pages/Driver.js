import DriverListCard from '../components/card/DriverListCard';
import Icons from '../components/icons';
import SearchInput from '../components/input/SearchInput';

const Driver = () => {
	const data = [
		{
			id: 1,
			firstName: 'John',
			lastName: 'Doe',
			phone: 123123123,
			email: 'Email Address',
			tglLahir: 'DD-MM-YYYY',
		},
		{
			id: 2,
			firstName: 'John',
			lastName: 'Doe',
			phone: 123123123,
			email: 'Email Address',
			tglLahir: 'DD-MM-YYYY',
		},
		{
			id: 3,
			firstName: 'John',
			lastName: 'Doe',
			phone: 123123123,
			email: 'Email Address',
			tglLahir: 'DD-MM-YYYY',
		},
		{
			id: 4,
			firstName: 'John',
			lastName: 'Doe',
			phone: 123123123,
			email: 'Email Address',
			tglLahir: 'DD-MM-YYYY',
		},
		{
			id: 5,
			firstName: 'John',
			lastName: 'Doe',
			phone: 123123123,
			email: 'Email Address',
			tglLahir: 'DD-MM-YYYY',
		},
	];

	return (
		<div className='driver-management'>
			<div className='wrapper-header'>
				<div className='wrapper-title'>
					<h2 className='title'>DRIVER MANAGEMENT</h2>
					<p className='text'>Data driver yang bekerja denagn Anda.</p>
				</div>
				<div className='wrapper-action'>
					<div className='search'>
						<SearchInput
							prefixIcon={
								<Icons type='search' size={20} className='colorPrimary' />
							}
						/>
					</div>
					<button className='btn-add-driver'>
						TAMBAH DRIVER
						<Icons type='add' size={20} />
					</button>
				</div>
			</div>

			<div className='wrapper-driver-list'>
				<div className='wrapper-driver-card'>
					{data.map((item) => (
						<DriverListCard data={item} />
					))}
				</div>
			</div>

			<div className='wrapper-navigation'>
				<div className='navigation-left'>
					<Icons type='previous' size={20} />
					Previous Page
				</div>
				<div className='navigation-right'>
					Next Page <Icons type='next' size={20} />
				</div>
			</div>
		</div>
	);
};

export default Driver;
