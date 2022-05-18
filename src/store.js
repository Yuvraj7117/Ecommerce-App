import { createStore,combineReducers,applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from 'redux-devtools-extension'
import { productReducers } from "./redux/reducers/productReducers";
import { singleProductReducer } from "./redux/reducers/productReducers";
import { featureProductReducers} from "./redux/reducers/productReducers";
import { Cartreducer} from "./redux/reducers/Cartreducer"

const reducers = combineReducers({
    serveProduct : productReducers,
    productDetails:singleProductReducer,
    featureProd:featureProductReducers,
    addtocart:Cartreducer

})

const initialState = {};

const middleware = [thunk]

// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducers,initialState,composeWithDevTools(applyMiddleware(...middleware)))



export default store;