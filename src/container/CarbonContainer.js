import Flight from "../components/Flight";
import Diet from "../components/Diet";
import Travel from "../components/Travel";
import Utilities from "../components/Utilities";
import Chart from "../Chart";
import { useState } from 'react';

const CarbonContainer = () => {
    
    const [formData, setFormData] = useState({});

    const updateFormData = (e) => {
        formData[e.target.name] = e.target.value;
        setFormData(formData);
    }


    return (
        <>
        <h1>Carbon Calculator</h1>
        <form>
        <Travel/>
        <Diet updateFormData={updateFormData}/>
        <Utilities/>
        <Flight/>
        </form>
        <Chart formData={formData}/>
        </>
    )
};

export default CarbonContainer;