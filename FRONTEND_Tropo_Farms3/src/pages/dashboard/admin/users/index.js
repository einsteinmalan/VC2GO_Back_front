import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import {useRouter} from "next/router";
import { usersList } from '@/components/data/data'
import Link from 'next/link'
import React from 'react'

const AdminDashboard = () => {

    const router = useRouter();

    return (
        <AppLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    All users
                </h2>
            }>

            <Head>
                <title>Volta Catch - Users</title>
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
                                                        <h2 className="text-2xl leading-tight">
                                                            Users
                                                        </h2>

                                                        <div className="relative w-1/5 ">


                                                            <select
                                                                className="block w-full text-gray-700  border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                                                                name="status_type">
                                                                <option value="all">
                                                                    Show all
                                                                </option>
                                                                <option value="customer">
                                                                    Active
                                                                </option>
                                                                <option value="employee">
                                                                    Not Active
                                                                </option>


                                                            </select>
                                                        </div>
                                                        <div className="relative w-1/5 ">


                                                            <select
                                                                className="block w-full text-gray-700  border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                                                                name="account_type">
                                                                <option value="all">
                                                                    Show all
                                                                </option>
                                                                <option value="customer">
                                                                    Customer
                                                                </option>
                                                                <option value="employee">
                                                                    Employee
                                                                </option>
                                                                <option value="admin">
                                                                    Admin
                                                                </option>
                                                                <option value="customer_service">
                                                                    Customer Service
                                                                </option>
                                                                <option value="logistic">
                                                                    Logistic
                                                                </option>
                                                                <option value="delivery">
                                                                    Delivery
                                                                </option>

                                                            </select>
                                                        </div>
                                                        <div className="text-end ">
                                                            <form
                                                                className="flex flex-col md:flex-row w-3/4 md:w-full max-w-sm md:space-x-3 space-y-3 md:space-y-0 justify-center">
                                                                <div className=" relative ">
                                                                    <input type="text" id="&quot;form-subscribe-Filter"
                                                                           className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                                                           placeholder="name"/>
                                                                </div>
                                                                <button
                                                                    className="flex-shrink-0 mx-4 px-6 py-2 text-base font-semibold text-white bg-teal-500 rounded-lg shadow-md hover:-bg-blue-500 focus:outline-none focus:ring-2 "
                                                                    type="submit">
                                                                    Filter
                                                                </button>
                                                            </form>
                                                        </div>
                                                        <div className="relative inline-block text-left w-auto ">
                                                          `  <button type="button"
                                                                    className="border border-gray-300 bg-lightBlue-500 dark:bg-gray-800 shadow-sm flex items-center hover:-bg-teal-500 justify-center w-full rounded-md  px-4 py-2 text-sm font-medium text-white dark:text-gray-50 hover:bg-gray-50 dark:hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-500"
                                                                    id="options-menu"
                                                                    onClick={()=>{

                                                                        setTimeout(() => {
                                                                            router.push("/admin/users/create");
                                                                        }, 1000);
                                                                    }}
                                                            >
                                                                Create User

                                                            </button>
                                                        </div>
                                                    </div>



                                                    <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                                                        <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                                                            <table className="min-w-full leading-normal">
                                                                <thead>
                                                                <tr>
                                                                    <th scope="col"
                                                                        className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                                                        User
                                                                    </th>
                                                                    <th scope="col"
                                                                        className="px-5 py-3 bg-white items-center border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                                                        Phone
                                                                    </th>
                                                                    <th scope="col"
                                                                        className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                                                        Orders
                                                                    </th>
                                                                    <th scope="col"
                                                                        className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                                                        Role
                                                                    </th>
                                                                    <th scope="col"
                                                                        className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                                                        Created at
                                                                    </th>
                                                                    <th scope="col"
                                                                        className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                                                        status
                                                                    </th>
                                                                    <th scope="col"
                                                                        className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                                                    </th>
                                                                </tr>
                                                                </thead>

                                                                <tbody>

                                                                {usersList.length >0 && usersList.map((user)=>(

                                                                    <tr  key={user.id}>
                                                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                                            <div className="flex items-center">
                                                                                <div className="flex-shrink-0">
                                                                                    <a href="#" className="block relative pl-3">
                                                                                        <img alt="profil" src="/user.png"
                                                                                             className="mx-auto object-cover rounded-full h-10 w-10 "/>
                                                                                    </a>
                                                                                </div>
                                                                                <div className="ml-3">
                                                                                    <p className="text-gray-900 whitespace-no-wrap">
                                                                                        {user.name}
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                                            <p className="text-gray-900 whitespace-no-wrap">
                                                                                {user.phone}
                                                                            </p>
                                                                        </td>
                                                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                                            <p className="text-gray-900 align-middle whitespace-no-wrap">
                                                                                {user.total_orders}
                                                                            </p>
                                                                        </td>
                                                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                                            <p className="text-gray-900 whitespace-no-wrap">
                                                                                {user.role}
                                                                            </p>
                                                                        </td>
                                                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                                            <p className="text-gray-900 whitespace-no-wrap">
                                                                                {user.created_at}
                                                                            </p>
                                                                        </td>
                                                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <span
                                        className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                        <span aria-hidden="true"
                                              className="absolute inset-0 bg-teal-500 opacity-50 rounded-full">
                                        </span>
                                        <span className={user.status ==='active'? 'relative bg-green-light p-2  rounded text-white' : "relative bg-red-500 p-2  rounded text-white"}>
                                             {user.status ==='active'? 'Active' : 'NOT ACTIVE' }
                                        </span>
                                    </span>
                                                                        </td>
                                                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">

                                                                            <Link href={'/dashboard/admin/users/view/'+ user.id}>
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

export default AdminDashboard
