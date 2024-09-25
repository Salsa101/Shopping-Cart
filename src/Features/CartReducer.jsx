export const totalItems = (cart) => {
    return cart.reduce((sum, product) => sum + product.quantity, 0)
}

export const totalPrice = (cart) => {
    return cart.reduce((total, product) => total + product.quantity * product.price, 0)
}

const CartReducer = (state, action) => {
    switch(action.type){
        case "Add":
            return [...state, action.product]
        
        case "Delete":
            return state.filter(p => p.id !== action.id)

        case "Increase":
            const IndexIncrease = state.findIndex (p => p.id === action.id)
            state[IndexIncrease].quantity += 1
            return [...state]

        case "Decrease":
            const IndexDecrease = state.findIndex (p => p.id === action.id)
            state[IndexDecrease].quantity -= 1
            return [...state]
        
        default:
            state;
    }
}

export default CartReducer