import {Link, NavLink, useNavigate} from "react-router-dom"
import React from "react"
import s from './Header.module.css'

export default (props) => {

	const navigate = useNavigate()

	return (
		<nav className={s.header}>
			<NavLink>
				<a onClick={e =>{
					e.preventDefault()
					navigate('/')
				}} >
					Store
				</a>
			</NavLink>
			<NavLink>
				<a onClick={e =>{
					e.preventDefault()
					navigate('history')
				}} >
					Buy history
				</a>
			</NavLink>
			<NavLink>
				<a onClick={e =>{
				e.preventDefault()
				navigate('cart')
				}} >
					<span>Cart</span>
					{!!props.cartItems.length && <span className={s.cart__amount}>{props.cartItems.length}</span>}
				</a>
			</NavLink>
		</nav>
	)
}
