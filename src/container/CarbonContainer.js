import Flight from "../components/Flight";
import Diet from "../components/Diet";
import Travel from "../components/Travel";
import Utilities from "../components/Utilities";
import Chart from "../Chart";
import { useState } from 'react';

const CarbonContainer = () => {
    
    const [formData, setFormData] = useState({});

    const updateFormData = (e) => {
        const newFormData = {
            ...formData,
        }
        newFormData[e.target.name] = e.target.value;
        setFormData(newFormData);
    }


    return (
        <>
        <h1>Carbon Calculator</h1>
        <form>
        <Travel updateFormData={updateFormData}/>
        <Diet updateFormData={updateFormData}/>
        <Utilities updateFormData={updateFormData}/>
        <Flight/>
        </form>
        <Chart formData={formData}/>
        </>
    )
};

export default CarbonContainer;