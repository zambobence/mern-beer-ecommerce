import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import DefaultLayout from './layout/DefaultLayout';
import Home from './pages/Home';
import AddProduct from './pages/AddProduct';
import Profile from './pages/ProfilePage';
import ErrorPage from './pages/ErrorPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import EditProductDetails from './pages/EditProductDetails';
import AuthenticationPage from './pages/AuthenticationPage';
import Welcome from './pages/Welcome';

import {loader as productsLoader} from './pages/Home'
import {loader as productDetailLoader} from './pages/ProductDetailsPage'
import {action as manipulateProductAction } from './components/Products/ProductFormComponent'
import {action as deleteProductAction} from './pages/ProductDetailsPage'
import {action as authAction} from './pages/AuthenticationPage'
import {loader as profileLoader} from './pages/ProfilePage'
import {action as checkoutAction} from './pages/CheckoutPage'
import {action as deleteProfileAction} from './pages/ProfilePage'
import { checkAuth } from './util/auth';

import ProtectedRoutes from './ProtectedRoutes';
import CheckoutPage from './pages/CheckoutPage';
import './App.css';

function App() {



  const router = createBrowserRouter([
    {
      path: '/',
      element: <DefaultLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: '/',
          element: <Home />,
          loader:  productsLoader,
        },
        {
          path: 'welcome',
          element: <Welcome />
        },
        { path: 'profile',
          element: (
          <ProtectedRoutes>
            <Profile />
          </ProtectedRoutes>
          ),
          loader: profileLoader,
          action: deleteProfileAction
        },
        { path: 'checkout',
          element: <CheckoutPage />,
          loader: checkAuth,
          action: checkoutAction
        },
        {
          path: 'auth',
          element: <AuthenticationPage />,
          action: authAction
        },
        {
          path: 'add-product',
          element: <AddProduct />,
          action: manipulateProductAction,
          loader: checkAuth
        },
        { path: 'product/:productId',
          loader: productDetailLoader,
          id: 'product-detail',
          children: [
            {
              index: true,
              element: <ProductDetailsPage />,
              action: deleteProductAction,
            },
            {
              path: 'edit',
              element: <EditProductDetails />,
              action: manipulateProductAction,
              loader: checkAuth
            }
          ]}
      ]
    }
  ])

  return (
    <RouterProvider router={router}>
      <DefaultLayout />
    </RouterProvider>
  );
}

export default App;
