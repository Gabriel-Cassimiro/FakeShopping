import React from "react"
import { useSelector } from "react-redux"
import { State } from "../redux/reducers/index"

function ProductComponent() {
  const product = useSelector((state: State) => state.allProducts.products)

  return (
    <div className=" flex flex-row ">
      <div className="container  max-w-sm w-full p-4 sm:w-1/2">
        <div className="card flex flex-col justify-center p-10 bg-white rounded-lg shadow-2xl">
          <div className="prod-title">
            <p className="text-2xl uppercase text-gray-900 font-bold"></p>
            <p className="uppercase text-sm text-gray-400"></p>
          </div>
          <div className="prod-img">
            <img src="https://unsplash.com/photos/IJjfPInzmdk/download?force=true&w=1920" className="w-full object-cover object-center" />
          </div>
          <div className="prod-info grid gap-10">
            <div></div>
            <div className="flex flex-col md:flex-row justify-between items-center text-gray-900">
              <p className="font-bold text-xl">65 $</p>
              <button className="px-6 py-2  border-2 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-gray-900 focus:outline-none">Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductComponent
