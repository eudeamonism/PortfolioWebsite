import { extendTheme } from "@chakra-ui/react";
import { withProse } from "@nikolovlazar/chakra-ui-prose";

const modernTheme = extendTheme(
  {
    fonts: {
      heading: `'Open Sans', sans-serif`,
      body: `'Raleway', sans-serif`,
    },
  },
  withProse({
    baseStyle: {
      h3: {
        color: '#1796F3',
      },
      h4: {
        color: '#FF9E0D',
      },
      thead:{
        color: '#FF9E0D'
      },
      tbody: {
        color: '#1B4F8C'
      },
      li: {
        color: '#1B4F8C'
      },
      p: {
        color: '#1B4F8C'
      },
      u: {
        color: '#1796F3'
      }
    }
  })
);

export default modernTheme;
