import { iCategory, textByStoreCategory } from "@/types/Category";
import { get } from "./instance";

const mock = true

export const getAllCategories = async (): iCategory => {
    if (mock) return textByStoreCategory

    return await get('') as iCategory
}