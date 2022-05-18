import axios from "axios";
import { GET_DATA_REQUEST, GET_DATA_SUCCESS, GET_DATA_FAILED,
  GET_DETAILS_REQUEST,GET_DETAILS_SUCCESS,GET_DETAILS_FAILED,
  FEATURE_PRODUCT_FAILED,FEATURE_PRODUCT_REQUEST,FEATURE_PRODUCT_SUCCESS
} from "../constants/productConstants";


//multiproducts fetching
export const listProducts = () => async(dispatch)=>{

  try{
    dispatch({type:GET_DATA_REQUEST});
    const {data} = await axios.get("https://ecommerce-app-one.herokuapp.com/api/products/");
    dispatch({ type: GET_DATA_SUCCESS, payload : data});
  }

  catch(error){

    dispatch({ type: GET_DATA_FAILED,
    payload: error.response && error.response.data.message?error.response.data.message:error.message});
  }

} 


//singleProduct Details fetching
export const detailsProduct = (id) => async(dispatch)=>{

  try{
    dispatch({type:GET_DETAILS_REQUEST});
    const {data} = await axios.get(`https://ecommerce-app-one.herokuapp.com/api/products/${id}`)
    
    dispatch({ type: GET_DETAILS_SUCCESS, payload:data});
  }

  catch(error){
 
    dispatch({ type: GET_DETAILS_FAILED,
    payload: error.response && error.response.data.message?error.response.data.message:error.message});
  }
}


//featuredproducts fetching
export const featureProducts = () => async(dispatch)=>{

  try{
    dispatch({type: FEATURE_PRODUCT_REQUEST});
    const {data} = await axios.get("https://ecommerce-app-one.herokuapp.com/api/featureProduct");
    dispatch({ type: FEATURE_PRODUCT_SUCCESS, payload : data});
  }

  catch(error){
 
    dispatch({ type: FEATURE_PRODUCT_FAILED,
    payload: error.response && error.response.data.message?error.response.data.message:error.message});
  }
} 
