import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import mongoose from "mongoose";
import Order from "@/models/Order";
import Link from "next/link";

const orders = () => {
  const router = useRouter();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      let a = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/myorders`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token: JSON.parse(localStorage.getItem("myuser")).token,
        }),
      });
      let res = await a.json();
      setOrders(res.orders);
    };
    if (!localStorage.getItem("myuser")) {
      router.push("/");
    } else {
      fetchOrders();
    }
  }, []);
  return (
    <div className="min-h-screen">
      <h1 className="font-semibold text-center text-2xl p-8">My Orders</h1>
      <div className="container mx-auto">
        <div class="flex flex-col">
          <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div class="overflow-hidden">
                <table class="min-w-full text-left text-sm font-light">
                  <thead class="border-b bg-white font-medium dark:border-neutral-500 dark:bg-neutral-600">
                    <tr>
                      <th scope="col" class="px-6 py-4">
                        #
                      </th>
                      <th scope="col" class="px-6 py-4">
                        Email
                      </th>
                      <th scope="col" class="px-6 py-4">
                        Last
                      </th>
                      <th scope="col" class="px-6 py-4">
                        Handle
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map((item) => {
                      return (
                        <tr
                          key={item._id}
                          class="border-b bg-neutral-100 dark:border-neutral-500 dark:bg-neutral-700"
                        >
                          <td class="whitespace-nowrap px-6 py-4 font-medium">
                            {item.orderId}
                          </td>
                          <td class="whitespace-nowrap px-6 py-4">
                            {item.email}
                          </td>
                          <td class="whitespace-nowrap px-6 py-4">
                            {item.amount}
                          </td>
                          <td class="whitespace-nowrap px-6 py-4">
                            <Link href={"/order?id=" + item._id}>Details</Link>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default orders;
