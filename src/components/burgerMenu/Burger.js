import PropTypes from 'prop-types';

function Burger({ burgerMenuOpen, setBurgerMenuOpen }) {
	return (
		<button className={`btn-burger-menu`} onClick={setBurgerMenuOpen}>
			<div className={` ${burgerMenuOpen ? 'open' : ''}`} />
			<div className={` ${burgerMenuOpen ? 'open' : ''}`} />
			<div className={` ${burgerMenuOpen ? 'open' : ''}`} />
		</button>
	);
}

Burger.prototype = {
	burgerMenuOpen: PropTypes.bool,
	setBurgerMenuOpen: PropTypes.func,
};

export default Burger;
