import React from "react";
import { Box } from "@chakra-ui/react";
import Header from "../header";

type MainLayoutProps = {
  children: React.ReactNode
}

// eslint-disable-next-line import/prefer-default-export
export function MainLayout({children}: MainLayoutProps) {
  return (
    <Box bgImage={"url('src/assets/pictures/background1.jpeg')"} bgPos="center" bgRepeat="no-repeat" bgSize="cover" height="100vh" color="white" fontSize={24} fontFamily='mono' width="100%" overflow="hidden">
      <Header />
      <Box height="100%">
        {children}
      </Box>
    </Box>
  );
}