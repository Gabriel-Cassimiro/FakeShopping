import "tailwindcss/tailwind.css"

import type { AppProps } from "next/app"
import Header from "../components/Header"
//import { ProductsProvider } from "../context/ProductsContext"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Header />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
