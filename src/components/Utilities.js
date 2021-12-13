import {getElectricityEstimate, getGasEstimate} from '../services/CarbonService';
import { useState } from 'react';

const Utilities = ({updateFormData}) => {

    // gas 3.79p per kwh
    // take kwh and multiply by 3.6, then divide by 38.8, then divide by 1.02264

    const [electricityUnit, setElectricityUnit] = useState(0);
    const [gasUnit, setGasUnit] = useState(0);
    
    const onElectricityChange = (e) => {
        const electricityPricePerMonth = e.target.value;
        const electricityPricePerYear = electricityPricePerMonth*12;
        const electricityKWH = electricityPricePerYear/0.14775;
        setElectricityUnit(electricityKWH);
    }
    
    const onGasChange = (e) => {
        const gasPricePerMonth = e.target.value;
        const gasPricePerYear = gasPricePerMonth*12;
        // const gasTCF = ((((gasPricePerYear/0.0379)*3.6)/38.8)/1.02264)/1000; 
        const gasTCF = ((gasPricePerYear/0.166)*3.41)/1000; 
        setGasUnit(gasTCF);
    }
    
    const handleClick = (e) => {
        e.preventDefault();
        if (electricityUnit === 0) {
            const newEvent = {
                target: {
                    name: "electricity",
                    value: 0
                }
            };
            updateFormData(newEvent);
        } else {
        getElectricityEstimate(electricityUnit)
                .then(res => {
                    const newEvent = {
                        target: {
                            name: "electricity",
                            value: res.data.attributes.carbon_mt
                        }
                    };
                    updateFormData(newEvent);
                })
            }
        if (gasUnit === 0) {
            const newEvent = {
                target: {
                    name: "gas",
                    value: 0
                }
            };
            updateFormData(newEvent);
        } else {
        getGasEstimate(gasUnit)
                .then(res => {
                    const newEvent = {
                        target: {
                            name: "gas",
                            value: res.data.attributes.carbon_mt
                        }
                    };
                    updateFormData(newEvent);
                })
            }
    }
    

// take £ value and divide by 17.2 for kwh. kwh is sent to api.
    return (
        <>
            <h2>How much do you spend on Utilities per month?</h2>
                <label htmlFor="electricity-value">Electricity: £</label>
                <input onChange={onElectricityChange} type="number" step="0.01" id="electricity-value"/>
                

                <label htmlFor="gas-value">Gas: £</label>
                <input onChange={onGasChange} type="number" step="0.01" id="gas-value"/>
                <input type="submit" onClick={handleClick} value="Submit Utilities" id="Submit-Utilities"/>
        </>
    )
}

export default Utilities;