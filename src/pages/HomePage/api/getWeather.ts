import axios from 'src/lib/axios';
import { useQuery } from "react-query";
import { QueryConfig } from "src/lib/react-query";
import { WeatherResponse } from "../type";

export const getWeatherDetails = ({ location, units }: { location: string, units: string}): Promise<WeatherResponse> => axios.get(`weather?q=${location}&units=${units}`)

type UseWeatherOptions = {
  config?: QueryConfig<typeof getWeatherDetails>;
  location: string;
  units: string;
}

export const useWeatherDetails = ({ config, location, units }: UseWeatherOptions) =>
  useQuery({
    queryKey: ['weather-detail', {location, units}],
    queryFn: () => getWeatherDetails({location, units}),
    ...config
  })