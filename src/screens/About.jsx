import { Box, Container, Heading } from "@chakra-ui/react";
import { Prose } from "@nikolovlazar/chakra-ui-prose";

const About = () => {
  return (
    <>
      <Heading
        as="h1"
        fontSize={{ base: "2xl", md: "3xl", xl: "4xl" }}
        textAlign="center"
        pt={{ base: "20px", xl: "40px" }}
        color={"#1796F3"}
      >
        Experience
      </Heading>
      <Container maxW={"container.xl"} pt="10" minW={"lg"}>
        <Box pt={{ base: "20px", xl: "40px" }}>
          <Container w="full" minW={"lg"} maxW="container.xl" mt={-12} borderWidth={"1px"}>
            <Prose>
              <h4>Certifications</h4>
              <table>
                <thead>
                  <tr>
                    <th>Type</th>
                    <th>Description</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <a
                        target="_blank"
                        href="https://www.credly.com/earner/earned/badge/5f4da139-2cb2-400c-89f0-cb0c3692bc7d"
                      >
                        <u>AWS Educate Getting Started with Cloud Ops</u>
                      </a>
                    </td>
                    <td>
                    Earners of this badge have completed the Getting Started with Cloud Operations training and achieved the required scores on the post-course assessment. They have demonstrated the ability to define the Well-Architected Framework and identify how to use AWS services to manage their AWS Cloud environment.
                    </td>
                    <td>10/03/23</td>
                  </tr>
                  <tr>
                    <td>
                      <a
                        target="_blank"
                        href="https://www.credly.com/earner/earned/badge/715e5b98-b28c-48d3-b0db-6a2d9579fa7d"
                      >
                        <u>AWS Educate Getting Started with Databases</u>
                      </a>
                    </td>
                    <td>
                      Earners of this badge have completed the Getting Started with Databases
                      training and achieved the required scores on the post-course assessment. They
                      have demonstrated the ability to set up an Amazon Relational Database instance
                      and how to use SQL commands to read and write to the database.
                    </td>
                    <td>10/03/23</td>
                  </tr>

                  <tr>
                    <td>
                      <a
                        target="_blank"
                        href="https://www.credly.com/earner/earned/badge/ab89689d-871c-45fa-94dc-cf77b26c1bf0"
                      >
                        <u>AWS Educate Getting Started with Compute</u>
                      </a>
                    </td>
                    <td>
                      Earners of this badge have completed the Getting Started with Compute training
                      and achieved the required scores on the post-course assessment. They have
                      demonstrated the ability to describe different types of compute and use Amazon
                      EC2 to create a compute instance.
                    </td>
                    <td>10/03/23</td>
                  </tr>
                  <tr>
                    <td>
                      <a
                        target="_blank"
                        href="https://www.credly.com/earner/earned/badge/b9c6035a-09ec-4cbe-b4b1-f7beacb956eb"
                      >
                        <u>AWS Educate Getting Started with Networking</u>
                      </a>
                    </td>
                    <td>
                      Earners of this badge have completed the Getting Started with Networking
                      training and achieved the required scores on the post-course assessment. They
                      have demonstrated the ability to describe different ways to manage a network
                      and how to use an Amazon VPC to do so.
                    </td>
                    <td>10/03/23</td>
                  </tr>
                  <tr>
                    <td>
                      <a
                        target="_blank"
                        href="https://www.credly.com/badges/d65b8e5b-f2f3-4419-8048-2b1ee772c3ee"
                      >
                        <u>AWS Educate Getting Started with Storage</u>
                      </a>
                    </td>
                    <td>
                      Earners of this badge have completed the Getting Started with Storage training
                      and achieved the required scores on the post-course assessment. They have
                      demonstrated the ability to describe storage solutions and use Amazon S3 to
                      store and retrieve objects.
                    </td>
                    <td>10/01/23</td>
                  </tr>
                </tbody>
              </table>
              <h4>Continuing Education</h4>
              <table>
                <thead>
                  <tr>
                    <th>Courses</th>
                    <th>Skills Gained</th>
                    <th>Course</th>
                    <th>Practice</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <a
                        target="_blank"
                        href="https://www.udemy.com/course/learn-to-build-an-e-commerce-app-with-react-and-chakra-ui/"
                      >
                        <u>Online Ecommerce Website</u>
                      </a>
                    </td>
                    <td>
                      I learned how to create a fully functional e-commerce application using React,
                      Redux, NodeJS, Express, MongoDB, PayPal, JSON tokens, bcrypt, Yup, Formik,
                      Git, and GitHub. I created a user interface with React and Redux, made CRUD
                      API calls with NodeJS and Express, stored data in MongoDB, accepted payments
                      with PayPal, authenticated users with JSON tokens and bcrypt, handled errors
                      with Yup and Formik, versioned my code with Git and GitHub, and styled my
                      application with Chakra UI. Additionally, I created user and administrator
                      login accounts where the administrator has editing privileges such that he can
                      add or remove users and products while the user can add and remove products
                      and update his credentials.
                    </td>
                    <td>21 hours</td>
                    <td>60 hours+</td>
                  </tr>
                  <tr>
                    <td>
                      <a
                        target="_blank"
                        href="https://www.udemy.com/course/react-nodejs-express-mongodb-the-mern-fullstack-guide/"
                      >
                        <u color="red">MERN Applicatons</u>
                      </a>
                    </td>
                    <td>
                      I created a full-stack event application with a variety of CRUD APIs. It also
                      has user login and authentication. I learned how to utilize React and various
                      ways of state management, such as props and Redux, while creating CRUD APIs
                      with NodeJS and housing data in MongoDB.
                    </td>
                    <td>19 hours</td>
                    <td>50 hours+</td>
                  </tr>
                  <tr>
                    <td>
                      <a
                        target="_blank"
                        href="https://www.udemy.com/course/react-the-complete-guide-incl-redux/"
                      >
                        <u color="red">React</u>
                      </a>
                    </td>
                    <td>
                      I took refresher exercises on JavaScript specific concepts endemic to React. I
                      learned how to create mini applications that utilize React hooks, such as
                      useEffect, useState, and useReducer, while exploring various strategies for
                      state management through portals, refs, and introduction to TypeScript.
                    </td>
                    <td>48 hours</td>
                    <td>60 hours+</td>
                  </tr>
                  <tr>
                    <td>
                      <a
                        target="_blank"
                        href="https://www.udemy.com/course/nodejs-express-mongodb-bootcamp/"
                      >
                        <u color="red">NodeJS Bootcamp</u>
                      </a>
                    </td>
                    <td>
                      I created a modern back-end stack utilizing NodeJS, Express, MongoDB, and
                      Mongoose. I used server-side rendering with Pug templating instead of React. I
                      created a RESTful API with CRUD operations, and I added filters and
                      pagination. I implemented authentication and authorization, including password
                      reset. I learned about security, encryption, and sanitization, and I
                      implemented these concepts in my application, which was a tourist retreat
                      website.
                    </td>
                    <td>35 hours</td>
                    <td>70 hours+</td>
                  </tr>
                  <tr>
                    <td>
                      <a
                        target="_blank"
                        href="https://www.udemy.com/course/javascript-the-complete-guide-2020-beginner-advanced/"
                      >
                        <u color="red">Javascript Bootcamp</u>
                      </a>
                    </td>
                    <td>
                      I learned fundamental concepts of JavaScript that allow me to write effective
                      functions, handle data, understand prototypes, handle events, manipulate the
                      DOM, and strengthen object-oriented programming concepts.
                    </td>
                    <td>25 hours</td>
                    <td>50 hours+</td>
                  </tr>
                  <tr>
                    <td>
                      <a
                        target="_blank"
                        href="https://www.youtube.com/watch?v=0HcWm2AHnOI&list=PLLTvOn0ouyMtZNbxp7udZIw9uZhOaw6VW&index=3"
                      >
                        <u color="red">Photo Slider</u>
                      </a>
                    </td>
                    <td>I created and deployed a photo slider utilizing Typescript and React.</td>
                    <td>1.5 hours</td>
                    <td>5 hours+</td>
                  </tr>
                  <tr>
                    <td>
                      <a
                        target="_blank"
                        href="https://www.youtube.com/watch?v=ffEDkqfIzxM&pp=ygUOZWQgcm9oIGNoYXRib3Q%3D"
                      >
                        <u color="red">OpenAi Chat</u>
                      </a>
                    </td>
                    <td>I created a chat utilizing OpenAI API and React</td>
                    <td>3 hours</td>
                    <td>10 hours+</td>
                  </tr>
                  <tr>
                    <td>
                      <a
                        target="_blank"
                        href="https://www.udemy.com/course/javascript-object-oriented-h/"
                      >
                        <u color="red">JS OOP</u>
                      </a>
                    </td>
                    <td>I learned more about Object Oriented Programming with Javascript</td>
                    <td>2 hours</td>
                    <td>3 hours+</td>
                  </tr>
                  <tr>
                    <td>
                      <a
                        target="_blank"
                        href="https://www.udemy.com/course/complete-microsoft-sql-server-beginner-expert/"
                      >
                        <u color="red">SQL Databases</u>
                      </a>
                    </td>
                    <td>
                      I learned about creating queries, filtering, sorting, grouping, joining, and
                      creating tables for Microsoft SQL, MySQL, PostgreSQL, and SQLLite.
                    </td>
                    <td>2 hours</td>
                    <td>5 hours+</td>
                  </tr>
                  <tr>
                    <td>
                      <a
                        target="_blank"
                        href="https://www.udemy.com/course/html5-fundamentals-for-beginners/"
                      >
                        <u color="red">HTML and CSS</u>
                      </a>
                    </td>
                    <td>I created a complete website with navigation using HTML and CSS.</td>
                    <td>5 hours</td>
                    <td>8 hours+</td>
                  </tr>
                </tbody>
              </table>
              <hr />
              <h4>Education</h4>
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
              <h4>Work Experience</h4>
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
                      I created lessons for a diverse population of students, strengthening
                      fundamental grammar and punctuation concepts through reading comprehension and
                      student-centered activities.
                    </td>
                    <td>2018 to 2019</td>
                  </tr>
                  <tr>
                    <td>Pasadena ISD</td>
                    <td>English Teacher</td>
                    <td>
                      I created curriculum for a diverse range of learners by creating activities
                      and station routines to meet students at their learning level.
                    </td>
                    <td>2016 to 2018</td>
                  </tr>
                  <tr>
                    <td>Curry Boudreaux Architects</td>
                    <td>Architectural Designer</td>
                    <td>
                      I created technical construction documents and specifications from schematics
                      to final construction, with a focus on medical building renovations. I used
                      software such as AutoCAD to create permit and shop documents, and Adobe Suite
                      (Photoshop, InDesign, Illustrator) to create marketing materials and
                      presentations.
                    </td>
                    <td>2010 to 2013</td>
                  </tr>
                  <tr>
                    <td>Gary Design and Associates</td>
                    <td>Architectural Designer</td>
                    <td>
                      I created the firm's stationery and logo design, and assisted with renovation
                      blueprints for various mini-mansion homes. I used my design and drafting
                      skills to create a cohesive brand identity for the firm, and to help clients
                      visualize their dream homes.
                    </td>
                    <td>2009</td>
                  </tr>
                  <tr>
                    <td>Kendall Heaton and Associates</td>
                    <td>Architectural Designer</td>
                    <td>
                      As a technical construction document creator in an architectural record firm,
                      I helped realize the infrastructural design for fire egress in a multimillion
                      highrise. I also handled the design interiors for commercial restrooms in that
                      building. I used my skills in drafting and design to create accurate and
                      detailed drawings that helped ensure the safety and comfort of the building's
                      occupants.
                    </td>
                    <td>2008</td>
                  </tr>
                </tbody>
              </table>
              <hr />
            </Prose>
          </Container>
        </Box>
      </Container>
    </>
  );
};

export default About;
