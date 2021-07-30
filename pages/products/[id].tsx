import React, { useEffect } from "react"
import Image from "next/image"
import { useDispatch, useSelector } from "react-redux"
import { selectedProducts, removeSelectedProduct } from "../../redux/actions/productActions"
import { State } from "../../redux/reducers/index"
import { useRouter } from "next/router"
import axios from "axios"
import { Products } from "../../redux/actions/actionsInterface"

export default function ProductDetails() {
  const product = useSelector((state: State) => state.selectedProduct)
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
  }, [id])

  return (
    <div>
      {Object.keys(product).length === 0 ? (
        <div className="py-10 flex flex-wrap justify-center ">
          <div className="flex p-2 rounded-lg border-2 border-yellow-300 ">
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 mr-3 border-red-600 "></div>
            Loading...
          </div>
        </div>
      ) : (
        <div className="grid grid-areas-layout grid-cols-2 grid-rows-layout">
          <Image className="grid-in-image" height={100} width={100} objectFit={"contain"} src={product.image} />
          <div className="grid-in-content1 bg-green-200">{product.title}</div>
          <div className="grid-in-content2 bg-green-400">$ {product.price}</div>
          <div className="grid-in-content3 bg-red-300">{product.category}</div>
          <div className="grid-in-content4 bg-green-600">{product.description}</div>
          <div className="grid-in-button bg-yellow-300">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Buy</button>
          </div>
        </div>
      )}
    </div>
  )
}

/* export async function getStaticPaths() {
  const { data } = await axios.get<Products[]>("https://fakestoreapi.com/products")
  const paths = data.map(product => {
    return {
      params: {
        id: product.id.toString()
      }
    }
  })

  return { paths, fallback: "blocking" }
  //fallback: 'true' The paths that have not been generated at build time will NOT result in a 404 page.
  //fallback: 'false'  Any paths not returned by getStaticPaths (paths:[]) will result in a 404 page.
}

export async function getStaticProps({ params }: Params) {
  const res = await axios.get<Products>(`https://fakestoreapi.com/products/${params.id}`)
  const product = res.data

  return {
    props: {
      initialReduxState: {
        product
      }
    },
    revalidate: 60 * 60 * 24 // 24 hours
  }
} */
