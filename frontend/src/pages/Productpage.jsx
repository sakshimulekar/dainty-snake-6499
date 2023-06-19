import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/productReducer/action';
import { Grid, Box, Image, Text, Button, Select, Flex } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Product = () => {
  const dispatch = useDispatch();
  const allProducts = useSelector(state => state.productReducer.products);
  const [filteredProducts, setFilteredProducts] = useState(allProducts);
  const [selectedGenre, setSelectedGenre] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('rating');
  const [sortOrder, setSortOrder] = useState('asc');

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    filterProducts();
  }, [allProducts, selectedGenre, selectedCategory, sortBy]);

  const filterProducts = () => {
    let filtered = allProducts;

    // Filter by genre
    if (selectedGenre !== 'all') {
      filtered = filtered.filter(product => product.genre === selectedGenre);
    }

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Sort by rating or price
    if (sortBy === 'rating') {
      filtered.sort((a, b) => {
        if (sortOrder === 'asc') {
          return a.rating - b.rating;
        } else {
          return b.rating - a.rating;
        }
      });
    } else if (sortBy === 'cost') {
      filtered.sort((a, b) => {
        if (sortOrder === 'asc') {
          return a.cost - b.cost;
        } else {
          return b.cost - a.cost;
        }
      });
    }

    setFilteredProducts(filtered);
  };

  const toggleSortOrder = () => {
    setSortOrder(prevSortOrder => (prevSortOrder === 'asc' ? 'desc' : 'asc'));
  };

  return (
    <Grid templateColumns="repeat(auto-fit, minmax(250px, 1fr))" gap={4} p={4}>
      <Box>
        <Flex mb={4}>
          <Box mr={4}>
            <Text>Filter by Genre:</Text>
            <Select value={selectedGenre} onChange={e => setSelectedGenre(e.target.value)}>
              <option value="all">All</option>
              <option value="Action Adventure">Action/Adventure</option>
              <option value="Strategy/Sim">Strategy/Sim</option>
              <option value="Racing">Racing</option>
              <option value="Shooter">Shooter</option>
              <option value="Family/Party">Family/Party</option>
              <option value="Fighting">Fighting</option>
              <option value="Music/Dance">Music/Dance</option>
              <option value="Sports">Sports</option>
              <option value="Arcade/Puzzle">Arcade/Puzzle</option>
              <option value="RPG">RPG</option>
            </Select>
          </Box>

          <Box mr={4}>
            <Text>Filter by Category:</Text>
            <Select
              value={selectedCategory}
              onChange={e => setSelectedCategory(e.target.value)}
            >
              <option value="all">All</option>
              <option value="Playstation">Xbox</option>
              <option value="Xbox">Playstation</option>
            </Select>
          </Box>

          <Box>
            <Text>Sort by:</Text>
            <Select value={sortBy} onChange={e => setSortBy(e.target.value)}>
              <option value="rating">Rating</option>
              <option value="cost">Price</option>
            </Select>
          </Box>
        </Flex>

        {sortBy === 'cost' && (
          <Button onClick={toggleSortOrder}>
            {sortOrder === 'asc' ? 'Sort Ascending' : 'Sort Descending'}
          </Button>
        )}
      </Box>

      {filteredProducts.loading ? (
        <p>Loading...</p>
      ) : filteredProducts.error ? (
        <p>Error: {filteredProducts.error}</p>
      ) : (
        filteredProducts.map(product => (
          <Box key={product._id} p={4} borderWidth="1px" borderRadius="md" boxShadow="md">
            <Link to={`/singlePage/${product._id}`}>
              <Image src={product.image} alt={product.title} mb={4} />
            </Link>

            <Text fontSize="lg" fontWeight="bold" mb={2}>
              {product.title}
            </Text>

            <Text mb={2}>Rating: {product.rating}</Text>
            <Text mb={2}>Price: ${product.cost}</Text>

            <Button colorScheme="green" size="sm" mr={2}>
              <Link to={`/singlePage/${product._id}`}>Buy</Link>
            </Button>

            <Button colorScheme="blue" size="sm">
              <Link to={`/singlePage/${product._id}`}>Rent</Link>
            </Button>
          </Box>
        ))
      )}
    </Grid>
  );
};

export default Product;
