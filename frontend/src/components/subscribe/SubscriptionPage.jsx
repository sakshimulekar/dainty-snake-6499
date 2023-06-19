import { Box, Button, Center, Heading, SimpleGrid,Text} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import {useState} from "react"
import PaymentPage from "./PaymentPage";
import { Link } from "react-router-dom";
const plans = [
  { name: "Basic", value: 500 },
  { name: "Standard", value: 1000 },
  { name: "Premium", value: 1500 },
];

const SubscriptionPage = () => {
  const navigate = useNavigate();
  const [data,setdata]=useState({})

  const handleBuyClick = (plan) => {
    //console.log(plan)
    setdata(plan)
    // Navigate to another page with the selected plan
    navigate(`/getsubscription?plan=${plan.name}&price=${plan.value}`);
  };

  return (
    <Box p={10} h={"90vh"} >
      <Box w="70%" margin='auto'>
      <Center>
        <Heading as="h1" mb={8}>
          Choose a Plan
        </Heading>
      </Center>
      <SimpleGrid columns={3} spacing={8} px={8 }>
        
        {plans.map((plan) => (
          <Box key={plan.name} borderWidth="1px" borderRadius="lg" p={8} bgGradient='linear(to-r, teal.500, green.500)' w="80">
            
            <Heading as="h2" size="lg" mb={4} bgGradient='linear(to-r, teal.500, green.500)'>
              {plan.name}
            </Heading>
            <Text bgGradient='linear(to-r, teal.500, green.500)'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac
            quam in libero posuere maximus.
          </Text>
          <br />
            <Heading as="h3" size="md" mb={8} bgGradient='linear(to-r, teal.500, green.500)'>
              ${plan.value}/month
            </Heading>
            <Button colorScheme="green" onClick={() => handleBuyClick(plan)} width={"70%"} boxShadow={"xl"}>
            
              Buy
            </Button>
            
          </Box>
        ))}
      </SimpleGrid>
      </Box>
    </Box>
  );
};

export default SubscriptionPage;
