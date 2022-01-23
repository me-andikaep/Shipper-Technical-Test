import { NavLink } from 'react-router-dom';
import Icons from '../icons';
import PropTypes from 'prop-types';

const Sidebar = ({ setBurgerMenuOpen }) => {
	return (
		<ul className='nav'>
			<li className='nav-item'>
				<NavLink
					className='nav-link'
					to='/beranda'
					activeClassName='active'
					onClick={() => {
						if (setBurgerMenuOpen) setBurgerMenuOpen();
					}}
				>
					<Icons type='home' size={20} />
					<span className='nav-text'>Beranda</span>
				</NavLink>
			</li>
			<li className='nav-item'>
				<NavLink
					className='nav-link'
					to={'/driver'}
					activeClassName='active'
					onClick={() => {
						if (setBurgerMenuOpen) setBurgerMenuOpen();
					}}
				>
					<Icons type='user' size={20} />
					<span className='nav-text'>Driver Management</span>
				</NavLink>
			</li>
			<li className='nav-item'>
				<NavLink
					className='nav-link'
					to={'/pickup'}
					activeClassName='active'
					onClick={() => {
						if (setBurgerMenuOpen) setBurgerMenuOpen();
					}}
				>
					<Icons type='calendar' size={20} />
					<span className='nav-text'>Pickup</span>
				</NavLink>
			</li>
		</ul>
	);
};

Sidebar.propTypes = {
	setBurgerMenuOpen: PropTypes.func,
};

export default Sidebar;
