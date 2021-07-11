import React, { useEffect } from "react"
import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import ProductComponent from "../../components/ProductComponent"
import { setProducts } from "../../redux/actions/productActions"

function ProductsListing() {
  const products = useSelector(state => state) //fetch product from redux store
  const dispatch = useDispatch()
  //console.log(products)

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await axios.get("https://fakestoreapi.com/products")
        dispatch(setProducts(response.data))
      } catch (e) {
        console.log("There was a erro fetching the products", e)
      }
    }
    fetchProducts()
    console.log(products)
  }, [])

  return (
    <div>
      <h1>
        <ProductComponent />
      </h1>
    </div>
  )
}

export default ProductsListing
