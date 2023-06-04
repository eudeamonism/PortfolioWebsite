import React from "react";
import {
  Text,
  Link,
  HStack,
  UnorderedList,
  ListItem,
  Box
} from "@chakra-ui/react";
import { AiOutlineGithub } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";

const EComm = () => {
  return (
    <Box borderWidth={'1px'} p={{base: '1em', md: '1.5em', lg: '2em'}} mt='-1' >
      <HStack alignItems={"center"} >
        <Text color={'#FF9E0D'} as="b" fontSize={{ base: "lg", md: "2xl", lg: "3xl" }} >
          eCommerce Project
        </Text>
        <motion.div whileHover={{ color: "lightgrey" }}>
          <Link href="https://ecommerce-zl92.onrender.com/products" isExternal>
            <FiExternalLink style={{ width: "25px", height: "25px", display: "inline-block" }} />
          </Link>
        </motion.div>
        <motion.div whileHover={{ color: "lightgrey" }}>
          <Link href="https://github.com/eudeamonism/ecommerce" pt="1" isExternal>
            <AiOutlineGithub style={{ width: "25px", height: "25px", display: "inline-block" }} />
          </Link>
        </motion.div>
      </HStack>
      <Text color={'#1B4F8C'} fontSize={{ base: "sm", md: "md", lg: "lg" }}>
        I built and deployed an eCommerce site using the MERN stack. The site has features such as
        user accounts, login security, shopping baskets, orders, profiles, checkout, PayPal
        gateways, and administrator privileges. The site is secure and uses a variety of server and
        client-side security measures to protect user data. The site is also responsive and can be
        viewed on any device.
      </Text>
      <UnorderedList color={'#1B4F8C'} fontSize={{ base: "sm", md: "md", lg: "lg" }} mt="4">
        <ListItem>
          Built an eCommerce site using the MERN stack and other helper packages, such as Redux,
          MongoDB Compass, and Object data mapping.
        </ListItem>
        <ListItem>
          Used JWT token-based authentication and password hashing to secure the site.
        </ListItem>
        <ListItem>Developed API endpoints for front-end communication.</ListItem>
        <ListItem>Created a responsive design with a great-looking UI using Chakra UI.</ListItem>
        <ListItem>Used Formik and Yup for form validation.</ListItem>
        <ListItem>Created reusable form components.</ListItem>
        <ListItem>
          Handled errors via Yup validators in the frontend and middleware and controllers in the
          backend.
        </ListItem>
        <ListItem>Created orders from the shopping basket.</ListItem>
        <ListItem>Accepted payments via PayPal.</ListItem>
        <ListItem>Used a Git repository for version control.</ListItem>
        <ListItem>Deployed the site with Render.</ListItem>
        <ListItem>Created dynamic pages for mobile and larger screens.</ListItem>
      </UnorderedList>
    </Box>
  );
};

export default EComm;
