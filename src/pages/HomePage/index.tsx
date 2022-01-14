import React from "react";
import { Box, Divider } from "@chakra-ui/react";
import Spin from "src/components/Spinner";
import { useWeatherDetails } from "./api/getWeather";
import { useDailyWeather } from "./api/getDailyWeather";

const CurrentWeather = React.lazy(() => import('./components/CurrentWeather'));
const DailyWeather = React.lazy(() => import('./components/DailyWeather'));

// eslint-disable-next-line import/prefer-default-export
export function HomePage() {
  const [location, setLocation] = React.useState<string>('london,uk');
  const [units, setUnits] = React.useState<string>('imperial');
  const {data, isLoading} = useWeatherDetails({location, units});
  const queryDailyWeather = useDailyWeather({location, units});

  if (isLoading || queryDailyWeather.isLoading) {
    return <Spin />
  }

  if (!data || !queryDailyWeather.data) return null;

  return (
    <Box>
      <CurrentWeather data={data} units={units} />
      <Divider variant="solid" padding={8} />
      <DailyWeather data={queryDailyWeather.data} />
    </Box>
  );
}