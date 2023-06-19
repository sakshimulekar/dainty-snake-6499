// Product.jsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/productReducer/action';

const Product = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.productReducer.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  console.log(products);
  

  return (
    <div className="product-container">
      {products.map(product => (
        <div key={product._id} className="product-item">
          <img src={product.image} alt={product.title} className="product-image" />
          <h3 className="product-title">{product.title}</h3>
          <p className="product-release-date">Release Date: {product.releaseDate}</p>
          <button className="buy-button">Buy</button>
          <button className="buy-button">Rent</button>
        </div>
      ))}
    </div>
  );
};

export default Product;
