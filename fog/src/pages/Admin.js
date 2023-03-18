import React, { useState, useContext } from 'react'
import { AddBird } from '../components/AddBird'
import { Loading } from '../components/Loading'

export const Admin = () => {
     const [isLoading, setIsloading] = useState(false)

  return (
    <>
    {isLoading ? <Loading/> : <>
    <AddBird/>
     </>}
    </>
  )
}
