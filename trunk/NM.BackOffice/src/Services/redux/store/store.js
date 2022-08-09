import React from "react";
import rootReducer from '../reducer/index'

import { configureStore } from '@reduxjs/toolkit'
import thunk from "redux-thunk";
import logger from "redux-logger";
const middleWare = [thunk, logger]

const Store = configureStore({
   reducer: {
      data: rootReducer,
   },
   middleware:[...middleWare]
})
export default Store


