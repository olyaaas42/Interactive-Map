import { createBrowserRouter } from 'react-router-dom';
import MainWindow from '../components/mainWindow/MainWindow';
import Authorization from '../components/authorization/Authorization';
import ErrorPage from '../components/error/ErrorPage.js';
import Registration from '../components/registration/Registration';
import MapInteractive from '../components/mapInteractive/MapInteractive';
import UserCabinet from '../components/user/UserCabinet';

export const router = createBrowserRouter([
	{
		path: '/userCabinet',
		element: <UserCabinet header={{
			title: 'Кабинет пользователя',
			isFluid: false
		}}/>
	},
	{
		path: '/mainWindow',
		element: <MainWindow/>,
	},
	{
		path: '/authorization',
		element: <Authorization/>,
		errorElement: <ErrorPage/>
	},
	{
		path: '/',
		element: <Registration/>,
	},
	{
		path: '/mapInteractive',
		element: <MapInteractive/>,
	},
]);
