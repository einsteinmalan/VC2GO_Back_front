
  /* #BACKUP*/
/*
/!* This example requires Tailwind CSS v2.0+ *!/
import { CheckIcon } from '@heroicons/react/outline'
import { EyeIcon } from '@heroicons/react/outline/index'
import React from 'react'
import {ordersList} from '@/components/data/data'
import Link from "next/link";
import useLocalStorage from '@/components/CustomHooks/useLocalStorage'

const orders = [
    {
        number: 'WU88191111',
        date: 'January 22, 2021',
        datetime: '2021-01-22',
        total: '302.00',
        status:"Completed"

    },
    // More orders...
]

export default function OrderHistory() {

    const [purchase,setPurchase] = useLocalStorage("purchase", {});


    function makeid(length) {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() *
                charactersLength));
        }
        return result;
    }

     function getCurrentDate(separator=''){

        let newDate = new Date()
        let date = newDate.getDate();
        let month = newDate.getMonth() + 1;
        let year = newDate.getFullYear();

        return `${year}${separator}${month<10?`0${month}`:`${month}`}${separator}${date}`
    }


    return (
        <div   id="main-content" className="bg-white items-stretch">
            <div className="max-w-full mx-auto py-16 sm:px-6 sm:py-24 ">
                <div className="px-4 sm:px-0">
                    <h1 className="text-2xl  font-extrabold tracking-tight text-gray-900 sm:text-3xl">Order history</h1>
                    {/!*<p className="mt-2 text-sm text-gray-500 ">
                        Check the status of recent orders, manage returns, and download invoices.

                    </p>*!/}
                    <hr className="flex flex-row flex-grow"/>
                </div>

                <div className="mt-16 flex-row flex-grow">

                    <div className="space-y-16 sm:space-y-24">
                        {purchase.data.cart.map((order) => (
                            <div key={order.id}>


                                <div className= "border-blueGray-600 border-2  bg-gray-50 px-4 py-6 sm:rounded-lg  sm:p-6 md:flex md:items-center md:justify-between md:space-x-6 lg:space-x-8">
                                    <dl className="divide-dotted divide-double space-y-4 text-sm text-gray-600 flex-auto  md:space-y-0 md:grid md:grid-cols-3 md:gap-x-6 lg:w-1/2 lg:flex-none lg:gap-x-8">
                                        <div className="flex-grow justify-between md:block">
                                            <p className="font-medium text-gray-900">Order number: <span className="md:mt-1 text-gray-500">{makeid(7).toUpperCase()}</span>  <span className="md:mt-1 pl-4 text-teal-500">[Pending]</span></p>

                                        </div>
                                        <div className="flex-grow justify-between pt-4 md:block md:pt-0">
                                            <p className="font-medium text-gray-900">Date placed:  <span className="md:mt-1 text-gray-500"> {getCurrentDate('/')}</span></p>



                                        </div>
                                        <div className="flex justify-between pt-4 font-medium text-gray-900 md:block md:pt-0">

                                            <p className="md:mt-1 text-lightBlue-500"> <span className="text-xs text-lightBlue-500">GHS</span> {purchase.totalAmount}</p>
                                        </div>
                                    </dl>
                                    <div className="space-y-4 mt-6 sm:flex sm:space-x-4 sm:space-y-0 md:mt-0">

                                        <Link href={'/products/view/invoice/1' } key={order.id}><a >
                                            <button

                                                className="w-full flex items-center justify-center bg-gray-100 hover:shadow-md py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 md:w-auto"
                                                onClick={()=>{

                                                }}
                                            >
                                                <EyeIcon width={22}/>  View Invoice

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
*/

/* This example requires Tailwind CSS v2.0+ */
import { CheckIcon } from '@heroicons/react/outline'
import { EyeIcon } from '@heroicons/react/outline/index'
import React from 'react'
import {ordersList} from '@/components/data/data'
import Link from "next/link";
import useLocalStorage from '@/components/CustomHooks/useLocalStorage'

const orders = [
    {
        number: 'WU88191111',
        date: 'January 22, 2021',
        datetime: '2021-01-22',
        total: '302.00',
        status:"Completed"

    },
    // More orders...
]

