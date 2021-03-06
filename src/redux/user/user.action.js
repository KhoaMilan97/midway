import userTypes from "./user.types";

/* Goolge and FB */
export const googleSignInStart = () => ({
  type: userTypes.GOOGLE_SIGN_IN_START,
});

export const facebookSignInStart = () => ({
  type: userTypes.FACEBOOK_SIGN_IN_START,
});

export const signInSuccess = (user) => ({
  type: userTypes.SIGN_IN_SUCCESS,
  payload: user,
});

export const signInFailure = (error) => ({
  type: userTypes.SIGN_IN_FAILURE,
  payload: error,
});

/* Sign Out */

export const signOutStart = () => ({
  type: userTypes.SIGN_OUT_START,
});

export const signOutSuccess = () => ({
  type: userTypes.SIGN_OUT_SUCCESS,
});

export const signOutFailure = (error) => ({
  type: userTypes.SIGN_OUT_FAILURE,
  payload: error,
});

/* Register */
export const registerStart = (userCredentials) => ({
  type: userTypes.REGISTER_EMAIL_START,
  payload: userCredentials,
});

export const registerSuccess = (user) => ({
  type: userTypes.REGISTER_EMAIL_SUCCESS,
  payload: user,
});

export const registerFailure = (error) => ({
  type: userTypes.REGISTER_EMAIL_FAILURE,
  payload: error,
});

/* Sign In */
export const signInWithEmail = (userCredentials) => ({
  type: userTypes.SIGN_IN_WITH_EMAIL,
  payload: userCredentials,
});
