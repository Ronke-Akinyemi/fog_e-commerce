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
            <div className='row gx-2'>
                <div className='col-2 m-2'>
                    <button className='btn btn-primary' onClick={() => {
                        setShowBird(true)
                        setShowCrop(false)
                        setShowEquip(false)
                    }}>Edit Animal</button>
                </div>
                <div className='col-2 m-2'>
                    <button className='btn btn-success' onClick={() => {
                        setShowBird(false)
                        setShowCrop(true)
                        setShowEquip(false)
                    }}>Edit Crop</button>
                </div>
                <div className='col-2 m-2'>
                    <button className='btn btn-secondary' onClick={() => {
                        setShowBird(false)
                        setShowCrop(false)
                        setShowEquip(true)
                    }}>Edit Equipment</button>
                </div>
                <div className='col-2 m-2'>
                    <button className='btn btn-danger'  onClick={props.toggleUpdate}>Add new Item</button>
                </div>
            </div>
            {showBird && <EditBird/>}
            {showCrop && <EditCrop/>}
            {showEquip && <EditEquip/>}
            </div>


    </div>
  )
}
