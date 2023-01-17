import {Route, Router, Routes} from 'react-router-dom';
import React, {Fragment, useEffect, useState} from "react"
import s from './App.module.css'
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import History from './components/History/History';
import {PcContext} from './context/PcContext';
import {HistoryContext} from './context/HistoryContext';
import {CartContext} from './context/CartContext'; import Cart from './components/Cart/Cart';
import img1 from './components/PcItem/assets/1.jpg'
import img2 from './components/PcItem/assets/2.jpg'
import img3 from './components/PcItem/assets/3.jpg'
import img4 from './components/PcItem/assets/4.jpg'
import img5 from './components/PcItem/assets/5.jpg'
import img6 from './components/PcItem/assets/6.jpg'
import {CurrenciesContext} from './context/CurrenciesContext';

export default () => {

	const [pcItems, setPcItems] = useState([
		{
			id: 0,
			name: 'ARTLINE Gaming X35 (X31v16)',
			img: img1,
			price: 20127,
			ram: 'DDR4  8 ГБ  2666 МГц',
			videoCard: 'GeForce GTX1050 Ti',
			motherBoard: 'PRIME H410M-K',
			cpu: 'Intel Core i3-10100F (3.6 - 4.3 ГГц)',
		},
		{
			id: 1,
			name: 'ARTLINE Gaming X31 (X31v16)',
			img: img2,
			price: 22608,
			ram: 'DDR4  16 ГБ  2666 МГц',
			videoCard: 'GeForce GTX1050 Ti',
			motherBoard: 'PRIME H310M-K',
			cpu: 'Intel Core i3-9100F (3.6 - 4.2 ГГц)',
		},
		{
			id: 2,
			name: 'ARTLINE Gaming X39 (X39v47)',
			img: img3,
			price: 34521,
			ram: 'DDR4  2666 МГц',
			videoCard: 'nVidia GeForce RTX 2060',
			motherBoard: 'PRIME H410M-K',
			cpu: 'Intel Core i5-10400F (2.9 - 4.3 ГГц)',
		},
		{
			id: 3,
			name: 'ARTLINE Gaming X55 (X55v23)',
			img: img4,
			price: 40479,
			ram: 'DDR4  16 ГБ  2666 МГц',
			videoCard: 'nVidia GeForce RTX 3060',
			motherBoard: 'PRIME B460M-A',
			cpu: 'Intel Core i5-10400F (2.9 - 4.3 ГГц)',
		},
		{
			id: 4,
			name: 'ARTLINE Gaming X55 (X55v26)',
			img: img5,
			price: 37407,
			ram: 'DDR4 16 ГБ  2666 МГц',
			videoCard: 'nVidia GeForce RTX 2060',
			motherBoard: 'PRIME B460M-A',
			cpu: 'Intel Core i5-10400F (2.9 - 4.3 ГГц)',
		},
		{
			id: 5,
			name: 'ARTLINE Gaming X63 (X63v17)',
			img: img6,
			price: 36594,
			ram: 'DDR4  32 ГБ  3000 МГц',
			videoCard: 'nVidia GeForce GTX 1660 SUPER',
			motherBoard: 'PRIME B450M-A',
			cpu: 'AMD Ryzen 5 3600 (3.6 - 4.2 ГГц)',
		},

	])
	const [historyPc, setHistoryPc] = useState([])
	const [cartItems, setCartItems] = useState([])
	const [currencies, setCurrencies] = useState({})
	const [currentCurrency, setCurrentCurrency] = useState({'uah': 1})

  return (
		<PcContext.Provider value={{pcItems, setPcItems}}>			
			<HistoryContext.Provider value={{historyPc, setHistoryPc}}>			
				<CartContext.Provider value={{cartItems, setCartItems}}>
					<CurrenciesContext.Provider value={{currencies, setCurrencies, currentCurrency, setCurrentCurrency}}>					
						<div className={s.app}>
						<div className={s.wrapper}>
							<Header cartItems={cartItems} />
							<div className={s.container}>
								<Routes>
									<Route path='/' exact element={<Main pcItems={pcItems} cartItems={cartItems} setCartItems={setCartItems} />} />
									<Route path='/cart' element={<Cart cartItems={cartItems} setCartItems={setCartItems} />} />
									<Route path='/history' element={<History />} />
								</Routes>
							</div>
						</div>
				</div>
				</CurrenciesContext.Provider>
			</CartContext.Provider>
		</HistoryContext.Provider>
	</PcContext.Provider>

  );
}

