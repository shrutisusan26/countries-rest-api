import React, { useEffect, useState } from "react";
import CountryData from "../CountryData.js";
import CountryCard from "./CountryCard.js";
import CountriesListShimmer from "./CountriesListShimmer.js";
function CountriesContainer({ result }) {
  const [countryData, setCountryData] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountryData(data));
  }, []);

  return (
    <>
      {!countryData.length ? (
        <CountriesListShimmer />
      ) : (
        <div className="countries-container">
          {CountryData.filter((country) => {
            return country.name.common.toLocaleLowerCase().includes(result) || country.region.toLocaleLowerCase().includes(result);
          }).map((country, idx) => {
            return (
              <CountryCard
                capital={country.capital?.[0]}
                region={country.region}
                name={country.name.common}
                flag={country.flags.svg}
                key={idx}
                population={country.population}
                data = {country}
              />
            );
          })}
        </div>
      )}
    </>
  );
}

export default CountriesContainer;
