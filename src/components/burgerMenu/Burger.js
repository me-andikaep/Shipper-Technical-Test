import PropTypes from 'prop-types';

function Burger({ burgerMenuOpen, setBurgerMenuOpen }) {
	return (
		<button
			className={`btn-burger-menu`}
			onClick={setBurgerMenuOpen}
			data-testid='btn-burger-menu'
		>
			<div className={` ${burgerMenuOpen ? 'open' : ''}`} />
			<div className={` ${burgerMenuOpen ? 'open' : ''}`} />
			<div className={` ${burgerMenuOpen ? 'open' : ''}`} />
		</button>
	);
}

//hanya tipe props tertentu yang diterima
Burger.prototype = {
	burgerMenuOpen: PropTypes.bool,
	setBurgerMenuOpen: PropTypes.func,
};

export default Burger;
