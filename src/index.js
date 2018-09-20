import React from 'react'
import style from '../src/styles/styles.scss'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import timerMiddleware from 'redux-timer-middleware'
import { Provider } from 'react-redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import reducer from '../src/reducers/reducer'
import App from '../src/containers/App'

const middleware = [ thunk, timerMiddleware ];
if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger());
}

const store = createStore(
    reducer,
    applyMiddleware(...middleware)
)

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
