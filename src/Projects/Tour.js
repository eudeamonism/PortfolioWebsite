import { Text, Link, HStack, UnorderedList, ListItem, Box, Container } from "@chakra-ui/react";
import { AiOutlineGithub } from "react-icons/ai";
import { motion } from "framer-motion";

const Tour = () => {
  return (
    <Container minW={"400px"} maxW="container.xl">
    <Box borderWidth={'1px'} p={{base: '1em', md: '1.5em', lg: '2em'}} mt='-1'>
      <HStack alignItems={"center"}>
        <Text color={'#FF9E0D'} as="b" fontSize={{ base: "lg", md: "2xl", lg: "3xl" }}>
          Destination Resort App
        </Text>
        <motion.div whileHover={{ color: "lightgrey" }}>
          <Link href="https://github.com/eudeamonism/1.24NAT" pt="1" isExternal>
            <AiOutlineGithub style={{ width: "25px", height: "25px", display: "inline-block" }} />
          </Link>
        </motion.div>
      </HStack>
      <Text color={'#1B4F8C'} fontSize={{ base: "sm", md: "md", lg: "lg" }}>
        I built a Node.js tour destination app that utilizes templating for the UI. MongoDB and
        Mongoose were used to store data structures for users, admin, and destinations. A RESTful
        API was built that included filtering, sorting, pagination, etc. CRUD operations allowed
        entries, deletions, and updates. Advanced authentication was used to ensure the safety and
        integrity of the data, which was primarily handled by controllers in the API.
      </Text>
      <UnorderedList color={'#1B4F8C'} fontSize={{ base: "sm", md: "md", lg: "lg" }} mt="4">
        <ListItem>Utilizes a RESTful API</ListItem>
        <ListItem>Stores data in MongoDB and uses aggregation and operators</ListItem>
        <ListItem>Uses CSS Modules and Pug templating</ListItem>
        <ListItem>Uses a Git repository for version control</ListItem>
        <ListItem>Performs geospatial queries</ListItem>
        <ListItem>Supports admin and user roles</ListItem>
      </UnorderedList>
    </Box>
    </Container>
  );
};

export default Tour;
