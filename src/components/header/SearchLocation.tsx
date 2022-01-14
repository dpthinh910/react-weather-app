import React from 'react';
import { Box, InputGroup, Input, InputRightElement } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import useWeatherStore from 'src/store/weather';

function SearchLocation() {
  const { location, setLocation } = useWeatherStore()
  const [search, setSearch] = React.useState<string>(location);

  const handleChange = (event: any) => setSearch(event.target.value);

  const submitForm = (event: any) => {
    event.preventDefault();
    event.stopPropagation();
    setLocation(search);
  }

  return (
    <Box paddingTop={4}>
      <form onSubmit={submitForm}>
        <InputGroup>
          <Input variant="flushed" type="search" placeholder="Enter a city" onChange={handleChange} value={search} />
          <InputRightElement pointerEvents="none"><SearchIcon color="gray.200" /></InputRightElement>
        </InputGroup>
      </form>
      </Box>
  );
}

export default SearchLocation;