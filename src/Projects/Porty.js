import {
  Text,
  Link,
  HStack,
  UnorderedList,
  ListItem,
  Box,
  Container,
  Badge,
  VisuallyHidden,
} from "@chakra-ui/react";
import { AiOutlineGithub } from "react-icons/ai";
import { motion } from "framer-motion";

const Porty = () => {
  return (
    <Container minW="400px" maxW="container.xl">
      {/* --- Original Portfolio Website --- */}
      <Box borderWidth="1px" p={{ base: "1em", md: "1.5em", lg: "2em" }} mt="-1">
        <HStack alignItems="center" justify="space-between">
          <HStack>
            <Text color="#FF9E0D" as="b" fontSize={{ base: "lg", md: "2xl", lg: "3xl" }}>
              Portfolio Website
            </Text>
            <Badge variant="subtle" colorScheme="blue" fontSize={{ base: "0.6rem", md: "0.75rem" }}>
              React + Chakra UI
            </Badge>
          </HStack>

          <motion.div whileHover={{ scale: 1.05 }}>
            <Link
              href="https://github.com/eudeamonism/PortfolioWebsite"
              isExternal
              rel="noopener noreferrer"
              aria-label="Open GitHub repository for Portfolio Website"
            >
              <AiOutlineGithub style={{ width: 25, height: 25 }} />
              <VisuallyHidden>GitHub</VisuallyHidden>
            </Link>
          </motion.div>
        </HStack>

        <Text color="#1B4F8C" fontSize={{ base: "sm", md: "md", lg: "lg" }} mt="2">
          Designed and built a responsive portfolio using React and Chakra UI. Highlights projects,
          education, and experience with a mobile-first layout and reusable components.
        </Text>

        <UnorderedList color="#1B4F8C" fontSize={{ base: "sm", md: "md", lg: "lg" }} mt="4">
          <ListItem>Headless component structure with React</ListItem>
          <ListItem>Responsive design system built on Chakra tokens</ListItem>
        </UnorderedList>
      </Box>

      {/* --- Next.js ADA-Compliant Portfolio --- */}
      <Box borderWidth="1px" p={{ base: "1em", md: "1.5em", lg: "2em" }} mt="4">
        <HStack alignItems="center" justify="space-between">
          <HStack spacing={2}>
            <Text color="#FF9E0D" as="b" fontSize={{ base: "lg", md: "2xl", lg: "3xl" }}>
              Next.js Portfolio (ADA-Compliant)
            </Text>
            <Badge variant="subtle" colorScheme="purple" fontSize={{ base: "0.6rem", md: "0.75rem" }}>
              Next.js 15
            </Badge>
            <Badge variant="subtle" colorScheme="teal" fontSize={{ base: "0.6rem", md: "0.75rem" }}>
              TypeScript
            </Badge>
            <Badge variant="subtle" colorScheme="orange" fontSize={{ base: "0.6rem", md: "0.75rem" }}>
              Tailwind + Chakra
            </Badge>
          </HStack>

          <motion.div whileHover={{ scale: 1.05 }}>
            <Link
              href="https://github.com/eudeamonism/nextjs-portfolio"
              isExternal
              rel="noopener noreferrer"
              aria-label="Open GitHub repository for Next.js ADA-Compliant Portfolio"
            >
              <AiOutlineGithub style={{ width: 25, height: 25 }} />
              <VisuallyHidden>GitHub</VisuallyHidden>
            </Link>
          </motion.div>
        </HStack>

        <Text color="#1B4F8C" fontSize={{ base: "sm", md: "md", lg: "lg" }} mt="2">
          Created an ADA-compliant portfolio built with Next.js 15 and TypeScript, emphasizing
          accessibility, performance, and scalable design. Implemented ARIA landmarks, keyboard
          navigation, and WCAG-compliant color contrast using Tailwind and Chakra tokens.
        </Text>

        <UnorderedList color="#1B4F8C" fontSize={{ base: "sm", md: "md", lg: "lg" }} mt="4" spacing={1.5}>
          <ListItem>
            <b>Accessibility:</b> Added skip-to-content links, visible focus outlines, and ARIA labels.
          </ListItem>
          <ListItem>
            <b>Semantic HTML:</b> Proper heading hierarchy and region landmarks for screen readers.
          </ListItem>
          <ListItem>
            <b>Color & Contrast:</b> Passed WCAG AA contrast thresholds via theme tokens.
          </ListItem>
          <ListItem>
            <b>Performance:</b> Optimized route-based code splitting and asset preloading.
          </ListItem>
          <ListItem>
            <b>Validation:</b> Tested with Lighthouse and axe-core for accessibility and SEO.
          </ListItem>
        </UnorderedList>
      </Box>
    </Container>
  );
};

export default Porty;
