import {createContext} from "react";

function noop(){}

export const HistoryContext = createContext({
	historyPc: null,
	setHistoryPc: noop
})
