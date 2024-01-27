import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: "#38419D",
            dark: "#0F2167", 
        },
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                html: {
                    fontSize: "16px",
                    '@media (max-width: 480px)': {
                        fontSize: "12px"
                    }
                },
                body: {
                    backgroundImage: "linear-gradient(to top, #F3F8FF 0%, #DEECFF 100%)",
                },
            }
        },
        MuiIconButton: {
            defaultProps: {
                sx: {
                    bgcolor: "primary.main",
                    color: "#fff",

                    '&:hover': {
                        bgcolor: "primary.dark",
                    }
                }
            }
        },
    }
});

export default theme;