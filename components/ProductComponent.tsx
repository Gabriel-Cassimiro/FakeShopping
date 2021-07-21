import React from "react"
import { useSelector } from "react-redux"
import { State } from "../redux/reducers/index"
import Link from "next/link"

function ProductComponent() {
  const product = useSelector((state: State) => state.allProducts.products)
  //console.log("Product component: ", product)

  return (
    <div className="flex flex-wrap">
      {product.map(products => {
        return (
          <div key={products.id} className="container w-full p-4 lg:w-1/4">
            <div className="h-full flex flex-col justify-around p-8 bg-white border-2 border-gray rounded-lg shadow-2xl">
              <Link href={`/products/${products.id}`}>
                <button className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                  <img src={products.image} alt={products.title} title={products.category} className="w-full h-48 object-contain border-b-2 p-5" />
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

export default ProductComponent
