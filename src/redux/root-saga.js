import { call, all } from "redux-saga/effects";

import { userSaga } from "./user/user.sagas";

export function* rootSaga() {
  yield all([call(userSaga)]);
}
