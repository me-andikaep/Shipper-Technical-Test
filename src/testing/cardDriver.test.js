/**
 * @jest-environment jsdom
 */

import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
// import fireEvent from '@testing-library/user-event';

import DriverListCard from '../components/card/DriverListCard';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import axios from 'axios';

jest.mock('axios');

const dataDriver = [
	{
		gender: 'male',
		name: {
			title: 'Mr',
			first: 'Flynn',
			last: 'Walker',
		},
		location: {
			street: {
				number: 2225,
				name: 'Gloucester Street',
			},
			city: 'Timaru',
			state: 'Northland',
			country: 'New Zealand',
			postcode: 68238,
			coordinates: {
				latitude: '-38.7927',
				longitude: '-173.1160',
			},
			timezone: {
				offset: '-3:30',
				description: 'Newfoundland',
			},
		},
		email: 'flynn.walker@example.com',
		login: {
			uuid: '8ee74d95-4d46-4c53-9d8a-19bcd358dae3',
			username: 'purpletiger291',
			password: 'sonics',
			salt: 'gLTX1nuH',
			md5: '939f79dec99d4afd07505e6d0e4506cf',
			sha1: 'e32e7e78be7e43b2b25f2e2a2786c65d998e4604',
			sha256:
				'1068d5dbc8dec4db522e5d95301795a837d7f3043cd2b92cd1e6162eba435ebc',
		},
		dob: {
			date: '1971-12-08T20:14:32.322Z',
			age: 51,
		},
		registered: {
			date: '2014-07-27T08:05:07.623Z',
			age: 8,
		},
		phone: '(047)-835-4396',
		cell: '(979)-256-1672',
		id: {
			name: '',
			value: null,
		},
		picture: {
			large: 'https://randomuser.me/api/portraits/men/1.jpg',
			medium: 'https://randomuser.me/api/portraits/med/men/1.jpg',
			thumbnail: 'https://randomuser.me/api/portraits/thumb/men/1.jpg',
		},
		nat: 'NZ',
	},
];

describe('Testing Kelengkapan komponent Card Driver List', () => {
	it('Memastikan Text Driver Id ada saat di render', () => {
		render(
			<Provider store={store}>
				<DriverListCard />
			</Provider>
		);
		const txtDriverId = screen.getByTestId('card-drv-id');
		expect(txtDriverId).toBeInTheDocument();
	});

	it('Memastikan Icon More ada saat di render', () => {
		render(
			<Provider store={store}>
				<DriverListCard />
			</Provider>
		);
		const iconMore = screen.getByTestId('card-drv-more-icon');
		expect(iconMore).toBeInTheDocument();
	});

	it('Memastikan Icon User ada saat di render', () => {
		render(
			<Provider store={store}>
				<DriverListCard />
			</Provider>
		);
		const iconUser = screen.getByTestId('card-drv-user-icon');
		expect(iconUser).toBeInTheDocument();
	});

	it('Memastikan Text Nama Driver ada saat di render', () => {
		render(
			<Provider store={store}>
				<DriverListCard />
			</Provider>
		);
		const txtNamaDriver = screen.getByTestId('card-drv-txt-nama-driver');
		expect(txtNamaDriver).toBeInTheDocument();
		expect(screen.getByText(/Nama Driver/)).toBeInTheDocument();
	});

	it('Memastikan Text Telepon ada saat di render', () => {
		render(
			<Provider store={store}>
				<DriverListCard />
			</Provider>
		);
		const txtTelepon = screen.getByTestId('card-drv-txt-telepon');
		expect(txtTelepon).toBeInTheDocument();
		expect(screen.getByText(/Telepon/)).toBeInTheDocument();
	});

	it('Memastikan Text Email ada saat di render', () => {
		render(
			<Provider store={store}>
				<DriverListCard />
			</Provider>
		);
		const txtEmail = screen.getByTestId('card-drv-txt-email');
		expect(txtEmail).toBeInTheDocument();
		expect(screen.getByText(/Email/)).toBeInTheDocument();
	});

	it('Memastikan Text Tanggal Lahir ada saat di render', () => {
		render(
			<Provider store={store}>
				<DriverListCard />
			</Provider>
		);
		const txtTglLahir = screen.getByTestId('card-drv-txt-tgl-lahir');
		expect(txtTglLahir).toBeInTheDocument();
		expect(screen.getByText(/Tanggal Lahir/)).toBeInTheDocument();
	});
});
