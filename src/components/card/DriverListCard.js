import Icons from '../icons'; //import icon list
import moment from 'moment'; //moment lib untuk format tangga

const DriverListCard = ({ data }) => {
	return (
		<div className='driver-card'>
			<div className='header'>
				<div className='driver-id' data-testid='card-drv-id'>
					Driver ID
					<span>{data?.id?.value ? data?.id?.value : '-'}</span>
				</div>
				<div className='settings'>
					<Icons type='more' dataTestId='card-drv-more-icon' />
				</div>
			</div>
			<div className='content'>
				<div className='driver-foto'>
					<Icons
						type='user'
						className='user-icon'
						dataTestId='card-drv-user-icon'
					/>
				</div>
				<div className='driver-info'>
					<div className='info-group'>
						<div className='info-title' data-testid='card-drv-txt-nama-driver'>
							Nama Driver
						</div>
						<div className='info-desc'>
							{data?.name?.first}, {data?.name?.last}
						</div>
					</div>
					<div className='info-group'>
						<div className='info-title' data-testid='card-drv-txt-telepon'>
							Telepon
						</div>
						<div className='info-desc'>{data?.phone}</div>
					</div>
					<div className='info-group email'>
						<div className='info-title' data-testid='card-drv-txt-email'>
							Email
						</div>
						<div className='info-desc'>{data?.email}</div>
					</div>
					<div className='info-group tgl'>
						<div className='info-title' data-testid='card-drv-txt-tgl-lahir'>
							Tanggal Lahir
						</div>
						<div className='info-desc'>
							{moment(data?.dob?.date).format('DD-MM-YYYY')}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DriverListCard;
