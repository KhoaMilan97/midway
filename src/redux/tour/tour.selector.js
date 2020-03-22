import { createSelector } from "reselect";

const selectTour = state => state.tour;

export const selectAllTours = createSelector([selectTour], tour => tour.tours);

export const selectHotTours = createSelector([selectAllTours], tours =>
  tours.filter(tour => tour.hot === 1)
);

export const selectPopularTours = createSelector([selectAllTours], tours =>
  tours.sort((a, b) => b.paid - a.paid)
);

export const selectTourLoading = createSelector(
  [selectTour],
  tour => tour.loading
);

export const getUrlParams = (state, props) =>
  state.tour.tours.find(tour => tour.id_tour === parseInt(props));

export const selectTourDetails = createSelector(
  [getUrlParams],
  toursDetails => toursDetails
);
