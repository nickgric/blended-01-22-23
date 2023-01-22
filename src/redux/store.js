
import { configureStore } from '@reduxjs/toolkit';
import { todosReducer } from "./todos/todosSlice";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist';

  import storage from 'redux-persist/lib/storage';
  const todosPersistConfig = {
    key: 'todos',
    storage,
  };

  const todosPersistedReducer = persistReducer(
    todosPersistConfig,
    todosReducer
  );
  console.log(todosReducer);
// console.log(todosPersistedReducer);
export const store = configureStore({
    reducer: {
      todos: todosPersistedReducer
   
    },
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  });
  export const persistor = persistStore(store);