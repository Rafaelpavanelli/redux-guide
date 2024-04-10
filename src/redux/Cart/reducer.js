import {
    CartActionTypes
} from "./action-types";
const initialState = {
    Products: [],
    PriceTotalProducts: 0
}
export const CartReducer = (state = initialState, action) => {
    switch (action.type) {
        case CartActionTypes.ADD_PRODUCT:
            const Product = [...initialState.Products, action.payload]
            return Product;
        default:
            return state;

    }
};