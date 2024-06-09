import React from 'react'
import './CountriesListShimmer.css'
function CountriesListShimmer() {
    // const arr = new Array(10).fill(undefined);
    const arr = Array.from({length: 10});
  
  return (
    <div className='countries-container'>
    {
        arr.map((ele,idx) =>{
            return       <div key={idx} className="country-card shimmer-card"></div>

        })
    }
    </div>
  )
}

export default CountriesListShimmer
