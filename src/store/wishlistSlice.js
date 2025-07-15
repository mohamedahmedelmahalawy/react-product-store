import { createSlice } from "@reduxjs/toolkit";

// Load wishlist from localStorage
const loadWishlistFromStorage = () => {
  try {
    const savedWishlist = localStorage.getItem("wishlist");
    return savedWishlist ? JSON.parse(savedWishlist) : [];
  } catch (error) {
    console.error("Error loading wishlist from localStorage:", error);
    return [];
  }
};

const saveWishlistToStorage = (wishlistItems) => {
  try {
    localStorage.setItem("wishlist", JSON.stringify(wishlistItems));
  } catch (error) {
    console.error("Error saving wishlist to localStorage:", error);
  }
};

const initialState = {
  wishlistItems: loadWishlistFromStorage(),
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      const existItem = state.wishlistItems.find(
        (i) => i.id === action.payload.id
      );

      if (!existItem) {
        state.wishlistItems.push(action.payload);
        saveWishlistToStorage(state.wishlistItems);
      }
    },
    removeFromWishlist: (state, action) => {
      state.wishlistItems = state.wishlistItems.filter(
        (i) => i.id !== action.payload.id
      );
      saveWishlistToStorage(state.wishlistItems);
    },
    clearWishlist: (state) => {
      state.wishlistItems = [];

      localStorage.removeItem("wishlist");
    },
  },
});

export default wishlistSlice.reducer;
export const { addToWishlist, removeFromWishlist, clearWishlist } =
  wishlistSlice.actions;
