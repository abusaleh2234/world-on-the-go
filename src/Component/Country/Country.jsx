import "./country.css"
const Country = ({country}) => {
    console.log(country);
    
    return (
        <div className="country">
            <img src={country.flags?.flags.png} alt={country.flags.flags.alt} />
            <h2>Name: {country.name.common}</h2>
            <h3>Capital: {country.capital.capital[0]}</h3>
            <h4>Region: {country.region.region}</h4>
            <p>{country.area.area} {country.area.area > 200000 ? "Big Country" : "Small country"}</p>
        </div>
    );
};

export default Country;