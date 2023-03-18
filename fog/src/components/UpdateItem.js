import React, {useState} from 'react'
import { EditBird } from './EditBird'
import { EditCrop } from './EditCrop'
import { EditEquip } from './EditEquip'

export const UpdateItem = (props) => {
    const [showBird, setShowBird] = useState(true)
    const [showCrop, setShowCrop] = useState(false)
    const [showEquip, setShowEquip] = useState(false)
  return (
    <div className='m-5'>
        <div>
            <div className='d-flex'>
        <button className='btn btn-primary m-3' onClick={() => {
            setShowBird(true)
            setShowCrop(false)
            setShowEquip(false)
        }}>Edit Animal</button>
        <button className='btn btn-success m-3' onClick={() => {
            setShowBird(false)
            setShowCrop(true)
            setShowEquip(false)
        }}>Edit Crop</button>
        <button className='btn btn-secondary m-3' onClick={() => {
            setShowBird(false)
            setShowCrop(false)
            setShowEquip(true)
        }}>Edit Equipment</button>
        <button className='btn btn-danger m-3'  onClick={props.toggleUpdate}>Add new Item</button>
            </div>
            {showBird && <EditBird/>}
            {showCrop && <EditCrop/>}
            {showEquip && <EditEquip/>}
            </div>


    </div>
  )
}
