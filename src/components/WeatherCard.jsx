import { useState } from "react";

import Paper from "@mui/material/Paper";

import { ErrorScreen, Header, LoadingScreen, SearchBar, WeatherInfo, WelcomeBox } from './index'

import { weatherCardStyles } from "../styles/customStyles";

import { apiCall } from "../utils/api";
import { dateFormat } from "../utils/helper";

const WeatherCard = () => {
    const [error, setError] = useState(false);
    const [location, setLocation] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [weatherData, setWeatherData] = useState(null);

    const fetchData = async () => {
        setWeatherData(null)
        setIsLoading(true);
        const responseData = await apiCall(location);
        setIsLoading(false);

        if (
            responseData.code == "429001" ||
            responseData.code == "404001" ||
            responseData.code == "400001"
        ) {
            setError(true);
            return;
        }

        setError(false);
        const { date, day, time } = dateFormat(responseData.data.time);

        let locationData = responseData.location.name.split(",");
        locationData = [locationData[0], locationData[locationData.length - 1]];
        setWeatherData({
            values: responseData.data.values,
            timestamp: { date, day, time },
            location: locationData,
        });
    };

    return (
        <Paper sx={weatherCardStyles} elevation={3}>
            <Header />
            <SearchBar
                location={location}
                setLocation={setLocation}
                fetchData={fetchData}
            />
            {isLoading ? (
                <LoadingScreen />
            ) : weatherData ? (
                <WeatherInfo weatherData={weatherData} />
            ) : error ? (
                <ErrorScreen/>
            ) : (
                <WelcomeBox />
            )}
        </Paper>
    );
};

export default WeatherCard;
