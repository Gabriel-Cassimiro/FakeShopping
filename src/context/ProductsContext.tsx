import React, { createContext, useContext, ReactNode } from "react"

export interface Product {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
}

export interface ProductsList {
  products: Product[]
}

/* export const ProductsContext = createContext({} as ProductsList)

type PlayerContextProviderProps = {
  //Type from react. Anything reacts accepts as jsx
  children: ReactNode
}

export function ProductsProvider({ children }: PlayerContextProviderProps) {
  return <ProductsContext.Provider value={{}}>{children}</ProductsContext.Provider>
}

export function useProducts() {
  return useContext(ProductsContext)
} */
