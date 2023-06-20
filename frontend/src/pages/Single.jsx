import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Box, Image, Text, Button } from '@chakra-ui/react';
import ReactPlayer from "react-player"

const SingleProductPage = () => {
  const { productId } = useParams();
  const product = useSelector(state => state.productReducer.products.find(p => p._id === productId));

  if (!product) {
    return <p>Product not found</p>;
  }

  const { title, image, rating, cost, video } = product;
  const AddtoCart=(prod)=>{
    console.log(prod)
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(prod)
    localStorage.setItem("cart" , JSON.stringify(cart))
    alert("Product added to cart")
    console.log(cart)
  }


  return (

    <Box p={4} borderWidth="1px" borderRadius="md" boxShadow="md" height={"80vh"}>
        <div style={{display:"flex", justifyContent: "space-around",}}>
            <Image src={image} alt={title} mb={4} />
            <div style={{display:"flex", justifyContent: "center",flexDirection:"column"}}>
            <Text fontSize="50px" fontWeight="bold" mb={2}>
        {title}
      </Text>

      <Text mb={2} fontSize="30px">Rating: {rating}</Text>
      <Text mb={2} fontSize="30px">Price:{cost}</Text>


      <Button colorScheme="green" size="sm" mr={2}>
        Buy
      </Button>
      <br/>
      <Button colorScheme="blue" size="sm" onClick={()=>AddtoCart(product)}>
        Rent
      </Button>
            </div>
           
      <ReactPlayer url={video} controls={true} style={{ width: '100%', height: '100%' }} autoplay />
        </div>
      


      
    </Box>
  );
};

export default SingleProductPage;
