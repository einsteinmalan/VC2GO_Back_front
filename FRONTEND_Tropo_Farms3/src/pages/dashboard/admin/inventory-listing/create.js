import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import {useRouter} from "next/router";
import { usersList } from '@/components/data/data'
import Link from 'next/link'
import React, { useState } from 'react'
import { UploadIcon, PhotographIcon } from '@heroicons/react/outline/esm'

const CreateInventoryListingPage = () => {

    const router = useRouter();

    const [itemCode,setItemCode] = useState('');
    const [itemName,setItemName] = useState('');
    const [kg,setKg] = useState('');
    const [fullCrate,setFullCrate] = useState('');
    const [halfCrate,setHalfCrate] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('');
    const [role,setRole] = useState('');


    // submit entered information
    const submitData = async (ev) => {
        ev.preventDefault();



    };

    return (
        <AppLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Add New Item
                </h2>
            }>

            <Head>
                <title>Volta Catch - Add New Item</title>
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
                                                        <div className="w-1/5">
                                                            <h2 className="text-3xl text-black font-bold">
                                                                Add New Item
                                                            </h2>
                                                        </div>


                                                        <div className="w-4/5">

                                                        </div>




                                                    </div>




                                                    <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                                                        <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">

                                                            {/*//Form*/}

                                                            <form onSubmit={submitData}>
                                                                <div className="flex flex-row">

                                                                    {/* //#Left Pane*/}
                                                                    <div className="w-1/2">

                                                                        {/*//#Form First-name */}
                                                                        <div className="flex flex-row m-3 p-2">

                                                                            <div className="w-1/3 text-lg text-black font-semibold mt-2">
                                                                               Item Code
                                                                            </div>

                                                                            <div className="w-2/3 ">

                                                                                <div className="mt-1">
                                                                                    <input
                                                                                        type="text"
                                                                                        name="itemCode"
                                                                                        id="itemCode"
                                                                                        required={true}
                                                                                        placeholder="Enter item code"
                                                                                        autoComplete="Item code"
                                                                                        value={itemCode}
                                                                                        className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-0 focus:border-gray-500 sm:text-sm"
                                                                                        onChange={(e) => setItemCode(e.target.value)}
                                                                                    />
                                                                                </div>

                                                                            </div>

                                                                        </div>

                                                                        {/*//#Form Last name */}
                                                                        <div className="flex flex-row m-3 p-2">

                                                                            <div className="w-1/3 text-lg text-black font-semibold mt-2">
                                                                                Item Name
                                                                            </div>

                                                                            <div className="w-2/3 ">

                                                                                <div className="mt-1">
                                                                                    <input
                                                                                        type="text"
                                                                                        name="itemName"
                                                                                        id="itemName"
                                                                                        required={true}
                                                                                        placeholder="Enter item name"
                                                                                        autoComplete="Item Name"
                                                                                        value={itemName}
                                                                                        className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-0 focus:border-gray-500 sm:text-sm"
                                                                                        onChange={(e) => setItemName(e.target.value)}
                                                                                    />
                                                                                </div>

                                                                            </div>

                                                                        </div>

                                                                        <div className=" text-lg text-black font-bold mt-6 mx-2">
                                                                            PRICING
                                                                        </div>

                                                                        {/*//#Form username */}
                                                                        <div className="flex flex-row m-3 p-2">

                                                                            <div className="w-1/3 text-lg text-black font-semibold mt-2">
                                                                                KG
                                                                            </div>

                                                                            <div className="w-2/3 ">

                                                                                <div className="mt-1">
                                                                                    <input
                                                                                        type="text"
                                                                                        name="kg"
                                                                                        id="kg"
                                                                                        required={true}
                                                                                        placeholder="Price in KG"
                                                                                        autoComplete="kg"
                                                                                        value={kg}
                                                                                        className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-0 focus:border-gray-500 sm:text-sm"
                                                                                        onChange={(e) => setKg(e.target.value)}
                                                                                    />
                                                                                </div>

                                                                            </div>

                                                                        </div>

                                                                        {/*//#Form Email */}
                                                                        <div className="flex flex-row m-3 p-2">

                                                                            <div className="w-1/3 text-lg text-black font-semibold mt-2">
                                                                                Half Crate
                                                                            </div>

                                                                            <div className="w-2/3 ">

                                                                                <div className="mt-1">
                                                                                    <input
                                                                                        type="text"
                                                                                        name="half_crate"
                                                                                        id="half_crate"
                                                                                        required={true}
                                                                                        placeholder="Price for half crate"
                                                                                        value={halfCrate}
                                                                                        className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-0 focus:border-gray-500 sm:text-sm"
                                                                                        onChange={(e) => setHalfCrate(e.target.value)}
                                                                                    />
                                                                                </div>

                                                                            </div>

                                                                        </div>

                                                                        {/*//#Form Password */}
                                                                        <div className="flex flex-row m-3 p-2">

                                                                            <div className="w-1/3 text-lg text-black font-semibold mt-2">
                                                                                Full Crate
                                                                            </div>

                                                                            <div className="w-2/3 ">

                                                                                <div className="mt-1">
                                                                                    <input
                                                                                        type="text"
                                                                                        name="full_crate"
                                                                                        id="full_crate"
                                                                                        required={true}
                                                                                        placeholder="Enter full crate price"
                                                                                        autoComplete="full_crate"
                                                                                        value={fullCrate}
                                                                                        className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-0 focus:border-gray-500 sm:text-sm"
                                                                                        onChange={(e) => setFullCrate(e.target.value)}
                                                                                    />
                                                                                </div>

                                                                            </div>

                                                                        </div>





                                                                    </div>


                                                                    {/*     //#Right Pane*/}
                                                                    <div className="w-1/2 mt-4">

                                                                        {/*//#select Category */}
                                                                        <div className="flex flex-row m-3 p-2">

                                                                            <div className="w-2/5 text-lg text-black font-semibold mt-2">
                                                                                Select Category
                                                                            </div>

                                                                            <div className="w-3/5 ">

                                                                                <select
                                                                                    className="block w-full text-gray-700  border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                                                                                    name="status_type">
                                                                                    <option value="none">
                                                                                        Category
                                                                                    </option>



                                                                                </select>

                                                                            </div>

                                                                        </div>

                                                                        {/*//#select Image*/}
                                                                        <div className="flex flex-row m-3 p-2 items-center justify-center">

                                                                            <div className="w-2/5 text-lg text-black font-semibold mt-2">
                                                                                Add image
                                                                            </div>

                                                                            <div className="w-2/5 justify-items-center align-text-center content-center">

                                                                                <div
                                                                                    className="px-12 py-12  w-full text-gray-700  border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-0 focus:border-gray-500"
                                                                                   >
                                                                                  <PhotographIcon width={100}  className="cursor-pointer  "/>

                                                                                </div>

                                                                            </div>
                                                                            <div className="w-1/5"></div>

                                                                        </div>


                                                                        {/* Stock Status */}
                                                                        <div className="flex flex-row m-3 p-2">

                                                                            <div className="w-2/5 text-lg text-black font-semibold mt-2">
                                                                                Stock Status
                                                                            </div>

                                                                            <div className="w-3/5 ">

                                                                                <select
                                                                                    className="block w-full text-gray-700  border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                                                                                    name="status_type">
                                                                                    <option value="none">
                                                                                        status
                                                                                    </option>



                                                                                </select>

                                                                            </div>

                                                                        </div>



                                                                    </div>

                                                                </div>

                                                                <div className="flex flex-row mb-5">

                                                                    <div className="w-3/5"></div>

                                                                    <div  className="w-1/5 mr-4">
                                                                        {/*// Add user button*/}
                                                                        <div className=" inline-block text-left w-auto ">
                                                                            `  <button type="button"
                                                                                       className="border px-12 border-gray-300 bg-gray-200 shadow-sm hover:-bg-gray  hover:shadow-md justify-center rounded-md  px-4 py-2 text-sm font-medium text-black dark:text-gray-50 hover:bg-gray-50  focus:outline-none"
                                                                                       id="options-menu"
                                                                                       onClick={()=>{


                                                                                       }}
                                                                        >
                                                                            Cancel

                                                                        </button>
                                                                        </div>
                                                                    </div>

                                                                    <div  className="w-1/5 mr-4">
                                                                        {/*// Add user button*/}
                                                                        <div className=" inline-block text-left w-auto ">
                                                                            `  <button type="button"
                                                                                       className="border  bg-teal-500 shadow-sm hover:-bg-teal-900 hover:text-white justify-center rounded-md  px-12 py-2 text-sm font-medium text-white dark:text-gray-50 hover:bg-gray-50  focus:outline-none"
                                                                                       id="options-menu"
                                                                                       onClick={()=>{


                                                                                       }}
                                                                        >
                                                                            Add

                                                                        </button>
                                                                        </div>
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

export default CreateInventoryListingPage
