import {
  Card,
  CardHeader,
  Text,
  Heading,
  Flex,
  Avatar,
  Box,
  Link,
  HStack,
} from "@chakra-ui/react";
import { BsLinkedin } from "react-icons/bs";
import { motion } from "framer-motion";

const LinkedInCard = () => {
  return (
    <Link href="https://www.linkedin.com/in/evanvargas/" isExternal>
      <motion.div whileHover={{ scale: 1.1 }}>
      <Card maxW="sm" >
        <CardHeader>
          <Flex spacing="4">
            <Flex flex="1" gap="6" alignItems="center" flexWrap="wrap">
              <Avatar name="Evan Vargas" src="/assets/VargasEvanProfileSquare.jpg" />
              <Box>
                <Heading size="sm">Evan Vargas</Heading>
                <Text>Software Engineer</Text>
              </Box>
            </Flex>

            <HStack mt="2" mx="3">
              <BsLinkedin
                style={{ width: "30px", height: "30px", display: "inline-block", color: "#0877b3" }}
              />
            </HStack>
          </Flex>
        </CardHeader>
      </Card>
      </motion.div>
    </Link>
  );
};

export default LinkedInCard;
