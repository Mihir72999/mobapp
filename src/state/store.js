import { configureStore } from "@reduxjs/toolkit";
import { productSlice } from "./productSlice";
import addSlice from "./addSlice";
import storage from 'redux-persist/lib/storage'
import { encryptTransform } from "redux-persist-transform-encrypt";
import {persistReducer ,
        persistStore,
         FLUSH,
         REHYDRATE,
         PAUSE,
         PERSIST,
         PURGE,
         REGISTER,} from "redux-persist";

import { setupListeners } from "@reduxjs/toolkit/dist/query";
import authSlice from "./authSlice";



const persistConfig = {
    key:'PERSIST',
    storage,
    transforms: [
        encryptTransform({
          secretKey: 'PERSIST',
          onError: function (error) {
            // Handle the error.
            console.log(error)
          },
        }),
      ],
}

const addedSlice = persistReducer(persistConfig , addSlice )
 const authsSlice = persistReducer(persistConfig ,  authSlice)
export const store = configureStore({
    reducer:{
  cart:addedSlice,
  auth:authsSlice,
        [productSlice.reducerPath]:productSlice.reducer
    },
    middleware:getDefaultMiddleware=>getDefaultMiddleware({serializableCheck:{
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    }})
    .concat(productSlice.middleware)
})
 setupListeners(store.dispatch)

export const persist = persistStore(store)
