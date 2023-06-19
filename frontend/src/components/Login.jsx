import { Box, FormControl, FormLabel, Input, Button, Heading, Center, Text, useToast, ChakraProvider, extendTheme } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Sign = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [errmsg, setErrmsg] = useState("");
  const [msg, setMsg] = useState("");
  const [age, setAge] = useState("");
  const [isRegistered, setIsRegistered] = useState(false); // Check if registration is done or not
  
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    let obj = {
      name,
      email,
      pass,
      age
    };
    axios
      .post("http://localhost:8080/users/register", obj)
      .then((res) => {
        console.log(res);
        const datamsg = res.data.msg;
        const dataerr = res.data.error;
        if (res.data.error) {
          setMsg("");
          setErrmsg(dataerr);
          toast({
            title: "Error",
            description: dataerr,
            status: "error",
            duration: 5000,
            isClosable: true,
            position: "top"
          });
        } else {
          setErrmsg("");
          setMsg(datamsg);
          toast({
            title: "Success",
            description: datamsg,
            status: "success",
            duration: 5000,
            isClosable: true,
            position:"top"
          });
          setIsRegistered(true); // Set registration flag to true
        }
      })
      .catch((err) => console.log(err));
    setName("");
    setEmail("");
    setPass("");
    setAge("");
  };

  const handleLogin = () => {
    setIsRegistered(false); // Set registration flag to false
  };

  const handleRegistration = () => {
    setIsRegistered(true); // Set registration flag to true
  };

  return ( 
      <Box>
      <Box bgImage="url('/main_game-website-design-cover.webp')" h="90vh" backdropFilter="blur(2px)" >
        <Box position="absolute" top={0} left={0} w="100%" h="100%" bg="rgba(0, 0, 0, 0)" backdropFilter="blur(2px)" />
        <Heading backdropFilter="blur(2px)" backgroundColor="blackAlpha.100" as="h1">
          Welcome to Gamer's Arena
        </Heading>

        <Box w="30%" margin="auto" p="5" mt="10">
          
          {isRegistered ? (
            <form onSubmit={(e) => handleSubmit(e)}>
              <Heading backdropFilter="blur(15px)">Registration</Heading>
              <FormControl >
                <FormLabel >
                  Name
                </FormLabel>
                <Input
                  type="text"
                  name="name"
                  isRequired
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </FormControl>
              <br />
              <FormControl>
                <FormLabel >
                  Email
                </FormLabel>
                <Input
                  type="text"
                  name="email"
                  value={email}
                  isRequired
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
              <br />
              <FormControl >
                <FormLabel >
                  Password
                </FormLabel>
                <Input
                  type="password"
                  name="pass"
                  value={pass}
                  isRequired
                  onChange={(e) => setPass(e.target.value)}
                />
              </FormControl>
              <br />
              <FormControl >
                <FormLabel>
                  Age
                </FormLabel>
                <Input
                  type="text"
                  name="age"
                  value={age}
                  isRequired
                  onChange={(e) => setAge(e.target.value)}
                />
              </FormControl>
              <Button mt="2" w="80" type="submit" colorScheme="teal">
                Submit
              </Button>
              <Text mt="2" cursor="pointer" onClick={handleLogin}backdropFilter="blur(15px)">
                Already have an account? Login
              </Text>
            </form>
          ) : (
            <Login handleRegistration={handleRegistration} />
          )}
        </Box>
      </Box>
      </Box>
  );
};


const Login = ({ handleRegistration }) => {
  const toast = useToast();
  const [data, setdata] = useState({
    email: '',
    pass: ''
  });
  const [errmsg, setErrmsg] = useState("");
  const [msg, setMsg] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const handleAdd = (e) => {
    const { name, value } = e.target;
    setdata({ ...data, [name]: value });
    //console.log(data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(data);
    fetch('http://localhost:8080/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        const datamsg = res.msg;
        const dataerr = res.error;
        if (res.error) {
          setMsg("");
          setErrmsg(dataerr);
          toast({
            title: "Error",
            description: dataerr,
            status: "error",
            duration: 5000,
            isClosable: true,
            position:"top"
          });
        } else {
          setErrmsg("");
          setMsg(datamsg);
          toast({
            title: "Success",
            description: datamsg,
            status: "success",
            duration: 5000,
            isClosable: true,
            position:"top"
          });
          
          //console.log(location)
        }
        const info = localStorage.setItem('token', res.token);
        if(info){
          <Link to={location.state}></Link>
        }
        
      })
      .catch((err) => console.log(err));
  };
  
  
  return (
      <Box >
      <form action="" onSubmit={(e) => handleSubmit(e)}>
        <Box textAlign="center" mb={4} backdropFilter="blur(2px)">
          <Heading as={'h2'} >Login</Heading>
        </Box>

        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input type="text" name="email" isRequired placeholder="email" onChange={(e) => handleAdd(e)} />
        </FormControl>
        <br />
        <FormControl mt={2}>
          <FormLabel>Password</FormLabel>
          <Input type="password" name="pass" isRequired placeholder="password" onChange={(e) => handleAdd(e)} />
        </FormControl>
        <br />

        <Button mt={4} colorScheme="teal" type="submit">
          Login
        </Button>

        <Text mt={2} cursor="pointer" onClick={handleRegistration} backdropFilter="blur(2px)">
          Don't have an account? Register
        </Text>

        
      </form>
      </Box>
    
  
  );
};

export default Sign;

