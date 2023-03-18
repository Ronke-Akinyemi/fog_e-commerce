import React, { useState} from 'react'
import { AddItem } from '../components/AddItem'
import { UpdateItem } from '../components/UpdateItem'

export const Admin = () => {
     const [update, setUpdate] = useState(true)
     const toggleUpdate = () => {
      setUpdate(!update)
     }
  return (
    <>
    {!update ?
    <AddItem toggleUpdate = {toggleUpdate}/> :
    <UpdateItem toggleUpdate = {toggleUpdate}/>}
    </>
  )
}
