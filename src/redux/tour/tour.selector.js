import { createSelector } from "reselect";

const selectTour = state => state.tour;

export const selectAllTours = createSelector([selectTour], tour => tour.tours);
