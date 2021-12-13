import { useState, useEffect } from 'react';
import CountrySelectorDropdown from './CountrySelectorDropdown';
import CountrySelectorMap from './CountrySelectorMap';

const CountrySelector = () => {
    const [displayMap, setDisplayMap] = useState(false);
    const [countryData, setCountryData] = useState(null);

    const updateDisplayMap = () => {
        setDisplayMap(!displayMap);
    }

    useEffect(() => {
        Promise.all([fetch(
            'https://cdn.jsdelivr.net/gh/highcharts/highcharts@2e11000c966a20f08afc4e0927b91df99821de99/samples/data/world-countries.topo.json'),
            fetch("https://restcountries.com/v3.1/all")])
            .then((res) => {
                return Promise.all([res[0].json(), res[1].json()]);
            })
            .then(data => {
                const topology = data[0];
                const restCountries = data[1];
                setCountryData(topology.objects.countries1.geometries.map(country => {
                    const restCountry = restCountries.find(restCountry => restCountry.cca3.toLowerCase() === country.id.toLowerCase());
                    return {
                        id: country.properties["Alpha-2"] ? country.properties["Alpha-2"].toLowerCase() : null,
                        name: country.properties.name,
                        coords: restCountry ? restCountry.latlng : [0, 0],
                        value: 1000
                    };
              }));
            })
    }, []);

  return (
      <>
      {displayMap ? <CountrySelectorMap updateDisplayMap={updateDisplayMap}/> : <CountrySelectorDropdown updateDisplayMap={updateDisplayMap}/>}
      </>
  );
}

export default CountrySelector;