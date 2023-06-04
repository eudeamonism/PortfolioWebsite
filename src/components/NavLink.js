import { NavLink as ReactRouterNavLink } from "react-router-dom";
import { Link } from "@chakra-ui/react";
import { motion } from "framer-motion";

export const NavLink = ({ to, onClick, active, children }) => {
  return (
    <Link
      as={ReactRouterNavLink}
      to={to}
      onClick={onClick}
      fontWeight={active ? "bold" : "normal"}
      color={active ? "#0067D6" : "#1B4F8C"}
      textDecoration="none"
      marginRight={4}
      marginTop={4}
      style={{ textDecoration: "none" }}
    >
      <motion.div whileHover={{ scale: 1.2 }}>{children}</motion.div>
    </Link>
  );
};
