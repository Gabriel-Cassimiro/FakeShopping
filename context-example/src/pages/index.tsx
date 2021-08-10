import React from "react"
import ProductListing from "../components/ProductListing"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-full py-2">
      <ProductListing />
    </div>
  )
}
