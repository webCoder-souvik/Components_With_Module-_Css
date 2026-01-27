import { combineReducers, configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage';
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistReducer, persistStore } from 'redux-persist';
import userSlice from './Auth/user.slice';
import { storeName } from '../Utils/config';

const persistConfig = {
    key: storeName,
    storage,
    whitelist: ["user"]
}

const combinedReducers = persistReducer(
    persistConfig,
    combineReducers({
        // Add reducer files here 
        user: userSlice
    })
);

export const store = configureStore({
    reducer: combinedReducers,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})
export const persistedStore = persistStore(store);


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState> //always use this Rootstate for state type while using useSelector
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
