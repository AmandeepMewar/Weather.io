import { Typography } from "@mui/material";

const Header = () => {

    return (
        <Typography variant="h3" fontWeight={900} color="primary.main" textTransform={"uppercase"} align="center" mb={5}>
            Weather.io
        </Typography>
    );
}

export default Header;