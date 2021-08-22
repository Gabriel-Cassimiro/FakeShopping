import React, {
	createContext,
	useContext,
	ReactNode,
	useState,
	useEffect
} from "react"
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
				productsCart.map(cart =>
					cart.id === product.id ? { ...exist, qty: exist.qty + 1 } : cart
				)
			)
		} else {
			setProductsCart(draft => {
				draft.push(product)
			})
		}
	}

	function removeCart(product: Product) {
		const exist = productsCart.find(cart => cart.id === product.id) as Product
		if (exist.qty === 1) {
			setProductsCart(productsCart.filter(x => x.id !== product.id))
			setSubTotal(0)
		} else {
			productsCart.map(prod => {
				const totalProduct = prod.price * prod.qty
				setSubTotal(prev => prev - totalProduct)
			})
			setProductsCart(
				productsCart.map(prodCart =>
					prodCart.id === product.id
						? { ...exist, qty: exist.qty - 1 }
						: prodCart
				)
			)
		}
	}

	useEffect(() => {
		async function setTotal() {
			try {
				setSubItems(productsCart.reduce((acc, obj) => acc + obj.qty, 0))
				setSubTotal(
					productsCart.reduce((acc, obj) => acc + obj.price * obj.qty, 0)
				)
				/* productsCart.map(prod => {
					const totalProduct = prod.price * prod.qty
					setSubTotal(totalProduct)
				}) */
			} catch (e) {
				console.log("There was a problem updating the cart")
			}
		}
		setTotal()
	}, [productsCart])

	//prettier-ignore
	return (
    <ProductsContext.Provider 
      value={{ 
        productsCart,
        addCart,
				isShowing,
				isOpen,
				subtotal,
				subItems,
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
