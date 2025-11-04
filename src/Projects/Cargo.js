import React from "react";
import {
  Text,
  Link,
  HStack,
  Box,
  Container,
  Badge,
  VisuallyHidden,
  SimpleGrid,
} from "@chakra-ui/react";
import { AiOutlineGithub } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";

const Cargo = () => {
  return (
    <Container minW="400px" maxW="container.xl" py="5">
      {/* --- MAIN PROJECT --- */}
      <Box borderWidth="1px" p={{ base: "1em", md: "1.5em", lg: "2em" }} mt="-1">
        <HStack alignItems="center" justify="space-between">
          <HStack spacing={2} alignItems="center" flexWrap="wrap">
            <Text color="#FF9E0D" as="b" fontSize={{ base: "lg", md: "2xl", lg: "3xl" }}>
              ImEx Cargo Redesign Sketch
            </Text>

            <Badge variant="subtle" colorScheme="cyan" fontSize={{ base: "0.6rem", md: "0.75rem" }}>
              React
            </Badge>
            <Badge variant="subtle" colorScheme="purple" fontSize={{ base: "0.6rem", md: "0.75rem" }}>
              Chakra UI
            </Badge>
            <Badge variant="subtle" colorScheme="pink" fontSize={{ base: "0.6rem", md: "0.75rem" }}>
              Formik + Yup
            </Badge>
            <Badge variant="subtle" colorScheme="green" fontSize={{ base: "0.6rem", md: "0.75rem" }}>
              Vercel
            </Badge>
            <Badge variant="subtle" colorScheme="orange" fontSize={{ base: "0.6rem", md: "0.75rem" }}>
              Dark Mode
            </Badge>
          </HStack>

          <HStack spacing={3}>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link
                href="https://imexcargo-two.vercel.app/"
                isExternal
                rel="noopener noreferrer"
                aria-label="Visit ImEx Cargo live demo"
              >
                <FiExternalLink style={{ width: 25, height: 25, display: "inline-block" }} />
                <VisuallyHidden>Live Demo</VisuallyHidden>
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }}>
              <Link
                href="https://github.com/eudeamonism/ImExCargo"
                isExternal
                rel="noopener noreferrer"
                aria-label="Open GitHub repository for ImEx Cargo Redesign"
              >
                <AiOutlineGithub style={{ width: 25, height: 25, display: "inline-block" }} />
                <VisuallyHidden>GitHub</VisuallyHidden>
              </Link>
            </motion.div>
          </HStack>
        </HStack>

        <Text color="#1B4F8C" fontSize={{ base: "sm", md: "md", lg: "lg" }} mt="2">
          A modern redesign sketch for ImEx Cargo’s web presence. Built with React and Chakra UI, this
          prototype focuses on responsiveness, user accessibility, and visual hierarchy. The design
          features dark and light modes, an adaptive navigation system, and validated message forms,
          providing a polished proof of concept for a potential full-scale logistics platform.
        </Text>
      </Box>

      {/* --- SMALLER PROJECTS GRID --- */}
      <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} spacing={5} mt={6}>
        {/* --- Next.js Dashboard --- */}
        <Box borderWidth="1px" p="1.25em" borderRadius="lg">
          <HStack justify="space-between">
            <Text color="#FF9E0D" as="b">Next.js Dashboard</Text>
            <Link href="https://github.com/eudeamonism/nextjs-dashboard" isExternal>
              <AiOutlineGithub />
            </Link>
          </HStack>
          <HStack mt={2} spacing={2} flexWrap="wrap">
            <Badge colorScheme="purple">Next.js 15</Badge>
            <Badge colorScheme="cyan">Tailwind</Badge>
            <Badge colorScheme="orange">TypeScript</Badge>
          </HStack>
          <Text color="#1B4F8C" fontSize="sm" mt={2}>
            A responsive analytics dashboard built with Next.js 15 App Router and Tailwind.
          </Text>
        </Box>

        {/* --- Discord Bot --- */}
        <Box borderWidth="1px" p="1.25em" borderRadius="lg">
          <HStack justify="space-between">
            <Text color="#FF9E0D" as="b">Discord Bot</Text>
            <Link href="https://github.com/eudeamonism/DiscordBot" isExternal>
              <AiOutlineGithub />
            </Link>
          </HStack>
          <HStack mt={2} spacing={2}>
            <Badge colorScheme="purple">Node.js</Badge>
            <Badge colorScheme="pink">OpenAI</Badge>
            <Badge colorScheme="cyan">Discord.js</Badge>
          </HStack>
          <Text color="#1B4F8C" fontSize="sm" mt={2}>
            AI-powered chatbot that handles prompts and commands in Discord channels.
          </Text>
        </Box>

        {/* --- Python Pandas Template --- */}
        <Box borderWidth="1px" p="1.25em" borderRadius="lg">
          <HStack justify="space-between">
            <Text color="#FF9E0D" as="b">Python Pandas Template</Text>
            <Link href="https://github.com/eudeamonism/python-pandas-template" isExternal>
              <AiOutlineGithub />
            </Link>
          </HStack>
          <HStack mt={2} spacing={2}>
            <Badge colorScheme="green">Python</Badge>
            <Badge colorScheme="blue">pandas</Badge>
          </HStack>
          <Text color="#1B4F8C" fontSize="sm" mt={2}>
            Reusable starter template for data cleaning, transformation, and visualization tasks.
          </Text>
        </Box>

       {/* --- Poke Express --- */}
