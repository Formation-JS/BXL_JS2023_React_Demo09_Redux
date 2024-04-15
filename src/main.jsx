import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

// Routing
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { routes } from './routes.jsx';
const router = createBrowserRouter(routes);

// Store
import { Provider } from 'react-redux';
import { store } from './store/store.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
