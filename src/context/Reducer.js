export const cartReducer = (state, action) => {

    switch (action.type) {
        case "ADD_TO_CART":
            return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] }
        case "REMOVE_FROM_CART":
            return { ...state, cart: state.cart.filter(c => c.id !== action.payload.id) }
        case "CHANGE_CART_QTY":
            return {
                ...state, cart: state.cart.filter(c => c.id === action.payload.id ? c.qty = action.payload.qty : c.qty)
            }
        default: return state
    }
}

export const filterReducer = (state, action) => {
    switch (action.type) {
        case "SORT_BY_PRICE":
            return { ...state, sort: action.payload }
        case "FILTER_BY_STOCK":
            return { ...state, byStock: !state.byStock }
        case "FILTER_BY_DELIVERY":
            return { ...state, sort: action.payload.by }
        case "FILTER_BY_RATING":
            return { ...state, sort: action.payload }
        case "FILTER_BY_SEARCH":
            return { ...state, sort: action.payload }


        default: return state;
    }
}