import React from "react";
import { RepeatIcon } from "@chakra-ui/icons";
import { Button, Flex } from "@chakra-ui/react";
import { ErrorBoundary } from "react-error-boundary";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import Spin from "./components/Spinner";

type AppProps = {
  children: React.ReactNode;
}

function ErrorFallback() {
  return (
    <Flex h="100vh" width="100%" justifyContent="center" align="center" >
      <Button leftIcon={<RepeatIcon color="gray.300" />} colorScheme="red" size="lg">Refresh Page</Button>
    </Flex>
  );
}

function AppProvider({ children }: AppProps): JSX.Element {
  return (
    <React.Suspense fallback={<Spin />}>
      <ErrorBoundary fallback={<ErrorFallback />}>
        <BrowserRouter>
          {children}
        </BrowserRouter>
      </ErrorBoundary>
    </React.Suspense>
  )
}

export default function App() {
  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  )
}