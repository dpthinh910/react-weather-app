import axios from "src/lib/axios";
import { QueryConfig } from "src/lib/react-query";
import { useQuery } from "react-query";
import { DailyWeatherResponse } from "../type";

export const getDailyWeatherResponse = ({ location, units }: { location: string, units: string}): Promise<DailyWeatherResponse> => axios.get(`forecast/daily?q=${location}&units=${units}`)

type UseWeatherOptions = {
  config?: QueryConfig<typeof getDailyWeatherResponse>;
  location: string;
  units: string;
}

export const useDailyWeather = ({ config, location, units }: UseWeatherOptions) =>
  useQuery({
    queryKey: ['weather-daily', {location, units}],
    queryFn: () => getDailyWeatherResponse({location, units}),
    ...config
  })