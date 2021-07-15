import "tailwindcss/tailwind.css"
import Header from "../components/Header"
import { Provider } from "react-redux"
import store from "../redux/store"

function MyApp({ Component, pageProps }: any) {
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
