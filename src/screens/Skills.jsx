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
              forms, keyboard navigation, and component composition.
            </li>
            <li>
              <b>Node.js (Proficient)</b> &emsp; REST APIs with Express; request/response lifecycle,
              middleware, validation, auth, and error handling.
            </li>
            <li>
              <b>C#/.NET (Familiar → Growing)</b> &emsp; REST patterns, basic web APIs, and WPF/XAML
              bindings; applying MVVM for separation of concerns.
            </li>
          </ul>

          <hr />
          <h4>Front End</h4>
          <ul>
            <li>
              <b>React 18</b> &emsp; Hooks, custom hooks, controlled forms, client/server component
              boundaries, and performance hygiene.
            </li>
            <li>
              <b>Next.js 15 (App Router)</b> &emsp; Routing, layouts, metadata, SSR/ISR, route
              handlers, and deployment on Vercel.
            </li>
            <li>
              <b>Tailwind CSS 4</b> &emsp; Utility-first, responsive design tokens, dark mode, and
              component patterns that complement Chakra UI.
            </li>
            <li>
              <b>Chakra UI</b> &emsp; Accessible primitives, theming, tokens, and rapid prototyping.
            </li>
            <li>
              <b>CSS Layout</b> &emsp; Flexbox & Grid, fluid typography, container queries, and
              cross-browser consistency.
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
              <b>Power BI</b> &emsp; Data modeling (star schema), relationships, calculated columns,
              <b> DAX</b> measures, slicers/filters, drill-downs, and storytelling dashboards from
              Excel/CSV/SQL sources.
            </li>
          </ul>

          <hr />
          <h4>Desktop & Automation</h4>
          <ul>
            <li>
              <b>WPF / XAML (Familiar → Growing)</b> &emsp; MVVM, bindings, commands, and simple
              forms/dialogs for internal tools and automation UIs.
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
