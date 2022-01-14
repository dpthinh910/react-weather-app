import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import Spin from 'src/components/Spinner';
import { DailyWeather as DailyWeatherChildProps } from '../type';

type DailyWeatherProps = {
  data: any;  
}

const DailyWeatherChild = React.lazy(() => import('./DailyWeatherChild'));

function DailyWeather({ data }: DailyWeatherProps) {
  return (
    <Box borderColor="gray.900" padding={8}>
        <Flex width="100%" height="30vh" gap={12} overflowX="auto" justify="space-between">
          {data.cod === '200' && 
            data.list.slice(1).map((daily: DailyWeatherChildProps) => (
              <DailyWeatherChild key={daily.dt} daily={daily} />
            ))
          }
          { data.cod !== '200' && <Spin />}
        </Flex>
      </Box>
  );
}

export default DailyWeather;