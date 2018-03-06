import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import reducer from './reducers'
import { loadState, saveState } from './localStorage'
import throttle from 'lodash/throttle'

const configureStore = () => {
	const middleware = [ thunk ];
	if (process.env.NODE_ENV !== 'production') {
	  middleware.push(createLogger());
	}

	const persistedState = loadState();

	const store = createStore(
		reducer,
		persistedState,
		applyMiddleware(...middleware)
	)

	store.subscribe(throttle(() => {
		saveState(store.getState())
	}, 1000))

	return store
}

export default configureStore