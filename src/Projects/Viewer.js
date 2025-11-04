import React from "react";
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
import { FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";

const Viewer = () => {
  return (
    <Container minW="400px" maxW="container.xl">
      <Box borderWidth="1px" p={{ base: "1em", md: "1.5em", lg: "2em" }} mt="-1">
        <HStack alignItems="center" justify="space-between">
          <HStack spacing={2} alignItems="center">
            <Text color="#FF9E0D" as="b" fontSize={{ base: "lg", md: "2xl", lg: "3xl" }}>
              Photo Slider
            </Text>

            {/* --- Highlighted Stack Tags --- */}
            <Badge variant="subtle" colorScheme="purple" fontSize={{ base: "0.6rem", md: "0.75rem" }}>
              TypeScript
            </Badge>
            <Badge variant="subtle" colorScheme="cyan" fontSize={{ base: "0.6rem", md: "0.75rem" }}>
              React
            </Badge>
            <Badge variant="subtle" colorScheme="pink" fontSize={{ base: "0.6rem", md: "0.75rem" }}>
              Sass
            </Badge>
            <Badge variant="subtle" colorScheme="orange" fontSize={{ base: "0.6rem", md: "0.75rem" }}>
              Vercel
            </Badge>
          </HStack>

          <HStack spacing={3}>
            {/* --- External Link --- */}
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link
                href="https://gallery-pan.vercel.app/"
                isExternal
                rel="noopener noreferrer"
                aria-label="Open live Photo Slider site"
              >
                <FiExternalLink style={{ width: 25, height: 25, display: "inline-block" }} />
                <VisuallyHidden>Live Demo</VisuallyHidden>
              </Link>
            </motion.div>

            {/* --- GitHub Link --- */}
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link
                href="https://github.com/eudeamonism/GalleryPan"
                isExternal
                rel="noopener noreferrer"
                aria-label="Open GitHub repository for Photo Slider"
              >
                <AiOutlineGithub style={{ width: 25, height: 25, display: "inline-block" }} />
                <VisuallyHidden>GitHub</VisuallyHidden>
              </Link>
            </motion.div>
          </HStack>
        </HStack>

        <Text color="#1B4F8C" fontSize={{ base: "sm", md: "md", lg: "lg" }} mt="2">
          I built and deployed a responsive, animated photo slider using TypeScript, React, and
          Sass. The application leverages React’s component structure and CSS animations to create
          smooth transitions and adaptive layouts for any screen size.
        </Text>

        <UnorderedList color="#1B4F8C" fontSize={{ base: "sm", md: "md", lg: "lg" }} mt="4" spacing={1.5}>
          <ListItem>
            Implemented <b>TypeScript</b> for strong type safety and reliable state management.
          </ListItem>
          <ListItem>
            Built with <b>React</b> hooks and props to manage slider state and transitions.
          </ListItem>
          <ListItem>
            Styled with <b>Sass</b> for modular, nested styling and smooth hover animations.
          </ListItem>
          <ListItem>
            Deployed on <b>Vercel</b> for seamless CI/CD and global static hosting.
          </ListItem>
        </UnorderedList>
      </Box>
    </Container>
  );
};

export default Viewer;
