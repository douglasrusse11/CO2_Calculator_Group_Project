import { useState, useEffect } from 'react';
import CountrySelectorDropdown from './CountrySelectorDropdown';
import CountrySelectorMap from './CountrySelectorMap';

const CountrySelector = ({ updateSelectedCountry }) => {
    const [displayMap, setDisplayMap] = useState(true);
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
                        let currency = ""
                        for (let key in restCountry.currencies) {
                            currency = restCountry.currencies[key].symbol ? restCountry.currencies[key].symbol : key
                        }
                        return {
                            id: country.properties["Alpha-2"].toLowerCase(),
                            name: country.properties.name,
                            coords: restCountry ? restCountry.latlng : [0, 0],
                            currency: currency,
                            value: 1000
                        }
                    } else {
                        switch (country.properties.name) {
                            case "Northern Cyprus":
                                return {
                                    id: "ncy",
                                    name: country.properties.name,
                                    coords: [35, 33],
                                    currency: "₺",
                                    value: 1000
                                };
                            case "Kosovo":
                                return {
                                    id: "xk",
                                    name: country.properties.name,
                                    coords: [44, 21],
                                    currency: "€",
                                    value: 1000
                                };
                            case "South Sudan":
                                return {
                                    id: "ss",
                                    name: country.properties.name,
                                    coords: [15, 30],
                                    currency: "SSP",
                                    value: 1000
                                };
                            case "Somaliland":
                                return {
                                    id: "som",
                                    name: country.properties.name,
                                    coords: [10, 49],
                                    currency: "Sl. Sh.",
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
            <h2>Choose your location</h2>

            {displayMap ?
                <>
                    {countryData && mapData &&
                        <CountrySelectorMap data={countryData} mapData={mapData} updateDisplayMap={updateDisplayMap} updateSelectedCountry={updateSelectedCountry} />}
                </> :
                <>
                    {countryData &&
                        <CountrySelectorDropdown countryData={countryData} updateDisplayMap={updateDisplayMap} updateSelectedCountry={updateSelectedCountry} />}
                </>}
        </>
    );
}

export default CountrySelector;