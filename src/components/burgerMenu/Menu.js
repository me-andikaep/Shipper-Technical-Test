import PropTypes from 'prop-types';
import Sidebar from '../sidebar';

const Menu = ({ burgerMenuOpen, setBurgerMenuOpen }) => {
	return (
		<div className={`burger-menu-container ${burgerMenuOpen ? 'open' : ''}`}>
			<Sidebar setBurgerMenuOpen={setBurgerMenuOpen} />
		</div>
	);
};

//hanya tipe props tertentu yang diterima
Menu.propTypes = {
	burgerMenuOpen: PropTypes.bool,
	setBurgerMenuOpen: PropTypes.func,
};

export default Menu;
