import { createSlice } from '@reduxjs/toolkit';
import { BASE_URL } from '../constants';

export const cardsSlice = createSlice({
  name: 'cards',
  initialState: [
  {
    id: 1001,
    title: 'Honest movie trailer',
    description: 'This is the honest trailer of morbius which is nothing but a solid masterpiece. Fans are waiting for the sequel: Morbius 2: Let There be More Bius',
    videoLink: `${BASE_URL}NkqD2OUUjWY`,
  },
  {
    id: 1002,
    title: 'South Park clip',
    description: 'Randy Marsh learns why everyone is calling him Karen.',
    videoLink: `${BASE_URL}h75cPU_sP6c`,
  },
  {
    id: 1003,
    title: 'Robot Chicken | Adult Swim',
    description: 'Darth Vader continues to alter the deal with Lando, or how developers see product owners when they alter the story in the middle of a sprint.',
    videoLink: `${BASE_URL}WpE_xMRiCLE`,
  },
  {
    id: 1004,
    title: 'Family Guy: Peter\'s Painful Sleeping Habits',
    description: 'Peter\'s sleeping habits cause health problems for Lois.',
    videoLink: `${BASE_URL}R8MAW6N1Jhk`,
  },
],
  reducers: {
    addCard: (state, action) => {
      state.push(action.payload)
    },
    deleteCard: (state, action) => {
      state.filter((card) => card.id !== action.payload)
    },
  }
})

export const { addCard, deleteCard } = cardsSlice.actions

export default cardsSlice.reducer