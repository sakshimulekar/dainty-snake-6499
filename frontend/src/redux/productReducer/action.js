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

    axios
      .get('http://localhost:8080/products')
      .then(response => {
        dispatch(fetchProductsSuccess(response.data.products));
        
      })
      .catch(error => {
        dispatch(fetchProductsFailure(error));
      });
  };
};
