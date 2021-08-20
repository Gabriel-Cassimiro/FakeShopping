import { GetStaticProps } from "next"
import React from "react"
import Link from "next/link"
import Image from "next/image"
import axios from "axios"
import useProductsContext, { Product } from "../context/ProductsContext"

type HomeProps = {
	ProductsData: Product[]
}

export default function ProductListing({ ProductsData }: HomeProps) {
	const { addCart } = useProductsContext()

	//console.log(ProductsData)

	// prettier-ignore
	return (
    <div className="flex flex-wrap h-full py-2">
      {ProductsData.map(products => {
        return (
          <div key={products.id} className="CONTAINER  p-4 lg:w-1/4">
            <div className="flex flex-col p-8 bg-white border-2 border-gray rounded-lg shadow-2xl">
              <Link href={`/product/${products.id}`}>
                <button className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                  <Image src={products.image} alt={products.title} height={900} width={900} title={products.category} className="object-contain border-b-2 p-5" />
                </button>
              </Link>
              <p className="text-base h-12 overflow-hidden text-left uppercase text-gray-900 font-bold">{products.title}</p>
              <div className="flex flex-row items-center justify-between py-2">
                <p className="font-bold text-xl">{products.price}$</p>
                <button onClick={() => addCart(products)}  className="px-6 py-2  border-2 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-gray-900 focus:outline-none">
                  Add to cart
                  </button>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
export const getStaticProps: GetStaticProps = async () => {
	const response = await axios.get<Product[]>(
		"https://fakestoreapi.com/products"
	)
	const ProductsData = response.data

	return {
		props: { ProductsData } // will be passed to the page component as props
		//revalidate: 60 * 60 * 7 //one week. Default is false and never revalidate.
		//An optional amount in seconds after which a page re-generation can occur.
	}
}
