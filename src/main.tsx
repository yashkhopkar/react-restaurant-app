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
import Menu from './components/Menu.tsx';
import Cart from './components/Cart.tsx';
import { AuthContextProvider } from './context/AuthContext.tsx';
import RatingsAndReviews from './components/RatingsAndReviews.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> },
      { path: 'menu', element: <Menu /> },
      { path: 'cart', element: <Cart /> },
      { path: 'reviews', element: <RatingsAndReviews /> },
      {
        path: 'admin',
        element: <Admin />,
      },
      { path: 'addMenuItem', element: <AddMenuItem /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  </React.StrictMode>
);
