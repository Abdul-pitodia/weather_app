const apikey = 'vLQEzDNaawVzKpECkX6nbJgTbOAGaHxe';

// Get weather information

const getWeather = async(id) => {
    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';

    const query = `${id}?apikey=${apikey}`;

    const response = await fetch(base + query);
    const data = await response.json();

    // console.log(data[0]);
    return data[0];
}


// Get City Location key
const getCity = async (city) => {

    const baseUrl = 'http://dataservice.accuweather.com/locations/v1/cities/search';

    const query = `?apikey=${apikey}&q=${city}`;

    const response = await fetch(baseUrl + query);
    const data = await response.json();

    // console.log(data[0]);
    return data[0];
}


// getCity('mumbai')
//     .then(data => {
//        return getWeather(data.Key);
//     })
//     .then((data) => console.log(data))
//     .catch(err => console.log(err));

