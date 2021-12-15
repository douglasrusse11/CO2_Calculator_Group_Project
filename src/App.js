
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CarbonContainer from './container/CarbonContainer';


function App() {
  


  // const getData = () => {
  //   fetch("https://www.carboninterface.com/api/v1/auth", {
  //     headers: {"Authorization": "Bearer ucIWsNICmjJVnU0lJhoiIw",
  //              "Content-Type": "application/json"}
  // })
  //   .then((res) => res.json())
  //   .then((res) => console.log(res))
  // }
  
  // const getData = () => {
  //   fetch("https://www.carboninterface.com/api/v1/estimates", {
  //     method: "POST",
  //     headers: {"Authorization": `Bearer ${accessToken}`,
  //              "Content-Type": "application/json"},
  //     body: JSON.stringify({
  //       "type": "shipping",
  //       "weight_value": 200,
  //       "weight_unit": "g",
  //       "distance_value": 2000,
  //       "distance_unit": "km",
  //       "transport_method": "truck"
  //     })
  //   })
  //   .then((res) => res.json())
  //   .then((res) => {
  //     console.log(res);
  //     setData(res);
  //   })
  //   .catch((error) => console.log(error))
  // }

  return (
    <div className="App">
      <CarbonContainer />
    </div>
  );
}

export default App;
