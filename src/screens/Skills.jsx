import { Heading, Container } from "@chakra-ui/react";
import { Prose } from "@nikolovlazar/chakra-ui-prose";

const Skills = () => {
  return (
    <Container maxW="container.xl" minW="lg">
      <Heading
        as="h1"
        fontSize={{ base: "2xl", md: "3xl", xl: "4xl" }}
        textAlign="center"
        pt={{ base: "20px", xl: "40px" }}
        color="#1796F3"
      >
        Technical Skills
      </Heading>

      <Container maxW="container.xl" borderWidth="1px" mt="3" p={{ base: 3, md: 6 }}>
        <Prose>
          <h4>Programming Languages</h4>
          <ul>
            <li>
              <b>TypeScript (Proficient)</b> &emsp; Strong typing for React/Next.js apps:
              interfaces, unions, generics, utility types; safer props, API DTOs, and store slices.
            </li>
            <li>
              <b>JavaScript/ESNext (Advanced)</b> &emsp; Functional patterns, async/await,
              array/object methods, modular architecture, and clean function design.
            </li>
            <li>
              <b>HTML & JSX (Advanced)</b> &emsp; Semantic structure, ARIA attributes, accessible
              forms, keyboard navigation, and component composition for modern UI/UX.
            </li>
            <li>
              <b>Node.js (Proficient)</b> &emsp; REST APIs with Express; request/response lifecycle,
              middleware, validation, auth, and error handling.
            </li>
            <li>
              <b>C#/.NET (Familiar → Growing)</b> &emsp; Console and web APIs, Revit plugin
              automation, and WPF/XAML-style bindings; applying MVVM to keep UI, logic, and data
              clearly separated.
            </li>
          </ul>

          <hr />
          <h4>UI/UX & Front End</h4>
          <ul>
            <li>
              <b>UI/UX & SPA Focus</b> &emsp; 3+ years designing and building Single-Page
              Applications (SPAs) with React, emphasizing component-driven design, clear user
              flows, and responsive layouts across desktop and mobile.
            </li>
            <li>
              <b>React 18</b> &emsp; Hooks, custom hooks, controlled forms, client/server component
              boundaries, and performance hygiene (memoization, code splitting, lazy loading).
            </li>
            <li>
              <b>Next.js 15 (App Router)</b> &emsp; Routing, layouts, metadata, SSR/ISR, route
              handlers, and deployment on Vercel for production SPAs and hybrid apps.
            </li>
            <li>
              <b>Chakra UI & Material UI (MUI)</b> &emsp; Accessible primitives, design systems,
              theming, and rapid prototyping of internal tools and dashboards.
            </li>
            <li>
              <b>Tailwind CSS 4</b> &emsp; Utility-first tokens, responsive design, dark mode, and
              layout patterns that complement component libraries.
            </li>
            <li>
              <b>Bootstrap (Familiar)</b> &emsp; Grid, typography, and utility classes for
              maintaining and extending legacy or quick-prototype UIs.
            </li>
            <li>
              <b>CSS Layout</b> &emsp; Flexbox & Grid, fluid typography, container queries, and
              cross-browser consistency (Chrome, Firefox, Edge, Safari).
            </li>
            <li>
              <b>Rapid Prototyping</b> &emsp; Turning requirements into HTML/CSS/JS or React
              prototypes, then iterating based on usability and feedback.
            </li>
          </ul>

          <hr />
          <h4>State Management</h4>
          <ul>
            <li>
              <b>Redux Toolkit</b> &emsp; Slices, normalized state, RTK Query for data fetching and
              caching, error boundaries, and optimistic updates.
            </li>
            <li>
              <b>MobX (Familiar)</b> &emsp; Observable state and actions for smaller reactive stores.
            </li>
            <li>
              <b>React Query (Familiar)</b> &emsp; Server-state synchronization, caching, and
              mutations where RTK Query is not used.
            </li>
          </ul>

          <hr />
          <h4>Back End & APIs</h4>
          <ul>
            <li>
              <b>Express</b> &emsp; RESTful routes, MVC organization, Joi/Zod validation, and
              structured error handling.
            </li>
            <li>
              <b>Auth</b> &emsp; JWT sessions (HTTP-only cookies or headers), bcrypt password
              hashing, role-based access control, and OTP flows.
            </li>
            <li>
              <b>Integrations</b> &emsp; PayPal, Cloudinary, and OpenAI API usage patterns; webhooks
              and secret management.
            </li>
            <li>
              <b>Testing</b> &emsp; Jest + React Testing Library for components; Cypress for
              end-to-end user flows (smoke/regression).
            </li>
          </ul>

          <hr />
          <h4>Databases</h4>
          <ul>
            <li>
              <b>MongoDB + Mongoose</b> &emsp; Schemas, indexes, validation, aggregation, and
              pagination for MERN apps.
            </li>
            <li>
              <b>SQL (Familiar)</b> &emsp; Querying and modeling with PostgreSQL/MySQL/SQL Server;
              joins, views, and basic window functions.
            </li>
          </ul>

          <hr />
          <h4>Data & Business Intelligence</h4>
<ul>
  <li>
    <b>Power BI (Intermediate)</b> &emsp; Building dashboards, modeling basic relationships,
    creating visual reports, implementing slicers/filters, and shaping data from
    Excel/CSV/SQL sources.
  </li>
</ul>


          <hr />
          <h4>Desktop, BIM & Automation</h4>
<ul>
  <li>
    <b>WPF / XAML (Familiar → Growing)</b> &emsp; MVVM, bindings, commands, and simple
    forms/dialogs for internal tools and automation UIs. Experience developing C#-based
    interfaces for BIM workflows positions me to quickly adapt these skills to Tekla or
    similar .NET plugin ecosystems.
  </li>
  <li>
    <b>BIM Automation (Revit + Dynamo + C#)</b> &emsp; Developing plugins and scripts that
    operate on 3D models, parameters, and views; experience with geometry-driven logic and
    data workflows commonly found in structural and architectural automation.
  </li>
</ul>


          <hr />
          <h4>Tooling & DevOps</h4>
          <ul>
            <li>
              <b>Git & GitHub</b> &emsp; Conventional commits, PR reviews, branching strategies, and
              project board hygiene.
            </li>
            <li>
              <b>Build/Deploy</b> &emsp; Vite and Next build pipelines, environment variables,
              preview/staging on Vercel, and basic Azure/AWS familiarity.
            </li>
            <li>
              <b>Quality</b> &emsp; ESLint + Prettier, type-safe APIs, and CI-ready testing
              patterns.
            </li>
          </ul>
        </Prose>
      </Container>
    </Container>
  );
};

export default Skills;
