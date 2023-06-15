// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivateRoute = ({ children }) => {
    // console.log(location);

    const { user, loading } = useContext(AuthContext);
    console.log(user);
    const location = useLocation();
    console.log(location);
    const from = location.state?.from?.pathname || '/';


    console.log('user in private route', user);
    // if (loading) {
    //     return <Spinner animation="border" variant="primary" />
    // }

    if (user) {
        return children;
    }
    // return <Navigate state={{ from: location }} to="/login" replace></Navigate>;
    return <Navigate state={{ from: location }} to={'/login'} replace></Navigate>
};

export default PrivateRoute;
