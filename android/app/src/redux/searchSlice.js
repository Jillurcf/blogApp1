// /src/redux/searchSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { allCategories } from '../screen/music';


const initialState = {
  searchQuery: '',
  filteredCategories: allCategories || [],
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchQuery: (state, action) => {
        console.log("================", action.payload)
      state.searchQuery = action.payload;
      state.filteredCategories = allCategories.filter((category) =>
        typeof category.category === 'string' &&
        category.category.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
  },
});

export const { setSearchQuery } = searchSlice.actions;
export default searchSlice.reducer;
