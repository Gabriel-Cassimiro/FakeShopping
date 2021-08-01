import React from "react"
import Link from "next/link"

function Header() {
  return (
    <div className="border-b-2 border-fuchsia-600 grid justify-items-center">
      <h2>
        <Link href="/">FakeShop</Link>
      </h2>
    </div>
  )
}

export default Header
