import { ActionsTypes } from "../actions/actions-types"
import { Action, Products } from "../actions/actionsInterface"

//State which we use with useSelector

export interface initialStateI {
  products: Products[]
}

const initialState: initialStateI = {
  products: [
    {
      id: 0,
      title: "",
      price: 0,
      description: "",
      category: "",
      image: ""
    }
  ]
}
//Remember to declare state types as state: Products = initialState
export const productReducer = (state: initialStateI = initialState, action: Action): initialStateI => {
  //Deconstruct action to {type, payload}
  switch (action.type) {
    case ActionsTypes.SET_PRODUCT:
      return { ...state, products: [action.payload] }
    default:
      return state
  }
}