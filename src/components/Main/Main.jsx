import React from "react"
import s from './Main.module.css'
import MainItem from "./MainItem/MainItem"
import img1 from '../PcItem/assets/1.jpg'

const Main = (props) => {

	const setCartItem = (id) => {
		let isDuplicate = false
		for(let i = 0; i < props.cartItems.length; i++){
			if(id === props.cartItems[i].id) isDuplicate = true
		}
		if(isDuplicate) return
		let newCartItem = props.pcItems.filter(el => el.id === id)[0]
		props.setCartItems([...props.cartItems, newCartItem])
	}

	return(
		<div className={s.main__grid}>
			{props.pcItems.map(el => <MainItem img={el.img} name={el.name} price={el.price} setCartItem={() => setCartItem(el.id)} />)}
		</div>
	)
}

export default Main
