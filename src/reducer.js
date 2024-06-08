export const initialState = {
    basket: []
}

export const getBasketTotal = (basket) => {
    return basket.reduce((amount, item) => item.price + amount, 0);
};

function reducer(state, action) {
    switch(action.type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                basket: [...state.basket, action.item]
            };

        case 'REMOVE_FROM_CART':
            let newBasket = [...state.basket];

            const index = state.basket.findIndex((basketItem) =>
                basketItem.id === action.id
            );

            if (index >= 0) {
                newBasket.splice(index, 1);
            } else {
                console.warn('cant remove item');
            }

            return {
                ...state,
                basket: newBasket
            };
        case 'TOGGLE_CART_ITEM':
            const itemIndex = state.basket.findIndex((basketItem) =>
                basketItem.id === action.item.id
            );

            if (itemIndex >= 0) {
                // Item exists in basket, so remove it
                return {
                    ...state,
                    basket: state.basket.filter(basketItem => basketItem.id !== action.item.id)
                };
            } else {
                // Item does not exist in basket, so add it
                return {
                    ...state,
                    basket: [...state.basket, action.item]
                };
            }

        
            
        default:
            return state;
    }
}

export default reducer;
