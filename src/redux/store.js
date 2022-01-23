import { createStore, applyMiddleware } from 'redux'; // Redux
import { persistStore, persistReducer } from 'redux-persist'; // Redux Persist
import { composeWithDevTools } from 'redux-devtools-extension';
// import createSagaMiddleware from 'redux-saga';
import reducers from './reducers/index';
import thunk from 'redux-thunk';
import persistConfig from './persist';

// Middleware: asyncchornus
const middleware = [thunk];

// Middleware: Redux Persist Persisted Reducer
const persistedReducer = persistReducer(persistConfig, reducers);

const composeEnhancers = composeWithDevTools({ realtime: true, port: 8000 });

// Redux: Store
const store = createStore(
	persistedReducer,
	{},
	composeEnhancers(applyMiddleware(...middleware))
);

// Middleware: Redux Persist Persister
const persistor = persistStore(store);

// Exports
export { store, persistor };
