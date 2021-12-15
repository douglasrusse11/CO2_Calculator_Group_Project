import {getTravelEstimate} from '../services/CarbonService';

const Travel = ({ updateFormData }) => {


    const onChange = (e) => {
        if (e.target.id === "bus" || e.target.id === "train" || e.target.id === "walking") {
            updateFormData(e);
        } else {
            getTravelEstimate(e.target.value)
            .then(res => {
                const newEvent = {
                    target: {
                        name: e.target.name,
                        value: res.data.attributes.carbon_mt
                    }
                };
                updateFormData(newEvent);
            })
        }
    }

        return (
            <>
            <h2>How do you mainly travel? </h2>

                <div>
                    <input onChange={onChange} type="radio" id="small" name="travel" value="54f31253-bcbc-488b-9da6-69c3bee85a24"
                        defaultChecked />
                    <label htmlFor="average">Small sized Car</label>
                </div>
                <div>
                    <input onChange={onChange} type="radio" id="medium" name="travel" value="7f96c1c8-990f-4d52-bec6-79dc8ecfa889"
                    />
                    <label htmlFor="Medium">Medium sized Car</label>
                </div>
                <div>
                    <input onChange={onChange} type="radio" id="large" name="travel" value="7811182c-3efa-4253-9763-2ed6bf4014f7"
                    />
                    <label htmlFor="large">Large sized Car</label>
                </div>
                <div>
                    <input onChange={onChange} type="radio" id="hybrid" name="travel" value="2bcdabf0-c33d-4970-9701-d1a983d41678"
                    />
                    <label htmlFor="hybrid">Hybrid vehicle</label>
                </div>
                <div>
                    <input onChange={onChange} type="radio" id="electric" name="travel" value="89f885e6-2016-4080-ad39-3396cd559f60"
                    />
                    <label htmlFor="electric">Electric vehicle</label>
                </div>
                <div>
                    <input onChange={onChange} type="radio" id="bus" name="travel" value="7.2"
                    />
                    <label htmlFor="bus">Bus</label>
                </div>
                <div>
                    <input onChange={onChange} type="radio" id="train" name="travel" value="2.2"
                    />
                    <label htmlFor="train">Train</label>
                </div>
                <div>
                    <input onChange={onChange} type="radio" id="walking" name="travel" value="0" />
                    <label htmlFor="walking">Walking/Cycling</label>
                </div>
            </>
        )
    }

    export default Travel;