import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { api } from "./services/api";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { globalSlice } from "./slices";

const rootReducer = combineReducers({
  global: globalSlice,
  [api.reducerPath]: api.reducer,
});

export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(api.middleware),
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;