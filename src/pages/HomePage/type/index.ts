export type WeatherResponse = {
  coord: {
    lon: number;
    lat: number;
  },
  weather: Weather[];
  base: string;
  main: WeatherMain;
  visibility: number;
  wind: Wind;
  clouds: {
    all: number;
  };
  dt: string;
  sys: Sys;
  timezone: number;
  id: number,
  name: string,
  cod: number
}

export type DailyWeatherResponse = {
  cod: string;
  city: City;
  message: number;
  cnt: number;
  list: DailyWeather[];
}

type City = {
  "id": number;
  "name": string;
  "coord":{
  "lon": number;
  "lat": number;
  }
  "country": string;
  "population": number;
  "timezone": number;
}

type DailyWeather = {
  "dt": number
  "sunrise":number
  "sunset":number
  "temp":{
  "day":number
  "min":number
  "max":number
  "night":number
  "eve":number
  "morn":number
  }
  "feels_like":{
  "day":number
  "night":number
  "eve":number
  "morn":number
  }
  "pressure":number
  "humidity":number
  "weather": Weather[]
  "speed":number
  "deg":number
  "gust":number
  "clouds":number
  "pop":number
}

type Weather = {
  id: number;
  main: string;
  description: string;
  icon: string;
}

type WeatherMain = {
  "temp": number,
  "feels_like": number,
  "temp_min": number,
  "temp_max": number,
  "pressure": number,
  "humidity": number
}

type Wind = {
  speed: number;
  deg: number;
}

type Sys = {
  "type": number,
  "id": number,
  "country": string,
  "sunrise": number,
  "sunset": number
}