import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import DashBoard from "../Components/Dashboard/DashBoard";
import AddProduct from "../Components/Add-Product/AddProduct";
import Products from "../Components/Products/Products";
import RootLayout from "./RootLayout";
import Orders from '../Pages/OrdersList/Orders';
import ProductPage from '../Pages/ProductPage/ProductPage';
import CategoryList from '../Pages/Category/CategoryList';
import UsersList from '../Pages/Users/UsersList';

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            { path: '/dashboard', element: <DashBoard /> },
            { path: '/products', element: <Products /> },
            { path: '/products/:productID', element: <ProductPage /> },
            { path: '/AddProduct', element: <AddProduct /> },
            { path: '/orders', element: <Orders /> },
            { path: '/category', element: <CategoryList /> },
            { path: '/users', element: <UsersList /> }
        ],
    },
]);

export default function RoutesPage() {
    return <RouterProvider router={router} />;
}