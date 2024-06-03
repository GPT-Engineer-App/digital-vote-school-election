import React, { useState } from "react";
import { Container, VStack, Text, Heading, Button, Radio, RadioGroup, Stack, Box, useToast } from "@chakra-ui/react";
import { FaVoteYea } from "react-icons/fa";

const Index = () => {
  const [captain, setCaptain] = useState("");
  const [viceCaptain, setViceCaptain] = useState("");
  const [prefect, setPrefect] = useState("");
  const [assistantPrefect, setAssistantPrefect] = useState("");
  const toast = useToast();

  const handleSubmit = () => {
    if (!captain || !viceCaptain || !prefect || !assistantPrefect) {
      toast({
        title: "Incomplete Vote",
        description: "Please vote for all positions.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    // Here you would handle the vote submission, e.g., save to local storage or send to a server
    toast({
      title: "Vote Submitted",
      description: "Your vote has been successfully submitted.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });

    // Reset the form
    setCaptain("");
    setViceCaptain("");
    setPrefect("");
    setAssistantPrefect("");
  };

  return (
    <Container centerContent maxW="container.md" py={8}>
      <VStack spacing={8} width="100%">
        <Heading>School Election Voting</Heading>

        <Box width="100%">
          <Text fontSize="xl" mb={4}>
            Vote for House Captain
          </Text>
          <RadioGroup onChange={setCaptain} value={captain}>
            <Stack direction="column">
              <Radio value="candidate1">Candidate 1</Radio>
              <Radio value="candidate2">Candidate 2</Radio>
              <Radio value="candidate3">Candidate 3</Radio>
            </Stack>
          </RadioGroup>
        </Box>

        <Box width="100%">
          <Text fontSize="xl" mb={4}>
            Vote for Vice Captain
          </Text>
          <RadioGroup onChange={setViceCaptain} value={viceCaptain}>
            <Stack direction="column">
              <Radio value="candidate1">Candidate 1</Radio>
              <Radio value="candidate2">Candidate 2</Radio>
              <Radio value="candidate3">Candidate 3</Radio>
            </Stack>
          </RadioGroup>
        </Box>

        <Box width="100%">
          <Text fontSize="xl" mb={4}>
            Vote for Prefect
          </Text>
          <RadioGroup onChange={setPrefect} value={prefect}>
            <Stack direction="column">
              <Radio value="candidate1">Candidate 1</Radio>
              <Radio value="candidate2">Candidate 2</Radio>
              <Radio value="candidate3">Candidate 3</Radio>
            </Stack>
          </RadioGroup>
        </Box>

        <Box width="100%">
          <Text fontSize="xl" mb={4}>
            Vote for Assistant Prefect
          </Text>
          <RadioGroup onChange={setAssistantPrefect} value={assistantPrefect}>
            <Stack direction="column">
              <Radio value="candidate1">Candidate 1</Radio>
              <Radio value="candidate2">Candidate 2</Radio>
              <Radio value="candidate3">Candidate 3</Radio>
            </Stack>
          </RadioGroup>
        </Box>

        <Button leftIcon={<FaVoteYea />} colorScheme="teal" size="lg" onClick={handleSubmit}>
          Submit Vote
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;
