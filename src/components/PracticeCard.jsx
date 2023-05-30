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
import { motion } from "framer-motion";
import { AiOutlineGithub } from "react-icons/ai";
const PracticeCard = () => {
  return (
    <Link href="https://github.com/eudeamonism" isExternal>
      <motion.div whileHover={{ scale: 1.1 }}>
        <Card maxW="sm">
          <CardHeader>
            <Flex spacing="4">
              <Flex flex="1" gap="6" alignItems="center" flexWrap="wrap">
                <Avatar name="Evan Vargas" src="https://avatars.githubusercontent.com/u/70307095?v=4" />
                <Box>
                  <Heading size="sm">Evan Vargas</Heading>
                  <Text>@Eudeamonism</Text>
                  <Text>GitHub Repository</Text>
                </Box>
              </Flex>

              <HStack mt="2" mx="3">
                <AiOutlineGithub
                  style={{
                    width: "40px",
                    height: "40px",
                    display: "inline-block",
                    color: "black",
                  }}
                />
              </HStack>
            </Flex>
          </CardHeader>
        </Card>
      </motion.div>
    </Link>
  );
};

export default PracticeCard;
