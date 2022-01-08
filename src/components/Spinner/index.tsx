import { Flex, Spinner } from "@chakra-ui/react";

function Spin() {
  return (
    <Flex h="100vh" width="100%" align="center" justifyContent="center">
      <Spinner
        thickness="3px"
        speed="0.65s"
        emptyColor='gray.200'
        color='blue.500'
        size='xl'
      />
    </Flex>
  )
}

export default Spin;