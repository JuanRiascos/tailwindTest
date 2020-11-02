import { createBrowserHistory } from 'history'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import './assets/css/main.css'
import './assets/css/vendors/main.css'
import App from './assets/views/app/App'
import initStore from './store/Store'
export const history = createBrowserHistory()
export const store = initStore(history)

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
