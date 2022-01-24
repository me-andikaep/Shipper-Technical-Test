/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Header from '../components/header/Header';

describe('Testing Kelengkapan komponent header', () => {
	it('Memastikan logo muncul saat di render', () => {
		render(<Header />);
		const logoMain = screen.getByTestId('logo-main');
		expect(logoMain).toBeInTheDocument();
	});

	it('Memastikan Text Hello muncul saat di render', () => {
		render(<Header />);
		// const txtHello = screen.getByTestId('usr-login-hello');
		// expect(txtHello).toBeInTheDocument();
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
});
