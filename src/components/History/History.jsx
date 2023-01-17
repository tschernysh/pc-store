import {useContext} from "react"
import {HistoryContext} from "../../context/HistoryContext"
import HistoryItem from "./HistoryItem/HistoryItem"
import s from './History.module.css'

export default () => {
	const {historyPc} = useContext(HistoryContext)

	return (
		<div className={s.history}>
			<h1>Order history</h1>
			<div className={s.history__wrapper}>
				{historyPc.map(el => <HistoryItem img={el.img} name={el.name} buyerName={el.buyerName} price={el.price} currency={el.currency} />)}
			</div>
		</div>
	)
}
