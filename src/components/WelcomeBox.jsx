import Typography  from "@mui/material/Typography";
import  Box from "@mui/material/Box";

const WelcomeBox = () => {
    return (
        <Box mt={5}>
            <Typography variant="h4" color="primary.main">
                Welcome,
            </Typography>
            <Typography variant="h6">
                Find the weather of your city
            </Typography>
        </Box>
    );
}

export default WelcomeBox;