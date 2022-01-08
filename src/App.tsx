import React from "react";
import { RepeatIcon } from "@chakra-ui/icons";
import { Button, Flex } from "@chakra-ui/react";
import { ErrorBoundary } from "react-error-boundary";
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
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </ErrorBoundary>
    </React.Suspense>
  )
}

export default App;