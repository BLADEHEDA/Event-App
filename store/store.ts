import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from "../slice/counterSlice";

const store = configureStore({
  reducer: {
    // counter: counterReducer,
    // Add more reducers here if needed
  },
});

export default store;
