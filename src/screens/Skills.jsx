import { Heading, Container } from "@chakra-ui/react";
import { Prose } from "@nikolovlazar/chakra-ui-prose";

const Skills = () => {
  return (
    <Container maxW="container.xl" minW={"lg"}>
      <Heading
        as="h1"
        fontSize={{ base: "2xl", md: "3xl", xl: "4xl" }}
        textAlign="center"
        pt={{ base: "20px", xl: "40px" }}
        color={"#1796F3"}
      >
        Technical Skills
      </Heading>

      <Container maxW="container.xl" borderWidth={"1px"} mt="3">
        <Prose>
          <h4>Programming Languages</h4>
          <ul>
            <li>
              <b>JavaScript</b> &emsp; Mastery in creating variables, arrays, and objects to store
              data, clean function design, use of methods to loop through data, conditional logic,
              and operators.
            </li>
            <li>
              <b>NodeJS</b> &emsp; Expertise in creating RESTful APIs that navigate request and
              responses between the frontend and database.
            </li>
            <li>
              <b>TypeScript</b> &emsp; Knowledgeable on utilizing type safety to help prevent errors
              and make code more readable
            </li>
            <li>
              <b>HTML & JSX</b> &emsp; Strong command on creating highly accessible and
              user-friendly client applicatons
            </li>
          </ul>

          <hr />
          <h4>Front End</h4>
          <ul>
            <li>
              <b>React</b> &emsp; Expertise in hooks for state management; constructing components
              and classes; creating forms with client-side validation.
            </li>
            <li>
              <b>Redux Toolkit</b> &emsp; Versatile with this system in order to manage complex
              state, ie eccommerce projects
            </li>
            <li>
              <b>MobX</b> &emsp; Learning this system in order to manage complex state
            </li>
          </ul>

          <hr />
          <h4>Databases</h4>
          <ul>
            <li>
              <b>MongoDB</b> &emsp; Excellent with this NoSQL document-oriented database management
              system to store and retrieve data for a variety of applications.
            </li>
            <li>
              <b>SQL(s)</b> &emsp; Knowledgeable with data analysis with relational databases like
              PostGreSQL, MySQL, Microsoft SQL Server, Microsoft Access, and Excel
            </li>
          </ul>
          <hr />
          <h4>Other</h4>
          <ul>
            <li>
              <b>APIs and More</b> &emsp; Password hashing, tokenization of data, testing APIs,
              constructing REST APIs, CRUD operations, application deployment, PayPal & OpenAI API
              integration, extensive library implementation, developing knowledge on AWS and Azure
              services and utilization and Docker images and containers..
            </li>
          </ul>

          <hr />
        </Prose>
      </Container>
    </Container>
  );
};

export default Skills;
