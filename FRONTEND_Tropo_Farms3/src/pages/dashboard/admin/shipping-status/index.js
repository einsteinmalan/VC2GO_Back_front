import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import {useRouter} from "next/router";
import { usersList } from '@/components/data/data'
import Link from 'next/link'
import React from 'react'

const ShippingStatus = () => {

    const router = useRouter();

    const list = [
        {
            'id':1,
            'from':'Farm',
            'to': 'KM-SALES',
            'order_number': 'TP00A1',
            'total_weight': 70,
            'status': 'Delivered',
            'date': '02/04/2022',
            'customer_name': 'Kofi Amateh',
            'customer_number': '055*****10',
            'driver':'Samuel Nkum'
        },

        {
            'id':2,
            'from':'KS-SALES',
            'to': 'KM-SALES',
            'order_number': 'TP00A1',
            'total_weight': 50,
            'status': 'Enroute',
            'date': '02/04/2022',
            'customer_name': 'TM-SALES',
            'customer_number': '027*****00',
            'driver':'Kwame Odoi'
        },
        {
            'id':3,
            'from':'Farm',
            'to': 'KM-SALES',
            'order_number': 'TP00A1',
            'total_weight': 70,
            'status': 'Enroute',
            'date': '02/04/2022',
            'customer_name': 'Sandra Allotey',
            'customer_number': '024*****31',
            'driver':'Samuel Nkum'
        },
        {
            'id':4,
            'from':'Farm',
            'to': 'KM-SALES',
            'order_number': 'TP00A1',
            'total_weight': 70,
            'status': 'Delivered',
            'date': '02/04/2022',
            'customer_name': 'Sylvia Mensah',
            'customer_number': '020*****85',
            'driver':'Ben Kramer'
        },

    ];

    function statusColor(status){
        if(status === "Enroute"){
            return "text-orange-500";
        } else  if(status === "Delivered"){
            return "text-teal-500 ";
        } else  if(status === "Cancelled"){
            return "text-red-500 ";
        }

        return "text-gray-500 ";
    }



    return (
        <AppLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                   Shipping Status
                </h2>
            }>

            <Head>
                <title>Volta Catch - Shipping Status</title>
            </Head>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg left-260-px">
                        <div className="flex w-full">

                            <div className="w-1/5"> </div>

                            <div className="w-4/5">
                                <main>
                                    <div className="p-6 bg-white border-b border-gray-200">
                                        <div className="grid grid-cols-1 ">
                                            <div className="container mx-auto px-4 sm:px-8 ">
                                                <div className="py-8">
                                                    <div className="flex flex-row mb-1 sm:mb-0 justify-between w-full">
                                                        <div className="w-3/5">
                                                            <h2 className="text-3xl text-black font-bold">
                                                                Shipping Status
                                                            </h2>
                                                        </div>



                                                        <div className="w-2/5">

                                                        </div>




                                                    </div>

                                                    <div className="flex flex-row mt-5">

                                                        <div className="w-1/5 px-2">
                                                            <select
                                                                className="block w-full text-gray-700  border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                                                                name="status_type">
                                                                <option value="none">
                                                                    Bulk Actions
                                                                </option>
                                                                <option value="delete">
                                                                    Delete
                                                                </option>
                                                                <option value="deactivate">
                                                                    Deactivate
                                                                </option>
                                                                <option value="activate">
                                                                    Activate
                                                                </option>



                                                            </select>
                                                        </div>

                                                        <div className="w-1/5 px-2">
                                                            <select
                                                                className="block w-full text-gray-700  border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                                                                name="status_type">
                                                                <option value="none">
                                                                    Assign Driver
                                                                </option>

                                                            </select>
                                                        </div>

                                                        <div className="w-1/5 px-2">
                                                            <select
                                                                className="block w-full text-gray-700  border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                                                                name="status_type">
                                                                <option value="none">
                                                                    Warehouse
                                                                </option>
                                                            </select>
                                                        </div>

                                                        {/*// Generate Pick button*/}
                                                        <div className="w-1/5 px-2">
                                                            <div className=" inline-block text-left w-auto ">
                                                                `  <button type="button"
                                                                           className="border border-gray-300 bg-gray-100 shadow-sm hover:-bg-teal-500 hover:text-white justify-center rounded-md  px-4 py-2 text-sm font-medium text-gray-900 dark:text-gray-50 hover:bg-gray-50  focus:outline-none"
                                                                           id="options-menu"
                                                                           onClick={()=>{


                                                                           }}
                                                            >
                                                                Generate Pick List

                                                            </button>
                                                            </div>
                                                        </div>

                                                        <div className="w-1/5">

                                                        </div>



                                                    </div>



                                                    <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                                                        <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                                                            <table className="min-w-full leading-normal">
                                                                <thead>
                                                                <tr>
                                                                    <th scope="col"
                                                                        className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                                                        <form>

                                                                            <input type="checkbox" value="Submit" onClick={()=>{}} />
                                                                        </form>
                                                                    </th>

                                                                    <th scope="col"
                                                                        className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                                                        Order Number
                                                                    </th>
                                                                    <th scope="col"
                                                                        className="px-5 py-3 bg-white items-center border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                                                        Cutomer Number
                                                                    </th>
                                                                    <th scope="col"
                                                                        className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                                                        Status
                                                                    </th>

                                                                    <th scope="col"
                                                                        className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                                                        Driver
                                                                    </th>


                                                                </tr>
                                                                </thead>

                                                                <tbody>

                                                                {list.length >0 && list.map((user)=>(

                                                                    <tr  key={user.id} className='pl-1'>
                                                                        <td className="px-2 py-5 border-b border-gray-200 bg-white text-sm">
                                                                            <form className="pl-1">

                                                                                <input type="checkbox" value="Submit" onClick={()=>{}} />
                                                                            </form>
                                                                        </td>

                                                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                                            <div className="flex items-center">
                                                                                <div className="flex-shrink-0">
                                                                                    <a href="#" className="block relative pl-3">
                                                                                        <img alt="profil" src="/fishes/Cassava.jpg"
                                                                                             className="mx-auto object-cover rounded-full h-10 w-10 "/>
                                                                                    </a>
                                                                                </div>
                                                                                <div className="ml-3">
                                                                                    <p className="text-black font-bold whitespace-no-wrap">
                                                                                        {user.order_number} </p>
                                                                                    <p className="text-gray-500  ">Total Weight: {user.total_weight}</p>
                                                                                    <p className="text-gray-500  ">Date placed: {user.date}</p>

                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                                            <p className="text-black font-bold whitespace-no-wrap">
                                                                                {user.customer_name} </p>
                                                                            <p className="text-gray-500  ">{user.customer_number}</p>

                                                                        </td>
                                                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm ">
                                                                            <p className={statusColor(user.status)}>
                                                                                {user.status}
                                                                            </p>
                                                                        </td>

                                                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                                            <p className="text-gray-900 px-3 min-w-140-px">
                                                                                <button type="button"
                                                                                        className="border border-gray-300 bg-gray-100 shadow-sm hover:-bg-gray hover:text-white justify-center rounded-md  px-4 py-2 text-sm font-medium text-gray-900  focus:outline-none"
                                                                                        id="options-menu"
                                                                                        onClick={()=>{


                                                                                        }}
                                                                                >
                                                                                    {user.driver}

                                                                                </button>
                                                                            </p>
                                                                        </td>



                                                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">

                                                                            <Link href={'/dashboard/admin/pick-pack/view/'+ user.id}>
                                                                                <span  className="text-indigo-600 hover:text-blueGray-800 py-1 px-3 rounded-md bg-gray-200 shadow-sm hover:-bg-teal-500 cursor-pointer">
                                                                                    View
                                                                                </span>
                                                                            </Link>



                                                                        </td>
                                                                    </tr>

                                                                ))}



                                                                </tbody>
                                                            </table>




                                                            <div
                                                                className="px-5 bg-white py-5 flex flex-col xs:flex-row items-center xs:justify-between">
                                                                <div className="flex items-center">
                                                                    <button type="button"
                                                                            className="w-full p-4 border text-base rounded-l-xl text-gray-600 bg-white hover:bg-gray-100">
                                                                        <svg width="9" fill="currentColor" height="8" className=""
                                                                             viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                                                            <path
                                                                                d="M1427 301l-531 531 531 531q19 19 19 45t-19 45l-166 166q-19 19-45 19t-45-19l-742-742q-19-19-19-45t19-45l742-742q19-19 45-19t45 19l166 166q19 19 19 45t-19 45z">
                                                                            </path>
                                                                        </svg>
                                                                    </button>
                                                                    <button type="button"
                                                                            className="w-full px-4 py-2 border-t border-b text-base text-indigo-500 bg-white hover:bg-gray-100 ">
                                                                        1
                                                                    </button>
                                                                    <button type="button"
                                                                            className="w-full px-4 py-2 border text-base text-gray-600 bg-white hover:bg-gray-100">
                                                                        2
                                                                    </button>
                                                                    <button type="button"
                                                                            className="w-full px-4 py-2 border-t border-b text-base text-gray-600 bg-white hover:bg-gray-100">
                                                                        3
                                                                    </button>
                                                                    <button type="button"
                                                                            className="w-full px-4 py-2 border text-base text-gray-600 bg-white hover:bg-gray-100">
                                                                        4
                                                                    </button>
                                                                    <button type="button"
                                                                            className="w-full p-4 border-t border-b border-r text-base  rounded-r-xl text-gray-600 bg-white hover:bg-gray-100">
                                                                        <svg width="9" fill="currentColor" height="8" className=""
                                                                             viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                                                            <path
                                                                                d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z">
                                                                            </path>
                                                                        </svg>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                    </div>
                                </main>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </AppLayout>
    )
}

export default ShippingStatus
