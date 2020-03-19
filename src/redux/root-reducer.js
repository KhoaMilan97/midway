import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import userReducer from "./user/user.reducer";
import tourReducer from "./tour/tour.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user"]
};

const rootReducer = combineReducers({
  user: userReducer,
  tour: tourReducer
});

export default persistReducer(persistConfig, rootReducer);
