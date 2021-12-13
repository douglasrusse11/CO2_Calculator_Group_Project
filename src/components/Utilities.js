import {getElectricityEstimate} from '../services/CarbonService';
import { useState } from 'react';

const Utilities = ({updateFormData}) => {

    const [electricityUnit, setElectricityUnit] = useState(0);
    
    const onChange = (e) => {
        const electricityPricePerMonth = e.target.value;
        const electricityPricePerYear = electricityPricePerMonth*12;
        const electricityKWH = electricityPricePerYear/0.14775;
        setElectricityUnit(electricityKWH);
    }
    
    const handleClick = (e) => {
        e.preventDefault();
        getElectricityEstimate(electricityUnit)
                .then(res => {
                    console.log(res);
                    const newEvent = {
                        target: {
                            name: "electricity",
                            value: res.data.attributes.carbon_mt
                        }
                    };
                    updateFormData(newEvent);
                })
    }
    

// take £ value and divide by 17.2 for kwh. kwh is sent to api.
    return (
        <>
            <h2>How much do you spend on Utilities per month?</h2>
                <label htmlFor="electricity-value">Electricity:</label>
                <input onChange={onChange} type="number" step="0.01" id="electricity-value"/>
                <input type="submit" onClick={handleClick} value="Submit-electricty" id="Submit-Electricity"/>
        </>
    )
}

export default Utilities;