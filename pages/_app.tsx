import "tailwindcss/tailwind.css"
import Header from "../components/Header"
import { Provider } from "react-redux"
import store from "../redux/store"
import ProductComponent from "../components/ProductComponent"

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <main>
        <Header />
        <ProductComponent />
        <Component {...pageProps} />{" "}
      </main>
    </Provider>
  )
}

export default MyApp
