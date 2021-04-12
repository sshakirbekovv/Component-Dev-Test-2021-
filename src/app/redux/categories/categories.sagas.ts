import { put, takeLatest, all,call } from "redux-saga/effects";
import { categoriesService} from "../../shared/categories/categories.service";
import { fetchCategoriesSuccess, fetchCategoriesError } from "./categories.actions";
import { CategoriesActionTypes } from "./categories.types";

export function* fetchCategoriesAsync() {
        try {
            const res = yield call(categoriesService.getCategories);
            yield put(fetchCategoriesSuccess(res));
        } catch (e) {
            yield put(fetchCategoriesError(e.message));
        }
}

export function* fetchCategoriesSaga() {
    yield takeLatest(CategoriesActionTypes.FETCH_CATEGORIES, fetchCategoriesAsync);
}


export function* categoriesSagas() {
    yield all([
        call(fetchCategoriesSaga)
    ]);
}
