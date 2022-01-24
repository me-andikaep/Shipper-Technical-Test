/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

import Header from '../components/header/Header';
import Burger from '../components/burgerMenu/Burger';

const MOCK_CLICK_BTN = jest.fn();

describe('Testing Kelengkapan komponent header', () => {
	it('Memastikan logo muncul saat di render', () => {
		render(<Header />);
		const logoMain = screen.getByTestId('logo-main');
		expect(logoMain).toBeInTheDocument();
	});

	it('Memastikan Text Hello muncul saat di render', () => {
		render(<Header />);
		const txtHello = screen.getByTestId('usr-login-hello');
		expect(txtHello).toBeInTheDocument();
		expect(screen.getByText(/Hello/)).toBeInTheDocument();
	});

	it('Memastikan Text User yang Login muncul saat di render', () => {
		render(<Header />);
		const txtUsrLogin = screen.getByTestId('usr-login-user');
		expect(txtUsrLogin).toBeInTheDocument();
	});

	it('Memastikan Icon / Foto Img User muncul saat di render', () => {
		render(<Header />);
		const iconUsr = screen.getByTestId('usr-img-icon');
		expect(iconUsr).toBeInTheDocument();
	});

	it('Memastikan Tombol Menu Burger muncul saat di render', () => {
		render(<Burger />);
		const burgerMenu = screen.getByTestId('btn-burger-menu');
		expect(burgerMenu).toBeInTheDocument();
	});

	it('Memastikan Tombol Menu Burger dapat di klik', () => {
		render(<Burger setBurgerMenuOpen={MOCK_CLICK_BTN} />);
		const burgerMenu = screen.getByTestId('btn-burger-menu');
		userEvent.click(burgerMenu);
		expect(MOCK_CLICK_BTN).toHaveBeenCalled();
	});
});
