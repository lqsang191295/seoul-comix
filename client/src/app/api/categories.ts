import { iCategory, textByStoreCategory } from "@/types/Category";
import { get } from "./instance";

const mock = true

export const getAllCategories = async (): Promise<iCategory> => {
    if (mock) return textByStoreCategory

    return await get('') as iCategory
}