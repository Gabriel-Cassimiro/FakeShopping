import { combineReducers } from "redux"
import { productReducer } from "./productsReducer"

//Reducers is the state we use with useSelector
const reducers = combineReducers({
  allProducts: productReducer
})

export default reducers

export type State = ReturnType<typeof reducers>
