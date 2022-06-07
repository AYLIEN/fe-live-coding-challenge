import { combineReducers, configureStore } from "@reduxjs/toolkit";

import searchReducer from './../../views/search.slice';

const rootReducer = combineReducers({
  search: searchReducer,
})

const store = configureStore({
  reducer: rootReducer,
  devTools:
    process.env.NODE_ENV !== 'production'
      ? {
        trace: true,
        traceLimit: 50,
        }
      : false,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;