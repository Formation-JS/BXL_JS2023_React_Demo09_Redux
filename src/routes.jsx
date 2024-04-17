import App from './App.jsx';
import AboutPage from './pages/about/about.page.jsx';
import NotFoundPage from './pages/error/not-found.page.jsx';
import HomePage from './pages/home/home.page.jsx';
import PokemonSearchPage from './pages/pokemon/pages/pokemon-search.page.jsx';
import PokemonTeamPage from './pages/pokemon/pages/pokemon-team.page.jsx';
import PokemonPage from './pages/pokemon/pokemon.page.jsx';
import TodoAddPage from './pages/todo/pages/todo-add.page.jsx';
import TodoListPage from './pages/todo/pages/todo-list.page.jsx';
import TodoPage from './pages/todo/todo.page.jsx';

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
            },
            {
                path: 'todo',
                element: <TodoPage />,
                children: [
                    {
                        index : true,
                        element: <TodoListPage />
                    },
                    {
                        path: 'add',
                        element: <TodoAddPage />
                    }
                ]
            },
            {
                path: 'pokemon',
                element: <PokemonPage />,
                children: [
                    {
                        index: true,
                        element: <PokemonSearchPage />
                    },
                    {
                        path: 'team',
                        element: <PokemonTeamPage />
                    }
                ]
            }
        ]
    },
    {
        path: '*',
        element: <NotFoundPage />
    }
];