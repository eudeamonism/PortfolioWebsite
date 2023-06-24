import { Text, Link, HStack, UnorderedList, ListItem, Box, Container } from "@chakra-ui/react";
import { AiOutlineGithub } from "react-icons/ai";
import { motion } from "framer-motion";

const Tour = () => {
  return (
    <Container minW={"400px"} maxW="container.xl" py="5">
    <Box borderWidth={'1px'} p={{base: '1em', md: '1.5em', lg: '2em'}} mt='-1'>
      <HStack alignItems={"center"}>
        <Text color={'#FF9E0D'} as="b" fontSize={{ base: "lg", md: "2xl", lg: "3xl" }}>
          NZWalks
        </Text>
        <motion.div whileHover={{ color: "lightgrey" }}>
          <Link href="https://github.com/eudeamonism/NZWalks" pt="1" isExternal>
            <AiOutlineGithub style={{ width: "25px", height: "25px", display: "inline-block" }} />
          </Link>
        </motion.div>
      </HStack>
      <Text color={'#1B4F8C'} fontSize={{ base: "sm", md: "md", lg: "lg" }}>
        I built an API utilizing .NET and Blazor to render a trail's id, name, and region code. You can add, update, view, and delete trails. This API has authentication too. 
      </Text>
      <UnorderedList color={'#1B4F8C'} fontSize={{ base: "sm", md: "md", lg: "lg" }} mt="4">
        <ListItem>Utilizes a RESTful API</ListItem>
        <ListItem>Stores data in Microsoft Server Sql</ListItem>
        <ListItem>Uses Blazor for website rendering</ListItem>
        <ListItem>Uses a Git repository for version control</ListItem>
        <ListItem>Performs geospatial queries</ListItem>
        <ListItem>Supports admin and user roles</ListItem>
      </UnorderedList>
    </Box>
    </Container>
  );
};

export default Tour;
