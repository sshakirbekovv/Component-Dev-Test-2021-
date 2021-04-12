import { CategoryListResponse } from "../../shared/type"
import { FetchCategoriesAction, CategoriesActionTypes, FetchCategoriesSuccessAction, FetchCategoriesErrorAction } from "./categories.types"



export const fetchCategories = (): FetchCategoriesAction => {
    return {
        type: CategoriesActionTypes.FETCH_CATEGORIES
    }
}

export const fetchCategoriesSuccess = (categories: CategoryListResponse): FetchCategoriesSuccessAction => {
    return {
        type: CategoriesActionTypes.FETCH_CATEGORIES_SUCCESS,
        payload: categories,
    }
}

export const fetchCategoriesError = (error: string): FetchCategoriesErrorAction => {
    return {
        type: CategoriesActionTypes.FETCH_CATEGORIES_ERROR,
        payload: error,
    }
}

