import { configureStore } from '@reduxjs/toolkit'
import cardsReducer from './cardsSlice'

export default configureStore({
  reducer: {
    cards: cardsReducer,
  },
});
