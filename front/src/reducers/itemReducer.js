const itemReducer = (state= null, action) =>{
    switch (action.type){
        case "ITEM":
            return action.payload;
        default:
            return state;
    }
}

export default itemReducer;
