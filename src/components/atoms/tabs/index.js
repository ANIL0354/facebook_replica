import React from 'react'
import { HiHome } from 'react-icons/hi'
import { FaUserFriends } from 'react-icons/fa'
import { CgYoutube } from 'react-icons/cg'
import Hut from '../../../assets/icons/hut'
import People from '../../../assets/icons/people'
import './styles.scss'

const icons = [<HiHome fontSize='30' color='#1877f2' />, <FaUserFriends fontSize='30' />, <CgYoutube fontSize='30' />, <Hut />, <People />]
const Tabs = () => {
    return (
        <div className='tab-wrapper'>
            {icons.map((item, index) => {
                return (
                    <div className={`icon-wrapper ${index == 0 && 'active'}`} key={index + ''}>
                        {item}
                        { index == 0 && <div class="box"></div>}
                    </div>
                )
            })}
        </div>
    )
}

export default Tabs
