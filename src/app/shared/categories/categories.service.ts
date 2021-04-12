import axios from "axios"
import { CategoryListResponse } from "../type";

export interface CategoriesService { 
    getCategories: () => Promise<CategoryListResponse>;
}

export const categoriesService: CategoriesService = {
    getCategories
};

function getCategories () {

    

    return axios.get<CategoryListResponse>(
        `https://f.v1.n0.cdn.getcloudapp.com/items/3e1W2F0W1s2U2d3R2Z46/content.json`
    ).then((res) => res.data);
}
