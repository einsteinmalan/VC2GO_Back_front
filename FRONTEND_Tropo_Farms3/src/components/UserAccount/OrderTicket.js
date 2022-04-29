/* This example requires Tailwind CSS v2.0+ */
import { CheckIcon } from '@heroicons/react/outline'
import { BiPen } from '@react-icons/all-files/bi/BiPen'
import { EyeIcon } from '@heroicons/react/outline'
import React from 'react'
import {ticketList} from '../data/data'
import Link from 'next/link'



export default function OrderTicket() {

    function getStatusColor(status){
        if(status ==="pending"){
            return "bg-blueGray-400 md:mt-1 p-1 rounded tex-sm mt-2 px-4";
        }
        if(status ==="in-progress"){
            return "bg-lightBlue-500 md:mt-1 p-1 rounded tex-sm mt-2 px-4";
        }
        if(status ==="cancelled"){
            return "bg-red-500 md:mt-1 p-1 rounded tex-sm mt-2 px-4";
        }
        if(status ==="resolved"){
            return "bg-teal-200 md:mt-1 p-1 rounded tex-sm mt-2 px-4";
        }

        return "bg-orange-500 md:mt-1 p-1 rounded tex-sm mt-2 px-4";
    }


    return (
        <div   id="main-content" className="bg-white items-stretch">
            <div className="max-w-full mx-auto py-16 sm:px-6 sm:py-24 ">
                <div className="px-4 sm:px-0">
                    <h1 className="text-2xl  font-extrabold tracking-tight text-gray-900 sm:text-3xl">Ticket submitted</h1>
                    {/*<p className="mt-2 text-sm text-gray-500 ">
                        Check the status of recent orders, manage returns, and download invoices.

                    </p>*/}
                    <hr className="flex flex-row flex-grow"/>
                </div>

                <div className="mt-16 flex-row flex-grow">

                    <div className="space-y-16 sm:space-y-24">
                        {ticketList.map((order) => (
                            <div key={order.id}>


                                <div className= "border-blueGray-600 border-2  bg-gray-50 px-4 py-6 sm:rounded-lg  sm:p-6 md:flex md:items-center md:justify-between md:space-x-6 lg:space-x-8">
                                    <dl className="divide-dotted divide-double space-y-4 text-sm text-gray-600 flex-auto  md:space-y-0 md:grid md:grid-cols-3 md:gap-x-6 lg:w-1/2 lg:flex-none lg:gap-x-8">
                                        <div className="flex-grow justify-between md:block ">
                                            <p className="font-medium text-gray-900 mb-2">Order ID: <span className="md:mt-1 text-gray-500">{order.order_number}</span></p>

                                        </div>

                                            <div className="flex justify-center pt-4 font-medium text-gray-900 md:block md:pt-0">

                                            <span className={getStatusColor(order.status)} >{order.status.toUpperCase() }</span>
                                        </div>
                                    </dl>
                                    <div className="space-y-4 mt-6 sm:flex sm:space-x-4 sm:space-y-0 md:mt-0">

                                        <Link href={'/products/view/ticket/' + order.id} key={order.id}><a >
                                            <button

                                                className="w-full flex items-center justify-center bg-gray-100 hover:shadow-md py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 md:w-auto"
                                            >
                                                <EyeIcon width={22}/> View Ticket

                                            </button>

                                        </a></Link>



                                    </div>
                                </div>


                            </div>
                        ))}
                    </div>
                </div>
                <form>
                    <input  />
                </form>
            </div>
        </div>
    )
}
