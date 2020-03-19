import userTypes from "./user.types";

export const googleSignInStart = () => ({
  type: userTypes.GOOGLE_SIGN_IN_START
});

export const facebookSignInStart = () => ({
  type: userTypes.FACEBOOK_SIGN_IN_START
});

export const signInSuccess = user => ({
  type: userTypes.SIGN_IN_SUCCESS,
  payload: user
});

export const signInFailure = error => ({
  type: userTypes.SIGN_IN_FAILURE,
  payload: error
});

export const signOutStart = () => ({
  type: userTypes.SIGN_OUT_START
});

export const signOutSuccess = () => ({
  type: userTypes.SIGN_OUT_SUCCESS
});

export const signOutFailure = error => ({
  type: userTypes.SIGN_OUT_FAILURE,
  payload: error
});
