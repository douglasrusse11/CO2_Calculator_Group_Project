import Flight from "../components/Flight";
import Diet from "../components/Diet";
import Travel from "../components/Travel";
import Utilities from "../components/Utilities";
import CountrySelector from "../components/CountrySelector";
import Chart from "../Chart";
import { useState, useEffect } from 'react';
import Carousel, {CarouselItem} from "./Carousel";
import FinalCharts from "../components/FinalCharts";

const CarbonContainer = () => {
    
    const [formData, setFormData] = useState({});
    const [chartData, setChartData] = useState({});
    const [selectedCountry, setSelectedCountry] = useState({
        id: "gb",
        name: "United Kingdom",
        coords: [54, -2],
        currency: "£",
        value: 1000
    });

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

    const updateSelectedCountry = (countryCode) => {
        setSelectedCountry(countryCode);
    }

    return (
        
        <>
        <h1>CARBON CALCULATOR</h1>
        <Chart chartData={chartData}/>
        <Carousel>
        <CarouselItem><CountrySelector updateSelectedCountry={updateSelectedCountry}/></CarouselItem>
        <CarouselItem><Travel updateFormData={updateFormData}/></CarouselItem>
        <CarouselItem><Diet updateFormData={updateFormData}/></CarouselItem>
        <CarouselItem><Utilities updateFormData={updateFormData} country={selectedCountry}/></CarouselItem>
        <CarouselItem><Flight updateFormData={updateFormData}/></CarouselItem>
        <CarouselItem><FinalCharts chartData={chartData}/></CarouselItem>
        </Carousel>
        </>
    )
};

export default CarbonContainer;