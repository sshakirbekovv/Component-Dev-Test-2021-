import { CategoryListResponse } from "../../shared/type";


export enum  CategoriesActionTypes {
    FETCH_CATEGORIES = 'FETCH_CATEGORIES',
    FETCH_CATEGORIES_SUCCESS = 'FETCH_CATEGORIES_SUCCESS',
    FETCH_CATEGORIES_ERROR = 'FETCH_CATEGORIES_ERROR',
}

export interface FetchCategoriesAction {
    type:  CategoriesActionTypes.FETCH_CATEGORIES;
}

export interface FetchCategoriesSuccessAction {
    type:  CategoriesActionTypes.FETCH_CATEGORIES_SUCCESS;
    payload: CategoryListResponse;
}

export interface FetchCategoriesErrorAction {
    type:  CategoriesActionTypes.FETCH_CATEGORIES_ERROR;
    payload: string;
}

export type CategoriesAction = FetchCategoriesAction 
        | FetchCategoriesSuccessAction 
        | FetchCategoriesErrorAction