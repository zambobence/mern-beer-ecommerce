import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import DefaultLayout from './layout/DefaultLayout';

import Home from './pages/Home';
import AddProduct from './pages/AddProduct';
import Profile from './pages/Profile';
import ErrorPage from './pages/ErrorPage';
import ProductDetails from './pages/ProductDetailsPage';
import EditProductDetails from './pages/EditProductDetails';
import AuthenticationPage from './pages/AuthenticationPage';
import Loading from './components/Loading'

import {loader as productsLoader} from './pages/Home'
import ProductDetailsPage, {loader as productDetailLoader} from './pages/ProductDetailsPage'
import {action as manipulateProductAction } from './components/Products/ProductFormComponent'
import {action as deleteProductAction} from './pages/ProductDetailsPage'
import {action as authAction} from './pages/AuthenticationPage'

import './App.css';
import Welcome from './pages/Welcome';
import { checkAuth } from './util/auth';

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
          element: <Profile />,
          loader: checkAuth
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
