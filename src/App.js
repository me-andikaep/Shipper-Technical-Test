import DashboardLayout from './layouts/DashboardLayout';
import Driver from './pages/Driver';
import { Route, Redirect, Switch } from 'react-router-dom';

const App = () => {
	return (
		<>
			<Switch>
				<Redirect from='/' to='/driver' exact />
				<Route render={(props) => <DashboardLayout {...props} />} />
			</Switch>
		</>
	);
};

export default App;
