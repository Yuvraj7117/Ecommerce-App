import { GET_DATA_FAILED, GET_DATA_REQUEST, GET_DATA_SUCCESS,
         GET_DETAILS_REQUEST,GET_DETAILS_SUCCESS,GET_DETAILS_FAILED,
         FEATURE_PRODUCT_FAILED,FEATURE_PRODUCT_REQUEST,FEATURE_PRODUCT_SUCCESS
} from '../constants/productConstants'

export const productReducers = (state = {product:[]},action) =>{
    
    switch (action.type){

        case  GET_DATA_REQUEST:
           return {loadingfp:true,product:[] };
       
        case GET_DATA_SUCCESS:
            return {loadingfp : false, product : action.payload} ;
         
        case GET_DATA_FAILED:
            return{loadingfp : false, error: action.payload }
         
        default:
            return state;    

    }
}


export const singleProductReducer = (state = {product:{}},action) =>{
    
    switch (action.type){

        case  GET_DETAILS_REQUEST:
           return {loading:true,...state};
       
        case GET_DETAILS_SUCCESS:
            return {loading : false, product : action.payload} ;
         
        case GET_DETAILS_FAILED:
            return{loading: false, error: action.payload };
         
        default:
            return state;    

    }
}

export const featureProductReducers = (state = {featuredProductsfp:[]},action) =>{
    
    switch (action.type){

        case  FEATURE_PRODUCT_REQUEST:
           return {loadingfp:true,featuredProductsfp:[] };
       
        case FEATURE_PRODUCT_SUCCESS:
            return {loadingfp : false, featuredProductsfp : action.payload} ;
         
        case FEATURE_PRODUCT_FAILED:
            return{loadingfp : false, errorfp : action.payload }
         
        default:
            return state;    

    }
}
