import React from 'react'

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

export default Search