<Box borderWidth="1px" p="1.25em" borderRadius="lg">
  <HStack justify="space-between">
    <Text color="#FF9E0D" as="b">Poke Express</Text>
    <HStack spacing={2}>
      <motion.div whileHover={{ scale: 1.05 }}>
        <Link
          href="https://poke-mini.onrender.com/"
          isExternal
          rel="noopener noreferrer"
          aria-label="Visit Poke Express live demo"
        >
          <FiExternalLink />
        </Link>
      </motion.div>
      <Link href="https://github.com/eudeamonism/poke-express" isExternal>
        <AiOutlineGithub />
      </Link>
    </HStack>
  </HStack>

  <HStack mt={2} spacing={2} flexWrap="wrap">
    <Badge colorScheme="purple">Node.js</Badge>
    <Badge colorScheme="cyan">Express</Badge>
    <Badge colorScheme="orange">MongoDB</Badge>
    <Badge colorScheme="yellow">HTML</Badge>
    <Badge colorScheme="blue">Render</Badge>
  </HStack>

  <Text color="#1B4F8C" fontSize="sm" mt={2}>
    Pokémon-themed REST API with CRUD operations and MongoDB integration.
  </Text>

  <Text color="#1B4F8C" fontSize="xs" mt={2}>
    ⏳ <b>Please note:</b> Because this project is deployed on Render’s free tier, the demo may take a few minutes
    to spin up when first accessed.
  </Text>
</Box>


        {/* --- Python Flask Example --- */}
        <Box borderWidth="1px" p="1.25em" borderRadius="lg">
          <HStack justify="space-between">
            <Text color="#FF9E0D" as="b">Python Flask Example</Text>
            <Link href="https://github.com/eudeamonism/python-flask-example1" isExternal>
              <AiOutlineGithub />
            </Link>
          </HStack>
          <HStack mt={2} spacing={2}>
            <Badge colorScheme="green">Python</Badge>
            <Badge colorScheme="orange">Flask</Badge>
          </HStack>
          <Text color="#1B4F8C" fontSize="sm" mt={2}>
            Simple Flask app showcasing GET/POST routes, JSON handling, and logging in a virtual environment.
          </Text>
        </Box>

        {/* --- Easy Problems --- */}
        <Box borderWidth="1px" p="1.25em" borderRadius="lg">
          <HStack justify="space-between">
            <Text color="#FF9E0D" as="b">Easy Problems</Text>
            <Link href="https://github.com/eudeamonism/EasyProblems" isExternal>
              <AiOutlineGithub />
            </Link>
          </HStack>
          <HStack mt={2} spacing={2}>
            <Badge colorScheme="purple">JavaScript</Badge>
            <Badge colorScheme="cyan">LeetCode</Badge>
          </HStack>
          <Text color="#1B4F8C" fontSize="sm" mt={2}>
            A collection of solved coding challenges focused on JavaScript fundamentals and logic.
          </Text>
        </Box>

        {/* --- .NET React --- */}
        <Box borderWidth="1px" p="1.25em" borderRadius="lg">
          <HStack justify="space-between">
            <Text color="#FF9E0D" as="b">.NET + React</Text>
            <Link href="https://github.com/eudeamonism/dotNetReact" isExternal>
              <AiOutlineGithub />
            </Link>
          </HStack>
          <HStack mt={2} spacing={2}>
            <Badge colorScheme="pink">.NET</Badge>
            <Badge colorScheme="cyan">React</Badge>
          </HStack>
          <Text color="#1B4F8C" fontSize="sm" mt={2}>
            Early proof-of-concept integrating a .NET backend API with a React front-end.
          </Text>
        </Box>
      </SimpleGrid>
    </Container>
  );
};

export default Cargo;
