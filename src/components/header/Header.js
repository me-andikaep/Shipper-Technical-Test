import Burger from '../burgerMenu/Burger';
import Icons from '../icons/index';
import PropTypes from 'prop-types';

const Header = ({ burgerMenuOpen, setBurgerMenuOpen }) => {
	return (
		<div className='header-container'>
			<div className='wrapper-left'>
				<Burger
					burgerMenuOpen={burgerMenuOpen}
					setBurgerMenuOpen={setBurgerMenuOpen}
				/>
				<img
					alt=''
					src={require('../../assets/logo/shipper.png')}
					className='logo'
				/>
			</div>
			<div className='wrapper-right'>
				<div className='usr-login'>
					Hello, <span className='usr-name'>Shipper User</span>
				</div>
				<div className='usr-img'>
					<Icons type='user' size={40} className='usr-icon' />
				</div>
			</div>
		</div>
	);
};

Header.propTypes = {
	burgerMenuOpen: PropTypes.bool,
	setBurgerMenuOpen: PropTypes.func,
};

export default Header;
