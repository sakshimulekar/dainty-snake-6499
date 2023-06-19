// Product.jsx
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/productReducer/action';

const Product = () => {
  const dispatch = useDispatch();
  const allProducts = useSelector(state => state.productReducer.products);
  const [filteredProducts, setFilteredProducts] = useState(allProducts);
  const [selectedGenre, setSelectedGenre] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('rating');

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
      filtered.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === 'price') {
      filtered.sort((a, b) => a.price - b.price);
    }

    setFilteredProducts(filtered);
  };

  return (
    <div className="product-container">
      <div className="filter-container">
        <label>Filter by Genre:</label>
        <select
          value={selectedGenre}
          onChange={e => setSelectedGenre(e.target.value)}
        >
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
        </select>

        <label>Filter by Category:</label>
        <select
          value={selectedCategory}
          onChange={e => setSelectedCategory(e.target.value)}
        >
          <option value="all">All</option>
          <option value="console">Console</option>
          <option value="pc">PC</option>
        </select>

        <label>Sort by:</label>
        <select
          value={sortBy}
          onChange={e => setSortBy(e.target.value)}
        >
          <option value="rating">Rating</option>
          <option value="price">Price</option>
        </select>
      </div>

      {filteredProducts.loading ? (
        <p>Loading...</p>
      ) : filteredProducts.error ? (
        <p>Error: {filteredProducts.error}</p>
      ) : (
        filteredProducts.map(product => (
          <div key={product._id} className="product-item">
            <img src={product.image} alt={product.title} className="product-image" />
            <h3 className="product-title">{product.title}</h3>
            <p className="product-release-date">Release Date: {product.releaseDate}</p>
            <p className="product-rating">Rating: {product.rating}</p>
            <p className="product-price">Price: ${product.price}</p>
            <button className="buy-button">Buy</button>
          </div>
        ))
      )}
    </div>
  );
};

export default Product;
