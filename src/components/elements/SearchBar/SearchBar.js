import React, { Component } from 'react'
import PropTypes from 'prop-types'
import FontAwesome from 'react-fontawesome'
import './SearchBar.css'

class SearchBar extends Component {
    state = {
        value: '',
    }

    timeout = null

    doSearch = (event) => {
        this.setState({ value: event.target.value })
        clearTimeout(this.timeout)

        this.timeout = setTimeout(() => {
            this.props.callback(this.state.value)
        }, 500)
    }

    cleanSearch = () => {
        this.setState({ value: '' })
        window.location.reload(true)
    }

    render() {
        return (
            <div className='rmdb-searchbar'>
                <div className='rmdb-searchbar-content'>
                    <FontAwesome className='rmdb-fa-search' name="search" size='2x' />
                    <input
                        type={'text'}
                        className='rmdb-searchbar-input'
                        placeholder='Search by name'
                        onChange={this.doSearch}
                        value={this.state.value}
                    />
                    {this.state.value && <FontAwesome className='rmdb-fa-clean' name="close" size='2x' onClick={this.cleanSearch} />}
                </div>
            </div>
        )
    }
}

SearchBar.propTypes = {
    callback: PropTypes.func
}

export default SearchBar;