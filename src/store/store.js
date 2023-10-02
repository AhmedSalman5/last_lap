
 import { configureStore } from "@reduxjs/toolkit";
import favouriteReducers from "./reducers/favouriteReducers";
  

 let favouriteStore = configureStore({
   reducer: { favourite: favouriteReducers },
 });
 export default favouriteStore;
