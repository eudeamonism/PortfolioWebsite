import { Container, Box, Center, Image, Heading } from "@chakra-ui/react";
import { Prose } from "@nikolovlazar/chakra-ui-prose";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <NavLink to="/about">
        <Box pt={{ base: "20px", xl: "40px" }}>
          <Center>
            <Image
              src="/assets/VargasEvanProfileSquare.jpg"
              boxSize={{ base: "175px", md: "275px", xl: "375px" }}
              borderRadius={"full"}
              boxShadow={"Base"}
            />
          </Center>
          <Heading as="h1" fontSize={{ base: "2xl", md: "3xl", xl: "4xl" }} textAlign="center" mt={4}>
        About Me
      </Heading>
      <Container w="full" maxW="container.lg" mt={-2}>
        <Prose>
          <p>
            My name is <strong>Evan Vargas</strong> and I am fullstack engineer with prominent
            experience in the <strong>MERN</strong> stack. I have created a variety of applications
            utilizing React for the frontend and various packages to handle state management and UI
            design such as Redux, MobX, Chakra UI, Semantaic UI while creating CRUD operational APIs
            utilizing NodeJS and various packages for security such as Express, Helmet, and JWT
            tokens.
          </p>
          </Prose>
          </Container>
        </Box>
      </NavLink>
    </>
  );
};

export default Home;

//h="calc(100vh)"
//Box is a div
//Flex is a box with the flex property
//Main axis is horizontal for rows and vertical columns, while cross axis is the opposite for each.
//<Box bg="green" w="full" h="100vh"></Box> --> This is full Screen, and Finally

//Golden Standard!
/*  <VStack spacing='24px' mt='24px' mb='24px'>
      <Box bg="grey" w="200px" h="150px"/>
      <Box bg="teal" w="200px" h="150px" />
      <Box bg="purple" w="200px" h="150px" />
      <Box bg="orange" w="200px" h="150px" />
      <Box bg="orange" boxSize={'4xl'} />
    </VStack>
  );
}; */

//HEADINGS
// just pass as prop and select h12345... so like html // this is for naminmg/// fontSize is for size. confusing.
//margin='auto' also centers stuff
