import React, { use, useState } from 'react';
import Country from '../Country/Country';
import "./countries.css"
const Countries = ({countriesPromises}) => {
    const countriesLoaded = use(countriesPromises)
    const countries = countriesLoaded.countries
    // console.log(countries);
    const [visitedCountries, setVisitedCountries] = useState([])

    const handleVisitedCountries = (country) =>  {
        // console.log(country);
        const newVisitedCountries = [...visitedCountries, country]
        setVisitedCountries(newVisitedCountries)
    }
    
    return (
        <div>
            <h1>This is a Countries {countries.length}</h1>
            <h5>Visited Country : {visitedCountries.length}</h5>
            <div className="">
                <ol>
                    {
                        visitedCountries.map(visitedCountry => <li>{visitedCountry.name.common}</li>) 
                    }
                </ol>
            </div>
            <div className="countries">
                {
                countries.map(country => <Country
                    key={country.cca3.cca3}
                    handleVisitedCountries={handleVisitedCountries}
                     country={country}></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;