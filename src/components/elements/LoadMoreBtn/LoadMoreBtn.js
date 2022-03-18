import React from 'react'
import PropTypes from 'prop-types'
import './LoadMoreBtn.css'

const LoadMoreBtn = ({ onClick, text }) => {
    return (
        <div className='rmdb-loadmorebtn' onClick={onClick}>
            <p>{text}</p>
        </div>
    )
}

LoadMoreBtn.propTypes = {
    text: PropTypes.string
}

export default LoadMoreBtn;