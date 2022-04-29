import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import { CheckIcon, MinusCircleIcon } from '@heroicons/react/outline'
import ProductSelect from '@/components/pages/reports/ProductSelect'
import { Step,Stepper } from '@leafygreen-ui/stepper'
import { ReportContext } from '@/context/storeContext'
import { allProducts } from '@/components/data/data'




const UserDetail = ({user}) => {


    const [username, setUsername] = useState('name');
    const [warehouse, setWarehouse] = useState('N/A');
    const [phone, setPhone] = useState('xxxxxxxxxx');
    const [customer_owner, setCustomer_owner] = useState('N/A');

    const [status, setStatus] = useState('active');
    const [role, setRole] = useState('Customer');
    const [total_orders, setTotal_orders] = useState(0);
    const [created_at, setCreated_at] = useState('2022/03/05 00:00:00');




   useEffect(()=>{
       setUsername(user.name);
       setPhone(`0${user.phone}`);
       setWarehouse(user.warehouse);
       setCustomer_owner(user.customer_owner);
       setStatus(user.status);
       setRole(user.role);
       setTotal_orders(user.total_orders);
       setCreated_at(user.created_at);




   },[])



    return (
        <AppLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    User Detail
                </h2>
            }>

            <Head>
                <title>Volta Catch - User Detail</title>
            </Head>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg left-260-px">
                        <div className="flex w-full">

                            <div className="w-1/5"> </div>

                            <div className="w-4/5">
                                <main>
                                    <div className="p-6 bg-gray-200 border-b border-gray-200">
                                        <div className="container mx-auto px-4 sm:px-8 ">
                                            <div className="py-8">

                                                <div className="flex flex-row">

                                                    {/*// Left panel*/}
                                                    <div className="w-full lg:w-8/12">
                                                        <div className="w-full  px-4 mb-3">
                                                            <div className="relative w-full ">
                                                                <label
                                                                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                                    htmlFor="grid-password"
                                                                >
                                                                    Full Name
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    value={username} onInput={e => setUsername(e.target.value)}
                                                                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:ring-0 focus:border-gray-300 w-full ease-linear transition-all duration-150"
                                                                    placeholder="Enter username"
                                                                />
                                                            </div>
                                                        </div>

                                                        <div className="w-full  px-4 mb-3 mt-8">
                                                            <div className="relative w-full ">
                                                                <label
                                                                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                                    htmlFor="grid-password"
                                                                >
                                                                    Phone Number
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    value={phone} onInput={e => setPhone(e.target.value)}
                                                                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:ring-0 focus:border-gray-300 w-full ease-linear transition-all duration-150"
                                                                    placeholder="Enter phone number"
                                                                />
                                                            </div>
                                                        </div>


                                                        <div className="w-full  px-4 mb-3 mt-8">
                                                            <div className="relative w-full ">
                                                                <label
                                                                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                                    htmlFor="grid-password"
                                                                >
                                                                    Warehouse location
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    value={warehouse} onInput={e => setWarehouse(e.target.value)}
                                                                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:ring-0 focus:border-gray-300 w-full ease-linear transition-all duration-150"
                                                                    placeholder="Enter warehouse location"
                                                                />
                                                            </div>
                                                        </div>


                                                        <div className="w-full  px-4 mb-3 mt-8">
                                                            <div className="relative w-full ">
                                                                <label
                                                                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                                    htmlFor="grid-password"
                                                                >
                                                                    Customer Owner
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    value={customer_owner} onInput={e => setCustomer_owner(e.target.value)}
                                                                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:ring-0 focus:border-gray-300 w-full ease-linear transition-all duration-150"
                                                                    placeholder="Enter customer owner"
                                                                />
                                                            </div>
                                                        </div>


                                                    </div>


                                                    {/*// Right panel*/}
                                                    <div className="w-full lg:w-4/12 px-4">
                                                        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
                                                            <div className="px-6">
                                                                <div className="flex flex-wrap justify-center">
                                                                    <div className="w-full px-4 flex justify-center">
                                                                        <div className="relative">
                                                                            <img
                                                                                alt="..."
                                                                                src="/user.png"
                                                                                className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                    <div className="w-full px-4 text-center mt-20">
                                                                        <div className="flex justify-center py-4 lg:pt-4 pt-8">
                                                                            <div className="mr-4 p-3 text-center">
                                                                                          <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                                                                                              {total_orders}
                                                                                          </span>
                                                                                    <span className="text-sm text-blueGray-400">Total Order</span>
                                                                            </div>


                                                                        </div>
                                                                    </div>
                                                                </div>


                                                                <div className="shadow-lg rounded-2xl w-36 p-4 bg-white dark:bg-gray-800">
                                                                    <div className="flex items-center">
                                                                        <span className={status ==='active'? "bg-teal-500 p-2 h-4 w-4 rounded-full relative" : "bg-red-500 p-2 h-4 w-4 rounded-full relative"}>

                                                                        </span>
                                                                        <p className="text-md text-gray-700 dark:text-gray-50 ml-2">
                                                                            {status ==='active'? 'Status(Active)' : 'Status(NOT ACTIVE)' }
                                                                        </p>
                                                                    </div>
                                                                    <div className="flex flex-col justify-start">
                                                                        <p className="text-gray-800 text-4xl text-left dark:text-white font-bold my-4">
                                                                            {role.toUpperCase()}
                                                                        </p>
                                                                        <div className="relative w-28 h-2 bg-gray-200 rounded">
                                                                            <div className="absolute top-0 h-2  left-0 rounded bg-blueGray-700 w-full">
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div className="text-center mt-12">
                                                                    <h3 className="text-sm font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                                                                        Created ON {created_at}
                                                                    </h3>


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

export default UserDetail
