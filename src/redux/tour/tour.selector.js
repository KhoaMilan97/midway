import { createSelector } from "reselect";

const selectTour = state => state.tour;

export const selectAllTours = createSelector([selectTour], tour => tour.tours);

export const selectHotTours = createSelector([selectAllTours], tours =>
  tours.filter(tour => tour.hot === 1)
);

export const selectPopularTours = createSelector([selectAllTours], tours =>
  tours.sort((a, b) => b.paid - a.paid)
);
