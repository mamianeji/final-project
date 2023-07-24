import { configureStore } from '@reduxjs/toolkit';
import productSlice from './productSlice';
import reservationSlice from './reservationSlice';
import userSlice from './userSlice/userSlice';

export const store = configureStore({
  reducer: {
    client:userSlice,
    product:productSlice,
    reservation:reservationSlice
  },
})