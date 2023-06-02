import { Text, Link, HStack, UnorderedList, ListItem } from "@chakra-ui/react";
import { AiOutlineGithub } from "react-icons/ai";
import { motion } from "framer-motion";

const Chat = () => {
  return (
    <>
      <HStack alignItems={"center"}>
        <Text as="b" fontSize={{ base: "lg", md: "2xl", lg: "3xl" }}>
          OpenAi Chat App
        </Text>
        <motion.div whileHover={{ color: "lightgrey" }}>
          <Link href="https://github.com/eudeamonism/chatBotAI" pt="1" isExternal>
            <AiOutlineGithub style={{ width: "25px", height: "25px", display: "inline-block" }} />
          </Link>
        </motion.div>
      </HStack>
      <Text fontSize={{ base: "sm", md: "md", lg: "lg" }}>
        I created a chat application that uses OpenAI intelligence to answer questions from users.
        The application was created using Vite and React, and it utilizes various APIs and filters
        to provide a variety of features, such as login authentication, different roles for AI
        responses, and more.
      </Text>
      <UnorderedList fontSize={{ base: "sm", md: "md", lg: "lg" }} mt="4">
        <ListItem>ChatEngine API for chat functionality</ListItem>
        <ListItem>OpenAI API for text generation</ListItem>
        <ListItem>Redux Toolkit, Node, and Sass for application development</ListItem>
        <ListItem>Git Repository for version control</ListItem>
      </UnorderedList>
    </>
  );
};

export default Chat;