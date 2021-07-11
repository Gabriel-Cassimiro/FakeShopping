import { ActionsTypes } from "./actions-types"

export interface Products {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
}

interface setProducts {
  type: ActionsTypes.SET_PRODUCT
  payload: Products
}

interface selectedProducts {
  type: ActionsTypes.SELECTED_PRODUCT
  payload: Products
}

interface removeSelectedProduct {
  type: ActionsTypes.REMOVE_SELECTED_PRODUCT
}

export type Action = setProducts | selectedProducts | removeSelectedProduct
