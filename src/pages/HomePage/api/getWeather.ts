import axios from 'src/lib/axios';
import { useQuery } from "react-query";
import { QueryConfig } from "src/lib/react-query";
import { WeatherResponse } from "../type";

export const getWeatherDetails = ({ location }: { location: string}): Promise<WeatherResponse> => axios.get(`weather?q=${location}`)

type UseWeatherOptions = {
  config?: QueryConfig<typeof getWeatherDetails>;
  location: string
}

export const useWeatherDetails = ({ config, location }: UseWeatherOptions) =>
  useQuery({
    queryKey: ['weather-detail', location],
    queryFn: () => getWeatherDetails({location}),
    ...config
  })