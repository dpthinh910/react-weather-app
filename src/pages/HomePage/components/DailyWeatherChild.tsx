import { Box, Flex, Text, Image } from '@chakra-ui/react';
import { getDate, getDay } from 'src/utils/formatDate';
import { DailyWeather } from '../type';

type DailyWeatherChildProps = {
  daily: DailyWeather;
}

function DailyWeatherChild({ daily }: DailyWeatherChildProps) {
  return (
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
  );
}

export default DailyWeatherChild;