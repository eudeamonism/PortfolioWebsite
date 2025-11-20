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
    I’m <strong>Evan Vargas</strong>, a full-stack and automation engineer with hands-on experience
    across <strong>JavaScript (React, Node.js, TypeScript)</strong>, <strong>.NET / C# APIs</strong>,
    and <strong>Python automation</strong>. I blend architectural logic with modern software design—
    from building interfaces in <strong>Next.js 15</strong> and <strong>Chakra UI</strong> to developing
    internal automation for <strong>Revit and BIM environments</strong> using C#, the .NET Framework,
    and Dynamo scripting.
  </p>

  <p style={{ color: "#1B4F8C" }}>
    I deliver systems that pair front-end clarity with backend reliability. My work includes secure
    MERN applications, REST APIs in both <strong>Node.js</strong> and <strong>.NET</strong>, and data
    pipelines using <strong>Python</strong>, <strong>SQL Server</strong>, and <strong>Power BI</strong>.
    My core priorities are accessibility, predictable data flow, maintainable code, and clean UI/UX.
  </p>

  <h3 style={{ color: "#FF9E0D" }}>Technical Core & Specializations</h3>
  <ul>
    <li>
      <strong>Modern Web Development</strong> — React, Next.js 15 App Router, Redux Toolkit, TypeScript,
      responsive layouts, and WCAG-aligned UI patterns.
    </li>
    <li>
      <strong>Backend Engineering</strong> — Node.js/Express APIs, C#/.NET Web APIs,
      and database modeling with MongoDB, SQL Server, and PostgreSQL.
    </li>
    <li>
      <strong>Automation & BIM Tools</strong> — C# and Python scripting for Revit API, custom toolbars,
      Dynamo workflows, and CAD-to-data process automation.
    </li>
    <li>
      <strong>Cloud & DevOps</strong> — Vercel deployments, environment management, Git-based workflows,
      and foundational Azure/AWS knowledge.
    </li>
    <li>
      <strong>Data Visualization</strong> — Power BI dashboards, Excel automation, and lightweight
      ETL solutions with Python and pandas.
    </li>
  </ul>

  <h3 style={{ color: "#FF9E0D" }}>Professional Mindset</h3>
  <p style={{ color: "#1B4F8C", marginBottom: "80px" }}>
    I like building tools that remove friction—whether that’s a BIM plugin, a workflow dashboard,
    or a responsive front-end experience. My workflow emphasizes clear communication, structured
    documentation, performance-minded design, and long-term maintainability for teams and end-users.
  </p>
</Prose>


            
          </Container>
        </Box>
      </NavLink>
    </>
  );
};

export default Home;
