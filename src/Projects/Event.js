import { Text, Link, HStack, UnorderedList, ListItem, Box, Container } from "@chakra-ui/react";
import { AiOutlineGithub } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";

const Event = () => {
  return (
    <Container minW={"400px"} maxW="container.xl">
      <Box borderWidth={"1px"} p={{ base: "1em", md: "1.5em", lg: "2em" }} mt="-1">
        <HStack alignItems={"center"}>
          <Text color={"#FF9E0D"} as="b" fontSize={{ base: "lg", md: "2xl", lg: "3xl" }}>
            Neighbors Sandbox
          </Text>
          <motion.div whileHover={{ color: "lightgrey" }}>
            <Link href="https://github.com/eudeamonism/neighborsWebsite" pt="1" isExternal>
              <AiOutlineGithub style={{ width: "25px", height: "25px", display: "inline-block" }} />
            </Link>
          </motion.div>
          <motion.div whileHover={{ color: "lightgrey" }}>
            <Link href="https://github.com/eudeamonism/neighborsAPI" pt="1" isExternal>
              <AiOutlineGithub style={{ width: "25px", height: "25px", display: "inline-block" }} />
            </Link>
          </motion.div>
          <motion.div whileHover={{ color: "lightgrey" }}>
            <Link href="https://neighbors-beta.vercel.app/" isExternal>
              <FiExternalLink style={{ width: "25px", height: "25px", display: "inline-block" }} />
            </Link>
          </motion.div>
        </HStack>
        <Text color={"#1B4F8C"} fontSize={{ base: "sm", md: "md", lg: "lg" }}>
          A Sandbox project meant to explore features through a complaint-like web app meant for
          users to report complaints or disturbances in their neighborhood.
        </Text>
        <UnorderedList color={"#1B4F8C"} fontSize={{ base: "sm", md: "md", lg: "lg" }} mt="4">
          <ListItem>Redux global state handling</ListItem>
          <ListItem>Utilization of REST API: Data access via REST API.</ListItem>
          <ListItem>Use of MongoDB, Express, React, and Node: MERN stack.</ListItem>
          <ListItem>Chakra UI Library for UI/UX design</ListItem>
          <ListItem>Figma Sketches</ListItem>
          <ListItem>Use of Git Repository for version control: Version control with Git.</ListItem>
          <ListItem>Upload Images and Delete Image via Cloudinary API</ListItem>
          <ListItem>Login Authentication and Middleware</ListItem>
          <ListItem>OTB Password Reset</ListItem>
          <ListItem>Google CAPTCHA</ListItem>
          <ListItem>SMTP Mail Transfer</ListItem>
        </UnorderedList>
      </Box>
      <Box borderWidth={"1px"} p={{ base: "1em", md: "1.5em", lg: "2em" }} mt="4">
        <HStack alignItems={"center"}>
          <Text color={"#FF9E0D"} as="b" fontSize={{ base: "lg", md: "2xl", lg: "3xl" }}>
            Favorite Place App
          </Text>
          <motion.div whileHover={{ color: "lightgrey" }}>
            <Link href="https://github.com/eudeamonism/mErN" pt="1" isExternal>
              <AiOutlineGithub style={{ width: "25px", height: "25px", display: "inline-block" }} />
            </Link>
          </motion.div>
        </HStack>
        <Text color={"#1B4F8C"} fontSize={{ base: "sm", md: "md", lg: "lg" }}>
          I created a destination application using the MERN stack. This application allows users to
          create, delete, and share their favorite destinations. It has a simple login
          authentication system that protects user data.
        </Text>
        <UnorderedList color={"#1B4F8C"} fontSize={{ base: "sm", md: "md", lg: "lg" }} mt="4">
          <ListItem>Use of props to handle state changes: State management with props.</ListItem>
          <ListItem>Utilization of REST API: Data access via REST API.</ListItem>
          <ListItem>Use of MongoDB, Express, React, and Node: MERN stack.</ListItem>
          <ListItem>Use of CSS Modules: Custom CSS styles.</ListItem>
          <ListItem>Use of Git Repository for version control: Version control with Git.</ListItem>
          <ListItem>Use of geospatial queries: Location-based search.</ListItem>
        </UnorderedList>
      </Box>
    </Container>
  );
};

export default Event;
