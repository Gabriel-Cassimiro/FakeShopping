import React, { useEffect } from "react"
import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import ProductComponent from "../components/ProductComponent"
import { setProducts } from "../redux/actions/productActions"
import { State } from "../redux/reducers/index"
import { Products } from "../redux/actions/actionsInterface"

function ProductsListing() {
  //const products = useSelector((state: State) => state.allProducts.products)
  //fetch product from redux store
  const dispatch = useDispatch()
  //console.log(products)

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await axios.get<Products[]>("https://fakestoreapi.com/products")
        dispatch(setProducts(response.data))
      } catch (e) {
        console.log("There was a erro fetching the products")
      }
    }
    fetchProducts()
  }, [])

  //console.log("Products :", products)
  return (
    <div>
      <ProductComponent />
    </div>
  )
}

export default ProductsListing
