import { Text, Link, HStack, UnorderedList, ListItem, Box } from "@chakra-ui/react";
import { AiOutlineGithub } from "react-icons/ai";
import { motion } from "framer-motion";

const Porty = () => {
  return (
    <Box borderWidth={'1px'} p={{base: '1em', md: '1.5em', lg: '2em'}} mt='-1' borderColor={'#1796F3'}>
      <HStack alignItems={"center"}>
        <Text color={'#FF9E0D'} as="b" fontSize={{ base: "lg", md: "2xl", lg: "3xl" }}>
          Portoflio Website
        </Text>
        <motion.div whileHover={{ color: "lightgrey" }}>
          <Link href="https://github.com/eudeamonism/PortfolioWebsite" pt="1" isExternal>
            <AiOutlineGithub style={{ width: "25px", height: "25px", display: "inline-block" }} />
          </Link>
        </motion.div>
      </HStack>
      <Text color={'#1B4F8C'} fontSize={{ base: "sm", md: "md", lg: "lg" }}>
        I designed and created this portfolio website using React and Chakra UI. It displays a variety of
        applications alongside my education and technical experience. The website is dynamically
        built to interact with mobile, tablet, and desktop devices.
      </Text>
      <UnorderedList color={'#1B4F8C'} fontSize={{ base: "sm", md: "md", lg: "lg" }} mt="4">
        <ListItem>Utilizes headless and React Components</ListItem>
        <ListItem>Created a responsive and informative design with Chakra UI</ListItem>
      </UnorderedList>
    </Box>
  );
};

export default Porty;
