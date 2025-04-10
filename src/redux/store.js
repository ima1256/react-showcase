import { configureStore } from '@reduxjs/toolkit';
import volumeReducer from './volumeSlice';
import messagesReducer from './messagesSlice';

// Create the Redux store with the volume reducer
const store = configureStore({
  reducer: {
    volume: volumeReducer,
    messages: messagesReducer
  },
});

export default store;
