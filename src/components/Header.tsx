import React from "react"
import Link from "next/link"
import { FaShoppingCart } from "react-icons/fa"
import { AiOutlineMenu } from "react-icons/ai"
import { Transition } from "@headlessui/react"
import Cart from "./Cart"
import useProductsContext from "../context/ProductsContext"

function Header() {
	const { isOpen, isShowing, subtotal, subItems } = useProductsContext()

	return (
		<div className="flex sm:justify-center items-end justify-between border-b-2 border-fuchsia-600 py-2 text-white bg-gray-800 h-16 mx-auto px-2">
			<h1 className="underline flex sm:absolute mt-4 text-2xl">
				<Link href="/">FakeShop</Link>
			</h1>
			<div className="sm:ml-auto sm:w-32">
				<button onClick={() => isOpen(true)} className="flex items-center uppercase">
					<div className="hidden sm:flex mr-3">
						<FaShoppingCart size={42} />
					</div>
					<div className="sm:hidden flex mr-3">
						<AiOutlineMenu size={42} />
					</div>
					<div className="hidden sm:flex sm:flex-col">
						<span>${subtotal.toFixed(2)}</span>
						<span>{subItems} items</span>
					</div>
				</button>
				<Transition
					show={isShowing}
					enter="transition ease-out duration-100"
					enterFrom="transform opacity-0 scale-95"
					enterTo="transform opacity-100 scale-100"
					leave="transition ease-in duration-75"
					leaveFrom="transform opacity-100 scale-100"
					leaveTo="transform opacity-0 scale-95"
				>
					<Cart />
				</Transition>
			</div>
		</div>
	)
}

export default Header
