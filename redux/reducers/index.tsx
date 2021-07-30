import { combineReducers } from "redux"
import { productReducer, selectedProductsReducer } from "./productsReducer"

//Reducers is the state we use with useSelector
const reducers = combineReducers({
  allProducts: productReducer,
  selectedProduct: selectedProductsReducer
})

export default reducers

export type State = ReturnType<typeof reducers>
