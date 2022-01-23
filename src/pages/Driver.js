import Icons from '../components/icons';
import SearchInput from '../components/input/SearchInput';

const Driver = () => {
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

			<div className='wrapper-driver-list'></div>
		</div>
	);
};

export default Driver;
