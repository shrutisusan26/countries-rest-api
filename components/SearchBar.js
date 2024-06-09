import React, { useState } from 'react'

function SearchBar({setResult}) {


  return (
    <div className="search-container">
        <i className="fa-solid fa-magnifying-glass"></i>
        <input type="text" placeholder="Search for a country..." onChange={(e)=> setResult(e.target.value)}/>
  </div>
  )
}

export default SearchBar
