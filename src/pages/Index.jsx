import { Box, Container, Flex, Heading, HStack, IconButton, Input, Text, VStack, Button } from "@chakra-ui/react";
import { FaHome, FaSearch, FaMusic, FaUser, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Flex as="nav" bg="brand.800" color="white" p={4} justifyContent="space-between" alignItems="center">
        <HStack spacing={8}>
          <IconButton aria-label="Home" icon={<FaHome />} variant="ghost" color="white" />
          <Text>Home</Text>
          <Text>Browse</Text>
          <Text>Library</Text>
          <Text>Profile</Text>
        </HStack>
        <Input placeholder="Search" maxW="300px" bg="white" color="black" />
      </Flex>

      {/* Main Section */}
      <Box as="main" p={4}>
        <Heading as="h1" size="xl" mb={6}>Featured Playlist</Heading>
        <Box bg="gray.200" p={6} borderRadius="md">
          <Text fontSize="lg">Your featured playlist or album will appear here.</Text>
        </Box>
        <Link to="/create-playlist">
          <Button leftIcon={<FaPlus />} colorScheme="teal" mt={4}>
            Create Playlist
          </Button>
        </Link>
      </Box>

      {/* Footer */}
      <Flex as="footer" bg="brand.900" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Text>About</Text>
        <Text>Contact</Text>
        <Text>Terms of Service</Text>
      </Flex>
    </Container>
  );
};

export default Index;