import { useState, useEffect } from 'react';

const CountrySelectorDropdown = ({countryData, updateDisplayMap}) => {

    const [options, setOptions] = useState(null);

    useEffect(() => {
        setOptions(countryData.map((country, index) => {
            return (<option value={country.id} key={`country_${index}`}>{country.name}</option>);
        }))
    }, []);

    const handleClick = (e) => {
        e.preventDefault();
        updateDisplayMap();
    }

    const handleChange = (e) => {
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