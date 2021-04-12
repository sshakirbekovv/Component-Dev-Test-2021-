import { CategoryListResponse } from "../../shared/type";
import { CategoriesAction, CategoriesActionTypes } from "./categories.types";

export interface CategoriesState {
    categories: CategoryListResponse | null;
    error: string | null;
}

const defaultState = {
    categories: null,
    error: null
}

export const categoriesReducer = (state: CategoriesState = defaultState, action: CategoriesAction): CategoriesState => {
    switch(action.type) {
        case CategoriesActionTypes.FETCH_CATEGORIES_SUCCESS:
            return {
                ...state,
                categories: action.payload,
            }; 
        case CategoriesActionTypes.FETCH_CATEGORIES_ERROR:
            return {
                ...state,
                error: action.payload,
            }
        default:
            return state;
    }
}
