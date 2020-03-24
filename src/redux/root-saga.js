import { call, all } from "redux-saga/effects";

import { userSaga } from "./user/user.sagas";
import { tourSagas } from "./tour/tour.sagas";
import { typeSagas } from "./type-tour/type_tour.saga";

export function* rootSaga() {
  yield all([call(userSaga), call(tourSagas), call(typeSagas)]);
}
