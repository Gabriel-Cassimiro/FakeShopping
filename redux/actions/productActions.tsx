import { ActionsTypes } from "./actions-types"
import { Action, Products } from "./actionsInterface"
import { Dispatch } from "redux"

export function setProducts(products: Products[]) {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionsTypes.SET_PRODUCT,
      payload: products
    })
  }
}

export function selectedProducts(product: Products) {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionsTypes.SELECTED_PRODUCT,
      payload: product
    })
  }
}

export function removeSelectedProduct() {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionsTypes.REMOVE_SELECTED_PRODUCT
    })
  }
}