export default function OrderHistory() {

    const [purchase,setPurchase] = useLocalStorage("purchase", {});

    function showDate(value){
        var str_1 = value.split("T");
        var str_2 = str_1[0];
        //var str_3 = str_2.split("T");
        //var str_date = str_3[0];
        //var str_time = str_3[1];
        //var fulldate = `${str_date} ${str_time}`;

      //  return   moment(fulldate, "YYYY-MM-DD HH:mm:ss").fromNow();
        return str_2;

    }

    function showDatePlace(value){
        var str_1 = value.split("GMT");
        var str_2 = str_1[0];
        //var str_3 = str_2.split("T");
        //var str_date = str_3[0];
        //var str_time = str_3[1];
        //var fulldate = `${str_date} ${str_time}`;

        //  return   moment(fulldate, "YYYY-MM-DD HH:mm:ss").fromNow();
        return str_2;

    }

    function makeid(length) {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() *
                charactersLength));
        }
        return result;
    }

    function getCurrentDate(separator=''){

        let newDate = new Date()
        let date = newDate.getDate();
        let month = newDate.getMonth() + 1;
        let year = newDate.getFullYear();

        return `${year}${separator}${month<10?`0${month}`:`${month}`}${separator}${date}`
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
            return "md:mt-1 pl-4 text-sm font-medium text-lightBlue-500";
        } else if(status_id ===3){
            return "md:mt-1 pl-4 text-sm font-medium text-teal-500";
        }else if(status_id ===4){
            return "md:mt-1 pl-4 text-sm font-medium text-red-500";
        }

        return "md:mt-1 pl-4 text-sm font-medium text-gray-500 ";
    }


    return (
        <div   id="main-content" className="bg-white items-stretch mt-16">
            <div className="px-4 sm:px-0">
                <h1 className="text-2xl  font-extrabold tracking-tight text-gray-900 sm:text-3xl">Order history</h1>
                {/*<p className="mt-2 text-sm text-gray-500 ">
                        Check the status of recent orders, manage returns, and download invoices.

                    </p>*/}
                <hr className="flex flex-row flex-grow"/>
            </div>


            <div className="w-full flex flex-row  ">

               {/* # 1/3 width*/}
                <div className="w-1/3 mt-2">

                    <div className="flex flex-row">
                        <div className="w-1/5 mx-2">

                            <img
                                src="/fishMarket.jpg"
                                alt=""
                                className="object-cover w-full lg:absolute h-80-px max-w-120-px lg:h-full rounded-lg "
                            />

                        </div>

                        <div className="w-4/5 ">
                            <p className="font-medium text-gray-900">Order number: <span className="md:mt-1 text-gray-500">{purchase?.delivery?.order_id}</span> </p>
                            <p className="font-normaltext-gray-500">Date:  <span className="md:mt-1 text-gray-500"> {showDatePlace(purchase?.delivery?.date)  }</span></p>
                            <p className="font-normaltext-gray-500"> <span className="font-normaltext-gray-500">Total: GHS</span> {purchase?.data?.totalAmount}</p>

                        </div>
                    </div>


                </div>

                {/* # 2/3 width*/}
                <div className="w-1/3 mt-2">

                 <span className="text-black font-bold">Status: </span>   <span className={deliveryStatusCss(purchase?.delivery?.deliverystatus_id)}>[{deliveryStatusName(purchase?.delivery?.deliverystatus_id)}]</span>

                </div>


                {/* # 3/3 width*/}
                <div className="w-1/3 mt-2">

                    <Link href={'/products/view/invoice/1' } >
                    <button type="button"
                            disabled={false}
                            className=' border border-gray-300  bg-teal-500 dark:bg-gray-800 shadow-sm flex items-center justify-center w-300 rounded-md  px-4 py-2 text-sm font-medium text-white dark:text-gray-50 hover:bg-gray-50 dark:hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-500'
                            id="options-menu"

                            onClick={()=>{ }} >
                        View Invoice

                    </button>
                     </Link>

                </div>

            </div>


        </div>
    )
}

