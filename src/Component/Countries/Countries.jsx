import React, { use, useState } from 'react';
import Country from '../Country/Country';
import "./countries.css"
const Countries = ({countriesPromises}) => {
    
    const [visitedCountries, setVisitedCountries] = useState([])
    const [visitedFlags, setVisitedFlags] = useState([])

    const handleVisitedCountries = (country) =>  {
        // console.log(country);
        const newVisitedCountries = [...visitedCountries, country]
        setVisitedCountries(newVisitedCountries)
    }

    const handleVisitedFlags = (flag) => {
        // console.log(flag);
        const newVisitedFlags = [...visitedFlags, flag]
        setVisitedFlags(newVisitedFlags)
    }
    const countriesLoaded = use(countriesPromises)
    const countries = countriesLoaded.countries
    return (
        <div>
            <h1>This is a Countries {countries.length}</h1>
            <h5>Visited Country : {visitedCountries.length}</h5>
            
            <div className="">
                <ol>
                    {
                        visitedCountries.map(visitedCountry => <li key={visitedCountry.cca3.cca3}>{visitedCountry.name.common}</li>) 
                    }
                </ol>
            </div>
            <h4>Visited Flag</h4>
            <div className="visited-Flags">
                {
                    visitedFlags.map(flag => <img src={flag}></img>)
                }
            </div>
            <div className="countries">
                {
                countries.map(country => <Country
                    key={country.cca3.cca3}
                    handleVisitedCountries={handleVisitedCountries}
                    handleVisitedFlags={handleVisitedFlags}
                     country={country}></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;