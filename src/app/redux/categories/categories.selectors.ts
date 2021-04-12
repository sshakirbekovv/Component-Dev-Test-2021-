import { createSelector } from "reselect";
import { RootState } from "../root-reducer";

const selectCategoriesState = (state: RootState) => state.category;

export const selectCategories = createSelector(
  [selectCategoriesState],
  (state) => state.categories
);