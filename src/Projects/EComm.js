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

const EComm = () => {
  return (
    <Container minW="400px" maxW="container.xl">
      <Box borderWidth="1px" p={{ base: "1em", md: "1.5em", lg: "2em" }} mt="-1">
        {/* --- Header Row --- */}
        <HStack alignItems="center" justify="space-between">
          <HStack spacing={2} alignItems="center">
            <Text color="#FF9E0D" as="b" fontSize={{ base: "lg", md: "2xl", lg: "3xl" }}>
              eCommerce Project
            </Text>

            {/* --- Highlighted Stack Tags --- */}
            <Badge variant="subtle" colorScheme="purple" fontSize={{ base: "0.6rem", md: "0.75rem" }}>
              MERN Stack
            </Badge>
            <Badge variant="subtle" colorScheme="cyan" fontSize={{ base: "0.6rem", md: "0.75rem" }}>
              Redux
            </Badge>
            <Badge variant="subtle" colorScheme="orange" fontSize={{ base: "0.6rem", md: "0.75rem" }}>
              Chakra UI
            </Badge>
          </HStack>

          {/* --- GitHub Link --- */}
          <motion.div whileHover={{ scale: 1.05 }}>
            <Link
              href="https://github.com/eudeamonism/ecommerce"
              isExternal
              rel="noopener noreferrer"
              aria-label="Open GitHub repository for eCommerce project"
            >
              <AiOutlineGithub style={{ width: 25, height: 25, display: "inline-block" }} />
              <VisuallyHidden>GitHub</VisuallyHidden>
            </Link>
          </motion.div>
        </HStack>

        {/* --- Description --- */}
        <Text color="#1B4F8C" fontSize={{ base: "sm", md: "md", lg: "lg" }} mt="2">
          I built and deployed an eCommerce site using the MERN stack. The site includes user
          authentication, shopping baskets, orders, checkout, PayPal payment integration, and
          administrator controls. It is responsive, secure, and deployable across mobile, tablet,
          and desktop screens.
        </Text>

        {/* --- Highlights --- */}
        <UnorderedList color="#1B4F8C" fontSize={{ base: "sm", md: "md", lg: "lg" }} mt="4" spacing={1.5}>
          <ListItem>
            Built a full MERN application using React, Node.js, Express, MongoDB, and Redux Toolkit.
          </ListItem>
          <ListItem>
            Used JWT authentication and bcrypt password hashing for secure user sessions.
          </ListItem>
          <ListItem>Developed robust REST API endpoints for front-end communication.</ListItem>
          <ListItem>Created dynamic responsive layouts with Chakra UI components.</ListItem>
          <ListItem>Implemented form validation with Formik and Yup.</ListItem>
          <ListItem>Handled error states via frontend validators and backend middleware.</ListItem>
          <ListItem>Integrated PayPal API for real payment processing.</ListItem>
          <ListItem>Used Git and GitHub for version control and collaboration.</ListItem>
          <ListItem>Deployed production build on Render for public access.</ListItem>
        </UnorderedList>
      </Box>
    </Container>
  );
};

export default EComm;
