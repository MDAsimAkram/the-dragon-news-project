import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    const location = useLocation();
    console.log(location);

    if (loading) {
        return <Spinner animation="border" variant="primary" />
    }

    // user jodi thake tahole seita retun kore children er moddhe dhukbe ar user na thakle oita return kore login page a pathabe.
    if (user) {
        return children;
    }
    // replace dilam jno history te page er history location gula save na hoy..
    // state={{from:location}} ...ataa diye last j page a chilam oi page er location set korlam

    return <Navigate state={{ from: location }} to='/login' replace> </Navigate>;
};

export default PrivateRoute;

/**
 * -----------Steps-----------
 * 
 * 1. check user is logged in or not 
 * 
 * 2. If user is logged in , than allow them to visit the route
 * 
 * 3. Else redirect the user to the login page 
 * 
 * 4. set up the private router..
 * 
 * 5. handle Loading
 * 
 * */ 