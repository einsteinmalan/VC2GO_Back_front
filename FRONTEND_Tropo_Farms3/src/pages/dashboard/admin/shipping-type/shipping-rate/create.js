import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import {useRouter} from "next/router";
import { usersList } from '@/components/data/data'
import Link from 'next/link'
import React, { useState } from 'react'

const CreateShippingRatePage = () => {

    const router = useRouter();

    const [maxWeight,setMaxWeight] = useState('');
    const [location,setLocation] = useState('');
    const [price,setPrice] = useState('');




    // submit entered information
    const submitData = async (ev) => {
        ev.preventDefault();



    };

    return (
        <AppLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Add Shipping Rate
                </h2>
            }>

            <Head>
                <title>Volta Catch - Shipping Rate</title>
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
                                                        <div className="w-2/5">
                                                            <h2 className="text-3xl text-black font-bold">
                                                                 New Shipping Rate
                                                            </h2>
                                                        </div>


                                                        <div className="w-3/5">

                                                        </div>




                                                    </div>




                                                    <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                                                        <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">

                                                            {/*//Form*/}

                                                            <form onSubmit={submitData}>
                                                                <div className="flex flex-row">

                                                                    {/* //#Left Pane*/}
                                                                    <div className="w-1/2">

                                                                        {/*//# Max Weight */}
                                                                        <div className="flex flex-row m-3 p-2">

                                                                            <div className=" text-lg text-black font-semibold mt-2">
                                                                                Maximum weight
                                                                            </div>

                                                                            <div className="ml-2 ">

                                                                                <div className="mt-1">
                                                                                    <input
                                                                                        type="text"
                                                                                        name="maximum_weight"
                                                                                        id="maximum_weight"
                                                                                        required={true}
                                                                                        placeholder="Maximum weight"
                                                                                        value={maxWeight}
                                                                                        className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-0 focus:border-gray-500 sm:text-sm"
                                                                                        onChange={(e) => setMaxWeight(e.target.value)}
                                                                                    />
                                                                                </div>

                                                                            </div>

                                                                        </div>






                                                                    </div>



                                                                    {/*     //#Right Pane*/}
                                                                    <div className="w-1/2 mt-4">

                                                                        <div className="flex flex-row ">
                                                                            <div className="w-1/2">
                                                                                <div className="text-lg text-black font-semibold mt-2 mx-2">

                                                                                    Shipping Type

                                                                                </div>
                                                                            </div>

                                                                            <div className="w-1/2">
                                                                                <div className="w-full">
                                                                                    <select
                                                                                        className=" w-full text-gray-700  border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                                                                                        name="status_type">
                                                                                        <option value="none">
                                                                                            Select type
                                                                                        </option>



                                                                                    </select>
                                                                                </div>

                                                                            </div>


                                                                        </div>

                                                                        <div className="flex flex-row mt-5">
                                                                            <div className="w-1/2">
                                                                                <div className="text-lg text-black font-semibold mt-2 mx-2">

                                                                                    Assigned Location

                                                                                </div>
                                                                            </div>

                                                                            <div className="w-1/2">
                                                                                <div className="w-full">
                                                                                    <select
                                                                                        className=" w-full text-gray-700  border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                                                                                        name="status_type">
                                                                                        <option value="none">
                                                                                            Select location
                                                                                        </option>



                                                                                    </select>
                                                                                </div>

                                                                            </div>


                                                                        </div>

                                                                    </div>

                                                                    </div>

                                                                <div className="flex flex-row mt-20">

                                                                    <div className="w-3/5"></div>

                                                                    <div  className="w-1/5 mr-4  mb-6">
                                                                        {/*// Add user button*/}
                                                                        <div className="  text-left w-auto  ">
                                                                            `  <button type="button"
                                                                                       className="border border-gray-300 bg-gray-200 shadow-sm hover:text-white  hover:-bg-gray-900 justify-center rounded-md  px-12 py-2 text-sm font-medium text-black  hover:shadow-md "
                                                                                       id="options-menu"
                                                                                       onClick={()=>{


                                                                                       }}
                                                                        >
                                                                            Cancel

                                                                        </button>
                                                                        </div>
                                                                    </div>

                                                                    <div className="w-1/5  text-left w-auto  ">
                                                                        `  <button type="button"
                                                                                   className="border border-gray-300 bg-teal-500 shadow-sm hover:-bg-teal-900 hover:text-white justify-center rounded-md  px-12 py-2 text-sm font-medium text-white dark:text-gray-50 hover:bg-gray-50  focus:outline-none"
                                                                                   id="options-menu"
                                                                                   onClick={()=>{


                                                                                   }}
                                                                    >
                                                                        Add

                                                                    </button>
                                                                    </div>




                                                                </div>
                                                            </form>


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

export default CreateShippingRatePage
