const apikey = "Your API key"

async function getWeather() {
    try {
        const city = document.getElementById("weather").value
        // const today = new Date();
        // const year = today.getFullYear();       // 4-digit year
        // const month = today.getMonth() + 1;    // Month (0-11, so add 1)
        // const date = today.getDate();          // Day of the month (1-31)

        // const dateSend = `${year}-${month}-${date}`;

        const apiurl = `http://api.weatherapi.com/v1/forecast.json?key=${apikey}&q=${city}&days=1&aqi=no&alerts=no`

        const response = await fetch(apiurl)
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }
        const data = await response.json()
        console.log(data)
        const { current, forecast, location } = data;
        const temp = current.temp_c;
        console.log(temp)
        document.getElementById("weatherInfo").innerHTML = `
            <h3>${city}</h3>
            <p>Temperature: ${temp}°C</p>
        `
    } catch (error) {
        console.error('Error fetching weather data:', error)
    }
}