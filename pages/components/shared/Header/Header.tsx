import React from "react";
import { Flex, Box, Spacer, Heading, Button, Avatar } from "@chakra-ui/react";

const Header = () => {
  return (
    <Flex p="2" alignItems={"center"}>
      <Box p="2">
        <Heading colorScheme={"White"} size="md">
          <Avatar src="/images/logo.jpg" alt="Picture of the logo" />
        </Heading>
      </Box>
      <Spacer />
      <Box>
        <Button colorScheme="pink">Log in</Button>
      </Box>
    </Flex>
  );
};

export default Header;
