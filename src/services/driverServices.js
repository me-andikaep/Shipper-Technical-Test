import { HandlerAPI } from './api/HandlerApi'; //impor axios

//getdriverlist
export const GetDriverList = async () => {
	try {
		const response = await HandlerAPI(
			`https://randomuser.me/api/?results=30`,
			'get'
		);
		if (response.status === 200) {
			return Promise.resolve(response.data);
		}
	} catch (error) {
		return Promise.reject(JSON.parse(error?.request?.response));
	}
};
