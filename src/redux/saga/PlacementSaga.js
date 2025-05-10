import {put,call, takeLatest,delay, take } from 'redux-saga/effects';
import { types } from '../action/type';
import {  requestLogin, successLogin, failureLogin, requestPlacementDetails, successPlacementDetails, failurePlacementDetails, requestExistMobile, successExistMobile, failureExistMobile } from '../reducers/PlacementReducer.js';
import { GetMobileNumber, PostLogin, PostPlacementDetails } from '../services/api.js';

// Worker Saga: Fetch Student Enquiry



  //  Worker Saga


  function* loginUser(action) {
    try {
      yield put(requestLogin());
      const post = yield call(PostLogin, action.payload);
      console.log("user Register", post);
      yield put(successLogin(post));
    } catch (error) {
      yield put(failureLogin(error)); // this will work now correctly
    }
  }


  function* placementDetails(action) {
    try {
      yield put(requestPlacementDetails());
      const post = yield call(PostPlacementDetails, action.payload);
      console.log("user Register", post);
      yield put(successPlacementDetails(post));
    } catch (error) {
      yield put(failurePlacementDetails(error)); // this will work now correctly
    }
  }



function* ExistMobile(action) {
  try {
    yield put(requestExistMobile());

    // If action.payload is just the id
    const MobileNo = yield call(GetMobileNumber, action.payload);

    console.log("User Mobile No.:", MobileNo);
    yield put(successExistMobile(MobileNo));
  } catch (error) {
    yield put(failureExistMobile(error));
  }
}


  


  export function* watchePlacementDataApplication() {
    
    yield takeLatest(types.Login, loginUser);
    yield takeLatest(types.PlacementDetails, placementDetails)
    yield takeLatest(types.ExistMobile, ExistMobile)
  
  }