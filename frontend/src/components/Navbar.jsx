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
  Spacer,
  InputGroup ,
  Input ,
  InputLeftElement,
 
} from "@chakra-ui/react";
import { SearchIcon , CartIcon } from "@chakra-ui/icons";
import { HamburgerIcon } from "@chakra-ui/icons";
import ToggleButton from "./Toggle";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [toggleNav, setToggleNav] = useState(navArr);

  const handleMenuOpen = () => {
    setIsMenuOpen(true);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };
  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate("/register");
  };
  const handleCart = () => {
    navigate("/cart");
  };
  const handlelogout = () => {
    navigate("/logout");
  };

  const handle = () => {
    navigate("/");
  };

  return (
<>
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      padding={4}
      bgColor={"black"}
      color="grey.800"
      position={"sticky"}
      
    >
      <Flex align="center" backgroundColor={"black"}>
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
            <DrawerContent >
              <DrawerCloseButton />
            
              <DrawerHeader align="center"  >Gamer's Arena</DrawerHeader>
              <ToggleButton setToggleNav={setToggleNav} />
              <DrawerBody >
                <Box maxH="xlg" overflowY="auto" >
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
          <img src="navLog.png" width="200px" onClick={()=>handle()} cursor={"Pointer"}/>
        </Box>
      </Flex>
      <Flex align="center" bg="blackAlpha.200" p={4}>
        <Box position="absolute" left={20} ml={"300px"}>
          <InputGroup width="400px">
            <InputLeftElement pointerEvents="none" children={<SearchIcon color="gray.300" />} />
            <Input type="text" placeholder="Search" size="lg"/>
          </InputGroup>
        </Box>
        <Spacer/>
        
        <Spacer />
        <Button variant="outline" colorScheme="white" backgroundColor="orange.700" color="white" onClick={handleSignUp} mr={"20px"}>
        Sign up
      </Button>
      
      <Button variant="outline" colorScheme="white" backgroundColor="orange.700" color="white" onClick={handlelogout} mr={"20px"}>
        Logout
      </Button>
      <Image src="https://th.bing.com/th/id/R.5bb448a94a5be2cd8933ce9e6773f915?rik=hUkrVL2wWJ3n5A&riu=http%3a%2f%2fwww.clker.com%2fcliparts%2fl%2fz%2f3%2fL%2fh%2f3%2fwhite-shopping-cart-hi.png&ehk=EEwjccT0SEeljSit56jGvp4qpd%2bGG2xWtMA54%2b43yvI%3d&risl=&pid=ImgRaw&r=0" width="50px" alt="Cart" onClick={handleCart} mr={2} cursor="pointer" />
      </Flex>
      
    </Flex>
    </>
   )
  }

export default Navbar;
