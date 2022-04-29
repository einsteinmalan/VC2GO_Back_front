import { UserAddIcon } from '@heroicons/react/outline/index'
import React, { useState } from 'react'
import ChooseDeliveryAgent from '@/components/pages/delivery/ChooseDelivery'
import { usersList } from '@/components/data/data'
import Link from 'next/link'


const DeliveryInvoiceAdmin = ({ order })=>{

    const [chooseDelivery, setChooseDelivery] = useState(false);

    console.log(`log order: ${order?.delivery?.customer_name}`)

    function handleDeliveryChoice(){
        setChooseDelivery(!chooseDelivery);
    }

    function showDate(value){
        if(value === null || value === undefined){
            return "";
        }

        var str_1 = value.split("T");
        var str_2 = str_1[0];

        return str_2;

    }


    function calculateSubtotal(list_products){
        let subtotal = 0.0;
        let subTotalDiscount = 1;

        for (let i = 0; i < list_products?.length; i++) {
            let productDiscount = 0;
            subtotal =subtotal + (list_products[i]?.quantity * list_products[i]?.price);

        }



        return subtotal ;
    }

    function discountedValue(price, discount){
        return price * (discount/100);
    }

    function deliveryStatusName(status_id){
        if(status_id===2){
            return "In-progress";
        } else if(status_id ===3){
            return "Completed";
        }else if(status_id ===4){
            return "Cancelled";
        }

        return "Pending";
    }

    function deliveryStatusCss(status_id){
        if(status_id===2){
            return "text-sm font-medium text-lightBlue-500";
        } else if(status_id ===3){
            return "text-sm font-medium text-teal-500";
        }else if(status_id ===4){
            return "text-sm font-medium text-red-500";
        }

        return "text-sm font-medium text-gray-500 ";
    }




    return(
        <div className="flex items-center justify-center min-h-screen bg-gray-200 mb-6 pb-16 pt-8">
            <div className="w-4/5 bg-white shadow-lg mt-16">
                <div className="flex justify-between p-4">
                    <div>
                        <h1 className="text-lg font-bold uppercase text-black"
                        >Tropo Farms Company Limited (Volta Catch)</h1>
                        <h1 className="text-lg font-bold uppercase text-black"
                        >Volta catch Kasoa Depot</h1>
                        {/*<p className="text-base">{order.delivery?.warehouse_name }  </p>*/}
                    </div>
                    <div className="p-2">
                        <ul className="flex">

                            <li className="flex flex-col p-2 border-l-2 border-indigo-200">
                                <img src="/logooo.png" className="mb-2"/>

                            </li>
                        </ul>
                    </div>
                </div>

                <div className="w-full h-0.5 bg-lightBlue-500"></div>


                <div className="flex justify-between p-4">

                    <div>
                        <h6 className="font-bold">Invoice Number : <span
                            className="text-sm font-medium"> TP001</span></h6>
                        <h6 className="font-bold uppercase ">Date: <span
                            className="text-sm font-medium"> 13/02/2022</span></h6>
                        <h6 className="font-bold uppercase ">Invoice To : <span> Celila  Tsere</span></h6>






                    </div>
                    <div className="w-40">
                        <span className="font-bold uppercase">Driver : Samuel Nkum</span>
                    </div>
                    <div></div>
                </div>

                {/*// Table*/}
                <div className="flex justify-center p-4">
                    <div className="border-b border-gray-200 w-4/5 shadow">
                        <table className="min-w-full leading-normal table-fixed">
                            <thead>
                            <tr>
                                <th scope="col"
                                    className="px-2 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                    Item
                                </th>
                                <th scope="col"
                                    className="px-5 py-3 bg-white items-center border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                    Quantity
                                </th>
                                <th scope="col"
                                    className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm  font-normal">
                                    UoM
                                </th>
                                <th scope="col"
                                    className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                    Unit Price
                                </th>
                                <th scope="col"
                                    className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                    Total
                                </th>


                            </tr>
                            </thead>

                            <tbody>

                            <tr >
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <div className="flex items-center">
                                        <div className="ml-3">
                                            <p className="text-gray-900 whitespace-no-wrap">
                                               Item
                                            </p>
                                        </div>

                                    </div>
                                </td>
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <p className="text-gray-900 whitespace-no-wrap">
                                      Quantity
                                    </p>
                                </td>
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <p className="text-gray-900 align-middle whitespace-no-wrap">
                                       UoM
                                    </p>
                                </td>
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <p className="text-gray-900 whitespace-no-wrap">
                                        Unit Price
                                    </p>
                                </td>
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <p className="text-gray-900 whitespace-no-wrap">
                                        Total
                                    </p>
                                </td>

                            </tr>

                            </tbody>
                        </table>
                    </div>
                </div>


                <div className=" justify-between pl-24 mt-4 mb-12 ">

                    <h6 className="font-bold">Total Weight: <span
                        className="text-sm font-medium pl-6"> 750 KG</span></h6>

                    <h6 className="font-bold">Total Amount : <span
                        className="text-sm font-medium pl-6"> GHS 15,750</span>
                    </h6>

                    <h6 className="font-bold ">Payment : <span
                        className="text-sm font-medium pl-6"> GHS 15,750</span>
                    </h6>

                    <h6 className="text-sm font-medium">Fifteen thousand seven hundred and fifty</h6>

                    <h6 className="font-bold mt-3">Tel : <span
                        className="text-sm font-medium pl-6"> +233 (0) 544 346 969</span>
                    </h6>

                    <h6 className="font-bold ">Email : <span
                        className="text-sm font-medium pl-6"> sales @voltacatch.com</span>
                    </h6>

                    <h6 className="font-bold uppercase ">Depot Kasoa Depot KASCASHIER01</h6>


                    {/*//Row Buttons*/}
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
                               Back

                            </button>
                            </div>
                        </div>

                        <div  className="w-1/5 mr-4">
                            {/*// Add user button*/}
                            <div className=" inline-block text-left w-auto ">
                                `  <button type="button"
                                           className="border px-12 border-gray-300 bg-gray-200 shadow-sm hover:-bg-gray  hover:shadow-md justify-center rounded-md  px-4 py-2 text-sm font-medium text-black dark:text-gray-50 hover:bg-gray-50  focus:outline-none"
                                           id="options-menu"
                                           onClick={()=>{


                                           }}
                            >
                                Print

                            </button>
                            </div>
                        </div>

                    </div>



                </div>





            </div>
        </div>
    )
}

export  default DeliveryInvoiceAdmin;
