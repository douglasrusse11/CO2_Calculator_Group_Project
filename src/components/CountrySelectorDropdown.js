import { useState, useEffect } from 'react';

const CountrySelectorDropdown = ({ countryData, updateDisplayMap, updateSelectedCountry }) => {

    const [options, setOptions] = useState(null);

    useEffect(() => {
        setOptions(countryData.map((country, index) => {
            if (country.id === "gb") {
                return (<option value={country.id} key={`country_${index}`} selected>{country.name}</option>);
            } else {
                return (<option value={country.id} key={`country_${index}`}>{country.name}</option>);
            }
        }))
    }, []);

    const handleClick = (e) => {
        e.preventDefault();
        updateDisplayMap();
    }

    const handleChange = (e) => {
        updateSelectedCountry(e.target.value)
        console.log(`Country Code: ${e.target.value}`);
    }

    return (
        <>
        {options &&
        <>
            <select onChange={handleChange}>
                {options}
            </select>
            <input type="submit" value="Map" onClick={handleClick} />
            </>
        }
        </>
            )
}

export default CountrySelectorDropdown;