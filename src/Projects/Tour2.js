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
              NZWalks
            </Text>

            {/* --- Highlighted Stack Tags --- */}
            <Badge variant="subtle" colorScheme="purple" fontSize={{ base: "0.6rem", md: "0.75rem" }}>
              .NET 8
            </Badge>
            <Badge variant="subtle" colorScheme="cyan" fontSize={{ base: "0.6rem", md: "0.75rem" }}>
              Blazor
            </Badge>
            <Badge variant="subtle" colorScheme="orange" fontSize={{ base: "0.6rem", md: "0.75rem" }}>
              REST API
            </Badge>
            <Badge variant="subtle" colorScheme="pink" fontSize={{ base: "0.6rem", md: "0.75rem" }}>
              SQL Server
            </Badge>
          </HStack>

          {/* --- GitHub Link --- */}
          <motion.div whileHover={{ scale: 1.05 }}>
            <Link
              href="https://github.com/eudeamonism/NZWalks"
              isExternal
              rel="noopener noreferrer"
              aria-label="Open GitHub repository for NZWalks"
            >
              <AiOutlineGithub style={{ width: 25, height: 25, display: "inline-block" }} />
              <VisuallyHidden>GitHub</VisuallyHidden>
            </Link>
          </motion.div>
        </HStack>

        {/* --- Description --- */}
        <Text color="#1B4F8C" fontSize={{ base: "sm", md: "md", lg: "lg" }} mt="2">
          NZWalks is a .NET and Blazor-based web API that allows users to view, add, update, and
          delete hiking trails by region and trail ID. It includes authentication, geospatial
          queries, and role-based security for admins and users.
        </Text>

        {/* --- Highlights --- */}
        <UnorderedList color="#1B4F8C" fontSize={{ base: "sm", md: "md", lg: "lg" }} mt="4" spacing={1.5}>
          <ListItem>Built a RESTful API for CRUD trail operations</ListItem>
          <ListItem>Stored data in Microsoft SQL Server with Entity Framework Core</ListItem>
          <ListItem>Rendered UI with Blazor and connected backend endpoints</ListItem>
          <ListItem>Implemented JWT-based authentication and role access</ListItem>
          <ListItem>Supported geospatial queries for trail mapping</ListItem>
          <ListItem>Used GitHub for source control and deployment management</ListItem>
        </UnorderedList>
      </Box>
    </Container>
  );
};

export default Tour;
