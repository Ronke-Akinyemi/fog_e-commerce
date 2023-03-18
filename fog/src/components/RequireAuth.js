import React, {useContext} from 'react'
import { CartContext } from '../App'
import { Navigate, useLocation } from 'react-router-dom'

export const RequireAuth = ({children}) => {
    const user = useContext(CartContext).user
    const location = useLocation()
    if (!user){
        return <Navigate to = '/tecno' state ={{ path : location.pathname }}/>
    }
  return children
}
