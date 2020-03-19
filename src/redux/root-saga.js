import { call, all } from "redux-saga/effects";

import { userSaga } from "./user/user.sagas";
import { tourSagas } from "./tour/tour.sagas";

export function* rootSaga() {
  yield all([call(userSaga), call(tourSagas)]);
}
