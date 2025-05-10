import { types } from "./type";


export const postLogin = (payload) => {
    return {type: types.Login, payload:payload};
  };

  export const postPlacementDetails = (payload) => {
    return {type: types.PlacementDetails, payload:payload};
  };

  export const getMobileNumber = (payload) => {
    return {type: types.ExistMobile, payload:payload}
  }

