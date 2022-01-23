// FOR HANDLE REQUEST FROM API
import { SUCCESS_GET_DRIVER, ERROR_GET_DRIVER, LOADING } from './driverReducer';
import { GetDriverList } from '../../../services/driverServices';

//request api with redux thunk
export const getDriver = (payload) => {
	return async (dispatch) => {
		dispatch({ type: LOADING, loading: true });
		try {
			const response = await GetDriverList(payload);

			if (response) {
				//set driver information in redux
				dispatch({
					type: SUCCESS_GET_DRIVER,
					drivers: response.results,
					error: null,
				});
				dispatch({ type: LOADING, loading: false });
			}
		} catch (error) {
			dispatch(
				Actions.ERROR_GET_DRIVER({
					error: error.request.response,
				})
			);
			dispatch({
				type: ERROR_GET_DRIVER,
				error: error.request.response,
			});
			dispatch({ type: LOADING, loading: false });
		}
	};
};
