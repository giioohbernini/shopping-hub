import React from 'react'
import PropTypes from 'prop-types'

const Search = ({ handleSearch, isFetching }) => {
  return (
    <div className='card'>
      <div className='header'>
        <h2>Organização</h2>
      </div>
      <div className='content'>
        <input
          className='input'
          type='text'
          placeholder='Digite o nome da organização...'
          onKeyUp={handleSearch}
          disabled={isFetching}
        />
      </div>
    </div>
  )
}

Search.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired
}

export default Search
