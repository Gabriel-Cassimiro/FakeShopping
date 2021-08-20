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

export interface ProductsList {
	productsCart: Product[]
	addCart: (product: Product) => void
	removeCart: () => void
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
		//Receives object and pushe into array
		setProductsCart(draft => {
			draft.push(product)
		})
	}

	function removeCart() {}

	useEffect(() => {
		async function setTotal() {
			try {
				productsCart.map(prod => {
					setSubTotal(prod.price + subtotal)
				})
				setSubItems(productsCart.length)
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
