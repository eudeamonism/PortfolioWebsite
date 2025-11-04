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

const Event = () => {
  return (
    <Container minW="400px" maxW="container.xl">
      {/* --- Neighbors App --- */}
      <Box borderWidth="1px" p={{ base: "1em", md: "1.5em", lg: "2em" }} mt="-1">
        <HStack alignItems="center" justify="space-between">
          <HStack spacing={2} alignItems="center">
            <Text color="#FF9E0D" as="b" fontSize={{ base: "lg", md: "2xl", lg: "3xl" }}>
              Neighbors App
            </Text>

            {/* --- Stack Tags --- */}
            <Badge variant="subtle" colorScheme="purple" fontSize={{ base: "0.6rem", md: "0.75rem" }}>
              MERN Stack
            </Badge>
            <Badge variant="subtle" colorScheme="cyan" fontSize={{ base: "0.6rem", md: "0.75rem" }}>
              Redux
            </Badge>
            <Badge variant="subtle" colorScheme="orange" fontSize={{ base: "0.6rem", md: "0.75rem" }}>
              Chakra UI
            </Badge>
            <Badge variant="subtle" colorScheme="pink" fontSize={{ base: "0.6rem", md: "0.75rem" }}>
              Cloudinary
            </Badge>
          </HStack>

          {/* --- GitHub Repos --- */}
          <HStack spacing={3}>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link
                href="https://github.com/eudeamonism/neighborsWebsite"
                isExternal
                rel="noopener noreferrer"
                aria-label="Open Neighbors Website repository"
              >
                <AiOutlineGithub style={{ width: 25, height: 25, display: "inline-block" }} />
                <VisuallyHidden>GitHub Website</VisuallyHidden>
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }}>
              <Link
                href="https://github.com/eudeamonism/neighborsAPI"
                isExternal
                rel="noopener noreferrer"
                aria-label="Open Neighbors API repository"
              >
                <AiOutlineGithub style={{ width: 25, height: 25, display: "inline-block" }} />
                <VisuallyHidden>GitHub API</VisuallyHidden>
              </Link>
            </motion.div>
          </HStack>
        </HStack>

        {/* --- Description --- */}
        <Text color="#1B4F8C" fontSize={{ base: "sm", md: "md", lg: "lg" }} mt="2">
          Neighbors is a community engagement platform enabling residents to report local issues and
          share neighborhood updates. It uses a MERN stack with Redux for state management and
          Chakra UI for accessibility and consistency. The platform includes Google CAPTCHA, OTP
          resets, and secure mail transfer via SMTP, ensuring a safe and responsive user experience.
        </Text>

        {/* --- Highlights --- */}
        <UnorderedList color="#1B4F8C" fontSize={{ base: "sm", md: "md", lg: "lg" }} mt="4" spacing={1.5}>
          <ListItem>Global state management via Redux Toolkit</ListItem>
          <ListItem>REST API integration for CRUD operations</ListItem>
          <ListItem>Cloudinary API for image uploads and deletions</ListItem>
          <ListItem>Google CAPTCHA and OTP password reset</ListItem>
          <ListItem>SMTP mail service for secure notifications</ListItem>
          <ListItem>Responsive UI using Chakra UI and Figma prototypes</ListItem>
          <ListItem>Authentication middleware and role-based routing</ListItem>
          <ListItem>Version control and CI with Git and GitHub</ListItem>
        </UnorderedList>
      </Box>

      {/* --- Favorite Place App --- */}
      <Box borderWidth="1px" p={{ base: "1em", md: "1.5em", lg: "2em" }} mt="4">
        <HStack alignItems="center" justify="space-between">
          <HStack spacing={2} alignItems="center">
            <Text color="#FF9E0D" as="b" fontSize={{ base: "lg", md: "2xl", lg: "3xl" }}>
              Favorite Place App
            </Text>

            {/* --- Stack Tags --- */}
            <Badge variant="subtle" colorScheme="purple" fontSize={{ base: "0.6rem", md: "0.75rem" }}>
              MERN Stack
            </Badge>
            <Badge variant="subtle" colorScheme="cyan" fontSize={{ base: "0.6rem", md: "0.75rem" }}>
              CSS Modules
            </Badge>
            <Badge variant="subtle" colorScheme="pink" fontSize={{ base: "0.6rem", md: "0.75rem" }}>
              REST API
            </Badge>
          </HStack>

          {/* --- GitHub Link --- */}
          <motion.div whileHover={{ scale: 1.05 }}>
            <Link
              href="https://github.com/eudeamonism/mErN"
              isExternal
              rel="noopener noreferrer"
              aria-label="Open Favorite Place App repository"
            >
              <AiOutlineGithub style={{ width: 25, height: 25, display: "inline-block" }} />
              <VisuallyHidden>GitHub</VisuallyHidden>
            </Link>
          </motion.div>
        </HStack>

        {/* --- Description --- */}
        <Text color="#1B4F8C" fontSize={{ base: "sm", md: "md", lg: "lg" }} mt="2">
          Favorite Place is a full-stack web application that lets users create, delete, and share
          their favorite destinations. Built with the MERN stack, it includes authentication,
          geolocation search, and a clean modular styling approach for maintainability.
        </Text>

        {/* --- Highlights --- */}
        <UnorderedList color="#1B4F8C" fontSize={{ base: "sm", md: "md", lg: "lg" }} mt="4" spacing={1.5}>
          <ListItem>State management through component props</ListItem>
          <ListItem>REST API for CRUD functionality</ListItem>
          <ListItem>Geospatial queries for location-based search</ListItem>
          <ListItem>CSS Modules for scoped component styling</ListItem>
          <ListItem>MongoDB, Express, React, and Node integration</ListItem>
          <ListItem>GitHub version control and collaboration</ListItem>
        </UnorderedList>
      </Box>
    </Container>
  );
};

export default Event;
