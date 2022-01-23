import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Menu from '../components/burgerMenu/Menu';
import Header from '../components/header/Header';
import Sidebar from '../components/sidebar';
import routes from '../config/routes';

const DashboardLayout = ({}) => {
	const [burgerMenuOpen, setBurgerMenuOpen] = useState(false);

	//mapping / listing route
	const getRoutes = (routeList) => {
		return routeList.map((prop, key) => {
			return (
				<Route
					path={prop.path}
					component={prop.component}
					key={key}
					exact={prop.isExact}
				/>
			);
		});
	};

	return (
		<div className='dashboard-layout'>
			<Header
				burgerMenuOpen={burgerMenuOpen}
				setBurgerMenuOpen={() => setBurgerMenuOpen(!burgerMenuOpen)}
			/>
			<Menu
				burgerMenuOpen={burgerMenuOpen}
				setBurgerMenuOpen={() => setBurgerMenuOpen(!burgerMenuOpen)}
			/>
			<div className='c-sidebar'>
				<Sidebar />
			</div>
			<div className='content-container'>
				<Switch>{getRoutes(routes)}</Switch>
			</div>
		</div>
	);
};

export default DashboardLayout;
