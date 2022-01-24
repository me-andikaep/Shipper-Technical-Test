import Lazyloading from '../components/loading/LazyLoading.js';
import LoadingPageLazy from '../components/loading/LoadingPageLazy.js';

const routes = [
	{
		path: '/beranda',
		component: Lazyloading(
			() => {
				return new Promise((resolve) => {
					setTimeout(() => resolve(import('../pages/Beranda')), 1000);
				});
			},
			{
				fallback: <LoadingPageLazy />,
			}
		),
		isExact: true,
	},
	{
		path: '/driver',
		component: Lazyloading(
			() => {
				return new Promise((resolve) => {
					setTimeout(() => resolve(import('../pages/Driver')), 1000);
				});
			},
			{
				fallback: <LoadingPageLazy />,
			}
		),
		isExact: true,
	},

	{
		path: '/pickup',
		component: Lazyloading(
			() => {
				return new Promise((resolve) => {
					setTimeout(() => resolve(import('../pages/Pickup')), 1000);
				});
			},
			{
				fallback: <LoadingPageLazy />,
			}
		),
		isExact: true,
	},
];

export default routes;
