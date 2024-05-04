import { createStore } from "redux";
import bookingReducer from "./bookingreducer";


const store = createStore(bookingReducer);

export default store;