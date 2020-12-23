import React, { useState, useEffect } from "react";
import "./App.css";
import { MenuItem, Select, FormControl, Card, CardContent } from "@material-ui/core";
import InfoBox from "./InfoBox";
import Map from "./Map";

function App() {
    // State is how to write a variable in react.
    const [countries, setCountries] = useState([]);
    const [country, setCountry] = useState("worldwide");

    // Use effect runs a piece of code based on a given condition
    useEffect(() => {
        //code in here will once when the component loads and then not again

        const getCountriesData = async () => {
            await fetch("https://disease.sh/v3/covid-19/countries")
                .then((response) => response.json())
                .then((data) => {
                    const countries = data.map((country) => ({
                        name: country.country, // Denmark, Sweden
                        value: country.countryInfo.iso2, // DK, SE
                    }));
                    setCountries(countries);
                });
        };
        getCountriesData();
    }, []);

    const onCountryChange = async (event) => {
        const countryCode = event.target.value;

        setCountry(countryCode);
    };
    return (
        <div className="app">
            <div className="app__left">
                <div className="app__header">
                    <h1>COVID-19 Tracker</h1>
                    {/* Formcontrol gives us the dropdown menu from material UI */}
                    <FormControl className="app__dropdown">
                        <Select variant="outlined" onChange={onCountryChange} value={country}>
                            <MenuItem value="worldwide">Worldwide</MenuItem>
                            {countries.map((country) => (
                                <MenuItem value={country.value}>{country.name}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </div>

                <div className="app__stats">
                    <InfoBox title="Coronavirus Cases" cases={10000} total={3000} />
                    <InfoBox title="Recovered" cases={10000} total={200} />
                    <InfoBox title="Deaths" cases={10000} total={1000} />
                </div>

                <div>
                    <Map></Map>
                </div>
            </div>
            <div className="app__right">
                <Card>
                    <CardContent>
                                <h3>Live cases by country</h3>
                                <h3>Worldwide new cases</h3>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

export default App;
