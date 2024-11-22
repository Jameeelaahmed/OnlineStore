import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import DashBoard from "../Components/Dashboard/DashBoard";
import AddProduct from "../Components/Add-Product/AddProduct";
import Products from "../Components/Products/Products";
import RootLayout from "./RootLayout";
import Orders from '../Pages/OrdersList/Orders';

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            { path: '/dashboard', element: <DashBoard /> },
            { path: '/products', element: <Products /> },
            { path: '/AddProduct', element: <AddProduct /> },
            { path: '/orders', element: <Orders /> }
        ],
    },
]);

export default function RoutesPage() {
    return <RouterProvider router={router} />;
}