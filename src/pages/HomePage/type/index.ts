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
  dt: string | number;
  sys: Sys;
  timezone: number;
  id: number,
  name: string,
  cod: number
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
  "sunrise": number | string,
  "sunset": number | string
}