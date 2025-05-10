import { combineReducers } from "@reduxjs/toolkit";

import { LoginReducer, PlacementDetailsReducer,ExistMobileReducer } from "./PlacementReducer";


export const rootReducer = combineReducers({
   
    Login: LoginReducer,
    PlacementDetails:PlacementDetailsReducer,
    ExistMobile : ExistMobileReducer
    });