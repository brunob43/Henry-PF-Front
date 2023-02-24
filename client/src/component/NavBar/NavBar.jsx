import { NavLink } from "react-router-dom";
import logonegro from "../../styles/images/HenryLogo.png";
import logoblanco from "../../styles/images/HenryLogoClaro.webp";
import React from "react";
import { useColorMode, Button, HStack, Image } from "@chakra-ui/react";
import { ColorModeSwitcher } from "../ColorModeSwitcher/ColorModeSwitcher";

const NavBar = (props) => {
  const { colorMode } = useColorMode();
  return (
    <div data-bs-theme="light">
      <HStack
      w='100%'
      position='fixed'
        flexDirection={["column", "column", "row"]}
        justify="space-around"
        p="10px"
        bg={colorMode === "dark" ? "black" : "yellow"}
      >
        <a href="https://www.soyhenry.com" target="_blank" rel="noreferrer">
          <Image
            p="5px"
            src={colorMode === "dark" ? logoblanco : logonegro}
            alt="Henry-Logo"
            width="240px"
            height="auto"
          ></Image>
        </a>

        <HStack flexDirection={["column", "column", "column", "row", "row"]}>
          <HStack flexDirection={["column", "row", "row", "row", "row"]}>
            <NavLink to="/">
              <Button
                variant="ghost"
                _hover={
                  colorMode === "dark"
                    ? { bg: "yellow", color: "black" }
                    : { bg: "black", color: "yellow" }
                }
              >
                HOME
              </Button>
            </NavLink>

            <NavLink to="/games">
              <Button
                variant="ghost"
                _hover={
                  colorMode === "dark"
                    ? { bg: "yellow", color: "black" }
                    : { bg: "black", color: "yellow" }
                }
              >
                GAMES
              </Button>
            </NavLink>

            <NavLink to="/docs">
              <Button
                variant="ghost"
                _hover={
                  colorMode === "dark"
                    ? { bg: "yellow", color: "black" }
                    : { bg: "black", color: "yellow" }
                }
              >
                HENRYDOCS
              </Button>
            </NavLink>
          </HStack>
          <HStack flexDirection={["column", "row", "row", "row", "row"]}>
            <NavLink to="/about">
              <Button
                variant="ghost"
                _hover={
                  colorMode === "dark"
                    ? { bg: "yellow", color: "black" }
                    : { bg: "black", color: "yellow" }
                }
              >
                ABOUT US
              </Button>
            </NavLink>
            <NavLink to="/donation">
              <Button
                variant="ghost"
                _hover={
                  colorMode === "dark"
                    ? { bg: "yellow", color: "black" }
                    : { bg: "black", color: "yellow" }
                }
              >
                DONATION
              </Button>
            </NavLink>
            <NavLink to="/login">
              <Button
                variant="ghost"
                _hover={
                  colorMode === "dark"
                    ? { bg: "yellow", color: "black" }
                    : { bg: "black", color: "yellow" }
                }
                src=" "
                alt=" "
              >
                LOGIN
              </Button>
            </NavLink>
          </HStack>
          <ColorModeSwitcher />
        </HStack>
      </HStack>
    </div>
  );
};

export default NavBar;
