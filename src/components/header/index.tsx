import { Box, Heading, Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

import UnitSwitch from './RadioCard';

function SearchElement() {
  return (
    <SearchIcon color="gray.400" />
  );
} 

function Header() {
  return (
    <Box display="flex" flexDir="row" justifyContent="space-between" alignItems="baseline" width="100%" paddingX={8}>
      <Heading size="lg">Weather Forecast</Heading>
      <Box paddingTop={4}>
        <InputGroup>
          <Input variant="flushed" type="search" placeholder="Enter a city" />
          <InputRightElement pointerEvents="none"><SearchElement /></InputRightElement>
        </InputGroup>
      </Box>
      <UnitSwitch/>
    </Box>
  )
}

export default Header;