import {
  Card,
  CardHeader,
  Text,
  Heading,
  Flex,
  Box,
  Link,
  HStack,
} from "@chakra-ui/react";
import { FcDocument } from "react-icons/fc";
import { motion } from "framer-motion";
const ResumeCard = () => {
  return (
    <Link
      href="https://docs.google.com/document/d/1DN_-zhxneRZWTNh33lbQgOx7WhdqOPiX/edit?usp=sharing&ouid=110050705256447090501&rtpof=true&sd=true"
      isExternal
    >
      <motion.div whileHover={{ scale: 1.1 }}>
        <Card maxW="sm">
          <CardHeader>
            <Flex spacing="4">
              <Flex flex="1" gap="6" alignItems="center" flexWrap="wrap">
               
                <Box>
                  <Heading size="sm">Evan Vargas</Heading>
                  <Text>Resume</Text>
                </Box>
              </Flex>

              <HStack mt="2" mx="3">
                <FcDocument
                  style={{
                    width: "40px",
                    height: "40px",
                    display: "inline-block",
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

export default ResumeCard;
