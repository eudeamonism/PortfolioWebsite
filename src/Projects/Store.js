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

const Store = () => {
  return (
    <Container minW="400px" maxW="container.xl" py="5">
      <Box borderWidth="1px" p={{ base: "1em", md: "1.5em", lg: "2em" }} mt="-1">
        <HStack alignItems="center" justify="space-between">
          <HStack spacing={2} alignItems="center" flexWrap="wrap">
            <Text color="#FF9E0D" as="b" fontSize={{ base: "lg", md: "2xl", lg: "3xl" }}>
              For Country and Club
            </Text>

            {/* --- Highlighted Stack Tags --- */}
            <Badge variant="subtle" colorScheme="cyan" fontSize={{ base: "0.6rem", md: "0.75rem" }}>
              React
            </Badge>
            <Badge variant="subtle" colorScheme="purple" fontSize={{ base: "0.6rem", md: "0.75rem" }}>
              Chakra UI
            </Badge>
            <Badge variant="subtle" colorScheme="pink" fontSize={{ base: "0.6rem", md: "0.75rem" }}>
              Formik + Yup
            </Badge>
            <Badge variant="subtle" colorScheme="orange" fontSize={{ base: "0.6rem", md: "0.75rem" }}>
              REST API
            </Badge>
            <Badge variant="subtle" colorScheme="green" fontSize={{ base: "0.6rem", md: "0.75rem" }}>
              Vercel
            </Badge>
          </HStack>

          {/* --- External + GitHub Links --- */}
          <HStack spacing={3}>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link
                href="https://www.forclubandcountry.app/"
                isExternal
                rel="noopener noreferrer"
                aria-label="Visit For Country and Club live site"
              >
                <FiExternalLink style={{ width: 25, height: 25, display: "inline-block" }} />
                <VisuallyHidden>Live Website</VisuallyHidden>
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }}>
              <Link
                href="https://github.com/eudeamonism/appSite"
                isExternal
                rel="noopener noreferrer"
                aria-label="Open GitHub repository for For Country and Club"
              >
                <AiOutlineGithub style={{ width: 25, height: 25, display: "inline-block" }} />
                <VisuallyHidden>GitHub</VisuallyHidden>
              </Link>
            </motion.div>
          </HStack>
        </HStack>

        {/* --- Description --- */}
        <Text color="#1B4F8C" fontSize={{ base: "sm", md: "md", lg: "lg" }} mt="2">
          A responsive landing page for a soccer app, designed with React and Chakra UI for clean
          UI/UX and accessibility. The project integrates secure authentication, store redirects,
          and reusable form components built with Formik and Yup. Deployed on Vercel, this app
          represents an ongoing build focused on user onboarding and data capture for a future
          soccer analytics platform.
        </Text>

        {/* --- Highlights --- */}
        <UnorderedList color="#1B4F8C" fontSize={{ base: "sm", md: "md", lg: "lg" }} mt="4" spacing={1.5}>
          <ListItem>Developed with React components and Chakra UI for consistent design</ListItem>
          <ListItem>Integrated Formik and Yup for robust client-side form validation</ListItem>
          <ListItem>Implemented login authentication and redirection to app stores</ListItem>
          <ListItem>Used Git for version control and Vercel for cloud deployment</ListItem>
          <ListItem>Under development to include full RESTful backend integration</ListItem>
          <ListItem>Fully responsive across mobile, tablet, and desktop layouts</ListItem>
        </UnorderedList>
      </Box>
    </Container>
  );
};

export default Store;
