import React from "react";
import { Box, Text } from "@chakra-ui/react";
import Spin from "../../components/Spinner";
import { useWeatherDetails } from "./api/getWeather";

// eslint-disable-next-line import/prefer-default-export
export function HomePage() {
  const [location, setLocation] = React.useState<string>('london,uk');
  const {data, isLoading} = useWeatherDetails({location});

  console.log(data);

  if (isLoading) {
    return <Spin />
  }

  if (!data) return null;

  return (
    <Box>
      <Text>
        {data?.base}
      </Text>
    </Box>
  );
}