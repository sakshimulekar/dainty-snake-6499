import { Box, Button, FormControl, FormErrorMessage, FormLabel, Heading, Input, Select, Stack } from "@chakra-ui/react";
import { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import axios from "axios"
const PaymentPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardNumberError, setCardNumberError] = useState("");
  const [expiration, setExpiration] = useState("");
  const [expirationError, setExpirationError] = useState("");
  const [cvv, setCvv] = useState("");
  const [cvvError, setCvvError] = useState("");

  const value = queryParams.get("plan");
  const v = queryParams.get('price');
  

  console.log(value,v)
  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };
  //console.log(plan)
  const validateForm = () => {
    let isValid = true;

    // Card Number Validation
    if (cardNumber.length !== 16) {
      setCardNumberError("Card number should be 16 digits");
      isValid = false;
    } else {
      setCardNumberError("");
    }

    // Expiration Date Validation
    const [month, year] = expiration.split("/");
    const currentYear = new Date().getFullYear() % 100;
    const currentMonth = new Date().getMonth() + 1;

    if (Number(month) < 1 || Number(month) > 12 || Number(year) < currentYear || (Number(year) === currentYear && Number(month) < currentMonth)) {
      setExpirationError("Invalid expiration date");
      isValid = false;
    } else {
      setExpirationError("");
    }

    // CVV Validation
    if (cvv.length !== 3) {
      setCvvError("CVV should be 3 digits");
      isValid = false;
    } else {
      setCvvError("");
    }

    return isValid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateForm()) {
      let obj={
        subscription:value,
        charge:v
      }
      fetch('http://localhost:8080/users/subscription', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization:`Bearer ${localStorage.getItem("token")}`
      },
      body: JSON.stringify(obj)
    })
      .then((res) => res.json())
      .then((res)=>console.log(res))
      .catch((err)=>console.log(err))
      // Perform payment processing logic here
      // Update the payment information in the database

      // Redirect to success page or display error message
      navigate("/success"); // Assuming you have a "/success" route for successful payments
    }
  };
  
  return (
    <Box p={8} maxW="400px" borderWidth={1} borderRadius="md" boxShadow="lg">
      <Heading as="h1" mb={6} textAlign="center">
        Payment Details
      </Heading>
      <form onSubmit={handleSubmit}>
        <Stack spacing={4}>
          <FormControl isRequired>
            <FormLabel>Payment Method</FormLabel>
            <Select value={paymentMethod} onChange={handlePaymentMethodChange} placeholder="Select Payment Method">
              <option value="gpay">GPay</option>
              <option value="phonepay">PhonePay</option>
              <option value="card">Card Payment</option>
            </Select>
          </FormControl>
          {paymentMethod === "card" && (
            <>
              <FormControl isInvalid={cardNumberError}>
                <FormLabel>Card Number</FormLabel>
                <Input
                  type="text"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                  placeholder="1234 5678 9012 3456"
                  maxLength={16}
                />
                <FormErrorMessage>{cardNumberError}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={expirationError}>
                <FormLabel>Expiration Date</FormLabel>
                <Input
                  type="text"
                  value={expiration}
                  onChange={(e) => setExpiration(e.target.value)}
                  placeholder="MM/YY"
                  maxLength={5}
                />
                <FormErrorMessage>{expirationError}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={cvvError}>
                <FormLabel>CVV</FormLabel>
                <Input
                  type="text"
                  value={cvv}
                  onChange={(e) => setCvv(e.target.value)}
                  placeholder="123"
                  maxLength={3}
                />
                <FormErrorMessage>{cvvError}</FormErrorMessage>
              </FormControl>
            </>
          )}
          <Button type="submit" colorScheme="blue" size="lg" width="100%">
            Pay Now
          </Button>
          
        </Stack>
      </form>
    </Box>
  );
};

export default PaymentPage;
