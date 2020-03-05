import React, { useState } from "react";
import { Search } from "semantic-ui-react";

const COORD_REGEX = /^(-?\d+(\.\d+)?),( ?)(-?\d+(\.\d+)?)$/;

/**
 * isCoord
 * @param {string} value
 */
function isCoord(value) {
  return COORD_REGEX.test(value);
}

/**
 * get coords of a regex string
 * @param {string} regex
 * @returns {{lat:number, long:number}} Lat and Long
 */
function getCoordsByRegex(regex) {
  const matches = regex.match(COORD_REGEX);
  return { lat: matches[1], lon: matches[4] };
}

function searchByQuery(query) {
  const formatedQuery = `${encodeURIComponent(query)}`;
  return fetch(
    `https://nominatim.openstreetmap.org/search.php?q=${formatedQuery}&format=json`
  ).then(res => res.json());
}

function getPLaceList(response = []) {
  return response
    .map(place => ({
      title: place.display_name,
      value: { lat: place.lat, lon: place.lon },
    }))
    .filter((value, index, self) => {
      const first = self.findIndex(v => v.title === value.title);
      return first === index;
    });
}

const SelectDropdown = () => {
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);
  /**
   * @param {string} value
   */
  async function search(value) {
    setLoading(true);
    if (isCoord(value)) {
      setResults([{ title: value, value: getCoordsByRegex(value) }]);
    } else {
      const response = await searchByQuery(value);
      const placeList = getPLaceList(response);
      setResults(placeList);
    }
    setLoading(false);
  }

  /** @TODO implement this */
  function selectResult(e, { result }) {}

  return (
    <div>
      <Search
        loading={loading}
        results={results}
        onSearchChange={(e, { value }) => search(value)}
        onResultSelect={selectResult}
      />
    </div>
  );
};

export default SelectDropdown;
