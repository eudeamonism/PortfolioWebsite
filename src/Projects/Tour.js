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

const Tour = () => {
  return (
    <Container minW="400px" maxW="container.xl" py="5">
      <Box borderWidth="1px" p={{ base: "1em", md: "1.5em", lg: "2em" }} mt="-1">
        <HStack alignItems="center" justify="space-between">
          <HStack spacing={2} alignItems="center">
            <Text color="#FF9E0D" as="b" fontSize={{ base: "lg", md: "2xl", lg: "3xl" }}>
              Destination Resort App
            </Text>

            {/* --- Highlighted Stack Tags --- */}
            <Badge variant="subtle" colorScheme="purple" fontSize={{ base: "0.6rem", md: "0.75rem" }}>
              Node.js
            </Badge>
            <Badge variant="subtle" colorScheme="cyan" fontSize={{ base: "0.6rem", md: "0.75rem" }}>
              Express
            </Badge>
            <Badge variant="subtle" colorScheme="orange" fontSize={{ base: "0.6rem", md: "0.75rem" }}>
              MongoDB
            </Badge>
            <Badge variant="subtle" colorScheme="pink" fontSize={{ base: "0.6rem", md: "0.75rem" }}>
              Pug
            </Badge>
            <Badge variant="subtle" colorScheme="green" fontSize={{ base: "0.6rem", md: "0.75rem" }}>
              REST API
            </Badge>
          </HStack>

          {/* --- GitHub Link --- */}
          <motion.div whileHover={{ scale: 1.05 }}>
            <Link
              href="https://github.com/eudeamonism/1.24NAT"
              isExternal
              rel="noopener noreferrer"
              aria-label="Open GitHub repository for Destination Resort App"
            >
              <AiOutlineGithub style={{ width: 25, height: 25, display: "inline-block" }} />
              <VisuallyHidden>GitHub</VisuallyHidden>
            </Link>
          </motion.div>
        </HStack>

        {/* --- Description --- */}
        <Text color="#1B4F8C" fontSize={{ base: "sm", md: "md", lg: "lg" }} mt="2">
          The Destination Resort App is a full-featured Node.js application that manages tourist
          destinations with advanced data modeling and authentication. It uses Express and MongoDB
          for backend operations, Pug templating for dynamic views, and secure RESTful routes to
          handle CRUD functionality, geospatial queries, and user access control.
        </Text>

        {/* --- Highlights --- */}
        <UnorderedList color="#1B4F8C" fontSize={{ base: "sm", md: "md", lg: "lg" }} mt="4" spacing={1.5}>
          <ListItem>Developed a RESTful API supporting CRUD operations</ListItem>
          <ListItem>Implemented filtering, sorting, and pagination with query middleware</ListItem>
          <ListItem>Used MongoDB aggregation pipelines and geospatial queries</ListItem>
          <ListItem>Created dynamic UI with Pug templates and CSS Modules</ListItem>
          <ListItem>Added role-based access for admin and standard users</ListItem>
          <ListItem>Implemented JWT-based authentication and secure password hashing</ListItem>
          <ListItem>Version control managed through Git and GitHub</ListItem>
        </UnorderedList>
      </Box>
    </Container>
  );
};

export default Tour;
