import React from "react"
import { GetStaticPaths, GetStaticProps } from "next"
import Image from "next/image"
import axios from "axios"
import { Product } from "../../context/ProductsContext"

type ContextParams = {
  id: string
}

type ProductProps = {
  product: Product
}

export default function ProductDetails({ product }: ProductProps) {
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

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await axios.get<Product[]>("https://fakestoreapi.com/products")
  const data = response.data

  const paths = data.map(product => {
    return {
      params: { id: product.id.toString() } //If params return a number. Convert to string otherwise we get a error
    }
  })

  return { paths, fallback: "blocking" }
  //fallback: 'true' The paths that have not been generated at build time will NOT result in a 404 page.
  //fallback: 'false'  Any paths not returned by getStaticPaths (paths:[]) will result in a 404 page.
}

export const getStaticProps: GetStaticProps = async context => {
  const { id } = context.params as ContextParams
  const res = await axios.get<Product>(`https://fakestoreapi.com/products/${id}`)
  const product = res.data
  return {
    props: { product }
  }
}
