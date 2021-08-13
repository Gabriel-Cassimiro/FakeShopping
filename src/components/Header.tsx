import React, { Fragment, useState } from "react"
import Link from "next/link"
import { FaShoppingCart } from "react-icons/fa"
import { Disclosure, Menu, Transition } from "@headlessui/react"
import Cart from "./Cart"

function Header() {
  return (
    <div className="flex justify-center border-b-2 border-fuchsia-600 py-2 text-white bg-gray-800 h-16 mx-auto px-2 sm:px-6 lg:px-8">
      <h1 className=" flex absolute mt-4 text-2xl underline ">
        <Link href="/">FakeShop</Link>
      </h1>
      <div className="ml-auto w-32">
        <>
          <Menu>
            <Menu.Button className="grid place-items-center grid-cols-2 grid-rows-2 uppercase">
              <div className="col-span-1 row-span-2 ">
                <FaShoppingCart size={42} />
              </div>
              <span>$299</span>
              <span>1 item</span>
            </Menu.Button>
            <Transition as={Fragment} enter="transition ease-out duration-100" enterFrom="transform opacity-0 scale-95" enterTo="transform opacity-100 scale-100" leave="transition ease-in duration-75" leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95">
              <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                <Menu.Item>
                  <Cart />
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </Menu>
        </>
      </div>
    </div>
  )
}

export default Header
