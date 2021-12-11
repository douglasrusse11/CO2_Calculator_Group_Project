import { useState, useEffect } from 'react';
import './App.css';
import Chart from './Chart';
import CarbonContainer from './container/CarbonContainer';
import getAccessToken from './helpers/getAccessToken';

function App() {
  
  const accessToken = getAccessToken();
  
  const [data, setData] = useState(null);
  
  useEffect(() => getData(), [])

  // const getData = () => {
  //   fetch("https://www.carboninterface.com/api/v1/auth", {
  //     headers: {"Authorization": "Bearer ucIWsNICmjJVnU0lJhoiIw",
  //              "Content-Type": "application/json"}
  // })
  //   .then((res) => res.json())
  //   .then((res) => console.log(res))
  // }
  
  const getData = () => {
    fetch("https://www.carboninterface.com/api/v1/estimates", {
      method: "POST",
      headers: {"Authorization": `Bearer ${accessToken}`,
               "Content-Type": "application/json"},
      body: JSON.stringify({
        "type": "shipping",
        "weight_value": 200,
        "weight_unit": "g",
        "distance_value": 2000,
        "distance_unit": "km",
        "transport_method": "truck"
      })
    })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      setData(res);
    })
    .catch((error) => console.log(error))
  }

  return (
    <div className="App">
      <CarbonContainer />
      <Chart />
    </div>
  );
}

export default App;
