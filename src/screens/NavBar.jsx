import React, { useState } from "react";

import {
  Box,
  Flex,
  useMediaQuery,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Text,
} from "@chakra-ui/react";
import TitleNav from "../components/TitleNav";
import { HamburgerIcon } from "@chakra-ui/icons";
import { NavLink } from "../components/NavLink";

const NavBar = () => {
  const [activeLink, setActiveLink] = useState(null);

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const [isLargerThan500] = useMediaQuery("(min-width: 500px)");

  return (
    <Box>
      {isLargerThan500 ? (
        <>
          <Flex flexDirection="row" justifyContent="space-evenly">
            <TitleNav />
            <NavLink
              to="/about"
              onClick={() => handleLinkClick("/about")}
              active={activeLink === "/about"}
            >
              <Text fontSize={{ base: "md", md: "lg", xl: "xl" }}>Experience</Text>
            </NavLink>
            <NavLink
              to="/skills"
              onClick={() => handleLinkClick("/skills")}
              active={activeLink === "/skills"}
            >
              <Text fontSize={{ base: "md", md: "lg", xl: "xl" }}>Skills</Text>
            </NavLink>
            <NavLink
              to="/projects"
              onClick={() => handleLinkClick("/projects")}
              active={activeLink === "/projects"}
            >
              <Text fontSize={{ base: "md", md: "lg", xl: "xl" }}>Projects</Text>
            </NavLink>
            <NavLink to="/contact" onClick={() => handleLinkClick("/contact")}>
              <Text fontSize={{ base: "md", md: "lg", xl: "xl" }}>Contact</Text>
            </NavLink>
          </Flex>
        </>
      ) : (
        <Flex mt="4" gap="4">
          <Menu isLazy>
            <MenuButton as={Button} rightIcon={<HamburgerIcon />} variant="link" fontSize="xl" />
            <MenuList>
              <MenuItem as="a" href="/">
                Home
              </MenuItem>
            </MenuList>
          </Menu>
          <Text style={{ fontSize: "large", fontWeight: "bold" }}>Evan Vargas</Text>
        </Flex>
      )}
    </Box>
  );
};

export default NavBar;
