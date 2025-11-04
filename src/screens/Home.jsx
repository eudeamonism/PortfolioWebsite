import {
  Container,
  Box,
  Center,
  Image,
  Heading,
  HStack,
  Link,
  Button,
} from "@chakra-ui/react";
import { Prose } from "@nikolovlazar/chakra-ui-prose";
import { NavLink } from "react-router-dom";
import { AiOutlineGithub } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { FcDocument } from "react-icons/fc";

const Home = () => {
  return (
    <>
      <NavLink to="/about">
        <Box pt={{ base: "20px", xl: "40px" }}>
          {/* Profile Photo */}
          <Center>
            <Image
              src="/assets/VargasEvanProfileSquare.jpg"
              boxSize={{ base: "175px", md: "275px", xl: "375px" }}
              borderRadius="full"
              boxShadow="base"
              alt="Evan Vargas profile photo"
            />
          </Center>

          {/* Heading */}
          <Heading
            as="h1"
            color="#FF9E0D"
            fontSize={{ base: "2xl", md: "3xl", xl: "4xl" }}
            textAlign="center"
            mt={4}
          >
            About Me
          </Heading>

          {/* Main Content */}
          <Container w="full" maxW="container.xl" mt={-2} minW="sm">
            <Prose>
              <p style={{ color: "#1B4F8C" }}>
                I’m <strong>Evan Vargas</strong>, a full-stack and automation engineer with strong experience
                across <strong>JavaScript (React, Node.js, TypeScript)</strong>, <strong>.NET / C# APIs</strong>,
                and <strong>Python automation</strong>. My background blends architectural logic with modern
                software workflows — from designing user interfaces in <strong>Next.js 15</strong> and
                <strong> Chakra UI</strong> to building internal process automation for
                <strong> Revit and BIM environments</strong> using C#, .NET Framework, and Dynamo scripting.
              </p>

              <p style={{ color: "#1B4F8C" }}>
                My work bridges front-end polish with backend precision. I’ve deployed secure, high-performing web
                applications using the <strong>MERN stack</strong>, built RESTful APIs in both <strong>Node.js</strong>
                and <strong>.NET</strong>, and designed data flows with <strong>Python</strong> and
                <strong> SQL Server / Power BI</strong> for reporting and automation.
                Accessibility, consistency, and maintainability are central to how I approach every system.
              </p>

              <h3 style={{ color: "#FF9E0D" }}>Technical Core & Specializations</h3>
              <ul>
                <li>
                  <strong>Modern Web Development</strong> — React, Next.js 15 App Router, Redux Toolkit, TypeScript,
                  responsive UI design, and ADA/WCAG-compliant interfaces.
                </li>
                <li>
                  <strong>Backend Engineering</strong> — Node.js + Express APIs, C#/.NET Web APIs,
                  database modeling with MongoDB, SQL Server, and PostgreSQL.
                </li>
                <li>
                  <strong>Automation & BIM Integration</strong> — Revit API scripting with C# and Python;
                  custom toolbars and Dynamo workflows; bridging CAD and data automation.
                </li>
                <li>
                  <strong>Cloud & DevOps</strong> — Vercel, Render, Azure and AWS basics, CI/CD pipelines, Git versioning,
                  and collaborative workflow documentation.
                </li>
                <li>
                  <strong>Data Visualization</strong> — Power BI dashboards, Excel automation, and lightweight
                  ETL via Python/pandas.
                </li>
              </ul>

              <h3 style={{ color: "#FF9E0D" }}>Professional Mindset</h3>
              <p style={{ color: "#1B4F8C", marginBottom: "80px" }}>
                I combine an educator’s clarity with a builder’s discipline. I enjoy improving systems that people
                use daily — whether that’s a BIM plugin, a project dashboard, or a responsive interface for client data.
                My workflow emphasizes clarity in code, concise documentation, and performance-minded design
                that benefits both users and maintainers.
              </p>
            </Prose>

            
          </Container>
        </Box>
      </NavLink>
    </>
  );
};

export default Home;
