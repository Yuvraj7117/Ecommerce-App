const INIT_STATE = {
    carts :[]
};

export const Cartreducer = (state=INIT_STATE,action)=>{
    switch(action.type){
        case "ADDTOCART":
            return {
                ...state,
                carts:[...state.carts,action.payload]
                
            }

        case "REMOVE_CART":
            const data = state.carts.filter((item)=>item.id !== action.payload)
            return{
                ...state,
                carts:data
            }    
        default:
             return state;
        }
    }
