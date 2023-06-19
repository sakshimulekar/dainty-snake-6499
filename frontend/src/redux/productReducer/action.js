// Actions.js
import * as actionTypes from './actionType';
import axios from 'axios';

export const fetchProductsRequest = () => ({
  type: actionTypes.FETCH_PRODUCTS_REQUEST
});

export const fetchProductsSuccess = (products) => ({
  type: actionTypes.FETCH_PRODUCTS_SUCCESS,
  payload: products
});

export const fetchProductsFailure = (error) => ({
  type: actionTypes.FETCH_PRODUCTS_FAILURE,
  payload: error
});

export const fetchProducts = () => {
  return (dispatch) => {
    dispatch(fetchProductsRequest());

    fetch('http://localhost:8080/products', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        authorization:`Bearer ${localStorage.getItem("token")}`
      },
      
    })
      .then((res) => res.json())
      .then((res)=>{dispatch(fetchProductsSuccess(res.products))
    console.log(res.products)})
      .catch((err)=>console.log(err))
      
      
    
  
  };
};
