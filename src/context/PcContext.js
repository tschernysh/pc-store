import {createContext} from "react";

function noop(){}
export const PcContext = createContext({
	pcItems: null,
	setPcItems: noop,
})
