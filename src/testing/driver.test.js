/**
 * @jest-environment jsdom
 */

import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
// import fireEvent from '@testing-library/user-event';

import Driver from '../pages/Driver';
import { Provider } from 'react-redux';
import { store } from '../redux/store';

describe('Testing Kelengkapan komponent Driver', () => {
	it('Memastikan Title Driver Management ada saat di render', () => {
		render(
			<Provider store={store}>
				<Driver />
			</Provider>
		);
		const titleDriver = screen.getByTestId('menu-driver-title');
		expect(titleDriver).toBeInTheDocument();
	});
	it('Memastikan Title Driver Management kalimatnya benar', () => {
		render(
			<Provider store={store}>
				<Driver />
			</Provider>
		);
		expect(screen.getByText(/DRIVER MANAGEMENT/)).toBeInTheDocument();
	});
	it('Memastikan text description Driver Management ada dan kalimatnya benar', () => {
		render(
			<Provider store={store}>
				<Driver />
			</Provider>
		);
		const titleDriver = screen.getByTestId('menu-driver-title-desc');
		expect(titleDriver).toBeInTheDocument();
		expect(
			screen.getByText(/Data driver yang bekerja dengan Anda./)
		).toBeInTheDocument();
	});

	it('Memastikan Filter Driver ada saat di render', () => {
		render(
			<Provider store={store}>
				<Driver />
			</Provider>
		);
		const filterDriver = screen.getByTestId('menu-driver-filter-driver');
		expect(filterDriver).toBeInTheDocument();
	});

	it('Memastikan Tombol Add Driver ada saat di render', () => {
		render(
			<Provider store={store}>
				<Driver />
			</Provider>
		);
		const btnAddDriver = screen.getByTestId('menu-driver-btn-add');
		expect(btnAddDriver).toBeInTheDocument();
	});
});
