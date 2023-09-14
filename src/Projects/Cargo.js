import React from "react";
import { Text, Link, HStack, UnorderedList, ListItem, Box, Container } from "@chakra-ui/react";
import { AiOutlineGithub } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";

const Cargo = () => {
  return (
    <Container minW={"400px"} maxW="container.xl">
      <Box borderWidth={"1px"} p={{ base: "1em", md: "1.5em", lg: "2em" }} mt="-1">
        <HStack alignItems={"center"}>
          <Text color={"#FF9E0D"} as="b" fontSize={{ base: "lg", md: "2xl", lg: "3xl" }}>
            ImEx Cargo Redesign Sketch
          </Text>
          <motion.div whileHover={{ color: "lightgrey" }}>
            <Link href="https://imexcargo-two.vercel.app/" isExternal>
              <FiExternalLink style={{ width: "25px", height: "25px", display: "inline-block" }} />
            </Link>
          </motion.div>
          <motion.div whileHover={{ color: "lightgrey" }}>
            <Link href="https://github.com/eudeamonism/ImExCargo" pt="1" isExternal>
              <AiOutlineGithub style={{ width: "25px", height: "25px", display: "inline-block" }} />
            </Link>
          </motion.div>
        </HStack>
        <Text color={"#1B4F8C"} fontSize={{ base: "sm", md: "md", lg: "lg" }}>
          I built and deployed a dynamic website sketch for ImEc Cargo  using React and Chakra UI libraries.
          This was a sketch for the company's website meant to highlight its key assets.
        </Text>
        <UnorderedList color={"#1B4F8C"} fontSize={{ base: "sm", md: "md", lg: "lg" }} mt="4">
          <ListItem>Navigation Bar</ListItem>
          <ListItem>Tracking</ListItem>
          <ListItem>Message Form</ListItem>
          <ListItem>Created a responsive design with a great-looking UI using Chakra UI.</ListItem>
          <ListItem>Used Formik and Yup for form validation.</ListItem>
          <ListItem>Created reusable form components.</ListItem>
          <ListItem>
            Handled errors via Yup validators in the frontend and middleware and controllers in the
            backend.
          </ListItem>
          <ListItem>Sketch</ListItem>
          <ListItem>Used a Git repository for version control.</ListItem>
          <ListItem>Deployed the site with Vercel.</ListItem>
          <ListItem>Created dynamic pages for mobile and larger screens.</ListItem>
          <ListItem>Dark and Light Mode Themes</ListItem>
        </UnorderedList>
      </Box>
    </Container>
  );
};

export default Cargo;
