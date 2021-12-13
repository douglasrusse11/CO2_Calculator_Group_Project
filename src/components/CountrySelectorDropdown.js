const CountrySelectorDropdown = ({updateDisplayMap}) => {

    const handleClick = (e) => {
        e.preventDefault();
        updateDisplayMap();
    }

    return (
        <>
            <p>Dropdown goes here</p>
            <input type="submit" value="Map" onClick={handleClick} />
        </>
            )
}

export default CountrySelectorDropdown;