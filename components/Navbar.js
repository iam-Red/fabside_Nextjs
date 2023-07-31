import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import logo from "../assets/logo-color.png";
import Link from "next/link";
import {
  AiFillCloseCircle,
  AiFillMinusCircle,
  AiFillPlusCircle,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { BsFillBagCheckFill } from "react-icons/bs";
import { MdAccountCircle } from "react-icons/md";
import { useRouter } from "next/router";

const Navbar = ({
  logout,
  user,
  cart,
  addtoCart,
  removeFromCart,
  clearCart,
  subTotal,
}) => {
  const [dropdown, setDropdown] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  const router = useRouter();

  useEffect(() => {
    Object.keys(cart).length !== 0 && setSidebar(true);
    let exempted = ["/checkout", "/order", "/orders", "/myaccount"];
    if (exempted.includes(router.pathname)) {
      setSidebar(false);
    }
  }, []);

  const toggleDropdown = () => {
    setDropdown(!dropdown);
  };
  const toggleCart = () => {
    setSidebar(!sidebar);
    // if (ref.current.classList.contains("translate-x-full")) {
    //   ref.current.classList.remove("translate-x-full");
    //   ref.current.classList.add("translate-x-0");
    // } else if (!ref.current.classList.contains("translate-x-full")) {
    //   ref.current.classList.remove("translate-x-0");
    //   ref.current.classList.add("translate-x-full");
    // }
  };

  const ref = useRef();
  return (
    <>
      {!sidebar && (
        <span
          onMouseOver={() => {
            setDropdown(true);
          }}
          onMouseLeave={() => {
            setDropdown(false);
          }}
          className="absolute right-9 top-4 cursor-pointer z-30"
        >
          {dropdown && (
            <div className="absolute right-5 bg-white z-30 shadow-lg border top-5 py-4 rounded-md px-5 w-32">
              <ul>
                <Link href={"/myaccount"}>
                  <li className="py-1hover:text-pink-700 text-sm">
                    My Account
                  </li>
                </Link>
                <Link href={"/orders"}>
                  <li className="py-1hover:text-pink-700 text-sm">My Orders</li>
                </Link>

                <li
                  onClick={logout}
                  className="py-1hover:text-pink-700 text-sm"
                >
                  Logout
                </li>
              </ul>
            </div>
          )}

          {user.value && (
            <MdAccountCircle className="text-xl md:text-2xl mx-2" />
          )}
        </span>
      )}

      <div
        className={`  flex flex-col md:flex-row md:justify-start justify-center items-center py-2 shadow-md sticky top-0 bg-white z-10 ${
          !sidebar && "overflow-hidden"
        }`}
      >
        <div className="logo mr-auto md:mx-5">
          <Link href={"/"}>
            <Image width={100} height={10} src={logo} alt="" />
          </Link>
        </div>
        <div className="nav">
          <ul className="flex items-center space-x-6 font-bold md:text-md">
            <Link href={"/tshirts"}>
              <li className=" hover:text-pink-500">Tshirts</li>
            </Link>
            <Link href={"/hoodies"}>
              <li className=" hover:text-pink-500">Hoodies</li>
            </Link>
            <Link href={"/stickers"}>
              <li className=" hover:text-pink-500">Stickers</li>
            </Link>
            <Link href={"/mugs"}>
              <li className=" hover:text-pink-500">Mugs</li>
            </Link>
          </ul>
        </div>
        <div className=" cursor-pointer item-center cart absolute right-0 top-2 mx-5 flex">
          {!user.value && (
            <Link href={"/login"}>
              <button className="bg-pink-600 px-2 py-1 rounded-md text-sm text-white mx-2">
                Login
              </button>
            </Link>
          )}

          <AiOutlineShoppingCart
            onClick={toggleCart}
            className=" text-xl md:text-3xl"
          />
        </div>

        <div
          ref={ref}
          className={`z-10 w-72 h-[100vh] sidecart overflow-y-scroll absolute bg-pink-100 px-8 py-10 transition-all top-0 ${
            sidebar ? "right-0" : "- -right-96"
          }`}
        >
          <h2 className="font-bold text-xl text-center">Shopping Cart</h2>
          <span
            onClick={toggleCart}
            className="absolute top-5 right-2 cursor-pointer text-2xl text-pink-500"
          >
            <AiFillCloseCircle />
          </span>

          <ol className="list-decimal font-semibold">
            {Object.keys(cart).length == 0 && (
              <div className="my-4 font-semibold">Your Cart is Empty.</div>
            )}
            {Object.keys(cart).map((k) => {
              return (
                <li key={k}>
                  <div className="item flex my-5">
                    <div className="w-2/3 font-semibold">
                      {cart[k].name} ({cart[k].size}/{cart[k].variant})
                    </div>
                    <div className="flex font-semibold items-center justify-center w-1/3 text-lg">
                      <AiFillMinusCircle
                        onClick={() => {
                          removeFromCart(
                            k,
                            1,
                            cart[k].price,
                            cart[k].name,
                            cart[k].size,
                            cart[k].variant
                          );
                        }}
                        className="cursor-pointer text-pink-500"
                      />
                      <span className="mx-2 text-sm">{cart[k].qty}</span>
                      <AiFillPlusCircle
                        onClick={() => {
                          addtoCart(
                            k,
                            1,
                            cart[k].price,
                            cart[k].name,
                            cart[k].size,
                            cart[k].variant
                          );
                        }}
                        className="cursor-pointer text-pink-500"
                      />
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
          <span className="font-bold my-2">SubTotal : {subTotal}</span>

          <div className="flex">
            <Link href={"/checkout"}>
              <button
                disabled={Object.keys(cart).length === 0}
                className="disabled:bg-pink-300 flex mr-2 text-white bg-pink-500 border-0 py-2 px-2 focus:outline-none hover:bg-pink-600 rounded text-sm"
              >
                <BsFillBagCheckFill className="m-1" /> Checkout
              </button>
            </Link>
            <button
              disabled={Object.keys(cart).length === 0}
              onClick={clearCart}
              className="disabled:bg-pink-300 flex mr-2 text-white bg-pink-500 border-0 py-2 px-2 focus:outline-none hover:bg-pink-600 rounded text-sm"
            >
              Clear Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
