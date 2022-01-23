import ReactDOM from 'react-dom';
import App from './App';
import './styles/index.scss';
import { BrowserRouter as Routers } from 'react-router-dom';

ReactDOM.render(
	<Routers>
		<App />
	</Routers>,
	document.getElementById('app')
);
// hot reloading. It works by replacing a module of the application
// during runtime with an updated one so that it’s available for instant use.
module.hot.accept();
