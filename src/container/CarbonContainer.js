import Flight from "../components/Flight";
import Diet from "../components/Diet";
import Travel from "../components/Travel";
import Utilities from "../components/Utilities";
import Chart from "../Chart";
import { useState, useEffect } from 'react';

const CarbonContainer = () => {
    
    const [formData, setFormData] = useState({});
    const [chartData, setChartData] = useState({});

    useEffect(() => {
        setChartData(formData);
    },[formData])

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
        <Chart chartData={chartData}/>
        <form>
        <Travel updateFormData={updateFormData}/>
        <Diet updateFormData={updateFormData}/>
        <Utilities updateFormData={updateFormData}/>
        <Flight updateFormData={updateFormData}/>
        </form>
        </>
    )
};

export default CarbonContainer;