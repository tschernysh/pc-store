import CartItem from "./CartItem/CartItem"
import s from './Cart.module.css'
import {useContext, useEffect, useRef, useState} from "react"
import {useHttp} from "../../hooks/http.hook"
import {CurrenciesContext} from "../../context/CurrenciesContext"
import {HistoryContext} from "../../context/HistoryContext"

export default (props) => {
	const { request, loading, error, message, clearError, clearMessage } = useHttp()
	const {currencies, setCurrencies, currentCurrency, setCurrentCurrency} = useContext(CurrenciesContext)
	const {historyPc, setHistoryPc} = useContext(HistoryContext)
	const [buyerName, setBuyerName] = useState('')

	const removeCartItem = (id) => {
		let removedCart = props.cartItems.filter(el => el.id !== id )
		props.setCartItems([...removedCart])
	}


	const getCurrencies = async () => {
		let data
		try{
			data = await request('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/uah.json', 'GET')
		}catch(error){
			console.log(error)
		}
		setCurrencies(data.uah)
	}
	
	const calculateTotalPrice = () => {
		let total = 0
		for(let i = 0; i < props.cartItems.length; i++) {
			total += props.cartItems[i].price		
		}
		total = total * Object.values(currentCurrency)[0]
		return total.toFixed(2)
	}

	const handleOrder = () => {
		let allOrders = []
		for(let i = 0; i < props.cartItems.length; i++){
			let price = props.cartItems[i].price * Object.values(currentCurrency)[0]
			price = price.toFixed(2)
			let img = props.cartItems[i].img
			let name = props.cartItems[i].name
			let currency = Object.keys(currentCurrency)[0]
			
			let orderItem = {buyerName, price, img, name, currency}
			allOrders.push(orderItem)
		}
		setHistoryPc([...allOrders ,...historyPc])
		alert('Thank you for your order. Our manager will soon contact with you')
		props.setCartItems([])
	}

	useEffect(() => getCurrencies, [])

	useEffect(() => {
		console.log(currentCurrency)
	}, [currentCurrency])

	return(
		<div>
			<div className={s.cart__wrapper}>
				{props.cartItems.map(el => <CartItem name={el.name} price={el.price * Object.values(currentCurrency)[0]} currency={Object.keys(currentCurrency)[0]} img={el.img} removeCartItem={() => removeCartItem(el.id)} />)}
			</div>
			{ props.cartItems.length ?
				<div className={s.cart__buy}>
					<input value={buyerName} onChange={e => setBuyerName(e.target.value)} placeholder="Your name" />
					<select onChange={e => setCurrentCurrency({[e.target.value]: currencies[e.target.value] })} value={Object.keys(currentCurrency)[0]} >
						{Object.keys(currencies).length && Object.keys(currencies).map((el, index) => <option  value={el}>{el} {currencies[el]}</option>)}
					</select>
					<p>Total: {calculateTotalPrice()} {Object.keys(currentCurrency)[0]}</p>
					<button onClick={handleOrder}>Order</button>
				</div>
				: 'Add some items to your cart first'
			}
		</div>
	)
}
