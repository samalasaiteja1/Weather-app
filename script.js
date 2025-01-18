const handleButtonClick = document.getElementById('getWeather');
const cityInput = document.getElementById('cityInput');
const weatherData = document.getElementById('weatherData');
const popularCitiesContainer = document.getElementById('popularCities');
const popularCities = [
    'Mumbai',
    'Warangal',
    'Nizamabad',
    'Khammam',
    'Karimnagar',
    'Mahabubnagar',
    'Ramagundam',
    'Nalgonda',
    'Adilabad',
    'Siddipet',
    'Miryalaguda',
    'Mancherial',
    'Jagtial',
    'Suryapet',
    'Zaheerabad',
    'Bhongir',
    'Kothagudem',
    'Wanaparthy',
    'Mahabubabad',
    'Vikarabad',
    'Narayanpet'
    'Bangalore',
    'Hyderabad',
    'Chennai',
    'Kolkata',
    'Pune',
    'Jaipur',
    'Ahmedabad',
    'Lucknow',
    'Indore',
    'Surat',
    'Kanpur',
    'Nagpur',
    'Patna',
    'Bhopal',
    'Vadodara',
    'Agra',
    'Nashik',
    'Rajkot',
    'Varanasi',
    'Meerut',
    'Faridabad',
    'Amritsar',
    'Allahabad',
    'Visakhapatnam',
    'Jodhpur',
    'Ranchi',
    'Coimbatore',
    'Chandigarh',
    'Guwahati',
    'Thiruvananthapuram',
    'Mysore',
    'Gwalior',
    'Vijayawada',
    'Madurai',
    'Kochi',
    'Noida',
    'Ghaziabad',
    'Dehradun',
    'Aurangabad',
    'Jalandhar',
    'Kozhikode',
    'Tiruchirappalli',
    'Thrissur',
    'Udaipur',
    'Shillong',
    'Puducherry',
    'Shimla',
    'Gangtok'
];


// Function to fetch weather data
const fetchWeather = (city) => {
    fetch(`https://api.weatherapi.com/v1/current.json?key=d3b3f42c5cc94d8b9b5152123220605&q=${city}&aqi=no`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const resultHTML = `
                <h2>${data.location.name.toUpperCase()}</h2>
                <p>Temperature: ${data.current.temp_c}°C</p>
                <p>Humidity: ${data.current.humidity}%</p>
                <p>Condition: ${data.current.condition.text}</p>
                <img src="${data.current.condition.icon}" alt="Weather Icon">
            `;
            weatherData.innerHTML = resultHTML;
        })
        .catch(error => {
            console.error(error);
            weatherData.innerHTML = 'Error fetching weather data';
        });
};

// Event listener for manual city input
handleButtonClick.addEventListener('click', () => {
    const city = cityInput.value.trim();
    if (city) {
        fetchWeather(city);
    } else {
        weatherData.innerHTML = 'Please enter a valid city';
    }
});

// Dynamically create buttons for popular cities
popularCities.forEach(city => {
    const cityButton = document.createElement('button');
    cityButton.textContent = city;
    cityButton.className = 'city-button';
    cityButton.addEventListener('click', () => fetchWeather(city));
    popularCitiesContainer.appendChild(cityButton);
});
