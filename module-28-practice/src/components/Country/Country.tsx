import { useState } from "react";
import type { CountryType } from "../../type";

export interface CountryProps {
  country: CountryType;
}

export default function Country({ country }: CountryProps) {
  const [visited, setVisited] = useState(false);
  const handleVisited = () => {
    setVisited(!visited);
  };
  return (
    <div className="border border-2 border-green-500  rounded-lg p-5 m-10">
      <h3 className="font-bold text-3xl mb-5">{country.name.common}</h3>
      <img
        className="w-[200px]"
        src={country.flags.flags.png}
        alt={country.flags.flags.alt}
      />
      <button
        className=" border border-gray-500 mt-5 rounded-lg p-2"
        onClick={handleVisited}
      >
        {visited ? "Visited" : "Mark as Visited"}
      </button>
    </div>
  );
}
