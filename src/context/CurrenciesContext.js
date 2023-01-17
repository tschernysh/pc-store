import {createContext} from "react";

function noop(){}

export const CurrenciesContext = createContext({
	currencies: null,
	setCurrencies: noop,
	currentCurrency: null,
	setCurrentCurrency: noop
})
