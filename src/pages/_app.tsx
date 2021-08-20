import "tailwindcss/tailwind.css"

import type { AppProps } from "next/app"
import Header from "../components/Header"
import { ProductsProvider, Product } from "../context/ProductsContext"

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ProductsProvider>
			<div>
				<Header />
				<Component {...pageProps} />
			</div>
		</ProductsProvider>
	)
}

export default MyApp
