
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton, InputAdornment } from "@mui/material";

const SearchBar = () => {
    return (
        <Box>
            <TextField
                type="text"
                id="outlined-basic"
                label="Location"
                variant="outlined"
                helperText="Please enter a city name"
                fullWidth
                required
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton aria-label="delete">
                                <SearchIcon />
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
            />
        </Box>
    );
};

export default SearchBar;
