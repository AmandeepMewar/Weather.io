import Paper from "@mui/material/Paper";

import SearchBar from "./SearchBar";
import Header from "./Header";
import { weatherCardStyle } from "../styles/customStyles";
import WelcomeBox from "./WelcomeBox";

const WeatherCard = () => {

    return (
        <Paper sx={weatherCardStyle} elevation={3}>
            <Header />
            <SearchBar />
            <WelcomeBox/>
        </Paper>
    );
};

export default WeatherCard;
