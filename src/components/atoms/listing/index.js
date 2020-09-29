import React from 'react'
import './styles.scss'
const listing = ({ leftSidedata }) => {
    return (
        <div className='wrapper'>
            <ul>
                {
                    leftSidedata.map((item, index) => {
                        return (
                            <li key={index + ''}>
                                <img src={item.imgSrc} alt="img" />
                                <label>{item.name}</label>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default listing
