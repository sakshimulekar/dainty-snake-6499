import { useState } from "react";
import { navArr } from "../components/constant/constant";
import {
  Box,
  Flex,
  IconButton,
  Image,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  VStack,
  Link,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import ToggleButton from "./Toggle";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [toggleNav, setToggleNav] = useState(navArr);

  const handleMenuOpen = () => {
    setIsMenuOpen(true);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      padding={4}
      backgroundColor="sky"
      color="grey.800"
      position={"sticky"}
    >
      <Flex align="center">
        <Box marginRight={4}>
          <IconButton
            icon={<HamburgerIcon boxSize={6}  />}
            aria-label="Open Menu"
            variant="ghost"
            color={"white"}
            
            onClick={handleMenuOpen}
          />
          <Drawer
            placement="left"
            onClose={handleMenuClose}
            isOpen={isMenuOpen}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader align="center">Gamer's Arena</DrawerHeader>
              <ToggleButton setToggleNav={setToggleNav} />
              <DrawerBody>
                <Box maxH="xlg" overflowY="auto">
                  <VStack spacing={4} align="start">
                    {toggleNav.map((e) => (
                      <Link href="#">
                        <div
                          style={{
                            width: "250px",
                            height: "30px",
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <img
                            style={{
                              aspectRatio: 5 / 7,
                              objectFit: "contain",
                              backgroundColor: "white",
                            }}
                            src={e.img}
                            alt="logo"
                          />
                          <div style={{ textAlign: "left", width: "80%" }}>
                            {e.title}
                          </div>
                          <div>
                            <img
                              height="20"
                              width="15px"
                              style={{ background: "white" }}
                              src="https://cdn-icons-png.flaticon.com/512/32/32213.png"
                              alt="logo"
                            />
                          </div>
                        </div>
                      </Link>
                    ))}
                  </VStack>
                </Box>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Box>
        <Box color={"white"}>
          <img src="navLog.png" width="200px" />
        </Box>
      </Flex>
      <Button variant="outline" colorScheme="white" backgroundColor="orange.700" color="white">
        Sign In
      </Button>
    </Flex>
  );
};

export default Navbar;
