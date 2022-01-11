import React from "react";
import { Box, Divider, Flex, Image, Text } from "@chakra-ui/react";
import { formatTime, getDate, getDay, getNow } from "src/utils/formatDate";
import Spin from "src/components/Spinner";
import { useWeatherDetails } from "./api/getWeather";
import { useDailyWeather } from "./api/getDailyWeather";

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
      <Flex alignItems="flex-end" justifyContent="space-evenly" gap={6}>
        <Flex flexDir="column" alignItems="center" gap={2}>
          <Image src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`} />
          <Text fontSize='xl'>Weather: {data.weather[0].main}</Text>
          <Text color="gray.200" fontSize='sm'>Sunrise: {formatTime(data.sys.sunrise)}</Text>
          <Text color="gray.200" fontSize="sm">Sunset: {formatTime(data.sys.sunset)}</Text>
        </Flex>
        <Box gap={2} display="flex" flexDir="column">
          <Text fontSize="2xl" fontWeight="medium">{getNow(data.dt)}</Text>
          <Text fontSize="5xl" fontWeight="extrabold">{data.name}</Text>
          <Text fontSize="4xl" color="blue.600" fontWeight="extrabold">{data.main.temp}{units === 'imperial' ? `°F` : `°C`}</Text>
          <Text fontSize="xl">Feels like {data.main.feels_like}{units === 'imperial' ? `°F` : `°C`}</Text>
          <Text color="gray.200" fontSize="sm">Description: {data.weather[0].description}</Text>
        </Box>
        <Box>
          <Text fontSize="xl" fontWeight="hairline" marginBottom={4}>MORE DETAILS:</Text>
          <Flex fontSize="sm" fontWeight="bold" gap={2} >Wind speed: <Text color="gray.200">{data.wind.speed} m/s</Text></Flex>
          <Flex fontSize="sm" fontWeight="bold" gap={2} >Humidity: <Text color="gray.200">{data.main.humidity}%</Text></Flex>
          <Flex fontSize="sm" fontWeight="bold" gap={2} >Pressure: <Text color="gray.200">{data.main.pressure} hPa</Text></Flex>
          <Flex fontSize="sm" fontWeight="bold" gap={2} >Visibility: <Text color="gray.200">{data.visibility / 100} km</Text></Flex>
          <Flex fontSize="sm" fontWeight="bold" gap={2} >Min Temp: <Text color="gray.200">{data.main.temp_min}{units === 'imperial' ? `°F` : `°C`}</Text></Flex>
          <Flex fontSize="sm" fontWeight="bold" gap={2} >Max Temp: <Text color="gray.200">{data.main.temp_max}{units === 'imperial' ? `°F` : `°C`}</Text></Flex>
        </Box>
      </Flex>
      <Divider variant="solid" padding={8} />
      <Box borderColor="gray.900" padding={8}>
        <Flex width="100%" height="30vh" gap={12} overflowX="auto" justify="space-between">
          {queryDailyWeather.data.cod === '200' && 
            queryDailyWeather.data.list.slice(1).map((daily) => (
              <Flex flexDir="column" key={daily.dt} alignItems="center">
                <Text fontSize='xl' fontWeight="bold">{getDay(daily.dt)}</Text>
                <Text fontSize="md" color="gray.100">{getDate(daily.dt)}</Text>
                <Box paddingTop={4}>
                  <Text fontSize="sm">min: {daily.temp.min}</Text>
                  <Text fontSize="sm">max: {daily.temp.max}</Text>
                </Box>
                <Flex flexDir="column" alignItems="center" paddingTop={4}>
                  <Image src={`https://openweathermap.org/img/wn/${daily.weather[0].icon}@2x.png`} />
                  <Text fontWeight="bold" fontSize="xl">{daily.weather[0].main}</Text>
                </Flex>
              </Flex>
            ))
          }
          { queryDailyWeather.data.cod !== '200' && <Spin />}
        </Flex>
      </Box>
    </Box>
  );
}