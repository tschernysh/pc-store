import s from './HistoryItem.module.css'

export default (props) => {
	return (
		<div className={s.history__item}>
			<img src={props.img} />
			<span>{props.name}</span>
			<span>{props.buyerName}</span>
			<span>{props.price} {props.currency}</span>
		</div>
	)
}
