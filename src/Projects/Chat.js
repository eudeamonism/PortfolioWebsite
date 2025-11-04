import {
  Text,
  Link,
  HStack,
  UnorderedList,
  ListItem,
  Box,
  Container,
  Badge,
  VisuallyHidden,
} from "@chakra-ui/react";
import { AiOutlineGithub } from "react-icons/ai";
import { motion } from "framer-motion";

const Chat = () => {
  return (
    <Container minW="400px" maxW="container.xl">
      <Box borderWidth="1px" p={{ base: "1em", md: "1.5em", lg: "2em" }} mt="-1">
        <HStack alignItems="center" justify="space-between">
          <HStack spacing={2} alignItems="center">
            <Text color="#FF9E0D" as="b" fontSize={{ base: "lg", md: "2xl", lg: "3xl" }}>
              OpenAI Chat App
            </Text>

            {/* --- Highlighted Stack Tags --- */}
            <Badge variant="subtle" colorScheme="purple" fontSize={{ base: "0.6rem", md: "0.75rem" }}>
              Vite
            </Badge>
            <Badge variant="subtle" colorScheme="cyan" fontSize={{ base: "0.6rem", md: "0.75rem" }}>
              React
            </Badge>
            <Badge variant="subtle" colorScheme="orange" fontSize={{ base: "0.6rem", md: "0.75rem" }}>
              OpenAI API
            </Badge>
            <Badge variant="subtle" colorScheme="pink" fontSize={{ base: "0.6rem", md: "0.75rem" }}>
              ChatEngine
            </Badge>
            <Badge variant="subtle" colorScheme="green" fontSize={{ base: "0.6rem", md: "0.75rem" }}>
              Redux Toolkit
            </Badge>
            <Badge variant="subtle" colorScheme="yellow" fontSize={{ base: "0.6rem", md: "0.75rem" }}>
              Sass
            </Badge>
          </HStack>

          <motion.div whileHover={{ scale: 1.05 }}>
            <Link
              href="https://github.com/eudeamonism/chatBotAI"
              isExternal
              rel="noopener noreferrer"
              aria-label="Open GitHub repository for OpenAI Chat App"
            >
              <AiOutlineGithub style={{ width: 25, height: 25, display: "inline-block" }} />
              <VisuallyHidden>GitHub</VisuallyHidden>
            </Link>
          </motion.div>
        </HStack>

        <Text color="#1B4F8C" fontSize={{ base: "sm", md: "md", lg: "lg" }} mt="2">
          Built a chat application that leverages the OpenAI API to answer user questions. Created with
          Vite + React, the app includes authentication, role-based prompts, and message filtering for
          safer outputs.
        </Text>

        <UnorderedList color="#1B4F8C" fontSize={{ base: "sm", md: "md", lg: "lg" }} mt="4" spacing={1.5}>
          <ListItem>
            <b>ChatEngine</b> for real-time rooms, message threads, and presence.
          </ListItem>
          <ListItem>
            <b>OpenAI API</b> integration for text generation with guardrails and role presets.
          </ListItem>
            <ListItem>
              <b>Redux Toolkit</b> for session/state management; typed actions and slices.
            </ListItem>
          <ListItem>
            <b>Sass</b> modules for modular styling and theme customization.
          </ListItem>
          <ListItem>
            <b>GitHub</b> for version control and issue tracking.
          </ListItem>
        </UnorderedList>
      </Box>
    </Container>
  );
};

export default Chat;
