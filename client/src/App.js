import { Blog, Error, Home, Opleiding, Portfolio, Services, Team, Search } from "./pages";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Root from "./layouts/Root";

import { ROUTES } from './routes/routes'
import { ThemeArea } from "./context/ThemeContext";

import './styles/output.css'


const routes = createBrowserRouter(createRoutesFromElements(
	<Route path='/' element={<Root />} errorElement={<Error />}>
		<Route path={ROUTES.home.path} element={<Home />} />
		<Route path={ROUTES.blog.path} element={<Blog />} />
		<Route path={ROUTES.opleiding.path} element={<Opleiding />} />
		<Route path={ROUTES.portfolio.path} element={<Portfolio />} />
		<Route path={ROUTES.services.path} element={<Services />} />
		<Route path={ROUTES.team.path} element={<Team />} />
		<Route path={ROUTES.search.path} element={<Search />} />
	</Route>
))

function App() {
	return (
		<ThemeArea>
			<RouterProvider router={routes} />
		</ThemeArea>
	);
}

export default App;
