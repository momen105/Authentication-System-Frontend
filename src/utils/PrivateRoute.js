import {Routes, Navigate } from 'react-router-dom'


const PrivateRoute = ({children,...rest}) => {
    const isauthenticated = true
    return(
        <Routes {...rest}>{isauthenticated ? children : <Navigate to="/login" />}</Routes>
    )
}

export default PrivateRoute