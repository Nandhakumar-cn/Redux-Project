export const addtoCard=(data)=>{
    console.warn("action triggered",data);
    return {
        type:"ADD_TO_CART",
        data
    }
}