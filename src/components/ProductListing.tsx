import React from "react"
import Link from "next/link"
import Image from "next/image"

function ProductListing() {
  /* interface Products {
    id: number
    title: string
    price: number
    description: string
    category: string
    image: string
  } */

  const product = [
    {
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
    }
  ]

  return (
    <div className="flex flex-wrap">
      {product.map(products => {
        return (
          <div key={products.id} className="CONTAINER p-4 lg:w-1/4">
            <div className="flex flex-col p-8 bg-white border-2 border-gray rounded-lg shadow-2xl">
              <Link href={`/product/${products.id}`}>
                <button className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                  <Image src={products.image} alt={products.title} height={900} width={900} title={products.category} className="object-contain border-b-2 p-5" />
                </button>
              </Link>
              <p className="text-base h-12 overflow-hidden text-left uppercase text-gray-900 font-bold">{products.title}</p>
              <div className="flex flex-row items-center justify-between py-2">
                <p className="font-bold text-xl">{products.price}$</p>
                <button className="px-6 py-2  border-2 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-gray-900 focus:outline-none">Add to cart</button>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default ProductListing
