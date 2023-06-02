import React from "react";
import { Text, Link, HStack, UnorderedList, ListItem } from "@chakra-ui/react";
import { AiOutlineGithub } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";

const Viewer = () => {
  return (
    <>
      <HStack alignItems={"center"}>
        <Text as="b" fontSize={{ base: "lg", md: "2xl", lg: "3xl" }}>
          Photo Slider
        </Text>
        <motion.div whileHover={{ color: "lightgrey" }}>
          <Link href="https://gallery-pan.vercel.app/ " isExternal>
            <FiExternalLink style={{ width: "25px", height: "25px", display: "inline-block" }} />
          </Link>
        </motion.div>
        <motion.div whileHover={{ color: "lightgrey" }}>
          <Link href="https://github.com/eudeamonism/GalleryPan" pt="1" isExternal>
            <AiOutlineGithub style={{ width: "25px", height: "25px", display: "inline-block" }} />
          </Link>
        </motion.div>
      </HStack>
      <Text fontSize={{ base: "sm", md: "md", lg: "lg" }}>
        I built and deployed a photo slider site with animation using TypeScript, React, and Sass.
        The site is responsive and can be viewed on any device.
      </Text>
      <UnorderedList fontSize={{ base: "sm", md: "md", lg: "lg" }} mt="4">
        <ListItem>
          Used TypeScript to add type safety and other features to my JavaScript code.
        </ListItem>
        <ListItem>Used React to build a responsive and user-friendly photo slider.</ListItem>
        <ListItem>
          Deployed my photo slider site to Vercel, a cloud platform that makes it easy to deploy web
          applications.
        </ListItem>
        <ListItem>Used Sass to create a custom stylesheet for my photo slider site.</ListItem>
      </UnorderedList>
    </>
  );
};

export default Viewer;