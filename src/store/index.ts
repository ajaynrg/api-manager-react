import { configureStore } from '@reduxjs/toolkit';
import { bodySlice } from './bodySlice';
import { setBody, clearBody } from './bodySlice';

export default configureStore({
  reducer: {
    body: bodySlice.reducer,
  },
});

export {setBody, clearBody};