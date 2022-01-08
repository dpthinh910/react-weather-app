import { Box } from "@chakra-ui/react";
import Header from "../header";

function MainLayout() {
  return (
    <Box bgImage={"url('src/assets/pictures/background1.jpeg')"} bgPos="center" bgRepeat="no-repeat" bgSize="cover" height="100vh" color="white" fontSize={24} fontFamily='mono' width="100%">
      <Header />
    </Box>
  );
}

export default MainLayout;