import React, { useEffect } from "react"
import Image from "next/image"
import { useDispatch, useSelector } from "react-redux"
import { selectedProducts, removeSelectedProduct } from "../../redux/actions/productActions"
import { State } from "../../redux/reducers/index"
import { useRouter } from "next/router"
import axios from "axios"
import { Products } from "../../redux/actions/actionsInterface"

export default function ProductDetails() {
  /* const product = useSelector((state: State) => state.selectedProduct)
  const router = useRouter()
  const { id } = router.query
  const dispatch = useDispatch()

  useEffect(() => {
    async function fetchProduct() {
      try {
        if (id && id !== "") {
          const response = await axios.get<Products>(`https://fakestoreapi.com/products/${id}`)
          dispatch(selectedProducts(response.data))
        } else {
          dispatch(removeSelectedProduct())
        }
      } catch (e) {
        console.log("There was a erro fetching the product")
      }
    }
    fetchProduct()
  }, [id]) */

  const product = {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
  }

  return (
    <div className="flex w-full p-4 justify-center">
      {Object.keys(product).length === 0 ? (
        <div className="py-10 flex flex-wrap justify-center ">
          <div className="flex p-2 rounded-lg border-2 border-yellow-300 ">
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 mr-3 border-red-600 "></div>
            Loading...
          </div>
        </div>
      ) : (
        <div className="PRODUCT sm:grid grid-cols-2 sm:grid-rows-layout p-4 gap-x-4 sm:w-1/2 space-y-3 bg-gray-100 border-2 border-gray rounded-lg shadow-2xl">
          <div className="row-span-5">
            <Image height={350} width={300} className="rounded-lg" layout="responsive" src={product.image} alt={product.title} />
          </div>
          <div className="text-lg font-semibold ">{product.title}</div>
          <div className="font-semibold text-xl ">${product.price}</div>
          <div className="font-light italic  text-center sm:text-left bg-gray-500 text-yellow-400 rounded-md sm:p-2">{product.category}</div>
          <div>{product.description}</div>
          <button className="py-1 border-2 transition w-full ease-in duration-200 uppercase rounded-lg hover:bg-gray-800 hover:text-white border-gray-900 focus:outline-none">Buy</button>
        </div>
      )}
    </div>
  )
}
