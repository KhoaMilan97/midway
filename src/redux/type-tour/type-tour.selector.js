import { createSelector } from "reselect";

const selectType = state => state.type;

export const selectAllType = createSelector([selectType], type => type.type);
