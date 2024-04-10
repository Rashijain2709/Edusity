// import React from 'react'
import './Header.css'
import dark_arrow from '../../assets/Images/dark-arrow.png'

const Header = () => {
    return (
        <div className='header container'>
            <div className='header-text'>
                <h1>We Ensure better education for a better world</h1>
                <p>Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education</p>
                <button className='btn'>Explore More <img src={dark_arrow} alt="" /></button>
            </div>
        </div>
    )
}

export default Header