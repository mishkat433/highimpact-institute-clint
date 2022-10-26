import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContex } from '../Contex/Contex';

const PrivateRoute = ({ children }) => {
    const { loginUser, loading } = useContext(AuthContex);
    const location = useLocation()

    if (loading) {
        return <h1>Loading...</h1>
    }

    if (loginUser && loginUser.uid) {
        return children
    }
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;