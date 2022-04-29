import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import {useRouter} from "next/router";
import { usersList } from '@/components/data/data'
import Link from 'next/link'
import React, { useState } from 'react'

const CreateShippingTypePage = () => {

    const router = useRouter();

    const [shippingType,setShippingType] = useState('');
    const [maxWeight,setMaxWeight] = useState('');



    // submit entered information
    const submitData = async (ev) => {
        ev.preventDefault();



    };

    return (
        <AppLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Add Shipping Type
                </h2>
            }>

            <Head>
                <title>Volta Catch - Shipping Type</title>
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
                                                                 New Shipping Type
                                                            </h2>
                                                        </div>


                                                        <div className="w-3/5">

                                                        </div>


                                                    </div>




                                                    <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                                                        <div className="inline-block min-w-full shadow rounded-lg overflow-hidden ">

                                                            {/*//Form*/}

                                                            <form onSubmit={submitData}>
                                                                <div className="flex flex-row mb-24">

                                                                    {/* //#Left Pane*/}
                                                                    <div className="w-1/2">

                                                                        {/*//#Form First-name */}
                                                                        <div className="flex flex-row m-3 p-2">

                                                                            <div className="w-1/3 text-lg text-black font-semibold mt-2 mr-2">
                                                                                Shipping Type
                                                                            </div>

                                                                            <div className="w-2/3 ">

                                                                                <div className="mt-1">
                                                                                    <input
                                                                                        type="text"
                                                                                        name="type"
                                                                                        id="type"
                                                                                        required={true}
                                                                                        placeholder="Shipping Type"
                                                                                        value={shippingType}
                                                                                        className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-0 focus:border-gray-500 sm:text-sm"
                                                                                        onChange={(e) => setShippingType(e.target.value)}
                                                                                    />
                                                                                </div>

                                                                            </div>

                                                                        </div>





                                                                    </div>





                                                                    {/*     //#Right Pane*/}
                                                                    <div className="flex flex-row w-1/2 mt-4 mr-2">


                                                                        <div className="">

                                                                            {/*//#Form Shipping Weight */}
                                                                            <div className="flex flex-row p-2">

                                                                                <div className="w-1/2 text-lg text-black font-semibold mt-2">
                                                                                    Maximum Weight
                                                                                </div>

                                                                                <div className="w-1/2 ">

                                                                                    <div className="">
                                                                                        <input
                                                                                            type="text"
                                                                                            name="max_weight"
                                                                                            id="max_weight"
                                                                                            required={true}
                                                                                            placeholder="Maximum Weight"
                                                                                            value={maxWeight}
                                                                                            className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-0 focus:border-gray-500 sm:text-sm"
                                                                                            onChange={(e) => setMaxWeight(e.target.value)}
                                                                                        />
                                                                                    </div>

                                                                                </div>

                                                                            </div>
                                                                        </div>




                                                                    </div>

                                                                </div>

                                                                <div className="flex flex-row mb-5">

                                                                    <div className="w-3/5"></div>

                                                                    <div  className="w-1/5 mr-4 ">
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

export default CreateShippingTypePage
