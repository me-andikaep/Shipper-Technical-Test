import createWebStorage from 'redux-persist/lib/storage/createWebStorage';

const createNoopStorage = () => {
	return {
		getItem(_key) {
			return Promise.resolve(null);
		},
		setItem(_key, value) {
			return Promise.resolve(value);
		},
		removeItem(_key) {
			return Promise.resolve();
		},
	};
};

const storage =
	typeof window !== 'undefined'
		? createWebStorage('local')
		: createNoopStorage();

// Middleware: Redux Persist Config
const persistConfig = {
	// Root
	key: 'root',
	// Storage Method
	storage: storage,
	// Whitelist (Save Specific Reducers)
	whitelist: ['driver'],
	// Blacklist (Don't Save Specific Reducers)
	blacklist: [],
};

export default persistConfig;
