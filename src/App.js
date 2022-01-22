import React from 'react'
import DashboardLayout from './layouts/DashboardLayout';
import Driver from './pages/Driver';

const App = () => {
	return (
		<>
			<DashboardLayout>
				<Driver />
			</DashboardLayout>
		</>
	);
};

export default App