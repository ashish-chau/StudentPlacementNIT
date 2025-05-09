import { getBasicSlice } from "../utils/getBasicSlices";

const Login = getBasicSlice("Login");
const PlacementDetails = getBasicSlice("PlacementDetails")




export const {
    fetchRequest: requestLogin,
    fetchSuccess: successLogin,
    fetchFailure: failureLogin,
}= Login.actions

export const {
    fetchRequest : requestPlacementDetails,
    fetchSuccess : successPlacementDetails,
    fetchFailure : failurePlacementDetails
} = PlacementDetails.actions





export const LoginReducer = Login.reducer;
export const PlacementDetailsReducer = PlacementDetails.reducer
