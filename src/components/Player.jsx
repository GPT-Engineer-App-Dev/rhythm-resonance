import { Box, Flex, IconButton, Slider, SliderTrack, SliderFilledTrack, SliderThumb, Text } from "@chakra-ui/react";
import { FaPlay, FaPause, FaForward, FaBackward, FaVolumeUp } from "react-icons/fa";
import { useState } from "react";

const Player = ({ song }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(50);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <Box mt={4} p={4} bg="gray.100" borderRadius="md">
      <Text fontSize="lg" mb={2}>Now Playing: {song}</Text>
      <Flex align="center" justify="space-between">
        <Flex>
          <IconButton
            aria-label="Previous"
            icon={<FaBackward />}
            mr={2}
          />
          <IconButton
            aria-label={isPlaying ? "Pause" : "Play"}
            icon={isPlaying ? <FaPause /> : <FaPlay />}
            onClick={togglePlayPause}
            mr={2}
          />
          <IconButton
            aria-label="Next"
            icon={<FaForward />}
          />
        </Flex>
        <Flex align="center">
          <FaVolumeUp />
          <Slider
            aria-label="Volume"
            value={volume}
            onChange={(val) => setVolume(val)}
            maxW="100px"
            ml={2}
          >
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Player;