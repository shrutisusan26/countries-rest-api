import React from 'react'
import { Link } from 'react-router-dom'

function CountryCard({flag, region, capital, name,population, data}) {
  return (
    // dynamic routing with the help of /:country -> country becomes dynamic
    <Link className="country-card" to={`/${name}`} state={data}>
      <div className="flag-container">
        <img src={flag} alt={name + ' Flag'} />
      </div>
      <div className="card-text">
        <h3 className="card-title">{name}</h3>
        <p>
          <b>Population: </b>
          {population.toLocaleString('en-IN')}
        </p>
        <p>
          <b>Region: </b>{region}
        </p>
        <p>
          <b>Capital: </b>{capital}
        </p>
      </div>
    </Link>
  )
}

export default CountryCard
