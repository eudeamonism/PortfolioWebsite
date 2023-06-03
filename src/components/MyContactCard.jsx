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
import { BsLinkedin } from "react-icons/bs";
import { AiOutlineGithub } from "react-icons/ai";
import { FcDocument } from "react-icons/fc";
const ContactCard = () => {
  return (
    <Center mt='10'>
      <Card size="lg">
        <CardHeader>
          <Heading color={'#1796F3'} size="md">Contact Information</Heading>
        </CardHeader>
        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            <Box>
              <Heading color={'#FF9E0D'} size="xs" textTransform="uppercase">
                Name
              </Heading>
              <Text color={'#1B4F8C'} pt="2" fontSize="sm">
                Evan Vargas
              </Text>
            </Box>
            <Box>
              <Heading color={'#FF9E0D'} size="xs" textTransform="uppercase">
                Phone
              </Heading>
              <Text color={'#1B4F8C'} pt="2" fontSize="sm">
                713-382-5146
              </Text>
            </Box>
            <Box>
              <Heading color={'#FF9E0D'} size="xs" textTransform="uppercase">
                Email
              </Heading>
              <Text color={'#1B4F8C'} pt="2" fontSize="sm">
                evanvargas@gmail.com
              </Text>
            </Box>
            <Box>
              <Link href="https://www.linkedin.com/in/evanvargas/" isExternal>
                <BsLinkedin
                  style={{
                    width: "30px",
                    height: "30px",
                    display: "inline-block",
                    color: "#0877b3",
                  }}
                />
              </Link>
            </Box>
            <Box>
              <Link href="https://github.com/eudeamonism" isExternal>
                <AiOutlineGithub
                  style={{
                    width: "33px",
                    height: "33px",
                    display: "inline-block",
                    color: "black",
                  }}
                />
              </Link>
            </Box>
            <Box>
              <Link
                href="https://docs.google.com/document/d/1DN_-zhxneRZWTNh33lbQgOx7WhdqOPiX/edit?usp=sharing&ouid=110050705256447090501&rtpof=true&sd=true"
                isExternal
              >
                <HStack>
                  <FcDocument
                    style={{
                      width: "32px",
                      height: "32px",
                      display: "inline-block",
                    }}
                  />
                  <Text color={'#1B4F8C'} fontSize={'sm'}>Resume</Text>
                </HStack>
              </Link>
            </Box>
          </Stack>
        </CardBody>
      </Card>
    </Center>
  );
};

export default ContactCard;
