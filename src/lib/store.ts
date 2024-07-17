import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "./features/login/loginSlice";
// import tableUsersSlice from "./features/tableUsersSlice";
// import drawerSlice from "./features/drawer/drewerSlice";

// import userData from "./userData";
export const store = () => {
  return configureStore({
    reducer: {
      users: usersSlice,
      // notificationRecieverUsers: tableUsersSlice,
      // drawer: drawerSlice,
    },
  });
};

export type AppStore = ReturnType<typeof store>;

export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];