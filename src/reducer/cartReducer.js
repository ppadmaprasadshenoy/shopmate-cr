export const cartReducer = (state, action)  => {
    const {type, payload} = action;             // action is type and payload that we pass

    switch(type){
        case "ADD_TO_CART":
            return {...state, cartList: payload.products}
        
        case "REMOVE_FROM_CART":
            return {...state, cartList: payload.products}
        
        case "UPDATE_TOTAL":
            return {...state, total: payload.total}

        default:
            throw new Error("No Case from cartReducer");
    }
}