import cartApi from "../../api/cartApi";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const getCart = createAsyncThunk(
  "Cart/getCart",
  async (params, thunkAPI) => {
    // thunkAPI.dispatch(...)
    const currentUser = await cartApi.getCart();
    return currentUser;
  }
);

export const addCart = createAsyncThunk("Cart/addCart", async (newCart) => {
  // thunkAPI.dispatch(...)
  const currentUser = await cartApi.addCart(newCart);
  return currentUser;
});
export const updateCart = createAsyncThunk("Cart/updateCart", async (Cart) => {
  // thunkAPI.dispatch(...)
  const currentUser = await cartApi.updateCart(Cart);
  return currentUser;
});

export const deleteCart = createAsyncThunk("Cart/deleteCart", async (Cart) => {
  // thunkAPI.dispatch(...)
  const currentUser = await cartApi.deleteCart(Cart);
  return currentUser;
});
const CartSlice = createSlice({
  name: "carts",
  initialState: {
    current: [],
  },
  reducers: {
    addCart: (state, action) => {
      // const newPhoto = action.payload;
      state.push(action.payload);
      console.log(action.payload);
    },
  },
  extraReducers: {
    [getCart.fulfilled]: (state, action) => {
      state.current = action.payload;
    },
    [addCart.fulfilled]: (state, action) => {
      state.current = action.payload;
    },
    [updateCart.fulfilled]: (state, action) => {
      state.current = action.payload;
    },
    [deleteCart.fulfilled]: (state, action) => {
      state.current = action.payload;
    },
  },
});

const { reducer: CartReducer } = CartSlice;
export default CartReducer;
