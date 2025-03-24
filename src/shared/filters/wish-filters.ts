import { WishItem } from "../models/wishItem";

export const WishFilters = [
    (item: WishItem) => item,
    (item: WishItem) => !item.isComplete,
    (item: WishItem) => item.isComplete
];