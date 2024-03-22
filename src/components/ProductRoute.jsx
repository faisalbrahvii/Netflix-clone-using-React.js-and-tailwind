import React from 'react'
import { Navigate } from 'react-router-dom'
import { UseAuth } from '../context/AuthContext';

const ProductRoute = ({chidren}) => {
  
    const {user} = UseAuth();

    if(!user) {
        return <Navigate  to='/' />
    }else{
        return chidren;
    }

}

export default ProductRoute
