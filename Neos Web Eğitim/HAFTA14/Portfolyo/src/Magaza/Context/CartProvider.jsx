import { createContext, useReducer } from "react";

export const cartContexts = createContext();

const defaultCartState = {
    items: [],
    totalAmount: 0,
};

const cartReducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            const cartItemIndex = state.items.findIndex(
                (item) => item.id === action.item.id
            );
            let updateItems = [...state.items];
            if (cartItemIndex !== -1) {
                updateItems[cartItemIndex] = {
                    ...state.items[cartItemIndex],
                    amount:
                        state.items[cartItemIndex].amount + action.item.amount,
                };
            } else {
                updateItems = [...state.items, action.item];
            }

            return {
                items: updateItems,
                totalAmount:
                    state.totalAmount + action.item.price * action.item.amount,
            };
            break;

        case "REMOVE":
            const filteredItems = state.items.filter(
                (item) => item.id !== action.id
            );
            const itemToRemove = state.items.find(
                (item) => item.id === action.id
            );
            return {
                items: filteredItems,
                totalAmount:
                    state.totalAmount -
                    itemToRemove.price * itemToRemove.amount,
            };

            break;

        case "CLEAR":
            return defaultCartState;
            break;

        default:
            return state;
            break;
    }
};

const CartProvider = ({ children }) => {
    const [cartState, dispatchCartAction] = useReducer(
        cartReducer,
        defaultCartState
    );

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,

        addItem: (item) => {
            dispatchCartAction({ type: "ADD", item });
        },
        removeItem: (id) => {
            dispatchCartAction({
                type: "REMOVE",
                id,
            });
        },
        clearItem: () => {
            dispatchCartAction({
                type: "CLEAR",
            });
        },
    };

    return (
        <cartContexts.Provider value={cartContext}>
            {children}
        </cartContexts.Provider>
    );
};

export default CartProvider;
