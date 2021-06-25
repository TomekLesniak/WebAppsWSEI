export class App {
    apiKey = "f3740c6c0bad65d1e69bcdaa03952589";
    weathers: Weather[];

    constructor() {
        document.body.querySelector('#weatherButton').
                    addEventListener('click', () => this.displayWeather());
    }

    async displayWeather() {
        const cityInput : HTMLInputElement = document.querySelector('#cityInput');
        const cityName = cityInput.value;
        const weather = await this.getCityInfo(cityName);
        this.createWeatherCard(weather);
    }

    createWeatherCard(weatherInfo: any){
        console.log(weatherInfo);
        const weatherContainer = document.querySelector('.weather-container');
        const weatherCard = document.createElement('div');
        const weatherHeader = document.createElement('h4');
        weatherHeader.textContent = weatherInfo.name;
        weatherCard.appendChild(weatherHeader);
        
        const temp = document.createElement('span');
        temp.innerText = `Fahrenheits: ${weatherInfo.main.temp}`; 
        weatherCard.appendChild(temp);

        const country = document.createElement('span');
        country.innerText = `Country: ${weatherInfo.sys.country}`; 
        weatherCard.appendChild(country);

        const description = document.createElement('span');
        description.innerText = `Description: ${weatherInfo.weather[0].description}`; 
        weatherCard.appendChild(description);

        weatherCard.className = 'weather-card';
        weatherContainer.append(weatherCard);
    }

    async getCityInfo(city: string) {
         const weather = await this.getWeather(city);
         this.saveData(weather);
         return weather;
    }

    async getWeather(city: string): Promise<any>{
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKey}`;
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        return data;
    }

    saveData(data: any){
        localStorage.setItem('weatherData', JSON.stringify(data));
    }

    getData() {
        const data = localStorage.getItem('weatherData');
        if(data){
            return JSON.parse(data);
        } else {
            return {};
        }
    }
}


class Weather {
    city: string;
    temp: string;
    description: string;
    country: string;
}