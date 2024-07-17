import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

// import type { RootState } from "@/stores/store";

type usersState = {
  user: string | null;
};

const initialState: usersState = { user: null };

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    updateUser: (state: usersState, action: PayloadAction<string>) => {
      state.user = action.payload;
      console.log("state state state", state.user);
    },
  },
});

export const { updateUser } = usersSlice.actions;

export default usersSlice.reducer;