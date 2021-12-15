import {getFlightEstimate} from '../services/CarbonService';
import { useState } from 'react';

const Flight = ({updateFormData}) => {

    const [destinationAirport, setDestinationAirport] = useState ("");
    const [numberOfFlights, setNumberOfFlights] = useState({});


    const [display, setDisplay] = useState({europe: false,
                                            africa: false,
                                            australia: false,
                                            americas: false,
                                            asia: false})

    const onChange = (e) => {
        const newDisplay = {...display};
        newDisplay[e.target.id] = !newDisplay[e.target.id]
        if (newDisplay[e.target.id] === false) {
            delete numberOfFlights[e.target.id]
        }
        setDisplay(newDisplay);
    }

    const onNumFlightChange = (e) => {
        const newObj = {...numberOfFlights};
        newObj[e.target.name] = e.target.value;
        setNumberOfFlights(newObj);
    }

    const handleFlightClick = (e) => {
        e.preventDefault();
        let newArray = []
        

        const airportCode = {
            europe: "ber",
            africa: "tzn",
            australia: "syd",
            americas:  "ljn",
            asia:   "pek"
        }

        for (let key in numberOfFlights) {
            newArray.push(getFlightEstimate(airportCode[key] ,numberOfFlights[key]))
        }

        Promise.all(newArray)
            .then(arr => {
                console.log(arr)
                const total = arr.reduce((acc, current) => acc+current.data.attributes.carbon_mt, 0);
                console.log(total);
                const newEvent = {
                    target: {
                        name: "flight",
                        value: total
                    }
                };
                updateFormData(newEvent);
                });
        } 
        
        
    // }
        
    return (
        <>
        <h2>Flights</h2>
                <div>
                    <input onChange={onChange} type="checkbox" id="europe" name="flights" value="ber"
                         />
                    <label htmlFor="europe">Europe</label>
                    {display.europe &&
                    <>
                    <label htmlFor="flight amount" >Number of flights</label>
                    <input onChange={onNumFlightChange} name="europe" type="number" id="number_of_flights_europe"/></>}
                    
                </div>
                <div>
                    <input onChange={onChange} type="checkbox" id="africa" name="flights" value="tzn"
                    />
                    <label htmlFor="africa">Africa</label>
                    {display.africa &&
                    <>
                    <label htmlFor="flight amount" >Number of flights</label>
                    <input onChange={onNumFlightChange} name="africa" type="number" id="number_of_flights_africa"/></>}
                </div>
                <div>
                    <input onChange={onChange} type="checkbox" id="australia" name="flights" value="syd"
                    />
                    <label htmlFor="australia">Australia/NZ</label>
                    {display.australia &&
                    <>
                    <label htmlFor="flight amount" >Number of flights</label>
                    <input onChange={onNumFlightChange} name="australia" type="number" id="number_of_flights_australia"/></>}
                </div>
                <div>
                    <input onChange={onChange} type="checkbox" id="americas" name="flights" value="ljn"
                    />
                    <label htmlFor="americas">Americas</label>
                    {display.americas && 
                    <>
                    <label htmlFor="flight amount" >Number of flights</label>
                    <input onChange={onNumFlightChange} name="americas" type="number" id="number_of_flights_americas"/></>}
                </div>
                <div>
                    <input onChange={onChange} type="checkbox" id="asia" name="flights" value="pek"/>
                    <label htmlFor="asia">Asia</label>
                    {display.asia &&
                    <>
                    <label htmlFor="flight amount" >Number of flights</label>
                    <input onChange={onNumFlightChange} name="asia" type="number" id="number_of_flights_asia"/></>}
                </div>
                <input type="submit" onClick={handleFlightClick} value="Submit Flights" id="Submit-Flights"/>
                </>
    )
}

export default Flight;