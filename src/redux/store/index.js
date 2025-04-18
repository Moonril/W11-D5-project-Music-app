import { configureStore } from "@reduxjs/toolkit";
import mainReducer from '../reducers' //nome della  funzione che sta in reducers.index.js

const store = configureStore({
    reducer:mainReducer,
})

export default store