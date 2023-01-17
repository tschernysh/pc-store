import s from './MainItem.module.css'

export default (props) => {
	return (
		<div className={s.main__item}>
			<p>{props.name}</p>
			<img src={props.img} />
			<div className={s.main__price}>
				<h3>{props.price} ₴</h3>
				<button onClick={props.setCartItem}>Add to cart</button>
			</div>
		</div>
	)
}
