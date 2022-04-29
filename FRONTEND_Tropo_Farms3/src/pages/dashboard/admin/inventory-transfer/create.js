import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import {useRouter} from "next/router";
import { usersList } from '@/components/data/data'
import Link from 'next/link'
import React, { useState } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CreateInventoryTransferPage = () => {

    const router = useRouter();

    const [toDate, setToDate] = useState(new Date());
    const [fromDate, setFromDate] = useState(new Date());
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const list = [
        {
            'id':1,
            'name': 'Base Price',
            'base_price_list': 'Base Price',
            'default_factor': 1,
            'valid_from': "02/04/2022",
            'valid_to': "31/12/2022",
            'created': '02/04/2022',
            'status': 'active'
        },
        {
            'id':2,
            'name': 'Cold Price',
            'base_price_list': 'Cold Price',
            'default_factor': 1.1,
            'valid_from': "02/04/2022",
            'valid_to': "31/12/2022",
            'created': '02/04/2022',
            'status': 'active'
        },
        {
            'id':3,
            'name': '3% flat retal rate',
            'base_price_list': '3% flat retal rate',
            'default_factor': 1,
            'valid_from': "02/04/2022",
            'valid_to': "31/12/2022",
            'created': '02/04/2022',
            'status': 'active'
        },
    ];

    return (
        <AppLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Add Inventory Transfer
                </h2>
            }>

            <Head>
                <title>Volta Catch - Inventory Transfer</title>
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
                                                                New Inventory Transfer
                                                            </h2>
                                                        </div>



                                                        <div className="w-2/5">

                                                        </div>




                                                    </div>

                                                    <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                                                        <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                                                            <table className="table-auto  justify-items-center content-center">
                                                                <thead className="">
                                                                <tr className="justify-items-center content-center">


                                                                    <th scope="col"
                                                                        className="pl-12 py-3 bg-white  border-b border-gray-200 text-gray-800 justify-items-center content-center text-left text-sm  font-normal">
                                                                        Item
                                                                    </th>
                                                                    <th scope="col"
                                                                        className=" py-3 pl-12 bg-white items-center border-b border-gray-200 text-gray-800  text-left text-sm  font-normal">
                                                                        From
                                                                    </th>

                                                                    <th scope="col"
                                                                        className="pl-12 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm  font-normal">
                                                                        To
                                                                    </th>
                                                                    <th scope="col"
                                                                        className="pl-12 px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm  font-normal">
                                                                        Date
                                                                    </th>


                                                                </tr>
                                                                </thead>

                                                                <tbody>

                                                                <tr   className='pl-1'>


                                                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                                        <div className="flex items-center">

                                                                            <div className="ml-3">
                                                                                <p className="text-gray-900 whitespace-no-wrap">
                                                                                    <div className="">
                                                                                        <select
                                                                                            className=" w-full mx-2 text-gray-700  border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-0 focus:border-gray-300"
                                                                                            name="status_type">
                                                                                            <option value="none">
                                                                                                Select Item
                                                                                            </option>



                                                                                        </select>
                                                                                    </div>
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td className="px-3  border-b border-gray-200 bg-white text-sm">
                                                                        <p className="text-gray-900 whitespace-no-wrap">
                                                                            <div className="">
                                                                                <select
                                                                                    className=" w-full mx-2 text-gray-700  border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-0 focus:border-gray-300"
                                                                                    name="status_type">
                                                                                    <option value="none">
                                                                                        Select warehouse
                                                                                    </option>



                                                                                </select>
                                                                            </div>
                                                                        </p>
                                                                    </td>

                                                                    <td className="py-5 px-6 border-b border-gray-200 bg-white text-sm">
                                                                        <p className="text-gray-900 whitespace-no-wrap">
                                                                            <div className="">
                                                                                <select
                                                                                    className=" w-full mx-2 text-gray-700  border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-0 focus:border-gray-300"
                                                                                    name="status_type">
                                                                                    <option value="none">
                                                                                        Select warehouse
                                                                                    </option>



                                                                                </select>
                                                                            </div>
                                                                        </p>
                                                                    </td>

                                                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                                        <p className="text-gray-900 whitespace-no-wrap">
                                                                            <span className="text-left text-md font-medium uppercase text-lightBlue-600">
                                                                                <DatePicker selected={fromDate} onChange={(date) => setFromDate(date)} />
                                                                            </span>
                                                                        </p>
                                                                    </td>



                                                                </tr>



                                                                </tbody>
                                                            </table>





                                                        </div>
                                                    </div>
                                                    <div className="flex flex-row">

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

export default CreateInventoryTransferPage
