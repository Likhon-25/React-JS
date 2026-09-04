import { useState } from "react";
import type { CountryType } from "../../type";
import "./Country.css";
export interface CountryProps {
  country: CountryType;
  handleVisitedCountry: (country: CountryType) => void;
}

export default function Country({country, handleVisitedCountry,}: CountryProps) {
  const [visited, setVisited] = useState<boolean>(false);
  const handleVisited = () => {
    // setVisited(true);
    // ---------- or ----------
    // if (visited) {
    //   setVisited(false);
    // } else {
    //   setVisited(true);
    // }
    // ---------- or ----------
    setVisited(!visited);
    handleVisitedCountry(country);
  };
  return (
    <div className={`country ${visited ? "country-visited" : ""}`}>
      <h3>{country.name.common}</h3>
      <img src={country.flags.flags.png} alt="" />
      <h4>Capital: {country.capital.capital}</h4>
      <p>Population: {country.population.population}</p>
      <button onClick={handleVisited}>
        {visited ? " Visited" : "Mark as Visited"}
      </button>
    </div>
  );
}
