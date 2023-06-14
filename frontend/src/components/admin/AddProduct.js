import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Heading,
  Stack,
  StackDivider,
  Box,
  Input,
  Button,
  Spacer,
} from "@chakra-ui/react";
import axios from "axios";
import { useToast } from "@chakra-ui/react";
import styles from "../admin/Admin.module.css";

const AddProducts = () => {
  const toast = useToast();
  const [title, setTitle] = useState("");
  const [variant_price, setMrp] = useState("");
  const [id, setID] = useState("");
  const [ideal_for, setIdealFor] = useState("");
  const [is_in_stock, setStock] = useState("");
  const [images, setImages] = useState("");

  const addproduct = async () => {
    const payload = {
      title,
      id,
      variant_price,
      ideal_for,
      is_in_stock,
      images,
    };
    let res = await axios.post(`https://fakestoreapi.com/users`, payload);
    console.log(res);
  };

  return (
    <>
      <Card
        className={styles.card}
        backgroundColor={"#031c29"}
        h={"700px"}
        border={"1px solid #ff3f6c"}
        m="auto"
        w={{ base: "50%", sm: "70%", md: "70%", lg: "75%" }}
      >
        <Spacer />
        <Spacer />
        <CardHeader>
          <Heading size="lg" color={"#ff3f6c"}>
            Add Products
          </Heading>
        </CardHeader>
        <Spacer />
        <CardBody>
          <Stack
            divider={<StackDivider />}
            spacing="4"
            borderRadius={14}
            h={"570px"}
          >
            <Box>
              <Input
                size={"lg"}
                placeholder="Name of the Product"
                onChange={(e) => setTitle(e.target.value)}
                _placeholder={{ color: "gray" }}
                style={{ border: "1px solid #ff3f6c", borderWidth: "1px" }}
              ></Input>
            </Box>
            <Box>
              <Input
                size={"sm"}
                placeholder="Product ID"
                onChange={(e) => setID(e.target.value)}
                _placeholder={{ color: "gray" }}
                style={{ border: "1px solid #ff3f6c", borderWidth: "1px" }}
              ></Input>
            </Box>
            <Box>
              <Input
                size={"lg"}
                placeholder="Product MRP"
                onChange={(e) => setMrp(e.target.value)}
                _placeholder={{ color: "gray" }}
                style={{ border: "1px solid #ff3f6c", borderWidth: "1px" }}
              ></Input>
            </Box>
            <Box>
              <Input
                size={"lg"}
                placeholder="Category"
                onChange={(e) => setIdealFor(e.target.value)}
                _placeholder={{ color: "gray" }}
                style={{ border: "1px solid #ff3f6c", borderWidth: "1px" }}
              ></Input>
            </Box>
            <Box>
              <Input
                size={"lg"}
                placeholder="Product InStock/Out of the Stock"
                onChange={(e) => setStock(e.target.value)}
                _placeholder={{ color: "gray" }}
                style={{ border: "1px solid #ff3f6c", borderWidth: "1px" }}
              ></Input>
            </Box>

            <Box>
              <Input
                size={"lg"}
                placeholder="image"
                onChange={(e) => setImages(e.target.value)}
                _placeholder={{ color: "gray" }}
                style={{ border: "1px solid #ff3f6c", borderWidth: "1px" }}
              ></Input>
            </Box>
            <Spacer />
            <Button
              onClick={() => {
                addproduct();
                toast({
                  title: "Added Successfully",
                  description: "Check in Inventory",
                  position: "top",
                  status: "success",
                  duration: 9000,
                  isClosable: true,
                });
              }}
              backgroundColor={"#006064"}
              color={"white"}
              w={"30%"}
              fontSize={"lg"}
              m={"auto"}
              mt={"-5px"}
              _hover={{ backgroundColor: "#ff3f6c" }}
            >
              Add Product
              <hr />
            </Button>
          </Stack>
        </CardBody>
      </Card>
    </>
  );
};

export default AddProducts;
