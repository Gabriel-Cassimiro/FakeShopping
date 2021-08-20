import React, { createContext, useContext, ReactNode, useState } from "react"
import { useImmer } from "use-immer"

export interface Product {
	id: number
	title: string
	price: number
	description: string
	category: string
	image: string
}

export interface ProductsList {
	productsCart: Product[]
	addCart: (product: Product) => void
	removeCart: () => void
	isShowing: boolean
	isOpen: (isShowing: boolean) => void
	subtotal: number
	setTotal: () => void
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

	function isOpen() {
		setIsShowing(prevCheck => !prevCheck)
	}

	function addCart(product: Product) {
		//Receives object and pushe into array
		setProductsCart(draft => {
			draft.push(product)
		})
	}

	function removeCart() {}

	function setTotal() {
		productsCart.map(n => {
			setSubTotal(preValue => (preValue += n.price))
		})
	}

	//prettier-ignore
	return (
    <ProductsContext.Provider 
      value={{ 
        productsCart,
        addCart,
				isShowing,
				isOpen,
				subtotal,
				setTotal,
				removeCart,
       }}
      >
      {children}
    </ProductsContext.Provider>
  )
}

export default function useProductsContext() {
	return useContext(ProductsContext)
}
