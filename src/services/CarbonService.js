import getAccessToken from "../helpers/helper";

const baseURL = 'https://www.carboninterface.com/api/v1/estimates';
const headers = {
    "Authorization": `Bearer ${getAccessToken()}`,
    "Content-Type": "application/json"
}

export const getTravelEstimate = (vehicle_model_id) => {
    return fetch(baseURL, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({
            "type": "vehicle",
            "distance_unit": "mi",
            "distance_value": 5520,
            "vehicle_model_id": `${vehicle_model_id}`
        })
    })
        .then(res => res.json())
}

export const getElectricityEstimate = (electricity_value) => {
    return fetch(baseURL, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({
            "type": "electricity",
            "electricity_unit": "kwh",
            "electricity_value": electricity_value,
            "country": "gb",
            "state": ""
        })
    })
        .then(res => res.json())
}

export const getGasEstimate = (gas_value) => {
    return fetch(baseURL, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({
            "type": "fuel_combustion",
            "fuel_source_type": "ng",
            "fuel_source_unit": "thousand_cubic_feet",
            "fuel_source_value": gas_value
        })
    })
        .then(res => res.json())
}


export const getFlightEstimate = (dest_airport, numberOfFlights) => {
    const leg = [{ "departure_airport": "lhr", "destination_airport": `${dest_airport}` },
    { "departure_airport": `${dest_airport}`, "destination_airport": "lhr" }]
    let legs = [];
    for (let i = 0; i < numberOfFlights; i++) {
        legs = [...legs, ...leg];
    }
    return fetch(baseURL, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({
            "type": "flight",
            "passengers": 1,
            "legs": legs
        })
    })
        .then(res => res.json())
}