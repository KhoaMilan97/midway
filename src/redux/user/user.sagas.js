import { takeLatest, put, all, call } from "redux-saga/effects";

import {
  auth,
  googleProvider,
  facebookProvider
} from "../../firebase/firebase.utils";

import {
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure
} from "./user.action";
import userTypes from "./user.types";

// Goole Login
export function* googleSignIn() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    const { uid, displayName, email, photoURL } = user;

    yield put(signInSuccess({ uid, displayName, email, photoURL }));
  } catch (err) {
    yield put(signInFailure(err.message));
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(userTypes.GOOGLE_SIGN_IN_START, googleSignIn);
}

// Facebook login
export function* facebookSignin() {
  try {
    const { user } = yield auth.signInWithPopup(facebookProvider);
    const { uid, displayName, email, photoURL } = user;

    yield put(signInSuccess({ uid, displayName, email, photoURL }));
  } catch (err) {
    yield put(signInFailure(err.message));
  }
}

export function* onFacebookLoginStart() {
  yield takeLatest(userTypes.FACEBOOK_SIGN_IN_START, facebookSignin);
}

// SIGN OUT
export function* signOut() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
  } catch (err) {
    yield put(signOutFailure(err.message));
  }
}

export function* onSignOutStart() {
  yield takeLatest(userTypes.SIGN_OUT_START, signOut);
}

// Call All sagas
export function* userSaga() {
  yield all([
    call(onGoogleSignInStart),
    call(onFacebookLoginStart),
    call(onSignOutStart)
  ]);
}
