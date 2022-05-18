export const ADD = (item)=>{
    return{
        type:"ADDTOCART",
        payload:item
    }
}

export const Delete = (_id) =>{
    return{
        type:"REMOVE_CART",
        payload:_id
    }
}