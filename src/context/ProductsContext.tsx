import React, { createContext, useContext, ReactNode, useState, useEffect } from "react"
import { useImmer } from "use-immer"

export interface Product {
	id: number
	title: string
	price: number
	description: string
	category: string
	image: string
}

export interface Product {
	qty: number
}

export interface ProductsList {
	productsCart: Product[]
	addCart: (product: Product) => void
	removeCart: (product: Product) => void
	isShowing: boolean
	isOpen: (isShowing: boolean) => void
	subtotal: number
	subItems: number
}

type PlayerContextProviderProps = {
	children: ReactNode //Type from react. Anything reacts accepts as jsx
	value?: ProductsList
}

export const ProductsContext = createContext({} as ProductsList)

export function ProductsProvider({ children }: PlayerContextProviderProps) {
	const [productsCart, setProductsCart] = useImmer<Product[]>([])
	const [isShowing, setIsShowing] = useState(false)
	const [subtotal, setSubTotal] = useState(0)
	const [subItems, setSubItems] = useState(0)

	function isOpen() {
		setIsShowing(prevCheck => !prevCheck)
	}

	function addCart(product: Product) {
		const exist = productsCart.find(cart => cart.id === product.id) as Product
		if (!product.qty) {
			product.qty = 1
			setProductsCart(draft => {
				draft.push(product)
			})
		} else if (exist) {
			setProductsCart(
				productsCart.map(cart => (cart.id === product.id ? { ...exist, qty: exist.qty + 1 } : cart))
			)
		} else {
			setProductsCart(draft => {
				draft.push(product)
			})
		}
	}

	function removeCart(product: Product) {
		//The find() method returns the value of the first element in the provided array that satisfies the provided testing function.
		const exist = productsCart.find(cart => cart.id === product.id) as Product
		if (exist.qty === 1) {
			//The filter() method creates a new array with all elements that pass the test implemented by the provided function.
			setProductsCart(productsCart.filter(x => x.id !== product.id))
			setSubTotal(0)
		} else {
			setSubTotal(productsCart.reduce((acc, obj) => acc - obj.price * obj.qty, 0))
			setProductsCart(
				productsCart.map(prodCart =>
					prodCart.id === product.id ? { ...product, qty: product.qty - 1 } : prodCart
				)
			)
		}
	}

	useEffect(() => {
		async function setTotal() {
			try {
				/* 	reduce() returns the sum of all the elements in an array.The reducer walks through the array element-by-element, 
				at each step adding the current array value to the result from the previous step 
				(this result is the running sum of all the previous steps) — until there are no more elements to add.*/
				setSubItems(productsCart.reduce((acc, obj) => acc + obj.qty, 0))
				setSubTotal(productsCart.reduce((acc, obj) => acc + obj.price * obj.qty, 0))
			} catch (e) {
				console.log("There was a problem updating the cart")
			}
		}
		setTotal()
	}, [productsCart])

	return (
		<ProductsContext.Provider
			value={{
				productsCart,
				addCart,
				isShowing,
				isOpen,
				subtotal,
				subItems,
				removeCart
			}}
		>
			{children}
		</ProductsContext.Provider>
	)
}

export default function useProductsContext() {
	return useContext(ProductsContext)
}
