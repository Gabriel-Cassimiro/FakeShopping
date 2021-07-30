import { ActionsTypes } from "../actions/actions-types"
import { Action, Products } from "../actions/actionsInterface"

//State which we use with useSelector

export interface initialStateI {
  products: Products[]
}

const initialState: initialStateI = {
  products: []
}

//Remember to declare state types as state: Products = initialState
export const productReducer = (state = initialState, action: Action): initialStateI => {
  //Deconstruct action to {type, payload}
  //console.log(action)
  switch (action.type) {
    case ActionsTypes.SET_PRODUCT:
      return { ...state, products: action.payload }
    default:
      return state
  }
}

export const selectedProductsReducer = (state: Products | {} = {}, action: Action): Products => {
  console.log(action.type)
  switch (action.type) {
    case ActionsTypes.SELECTED_PRODUCT:
      return { ...state, ...action.payload }
    case ActionsTypes.REMOVE_SELECTED_PRODUCT:
      return {} as Products
    default:
      return state as Products
  }
}
