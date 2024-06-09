import React from 'react'

function SelectMenu({ setResult }) {
  return (
    <select className="filter-by-region" onChange={(e) => setResult(e.target.value.toLocaleLowerCase())}>
      <option hidden>Filter by Region</option>
      <option value="Africa">Africa</option>
      <option value="America">Americas</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
  )
}

export default SelectMenu
