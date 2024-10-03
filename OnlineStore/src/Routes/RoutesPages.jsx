import { createBrowserRouter, RouterProvider, Outlet, Navigate } from 'react-router-dom';
import DashBoard from "../Components/Dashboard/DashBoard";
import AddProduct from "../Components/Add-Product/AddProduct";
import Products from "../Components/Products/Products";
import RootLayout from "./RoutesLayout";
import PrivateRoutes from "../utils/PrivateRoutes"
function RoleBasedRoutes() {
    const role = getRole();
    if (role === 'Admin') {
        return <Outlet />;
    } else if (role === 'User') {
        return <Outlet />;
    }
}

// function getRole() {
//     return localStorage.getItem('role');
// }

function getRole() {
    const role = localStorage.getItem('role');
    return role ? role : 'Admin'; // Default to Admin if no role is set
}


const AdminRoutes = [
    { path: '/', element: <DashBoard /> },
    { path: "/products", element: <Products /> },
    { path: "/AddProduct", element: <AddProduct /> },
]


const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />, // This is your main layout
        children: [
            {
                element: <PrivateRoutes />, // All private routes go here
                children: [
                    {
                        path: '/',
                        element: <RoleBasedRoutes />, // Role-based routes handling
                        children: [
                            ...(getRole() === 'Admin' ? AdminRoutes : []), // Add admin routes
                            // Add user routes here in the future
                        ],
                    },
                ],
            },
        ],
    },
]);



// const router = createBrowserRouter([
//     // {
//     //     path: '/auth',
//     //     element: <SemiBody />,
//     //     errorElement: <Error />,
//     //     children: [
//     //         { path: '', element: <Login /> },
//     //         { path: 'forgetpassword', element: <ForgetPassword /> },
//     //         { path: 'otp', element: <Otp /> },
//     //         { path: 'set-new-password', element: <SetNewPassword /> },
//     //     ]
//     // },
//     {
//         path: '/',
//         element: <RootLayout />,
//         // errorElement: <Error />,
//         children: [
//             {
//                 element: <PrivateRoutes />,
//                 children: [
//                     {
//                         path: '/',
//                         element: <RoleBasedRoutes />,
//                         children: [
//                             ...(getRole() === 'Admin' ? AdminRoutes : []),
//                             // ...(getRole() === 'User' ? userRoutes : []),
//                         ],
//                     },
//                 ],
//             },
//         ],
//     },
// ]);


export default function RoutesPage() {
    return <RouterProvider router={router} />;
}