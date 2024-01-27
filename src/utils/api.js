export default async (location) => {

    const API_KEY = import.meta.env.VITE_API_KEY;
    
    const options = {
        method: "GET",
        headers: { accept: "application/json", "Accept-Encoding": "gzip" },
    };

    fetch(
        `https://api.tomorrow.io/v4/locations/${location}?apikey=${API_KEY}`,
        options
    )
        .then((response) => response.json())
        .then((response) => console.log(response))
        .catch((err) => console.error(err));
};
