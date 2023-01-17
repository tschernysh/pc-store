import {createContext} from "react";

function noop(){}

export const CartContext = createContext({
	cartItems: null,
	setCartItems: noop
})
