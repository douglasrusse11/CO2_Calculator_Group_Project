import { useState, useEffect } from 'react';
import CountrySelectorDropdown from './CountrySelectorDropdown';
import CountrySelectorMap from './CountrySelectorMap';

const CountrySelector = () => {
    const [displayMap, setDisplayMap] = useState(false);

  return (
      <>
      {displayMap ? <CountrySelectorMap/> : <CountrySelectorDropdown/>}
      </>
  )
}

export default CountrySelector;