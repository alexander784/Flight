import { createStore } from "react-redux";
import bookingReducer from "./bookingreducer";


const store = createStore(bookingReducer);

export default store;