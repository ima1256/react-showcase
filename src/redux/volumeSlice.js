import { createSlice } from '@reduxjs/toolkit';

// Create a slice for the volume state
const volumeSlice = createSlice({
  name: 'volume',
  initialState: {
    isEnabled: true,  // By default, the volume is enabled
  },
  reducers: {
    toggleVolume: (state) => {
      state.isEnabled = !state.isEnabled; // Toggle the volume state
    },
  },
});

// Export the action creator to toggle the volume
export const { toggleVolume } = volumeSlice.actions;

// Export the reducer to add to the store
export default volumeSlice.reducer;