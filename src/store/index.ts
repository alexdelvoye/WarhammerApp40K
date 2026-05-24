import {
  Action,
  combineReducers,
  configureStore,
  ThunkAction,
} from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";

import armyCompositionsReducer from "../features/armyCompositions/armyCompositionSlice";

const persistConfig = {
  key: "root",
  // AsyncStorage is local device storage, similar to a small app-specific database.
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  // Each reducer owns one part of the global Redux state.
  armyCompositions: armyCompositionsReducer,
});

// Persisted reducer stores Redux state on the device, so data survives app restarts.
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Redux Persist dispatches these internal actions; ignoring them avoids false warnings.
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export default store;

// These exported types make Redux hooks type-safe across the app.
export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>;
