import { useState } from "react";
import "./country.css"
const Country = ({country}) => {
    // console.log(country);

    const [visited, setVisited] = useState(false)
    const handleVisited = () => {
        // console.log("visited");
        // if (visited) {
        //     setVisited(false)
        // }
        // else{
        //     setVisited(true)
        // }

        // visited ? setVisited(false) : setVisited(true)    
        setVisited(!visited)
    }

    return (
        <div className={`country ${visited ? "country-visited" :""}`}>
            <img src={country.flags?.flags.png} alt={country.flags.flags.alt} />
            <h2>Name: {country.name.common}</h2>
            <h3>Capital: {country.capital.capital[0]}</h3>
            <h4>Region: {country.region.region}</h4>
            <p>{country.area.area} {country.area.area > 200000 ? "Big Country" : "Small country"}</p>
            <button onClick={handleVisited}>{visited ? "Visited": "Not Visited"}</button>
        </div>
    );
};

export default Country;