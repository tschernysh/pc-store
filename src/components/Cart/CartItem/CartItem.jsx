import s from './CartItem.module.css'

export default (props) => {
	return (
		<div className={s.cart__item}>
			<img src={props.img} />
			<p>{props.name}</p>
			<p>{props.price.toFixed(2)} {props.currency}</p>
			<div onClick={props.removeCartItem} className={s.remove__cart}>X</div>
		</div>
	)
}
