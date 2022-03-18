import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './Navigation.css'

const Navigation = ({ movie }) => {
    return (
        <div className='rmdb-navigation'>
            <div className='rmdb-navigation-content'>
                <Link to="/">
                    <p>Home</p>
                </Link>
                <p>/</p>
                <p>{movie}</p>
            </div>
        </div>
    )
}

Navigation.propTypes = {
    movie: PropTypes.string
}

export default Navigation