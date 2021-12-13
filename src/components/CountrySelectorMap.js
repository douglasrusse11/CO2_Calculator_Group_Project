const CountrySelectorMap = ({updateDisplayMap}) => {

    const handleClick = (e) => {
        e.preventDefault();
        updateDisplayMap();
    }

    return (
        <>
        <p>Map goes here</p>
        <input type="submit" value="Dropdown" onClick={handleClick} />
        </>
    )
}

export default CountrySelectorMap;