import { combineReducers, configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
} from 'redux-persist';

import authReducer from './slices/authReducer';
import { usersApi } from './api/authApi';

const persistConfig = {
  credentials: { key: 'auth', storage },
};

const credentials = persistReducer(persistConfig.credentials, authReducer);

const reducer = combineReducers({
  credentials,
  [usersApi.reducerPath]: usersApi.reducer,
});

const middleware = (getdefaultMiddleware) => getdefaultMiddleware({
  serializableCheck: false,
  immutableCheck: false,
  thunk: true,
})
  .concat(usersApi.middleware)

export const store = configureStore({ reducer, middleware });
export const persistor = persistStore(store);
// persistor.purge(); // reset store
