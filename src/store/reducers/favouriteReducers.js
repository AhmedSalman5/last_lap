 const favouriteReducers = (initialState = [], action) => {
     switch (action.type) {
         case "ADD_TO_FAVOURITES":
             return [...initialState, action.payload];
         // case "remove-from-favourites":
         //     return [...state, action.payload];
         default:
             return initialState;
     }
 }

 export default favouriteReducers;