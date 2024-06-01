import React from 'react'
import '../movixer.css'

const searchBar = (props) => {
    const handleChange = (event) => props.setSearchTerm(event.target.value);
    const handleSubmit = (event) => {
        event.preventDefault();
    }
  return (
    <form onSubmit={handleSubmit}>
    <input type="search" className='search-container' placeholder="Search for movies and TV shows" value={props.value} onChange={handleChange} />
            <button type="submit">Search</button>
   
    </form>
  )
}

export default searchBar