//privateRoutes.js

// import { Outlet, Navigate } from 'react-router-dom'
// import useAuth from './useAuth'

// function PrivateRoutes() {
//     const token = useAuth()
//     return token ? <Outlet /> : <Navigate to='/auth' />
// }

// export default PrivateRoutes

import { Outlet, Navigate } from 'react-router-dom';

function PrivateRoutes() {
    // Temporarily bypass token check and navigate to dashboard
    return <Outlet />; // Navigate directly to the dashboard
}

export default PrivateRoutes;
