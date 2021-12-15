

const Diet = ({updateFormData}) => {

    const onChange = (e) => {
        updateFormData(e);
    }


    return (
        <>
        <h2>Diet</h2>
            <div>
                <input onChange={onChange} type="radio" id="average" name="diet" value="2.5"
                    defaultChecked/>
                <label htmlFor="average">Average</label>
            </div>
            <div>
                <input onChange={onChange} type="radio" id="noBeef" name="diet" value="1.9"
                    />
                <label htmlFor="noBeef">No beef</label>
            </div>
            <div>
                <input onChange={onChange} type="radio" id="vegetarian" name="diet" value="1.7"
                    />
                <label htmlFor="vegetarian">Vegetarian</label>
            </div>
            <div>
                <input onChange={onChange} type="radio" id="vegan" name="diet" value="1.5"
                    />
                <label htmlFor="vegan">Vegan</label>
            </div>
        </>
    )
}

export default Diet;