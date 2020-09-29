import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { FaFacebookMessenger } from 'react-icons/fa'
import { AiFillCaretDown } from 'react-icons/ai'
import Notification from '../../../assets/icons/notification'
import './styles.scss'
const icons = [<AiOutlinePlus fontSize='20' />
    , <FaFacebookMessenger fontSize='20' />, <Notification />, <AiFillCaretDown fontSize='20' />
]
const options = () => {
    return (
        <div className='option-container'>
            {
                icons.map((item, index) => {
                    return (
                        <div className='icon' key={index + ''} >
                            {item}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default options
