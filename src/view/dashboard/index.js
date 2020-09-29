import React from 'react'
import Header from '../../components/atoms/header'
import Listing from '../../components/atoms/listing'
import Feeds from '../../components/molecules/feeds'
import { FaEdit } from 'react-icons/fa'
import './styles.scss'
const leftSidedata = [{
    name: 'John Henry', imgSrc: 'https://scontent.fixc2-1.fna.fbcdn.net/v/t1.0-1/cp0/p40x40/11209745_1609025439378151_4197206402282359365_n.jpg?_nc_cat=100&_nc_sid=dbb9e7&_nc_ohc=FT3azGWPk_AAX_RbbUE&_nc_ht=scontent.fixc2-1.fna&_nc_tp=27&oh=55e7f02b59cf8bc05db45c11886c1967&oe=5F954943',
},
{
    name: "COVID-19 Information Centre",
    imgSrc: 'https://static.xx.fbcdn.net/rsrc.php/v3/yg/r/kOxV5aCYUAE.png'
},
{
    name: "Find friend",
    imgSrc: "https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/S0U5ECzYUSu.png"
},
{
    name: "groups",
    imgSrc: 'https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/PrjLkDYpYbH.png'
},
{
    name: "Marketplace",
    imgSrc: "https://static.xx.fbcdn.net/rsrc.php/v3/yU/r/D2y-jJ2C_hO.png"
},
{
    name: 'Events',
    imgSrc: "https://static.xx.fbcdn.net/rsrc.php/v3/ys/r/8wTx0Eu2vRq.png"
},
{
    name: "Memories",
    imgSrc: 'https://static.xx.fbcdn.net/rsrc.php/v3/y6/r/VPndBxotRgH.png'
},
{
    name: 'Saved',
    imgSrc: "https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/lVijPkTeN-r.png"
}
]

const feeds = [
    {
        title: 'WhiteHat Jr Student',
        description: '1 Hour FREE Coding Class for Kids Age 6-18. Your kid will become an Entrepreneur during Lockdown. Book Now.',
        likesCount: 211
    },
    {
        title: 'WhiteHat Jr Student',
        description: '1 Hour FREE Coding Class for Kids Age 6-18. Your kid will become an Entrepreneur during Lockdown. Book Now.',
        likesCount: 211
    }
]
const Dashboard = () => {
    return (
        <div className='container'>
            <Header />
            <div className='main-content'>
                <Listing leftSidedata={leftSidedata} />
                <Feeds feeds={feeds} />
                <Listing leftSidedata={leftSidedata} />
            </div>
            <div className='messsage' >
                <FaEdit size={22}
                />
            </div>
        </div>
    )
}

export default Dashboard
