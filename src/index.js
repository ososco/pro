import React from 'react';
import ReactDom from 'react-dom';
import 'semantic-ui-css/semantic.min.css';

import { BrowserRouter } from 'react-router-dom'
import App from './App'

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducers'

const store = createStore(reducer)

ReactDom.render(
	<Provider store={store}>
	<BrowserRouter>
		<App />
	</BrowserRouter>
	</Provider>, document.getElementById('root')
	)