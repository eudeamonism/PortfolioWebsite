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
          <Container
            w="full"
            minW={"lg"}
            maxW="container.xl"
            mt={-12}
            borderWidth={"1px"}
          >
            <Prose>
              {/* =========================
                  WORK EXPERIENCE (TABLE STYLE)
                 ========================= */}
              <h4>Work Experience</h4>
              <table>
                <thead>
                  <tr>
                    <th>Employer</th>
                    <th>Title</th>
                    <th>Duty / Highlights</th>
                    <th>Dates</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>VLK Architects · Houston, TX</td>
                    <td>Software Dev — BIM Automation & Plugins</td>
                    <td>
                      Built Revit plugins and internal tooling in <strong>C#/.NET</strong>,{" "}
                      <strong>Dynamo</strong>, and <strong>Python</strong> to automate
                      renumbering, sheet data, and room/door workflows across BIM models;
                      designed plugin UI panels and interaction flows for internal users;
                      authored multi-level documentation and delivered training; integrated
                      Qualtrics/ACC/Azure for process automation and explored Microsoft
                      Fabric paths for future data workflows.
                    </td>
                    <td>Jul 2024 – Mar 2025</td>
                  </tr>

                  <tr>
                    <td>Freelance · Houston, TX</td>
                    <td>Full-Stack Web Developer</td>
                    <td>
                      Delivered Single-Page Applications (SPAs) with the{" "}
                      <strong>MERN stack</strong>, <strong>Redux</strong>, and{" "}
                      <strong>JWT</strong> auth; designed responsive, component-driven UIs
                      in React/Chakra/Tailwind with attention to UX and accessibility;
                      implemented REST APIs and Cloudinary uploads; deployed on
                      Vercel/Render; validated user flows with Jest/RTL/Cypress; added
                      real-time chat via WebSocket/Socket.io and verified behavior across
                      modern browsers.
                    </td>
                    <td>Jul 2023 – Apr 2024</td>
                  </tr>

                  <tr>
                    <td>Delca Design Group</td>
                    <td>Project Manager (Architecture)</td>
                    <td>
                      Coordinated record drawings for existing complex; revisions for café
                      kitchen layouts; planning for food production areas; maintained
                      stakeholder alignment, RFIs, and documentation control across design
                      iterations.
                    </td>
                    <td>2024</td>
                  </tr>

                  <tr>
                    <td>Houston-area ISDs</td>
                    <td>Educator (STEM, English & Writing)</td>
                    <td>
                      Project-based instruction; integrated Google/Microsoft tooling; created
                      outcomes-driven curricula emphasizing communication, problem-solving,
                      technical writing, and clear documentation for students and faculty.
                    </td>
                    <td>2016 – 2023</td>
                  </tr>

                  <tr>
                    <td>Curry Boudreaux Architects</td>
                    <td>Architectural Designer</td>
                    <td>
                      Produced medical/nonprofit CD sets using Revit/AutoCAD; created
                      presentations and marketing assets with Adobe Suite.
                    </td>
                    <td>2010 – 2013</td>
                  </tr>

                  <tr>
                    <td>Gary Design Architects</td>
                    <td>Architectural Designer</td>
                    <td>
                      Residential elevations; brand collateral (logo/stationery); assisted
                      renovation documentation.
                    </td>
                    <td>2009</td>
                  </tr>

                  <tr>
                    <td>Kendall Heaton Architects</td>
                    <td>Intern Architect</td>
                    <td>
                      Contributed to high-rise documentation (fire egress/interiors) using
                      Cadvance CAD.
                    </td>
                    <td>2008</td>
                  </tr>
                </tbody>
              </table>

              <hr />

              {/* =========================
                  CERTIFICATIONS
                 ========================= */}
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
                        rel="noopener noreferrer"
                        href="https://www.credly.com/badges/ec6dcaa2-249c-4926-a1da-10464e20e84d/public_url"
                      >
                        <u>AWS Educate — Getting Started with Serverless</u>
                      </a>
                    </td>
                    <td>
                      Lambda fundamentals; API Gateway, SQS/SNS usage for scalable serverless
                      patterns.
                    </td>
                    <td>10/06/23</td>
                  </tr>
                  <tr>
                    <td>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.credly.com/badges/192e218b-8baa-4fb5-808d-0197530eaa46/public_url"
                      >
                        <u>AWS Educate — Getting Started with Security</u>
                      </a>
                    </td>
                    <td>
                      IAM, core security services, least-privilege and identity best
                      practices.
                    </td>
                    <td>10/05/23</td>
                  </tr>
                  <tr>
                    <td>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.credly.com/badges/5f4da139-2cb2-400c-89f0-cb0c3692bc7d/public_url"
                      >
                        <u>AWS Educate — Getting Started with Cloud Ops</u>
                      </a>
                    </td>
                    <td>
                      Well-Architected Framework; ops tooling and environment management.
                    </td>
                    <td>10/03/23</td>
                  </tr>
                  <tr>
                    <td>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.credly.com/badges/715e5b98-b28c-48d3-b0db-6a2d9579fa7d/public_url"
                      >
                        <u>AWS Educate — Getting Started with Databases</u>
                      </a>
                    </td>
                    <td>
                      RDS setup; SQL read/write; relational modeling overview.
                    </td>
                    <td>10/03/23</td>
                  </tr>
                  <tr>
                    <td>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.credly.com/badges/ab89689d-871c-45fa-94dc-cf77b26c1bf0/public_url"
                      >
                        <u>AWS Educate — Getting Started with Compute</u>
                      </a>
                    </td>
                    <td>
                      EC2 instance fundamentals; compute families and use cases.
                    </td>
                    <td>10/03/23</td>
                  </tr>
                  <tr>
                    <td>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.credly.com/badges/b9c6035a-09ec-4cbe-b4b1-f7beacb956eb/public_url"
                      >
                        <u>AWS Educate — Getting Started with Networking</u>
                      </a>
                    </td>
                    <td>
                      VPC basics; subnets, routing, and network controls.
                    </td>
                    <td>10/03/23</td>
                  </tr>
                  <tr>
                    <td>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.credly.com/badges/d65b8e5b-f2f3-4419-8048-2b1ee772c3ee/public_url"
                      >
                        <u>AWS Educate — Getting Started with Storage</u>
                      </a>
                    </td>
                    <td>
                      S3 object storage patterns; lifecycle and retrieval.
                    </td>
                    <td>10/01/23</td>
                  </tr>
                </tbody>
              </table>

              <hr />

              {/* =========================
                  CONTINUING EDUCATION (TABLE STYLE)
                 ========================= */}
              <h4>Continuing Education</h4>
              <table>
                <thead>
                  <tr>
                    <th>Course / Source</th>
                    <th>Skills Gained</th>
                    <th>Course</th>
                    <th>Practice</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <a target="_blank" rel="noopener noreferrer" href="https://www.udemy.com/">
                        <u>Modern Front-End Development</u>
                      </a>
                    </td>
                    <td>
                      React 18, TypeScript, Next.js 15 App Router, Tailwind 4, Chakra;
                      accessibility and metadata; reusable hooks; Redux Toolkit.
                    </td>
                    <td>25 hrs</td>
                    <td>80+ hrs</td>
                  </tr>

                  <tr>
                    <td>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.typescriptlang.org/"
                      >
                        <u>TypeScript Fundamentals</u>
                      </a>
                    </td>
                    <td>
                      Typing React/Next codebases; interfaces, unions, generics; type
                      utilities; safer refactors and CI integration.
                    </td>
                    <td>15 hrs</td>
                    <td>50+ hrs</td>
                  </tr>

                  <tr>
                    <td>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://developer.mozilla.org/en-US/docs/Learn/CSS"
                      >
                        <u>CSS Flexbox & Grid</u>
                      </a>
                    </td>
                    <td>
                      Responsive multi-column layouts; adaptive nav; alignment/wrapping
                      strategies across browsers.
                    </td>
                    <td>10 hrs</td>
                    <td>40+ hrs</td>
                  </tr>

                  <tr>
                    <td>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://nextjs.org/learn"
                      >
                        <u>Next.js 15 & Full-Stack Integration</u>
                      </a>
                    </td>
                    <td>
                      Server/Client Components, SSR/ISR; API routes with MongoDB/Prisma;
                      Vercel deploys; perf/accessibility tuning.
                    </td>
                    <td>20 hrs</td>
                    <td>60+ hrs</td>
                  </tr>

                  <tr>
                    <td>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://learn.microsoft.com/en-us/dotnet/desktop/wpf/"
                      >
                        <u>WPF Forms & MVVM</u>
                      </a>
                    </td>
                    <td>
                      XAML data-binding; events; MVVM separation; prototyping dropdowns,
                      forms, and simple dialogs.
                    </td>
                    <td>10 hrs</td>
                    <td>30+ hrs</td>
                  </tr>

                  <tr>
                    <td>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://learn.microsoft.com/en-us/power-bi/"
                      >
                        <u>Power BI</u>
                      </a>
                    </td>
                    <td>
                      Intro to data modeling concepts, basic DAX, and building interactive
                      dashboards from Excel/CSV/SQL sources.
                    </td>
                    <td>20 hrs</td>
                    <td>50+ hrs</td>
                  </tr>

                  <tr>
                    <td>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://developer.mozilla.org/"
                      >
                        <u>Documentation-Driven Development</u>
                      </a>
                    </td>
                    <td>
                      Doc-first builds; GitHub workflows; debugging across stack; UI/UX
                      refinements with production-style projects.
                    </td>
                    <td>Ongoing</td>
                    <td>Continuous</td>
                  </tr>

                  <tr>
                    <td>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.udemy.com/course/learn-to-build-an-e-commerce-app-with-react-and-chakra-ui/"
                      >
                        <u>Online E-commerce (React/Chakra)</u>
                      </a>
                    </td>
                    <td>
                      MERN + Redux; PayPal integration; JWT/bcrypt; Formik/Yup; error
                      handling and deployment flows.
                    </td>
                    <td>21 hrs</td>
                    <td>60+ hrs</td>
                  </tr>

                  <tr>
                    <td>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.udemy.com/course/react-nodejs-express-mongodb-the-mern-fullstack-guide/"
                      >
                        <u>MERN Applications</u>
                      </a>
                    </td>
                    <td>
                      CRUD APIs; auth; React state strategies (props, Redux); MongoDB
                      modeling.
                    </td>
                    <td>19 hrs</td>
                    <td>50+ hrs</td>
                  </tr>

                  <tr>
                    <td>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.udemy.com/course/react-the-complete-guide-incl-redux/"
                      >
                        <u>React (incl. Redux)</u>
                      </a>
                    </td>
                    <td>
                      Hooks (useEffect/useState/useReducer); portals/refs; TS intro in React
                      apps.
                    </td>
                    <td>48 hrs</td>
                    <td>60+ hrs</td>
                  </tr>

                  <tr>
                    <td>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.udemy.com/course/nodejs-express-mongodb-bootcamp/"
                      >
                        <u>Node.js Bootcamp</u>
                      </a>
                    </td>
                    <td>
                      Express/Mongoose; REST + filters/pagination; auth & password reset;
                      security/sanitization; Pug SSR.
                    </td>
                    <td>35 hrs</td>
                    <td>70+ hrs</td>
                  </tr>

                  <tr>
                    <td>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.udemy.com/course/javascript-the-complete-guide-2020-beginner-advanced/"
                      >
                        <u>JavaScript Bootcamp</u>
                      </a>
                    </td>
                    <td>
                      Functions, data structures, prototypes, events, DOM manipulation, OOP.
                    </td>
                    <td>25 hrs</td>
                    <td>50+ hrs</td>
                  </tr>

                  <tr>
                    <td>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.youtube.com/watch?v=0HcWm2AHnOI&list=PLLTvOn0ouyMtZNbxp7udZIw9uZhOaw6VW&index=3"
                      >
                        <u>Photo Slider (TS + React)</u>
                      </a>
                    </td>
                    <td>
                      Deployed animated slider with TS/React; responsive styling and asset
                      handling.
                    </td>
                    <td>1.5 hrs</td>
                    <td>5+ hrs</td>
                  </tr>

                  <tr>
                    <td>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.youtube.com/watch?v=ffEDkqfIzxM"
                      >
                        <u>OpenAI Chat (Vite + React)</u>
                      </a>
                    </td>
                    <td>
                      OpenAI API integration; role routing; auth gate; basic
                      moderation/filters.
                    </td>
                    <td>3 hrs</td>
                    <td>10+ hrs</td>
                  </tr>

                  <tr>
                    <td>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.udemy.com/course/javascript-object-oriented-h/"
                      >
                        <u>JS OOP</u>
                      </a>
                    </td>
                    <td>
                      OOP patterns in JS; classes, inheritance, composition.
                    </td>
                    <td>2 hrs</td>
                    <td>3+ hrs</td>
                  </tr>

                  <tr>
                    <td>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.udemy.com/course/complete-microsoft-sql-server-beginner-expert/"
                      >
                        <u>SQL Databases</u>
                      </a>
                    </td>
                    <td>
                      Querying, grouping, joining across SQL Server/MySQL/PostgreSQL/SQLite.
                    </td>
                    <td>2 hrs</td>
                    <td>5+ hrs</td>
                  </tr>

                  <tr>
                    <td>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.udemy.com/course/html5-fundamentals-for-beginners/"
                      >
                        <u>HTML & CSS</u>
                      </a>
                    </td>
                    <td>
                      Semantic structure; navigation; responsive page composition.
                    </td>
                    <td>5 hrs</td>
                    <td>8+ hrs</td>
                  </tr>
                </tbody>
              </table>

              <hr />

              {/* =========================
                  EDUCATION (TABLE STYLE)
                 ========================= */}
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
                    <td>08/2013 – 12/2015</td>
                  </tr>
                  <tr>
                    <td>University of Houston</td>
                    <td>Bachelor of Architecture</td>
                    <td>08/2002 – 12/2007</td>
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
