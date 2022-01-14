import { Box, Heading } from '@chakra-ui/react';

import SearchLocation from './SearchLocation';
import UnitSwitch from './RadioCard';

function Header() {
  return (
    <Box display="flex" flexDir="row" justifyContent="space-between" alignItems="baseline" width="100%" paddingX={8}>
      <Heading size="lg">Weather Forecast</Heading>
      <SearchLocation />
      <UnitSwitch/>
    </Box>
  )
}

export default Header;