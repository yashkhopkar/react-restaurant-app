import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './components/auth/Login.tsx';
import Register from './components/auth/Register.tsx';
import App from './App.tsx';
import Home from './components/Home.tsx';
import Admin from './components/admin/Admin.tsx';
import AddMenuItem from './components/admin/AddMenuItem.tsx';

const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      {
        path: 'admin',
        element: <Admin />,
        children: [{ path: 'addMenuItem', element: <AddMenuItem /> }],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
