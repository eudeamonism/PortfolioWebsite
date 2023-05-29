import { Box, Text, Heading, Image, Center, Container } from "@chakra-ui/react";
import { Prose } from "@nikolovlazar/chakra-ui-prose";

const About = () => {
  return (
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
          <h3>Continuing Education</h3>
          <table>
            <thead>
              <tr>
                <th>Courses</th>
                <th>Skills Gained</th>
                <th>Training</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <a href="https://www.udemy.com/course/learn-to-build-an-e-commerce-app-with-react-and-chakra-ui/">
                    <u color="red">Online Ecommerce Website</u>
                  </a>
                </td>
                <td>
                  I learned how to create a fully functional e-commerce application using React,
                  Redux, NodeJS, Express, MongoDB, PayPal, JSON tokens, bcrypt, Yup, Formik, Git,
                  and GitHub. I created a user interface with React and Redux, made CRUD API calls
                  with NodeJS and Express, stored data in MongoDB, accepted payments with PayPal,
                  authenticated users with JSON tokens and bcrypt, handled errors with Yup and
                  Formik, versioned my code with Git and GitHub, and styled my application with
                  Chakra UI. Additionally, I created user and administrator login accounts where the
                  administrator has editing privileges such that he can add or remove users and
                  products while the user can add and remove products and update his credentials.
                </td>
                <td>21 hours</td>
              </tr>
              <tr>
                <td>
                  <a href="https://www.udemy.com/course/react-nodejs-express-mongodb-the-mern-fullstack-guide/">
                    <u color="red">MERN Applicatons</u>
                  </a>
                </td>
                <td>
                  I created a full-stack event application with a variety of CRUD APIs. It also has
                  user login and authentication. I learned how to utilize React and various ways of
                  state management, such as props and Redux, while creating CRUD APIs with NodeJS
                  and housing data in MongoDB.
                </td>
                <td>19 hours</td>
              </tr>
              <tr>
                <td>
                  <a href="https://www.udemy.com/course/react-the-complete-guide-incl-redux/">
                    <u color="red">React</u>
                  </a>
                </td>
                <td>
                  I took refresher exercises on JavaScript specific concepts endemic to React. I
                  learned how to create mini applications that utilize React hooks, such as
                  useEffect, useState, and useReducer, while exploring various strategies for state
                  management through portals, refs, and introduction to TypeScript.
                </td>
                <td>48 hours</td>
              </tr>
              <tr>
                <td>
                  <a href="https://www.udemy.com/course/nodejs-express-mongodb-bootcamp/">
                    <u color="red">NodeJS Bootcamp</u>
                  </a>
                </td>
                <td>
                  I created a modern back-end stack utilizing NodeJS, Express, MongoDB, and
                  Mongoose. I used server-side rendering with Pug templating instead of React. I
                  created a RESTful API with CRUD operations, and I added filters and pagination. I
                  implemented authentication and authorization, including password reset. I learned
                  about security, encryption, and sanitization, and I implemented these concepts in
                  my application, which was a tourist retreat website.
                </td>
                <td>35 hours</td>
              </tr>
              <tr>
                <td>
                  <a href="https://www.udemy.com/course/javascript-the-complete-guide-2020-beginner-advanced/">
                    <u color="red">Javascript Bootcamp</u>
                  </a>
                </td>
                <td>
                  I learned fundamental concepts of JavaScript that allow me to write effective
                  functions, handle data, understand prototypes, handle events, manipulate the DOM,
                  and strengthen object-oriented programming concepts.
                </td>
                <td>25 hours</td>
              </tr>
              <tr>
                <td>
                  <a href="https://www.youtube.com/watch?v=0HcWm2AHnOI&list=PLLTvOn0ouyMtZNbxp7udZIw9uZhOaw6VW&index=3">
                    <u color="red">Photo Slider</u>
                  </a>
                </td>
                <td>I created and deployed a photo slider utilizing Typescript and React.</td>
                <td>1.5 hours</td>
              </tr>
              <tr>
                <td>
                  <a href="https://www.youtube.com/watch?v=ffEDkqfIzxM&pp=ygUOZWQgcm9oIGNoYXRib3Q%3D">
                    <u color="red">OpenAi Chat</u>
                  </a>
                </td>
                <td>I created a chat utilizing OpenAI API and React</td>
                <td>3 hours</td>
              </tr>
              <tr>
                <td>
                  <a href="https://www.udemy.com/course/javascript-object-oriented-h/">
                    <u color="red">JS OOP</u>
                  </a>
                </td>
                <td>I learned more about Object Oriented Programming with Javascript</td>
                <td>2 hours</td>
              </tr>
              <tr>
                <td>
                  <a href="https://www.udemy.com/course/complete-microsoft-sql-server-beginner-expert/">
                    <u color="red">SQL Databases</u>
                  </a>
                </td>
                <td>
                  I learned about creating queries, filtering, sorting, grouping, joining, and
                  creating tables for Microsoft SQL, MySQL, PostgreSQL, and SQLLite.
                </td>
                <td>2 hours</td>
              </tr>
              <tr>
                <td>
                  <a href="https://www.udemy.com/course/html5-fundamentals-for-beginners/">
                    <u color="red">HTML and CSS</u>
                  </a>
                </td>
                <td>I created a complete website with navigation using HTML and CSS.</td>
                <td>5 hours</td>
              </tr>
            </tbody>
          </table>
          <hr />
          <h3>Education</h3>
          <table>
            <thead>
              <tr>
                <th>University</th>
                <th>Degree</th>
                <th>Dates</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>University of Houston</td>
                <td>Master of Education</td>
                <td>8/13 - 12/15</td>
              </tr>
              <tr>
                <td>University of Houston</td>
                <td>Bachelor of Architecture</td>
                <td>8/02 - 12/07</td>
              </tr>
            </tbody>
          </table>
          <hr />
          <h3>Work Experience</h3>
          <table>
            <thead>
              <tr>
                <th>Employer</th>
                <th>Title</th>
                <th>Duty</th>
                <th>Dates</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Sheldon ISD</td>
                <td>STEM English</td>
                <td>
                  I created curriculum and lesson plans that incorporated real-world problems,
                  collaborated with educators to facilitate student innovation and practice, and
                  evaluated learners' ability to self-realize their potential as innovative
                  practitioners of science, technology, engineering, and math.
                </td>
                <td>2019 to 2023</td>
              </tr>
              <tr>
                <td>Houston ISD</td>
                <td>Writing Teacher</td>
                <td>
                  I created lessons for a diverse population of students, strengthening fundamental
                  grammar and punctuation concepts through reading comprehension and
                  student-centered activities.
                </td>
                <td>2018 to 2019</td>
              </tr>
              <tr>
                <td>Pasadena ISD</td>
                <td>English Teacher</td>
                <td>
                  I created curriculum for a diverse range of learners by creating activities and
                  station routines to meet students at their learning level.
                </td>
                <td>2016 to 2018</td>
              </tr>
              <tr>
                <td>Curry Boudreaux Architects</td>
                <td>Architectural Designer</td>
                <td>
                  I created technical construction documents and specifications from schematics to
                  final construction, with a focus on medical building renovations. I used software
                  such as AutoCAD to create permit and shop documents, and Adobe Suite (Photoshop,
                  InDesign, Illustrator) to create marketing materials and presentations.
                </td>
                <td>2010 to 2013</td>
              </tr>
              <tr>
                <td>Gary Design and Associates</td>
                <td>Architectural Designer</td>
                <td>
                  I created the firm's stationery and logo design, and assisted with renovation
                  blueprints for various mini-mansion homes. I used my design and drafting skills to
                  create a cohesive brand identity for the firm, and to help clients visualize their
                  dream homes.
                </td>
                <td>2009</td>
              </tr>
              <tr>
                <td>Kendall Heaton and Associates</td>
                <td>Architectural Designer</td>
                <td>
                  As a technical construction document creator in an architectural record firm, I
                  helped realize the infrastructural design for fire egress in a multimillion
                  highrise. I also handled the design interiors for commercial restrooms in that
                  building. I used my skills in drafting and design to create accurate and detailed
                  drawings that helped ensure the safety and comfort of the building's occupants.
                </td>
                <td>2008</td>
              </tr>
            </tbody>
          </table>
          <hr />
        </Prose>
      </Container>
    </Box>
  );
};

export default About;
