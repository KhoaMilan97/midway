import { takeLatest, put, all, call } from "redux-saga/effects";

import API from "../../api/baseURL";

import {
  auth,
  googleProvider,
  facebookProvider
} from "../../firebase/firebase.utils";

import {
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  registerFailure,
  registerSuccess
} from "./user.action";

import userTypes from "./user.types";

// Goole Login
export function* googleSignIn() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    console.log(user);
    const { displayName, email } = user;
    // yield API.post("insert", {
    //   id: uid,
    //   email: email,
    //   password: null,
    //   fullname: displayName,
    //   address: null,
    //   phone: phoneNumber
    // });

    yield put(signInSuccess({ displayName, email }));
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

    const { displayName, email } = user;
    // yield API.post("insert", {
    //   id: uid,
    //   email: email,
    //   password: null,
    //   fullname: displayName,
    //   address: null,
    //   phone: phoneNumber
    // });

    yield put(signInSuccess({ displayName, email }));
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

/* Register account */
export function* register({
  payload: { email, password, displayName, phone }
}) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    yield API.post("insert", {
      id: user.uid,
      fullname: displayName,
      password: password,
      email: email,
      address: null,
      phone: phone
    });
    yield auth.onAuthStateChanged(function(user) {
      if (user) {
        user.updateProfile({
          displayName: displayName
        });
      }
    });
    yield put(
      registerSuccess({ user: { email, password }, displayName, phone })
    );
  } catch (err) {
    console.log(email, password);
    yield put(registerFailure(err.message));
  }
}

export function* onRegister() {
  yield takeLatest(userTypes.REGISTER_EMAIL_START, register);
}

/* Login account */
export function* signIn({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    const displayName = user.displayName;
    yield put(signInSuccess({ displayName, email, password }));
  } catch (err) {
    yield put(signInFailure(err.message));
  }
}

export function* onSignInWithEmail() {
  yield takeLatest(userTypes.SIGN_IN_WITH_EMAIL, signIn);
}

/* SignInAfter SignUp */
export function* signInAfterSignUp({
  payload: {
    user: { email, password }
  }
}) {
  const { user } = yield auth.signInWithEmailAndPassword(email, password);
  const displayName = user.displayName;
  yield put(signInSuccess({ displayName, email, password }));
}

export function* onSignInaAfterSignUp() {
  yield takeLatest(userTypes.REGISTER_EMAIL_SUCCESS, signInAfterSignUp);
}

// Call All sagas
export function* userSaga() {
  yield all([
    call(onGoogleSignInStart),
    call(onFacebookLoginStart),
    call(onSignOutStart),
    call(onRegister),
    call(onSignInWithEmail),
    call(onSignInaAfterSignUp)
  ]);
}
