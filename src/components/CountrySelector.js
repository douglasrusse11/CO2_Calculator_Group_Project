import { useState, useEffect } from 'react';
import CountrySelectorDropdown from './CountrySelectorDropdown';
import CountrySelectorMap from './CountrySelectorMap';

const CountrySelector = () => {
    const [displayMap, setDisplayMap] = useState(false);

    const updateDisplayMap = () => {
        setDisplayMap(!displayMap)
    }

  return (
      <>
      {displayMap ? <CountrySelectorMap updateDisplayMap={updateDisplayMap}/> : <CountrySelectorDropdown updateDisplayMap={updateDisplayMap}/>}
      </>
  )
}

export default CountrySelector;