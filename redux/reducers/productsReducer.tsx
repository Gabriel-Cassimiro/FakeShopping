import { ActionsTypes } from "../actions/actions-types"
import { Action, Products } from "../actions/actionsInterface"

//State which we use with useSelector

export interface initialStateI {
  products: Products[]
}

const initialState = {
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
