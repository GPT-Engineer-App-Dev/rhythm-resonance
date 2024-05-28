import { useState } from "react";
import { Box, Button, Container, Flex, Heading, Input, Text, VStack } from "@chakra-ui/react";
import { FaPlus, FaSave } from "react-icons/fa";

const CreatePlaylist = () => {
  const [playlistName, setPlaylistName] = useState("");
  const [songs, setSongs] = useState([]);
  const [newSong, setNewSong] = useState("");

  const addSong = () => {
    if (newSong.trim() !== "") {
      setSongs([...songs, newSong]);
      setNewSong("");
    }
  };

  const savePlaylist = () => {
    // Logic to save the playlist
    console.log("Playlist saved:", { name: playlistName, songs });
  };

  return (
    <Container maxW="container.md" p={4}>
      <Heading as="h2" size="lg" mb={4}>Create New Playlist</Heading>
      <VStack spacing={4} align="stretch">
        <Input
          placeholder="Enter playlist name"
          value={playlistName}
          onChange={(e) => setPlaylistName(e.target.value)}
        />
        <Flex>
          <Input
            placeholder="Add a song"
            value={newSong}
            onChange={(e) => setNewSong(e.target.value)}
          />
          <Button onClick={addSong} leftIcon={<FaPlus />} ml={2}>
            Add Song
          </Button>
        </Flex>
        <Box>
          <Heading as="h3" size="md" mb={2}>Songs</Heading>
          {songs.length === 0 ? (
            <Text>No songs added yet.</Text>
          ) : (
            <VStack align="start">
              {songs.map((song, index) => (
                <Text key={index}>{song}</Text>
              ))}
            </VStack>
          )}
        </Box>
        <Button onClick={savePlaylist} colorScheme="blue" leftIcon={<FaSave />}>
          Save Playlist
        </Button>
      </VStack>
    </Container>
  );
};

export default CreatePlaylist;