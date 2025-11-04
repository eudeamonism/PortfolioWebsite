import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Center,
  Text,
  Heading,
  StackDivider,
  Stack,
  Box,
  Link,
  HStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { BsLinkedin } from "react-icons/bs";
import { AiOutlineGithub } from "react-icons/ai";
import { FcDocument } from "react-icons/fc";

const ContactCard = () => {
  return (
    <Center mt="10">
      <Card
        size="lg"
        borderWidth="1px"
        borderColor="#1796F3"
        shadow="md"
        _hover={{ shadow: "lg" }}
        p={{ base: "2", md: "4" }}
      >
        <CardHeader textAlign="center">
          <Heading color="#1796F3" size="md">
            Contact Information
          </Heading>
        </CardHeader>

        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            {/* --- Name --- */}
            <Box>
              <Heading color="#FF9E0D" size="xs" textTransform="uppercase">
                Name
              </Heading>
              <Text color="#1B4F8C" pt="2" fontSize="sm">
                Evan Vargas
              </Text>
            </Box>

            {/* --- Phone --- */}
            <Box>
              <Heading color="#FF9E0D" size="xs" textTransform="uppercase">
                Phone
              </Heading>
              <Link
                href="tel:+17133825146"
                color="#1B4F8C"
                pt="2"
                fontSize="sm"
                _hover={{ textDecoration: "underline" }}
              >
                (713) 382-5146
              </Link>
            </Box>

            {/* --- Email --- */}
            <Box>
              <Heading color="#FF9E0D" size="xs" textTransform="uppercase">
                Email
              </Heading>
              <Link
                href="mailto:evanvargas@gmail.com"
                color="#1B4F8C"
                pt="2"
                fontSize="sm"
                _hover={{ textDecoration: "underline" }}
              >
                evanvargas@gmail.com
              </Link>
            </Box>

            {/* --- Social / Links Row --- */}
            <HStack spacing={6} justify="center" pt="4">
              <motion.div whileHover={{ scale: 1.15 }}>
                <Link
                  href="https://www.linkedin.com/in/evanvargas/"
                  isExternal
                  aria-label="LinkedIn Profile"
                >
                  <BsLinkedin
                    style={{
                      width: "30px",
                      height: "30px",
                      color: "#0877b3",
                    }}
                  />
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.15 }}>
                <Link
                  href="https://github.com/eudeamonism"
                  isExternal
                  aria-label="GitHub Profile"
                >
                  <AiOutlineGithub
                    style={{
                      width: "33px",
                      height: "33px",
                      color: "black",
                    }}
                  />
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.15 }}>
                <Link
                  href="https://docs.google.com/document/d/1N_B31qmCsJUNhmawdubjAXJ-lC73uH4i8LwkFlZRRcM/edit?usp=sharing"
                  isExternal
                  aria-label="Resume Document"
                >
                  <HStack>
                    <FcDocument
                      style={{
                        width: "32px",
                        height: "32px",
                      }}
                    />
                    <Text color="#1B4F8C" fontSize="sm">
                      Resume
                    </Text>
                  </HStack>
                </Link>
              </motion.div>
            </HStack>
          </Stack>
        </CardBody>
      </Card>
    </Center>
  );
};

export default ContactCard;
