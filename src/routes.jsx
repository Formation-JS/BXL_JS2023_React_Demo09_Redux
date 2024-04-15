import App from './App.jsx';
import AboutPage from './pages/about/about.page.jsx';
import NotFoundPage from './pages/error/not-found.page.jsx';
import HomePage from './pages/home/home.page.jsx';

export const routes = [
    {
        path: '',
        element: <App />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: 'about',
                element: <AboutPage />
            }
        ]
    },
    {
        path: '*',
        element: <NotFoundPage />
    }
];