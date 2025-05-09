import { combineReducers } from "@reduxjs/toolkit";

import { LoginReducer, PlacementDetailsReducer } from "./PlacementReducer";


export const rootReducer = combineReducers({
   
    Login: LoginReducer,
    PlacementDetails:PlacementDetailsReducer
    });