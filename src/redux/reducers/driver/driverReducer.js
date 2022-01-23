export const SUCCESS_GET_DRIVER = 'SUCCESS_GET_DRIVER';
export const ERROR_GET_DRIVER = 'ERROR_GET_DRIVER';
export const LOADING = 'LOADING';

//initial value reudx
const initialState = {
	drivers: null,
	error: null,
};

//list actin
export const driverReducer = (state = initialState, action) => {
	switch (action.type) {
		case SUCCESS_GET_DRIVER:
			return {
				...state,
				drivers: action.drivers,
				error: null,
			};
		case ERROR_GET_DRIVER:
			return { ...state, error: action.error };
		case LOADING:
			return { ...state, loading: action.loading };

		default:
			return state;
	}
};
