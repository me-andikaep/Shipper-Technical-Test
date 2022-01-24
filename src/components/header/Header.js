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
					data-testid='logo-main'
				/>
			</div>
			<div className='wrapper-right'>
				<div className='usr-login' data-testid='usr-login-hello'>
					Hello,{' '}
					<span className='usr-name' data-testid='usr-login-user'>
						Shipper User
					</span>
				</div>
				<div className='usr-img'>
					<Icons
						type='user'
						size={40}
						className='usr-icon'
						dataTestId='usr-img-icon'
					/>
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
