export const apiCall = async (location) => {
    const API_KEY = import.meta.env.VITE_API_KEY;

    const options = {
        method: "GET",
        headers: { accept: "application/json", "Accept-Encoding": "gzip" },
    };

    try {
        const response = await fetch(
            `https://api.tomorrow.io/v4/weather/realtime?location=${location}&apikey=${API_KEY}`,
            options
        );

        const responseData = await response.json();
        return responseData;
    } catch (error) {
        console.log(error);
    }
};
