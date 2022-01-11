import React from "react";
import { RepeatIcon } from "@chakra-ui/icons";
import { Button, ChakraProvider, Flex } from "@chakra-ui/react";
import { ErrorBoundary } from "react-error-boundary";
import { QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';
import { queryClient } from "src/lib/react-query";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import Spin from "./components/Spinner";

function ErrorFallback() {
  return (
    <Flex h="100vh" width="100%" justifyContent="center" align="center" >
      <Button  onClick={() => window.location.assign(window.location.origin)} leftIcon={<RepeatIcon />} colorScheme="red" size="lg">Refresh Page</Button>
    </Flex>
  );
}

function App(): JSX.Element {
  return (
    <React.Suspense fallback={<Spin />}>
      <ErrorBoundary fallback={<ErrorFallback />}>
        <QueryClientProvider client={queryClient}>
          {import.meta.env.MODE !== 'test' && <ReactQueryDevtools />}
          <ChakraProvider>
            <BrowserRouter>
              <AppRoutes />
            </BrowserRouter>
          </ChakraProvider>
        </QueryClientProvider>
      </ErrorBoundary>
    </React.Suspense>
  )
}

export default App;