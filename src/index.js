import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'mobx-react';

import App from './App';
import * as serviceWorker from './serviceWorker';
import {loadConfigAsGlobal} from './services/utils'
import config from './config'
import stores from './stores'
import ErrorMsg from './components/ErrorMsg'

ReactDOM.render(
	<Provider {...stores}>
		<HashRouter>
			<ErrorMsg>
				<App />
			</ErrorMsg>
		</HashRouter>
	</Provider>
	, document.getElementById('root'));

serviceWorker.unregister();

// 挂载全局配置到global变量
loadConfigAsGlobal(config)

if (global.config.env === 'dev') {
	window.__MOBX_STORE__ = stores;
}
