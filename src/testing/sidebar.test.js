/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { BrowserRouter as Router } from 'react-router-dom';

import Sidebar from '../components/sidebar/index';

describe('Testing Kelengkapan komponent Sidebar', () => {
	it('Memastikan menu Beranda muncul saat di render', () => {
		render(
			<Router>
				<Sidebar />
			</Router>
		);
		const menuBeranda = screen.getByTestId('menu-beranda');
		expect(menuBeranda).toBeInTheDocument();
		expect(screen.getByText(/Beranda/)).toBeInTheDocument();
	});

	it('Memastikan menu Driver Management muncul saat di render', () => {
		render(
			<Router>
				<Sidebar />
			</Router>
		);
		const menuDriver = screen.getByTestId('menu-driver');
		expect(menuDriver).toBeInTheDocument();
		expect(screen.getByText(/Driver Management/)).toBeInTheDocument();
	});

	it('Memastikan menu Pickup muncul saat di render', () => {
		render(
			<Router>
				<Sidebar />
			</Router>
		);
		const menuPickup = screen.getByTestId('menu-pickup');
		expect(menuPickup).toBeInTheDocument();
		expect(screen.getByText(/Pickup/)).toBeInTheDocument();
	});
});
