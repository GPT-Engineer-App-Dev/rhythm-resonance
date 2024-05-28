import { useState } from "react";
import { Box, Button, Container, Flex, Heading, Input, Text, VStack, HStack, IconButton } from "@chakra-ui/react";
import { FaPlus, FaSave, FaPlay } from "react-icons/fa";
import Player from "../components/Player.jsx";

const CreatePlaylist = () => {
  const [playlistName, setPlaylistName] = useState("");
  const [songs, setSongs] = useState([]);
  const [newSong, setNewSong] = useState("");
  const [currentSong, setCurrentSong] = useState(null);

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

  const playSong = (song) => {
    setCurrentSong(song);
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
                <HStack key={index} spacing={4}>
                  <Text>{song}</Text>
                  <IconButton
                    aria-label="Play"
                    icon={<FaPlay />}
                    onClick={() => playSong(song)}
                  />
                </HStack>
              ))}
            </VStack>
          )}
        </Box>
        <Button onClick={savePlaylist} colorScheme="blue" leftIcon={<FaSave />}>
          Save Playlist
        </Button>
      </VStack>
      {currentSong && (
        <Box mt={8} p={4} bg="gray.100" borderRadius="md">
          <Text fontSize="lg">Now Playing: {currentSong}</Text>
          <Player song={currentSong} />
        </Box>
      )}
    </Container>
  );
};

export default CreatePlaylist;