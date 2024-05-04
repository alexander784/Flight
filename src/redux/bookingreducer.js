import { BOOKING, DELETE } from "./actionTypes";

// Initial state for reducer
const initialState = {
    data: []
};

// Reducer function for booking operations
const bookingReducer = (state = initialState,action) => {
    // switch statement to handle different action types
    switch (action.type) {
        // case for adding a booking
        case BOOKING:
            // Creating a new array with existing data and adding the new payload 
        const newData = [...state.data];
        newData.push(action.payload);
        // Returning the updated state with the new data
        return {data: newData};


        // Case for deleting a booking
        case DELETE:
            // filter data eith specified ID to delete
           const filteredData = state.data.filter((d) => d.id !== action.payload);
           return {data: filteredData};
            
    
        default:
            state;
    }

}

export default bookingReducer