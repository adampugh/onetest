const defaultState = {
    cart: []
}

export default function reducer(state = defaultState, action) {
    switch (action.type) {
        case 'ADD_PRODUCT':
            return {
                cart: [...state.cart, action.product]
            }
        case 'REMOVE_PRODUCT':
            return {
                cart: state.cart.filter(product => product.id !== action.id)
            }
        default:
            return state;
    }
}