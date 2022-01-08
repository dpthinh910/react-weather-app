import { Button, Center, Link, Stack, Text } from "@chakra-ui/react";
import { Link as ReactLink } from 'react-router-dom';
import MainLayout from "../../components/Layout";

// eslint-disable-next-line import/prefer-default-export
export function NotFoundPage() {
  return (
    <MainLayout>
      <Center height="100%">
        <Stack align="center" color="blue.600" fontWeight="semibold" fontFamily="monospace">
          <Text>404 NOT FOUND</Text>
          <Text>Cannot find this page</Text>
          <Link as={ReactLink} to='/'><Button variant="solid" colorScheme="linkedin">Back Home</Button></Link>
          </Stack>
      </Center>
    </MainLayout>
  );
};