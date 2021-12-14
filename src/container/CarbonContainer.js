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
    const [selectedCountry, setSelectedCountry] = useState("gb");

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
        <h1>Carbon Calculator</h1>
        <Chart chartData={chartData}/>
        <div className="Carousel">
        <Carousel>
        <CarouselItem><CountrySelector updateSelectedCountry={updateSelectedCountry}/></CarouselItem>
        <CarouselItem><Travel updateFormData={updateFormData}/></CarouselItem>
        <CarouselItem><Diet updateFormData={updateFormData}/></CarouselItem>
        <CarouselItem><Utilities updateFormData={updateFormData}/></CarouselItem>
        <CarouselItem><Flight updateFormData={updateFormData}/></CarouselItem>
        <CarouselItem><FinalCharts chartData={chartData}/></CarouselItem>
        </Carousel>
        </div>
        </>
    )
};

export default CarbonContainer;