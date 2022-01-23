import ReactDOM from 'react-dom';
import App from './App';
import './styles/index.scss';
import { BrowserRouter as Routers } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'; // Imports: Redux Persist Persister
import { store, persistor } from './redux/store'; // Import redux store
ReactDOM.render(
	<Routers>
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<App />
			</PersistGate>
		</Provider>
	</Routers>,
	document.getElementById('app')
);
// hot reloading. It works by replacing a module of the application
// during runtime with an updated one so that it’s available for instant use.
module.hot.accept();
