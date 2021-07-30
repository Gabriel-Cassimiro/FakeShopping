import "tailwindcss/tailwind.css"
import Header from "../components/Header"
import { Provider } from "react-redux"
import store from "../redux/store"
import type { AppProps } from "next/app"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <main>
        <Header />
        <Component {...pageProps} />{" "}
      </main>
    </Provider>
  )
}

export default MyApp
