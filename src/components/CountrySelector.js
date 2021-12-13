import { useState, useEffect } from 'react';
import CountrySelectorDropdown from './CountrySelectorDropdown';
import CountrySelectorMap from './CountrySelectorMap';

const CountrySelector = ({ updateSelectedCountry }) => {
    const [displayMap, setDisplayMap] = useState(false);
    const [countryData, setCountryData] = useState(null);
    const [mapData, setMapData] = useState(null);

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
                    if (country.properties["Alpha-2"]) {
                        return {
                            id: country.properties["Alpha-2"].toLowerCase(),
                            name: country.properties.name,
                            coords: restCountry ? restCountry.latlng : [0, 0],
                            value: 1000
                        }
                    } else {
                        switch (country.properties.name) {
                            case "Northern Cyprus":
                                return {
                                    id: "cy",
                                    name: country.properties.name,
                                    coords: [35, 33],
                                    value: 1000
                                };
                            case "Kosovo":
                                return {
                                    id: "rs",
                                    name: country.properties.name,
                                    coords: [44, 21],
                                    value: 1000
                                };
                            case "South Sudan":
                                return {
                                    id: "ss",
                                    name: country.properties.name,
                                    coords: [15, 30],
                                    value: 1000
                                };
                            case "Somaliland":
                                return {
                                    id: "so",
                                    name: country.properties.name,
                                    coords: [10, 49],
                                    value: 1000
                                };
                        }
                    };
                }));
                const geojson = window.topojson.feature(
                    topology,
                    topology.objects[Object.keys(topology.objects)[0]]
                );
                geojson.copyrightUrl = topology.copyrightUrl;
                geojson.copyrightShort = topology.copyrightShort;
                setMapData(geojson);
            })
            .catch(error => console.error(error))
    }, []);

    return (
        <>
            {displayMap ? 
            <>
            {countryData && mapData && 
            <CountrySelectorMap data={countryData} mapData={mapData} updateDisplayMap={updateDisplayMap} updateSelectedCountry={updateSelectedCountry}/>}
            </> : 
            <>
            {countryData && 
            <CountrySelectorDropdown countryData={countryData} updateDisplayMap={updateDisplayMap} updateSelectedCountry={updateSelectedCountry}/>}
            </>}
        </>
    );
}

export default CountrySelector;