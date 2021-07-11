import { combineReducers } from "redux"
import { productReducer } from "./productsReducer"

const reducers = combineReducers({
  //Reducers is the state we use with useSelector
  allProducts: productReducer
})

export default reducers

export type State = ReturnType<typeof reducers>
