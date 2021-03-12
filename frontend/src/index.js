import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/App';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
);
