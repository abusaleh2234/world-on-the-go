import React, { use } from 'react';
import Country from '../Country/Country';
import "./countries.css"
const Countries = ({countriesPromises}) => {
    const countriesLoaded = use(countriesPromises)
    // console.log(countriesLoaded);
    const countries = countriesLoaded.countries
    // console.log(countries);
    
    return (
        <div>
            <h1>This is a Countries {countries.length}</h1>
            <div className="countries">
                {
                countries.map(country => <Country
                    key={country.cca3.cca3}
                     country={country}></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;