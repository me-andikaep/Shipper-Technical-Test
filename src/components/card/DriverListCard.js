import Icons from '../icons';
const DriverListCard = ({ data }) => {
	return (
		<div className='driver-card' key={data.id}>
			<div className='header'>
				<div className='driver-id'>
					Driver ID
					<span>{data.id}</span>
				</div>
				<div className='settings'>
					<Icons type='more' />
				</div>
			</div>
			<div className='content'>
				<div className='driver-foto'>
					<Icons type='user' className='user-icon' />
				</div>
				<div className='driver-info'>
					<div className='info-group'>
						<div className='info-title'>Nama Driver</div>
						<div className='info-desc'>
							{data.firstName}, {data.lastName}
						</div>
					</div>
					<div className='info-group'>
						<div className='info-title'>Telepon</div>
						<div className='info-desc'>{data.phone}</div>
					</div>
					<div className='info-group email'>
						<div className='info-title'>Email</div>
						<div className='info-desc'>{data.email}</div>
					</div>
					<div className='info-group tgl'>
						<div className='info-title'>Tanggal Lahir</div>
						<div className='info-desc'>{data.tglLahir}</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DriverListCard;
