/* This example requires Tailwind CSS v2.0+ */
import { CheckIcon } from '@heroicons/react/outline'
import { BiPen } from '@react-icons/all-files/bi/BiPen'
import { EyeIcon } from '@heroicons/react/outline'
import React, { useEffect, useState } from 'react'
import {ticketList} from '../data/data'
import Link from 'next/link'
import { KOrderNumber } from '@/components/constants'
import useLocalStorage from '@/components/CustomHooks/useLocalStorage'
import ReactLoading from 'react-loading';
import TicketSuccessful from '@/components/UserAccount/TicketSubmittedSucessfully'



export default function SubmitTicket() {

    const [loading, setLoading] = useState(false);
    const [title, setTitle] = useState("");
    const [submited, setSubmited] = useState(false);
    const [message, setMessage] = useState("");
    const [complaints,setComplaints] = useLocalStorage("complaint", []);
    const [orderNumber,setOrderNumber] = useLocalStorage("order_number", 'N/A');
    const [purchase,setPurchase] = useLocalStorage("purchase", {});
    const [issue, setIssue] = useState("N/A");

    const createTicket = async (ev) =>{
        console.log("POSTING COMPLAINT...");
        ev.preventDefault();
        if(title.length >0 && message.length > 0){
            setLoading(true);

           /* try{
                setLoading(true);
                const rawResponse = await fetch('url', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(
                        {
                            "title": xxxxxxxxx,
                            "message": xxxxxxxxxxxx


                        }
                    )
                });
                const content = await rawResponse.json();
                setLoading(false);
                initFields();

                console.log(content);
            }catch (e) {
                console.log(e)
            }*/
           /* const data = {
                'orderNumber': orderNumber,
                'title':title,
                'complaint_type':issue,
                'customer_name': purchase?.delivery?.customer_name ?? "N/A",
                'Customer_phone': purchase?.delivery?.customer_phone,
                'subtotal': purchase?.data?.totalAmount,
                 'status': purchase?.delivery?.deliverystatus_id,
                 'date':purchase?.delivery?.date,
                 'order_id':purchase?.delivery?.order_id,
                 'complaint': message,
                  'response': []
            };*/

            const data = {
                'orderNumber': 111,
                'title':"xxxxx",
                'complaint_type':'xxxxxxxxx',
                'customer_name':"N/A",
                'Customer_phone': '0000000000',
                'subtotal': 256,
                'status': 555555,
                'date':'10/03/',
                'order_id':22222,
                'complaint': "message here",
                'response': []
            };

            complaints.push(data);

            setComplaints(complaints);


            setTimeout(() => {
                setLoading(false);
                setSubmited(true);
            }, 4000);






        }

    }

    function getOrderNumber(){
        const orderNum = localStorage.getItem(KOrderNumber) ?? "#";
        setOrderNumber(orderNum);
    }

    function handleChange(e) {
        e.preventDefault();
        setIssue(e.target.value);
        //this.setState({ fruit: e.target.value });
    }

    useEffect(()=>{
        getOrderNumber();


    },[])


    return (
        <div   id="main-content" className="bg-white items-stretch">
            <div className="max-w-full mx-auto py-16 sm:px-6 sm:py-24 ">
                <div className="px-4 sm:px-0">
                    <h1 className="text-2xl  font-extrabold tracking-tight text-gray-900 sm:text-3xl">Submit a complaint </h1>
                    {/*<p className="mt-2 text-sm text-gray-500 ">
                        Check the status of recent orders, manage returns, and download invoices.

                    </p>*/}
                    <hr className="flex flex-row flex-grow"/>
                </div>

                <div className="mt-16 flex-row flex-grow">

                    <div className="space-y-16 sm:space-y-24">

                        <div className="w-full flex" >
                            <div className="w-1/5"></div>
                            <div className="w-4/5 ">
                                <main>
                                    <form onSubmit={createTicket}>

                                        <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                                            Complaint for Order <span className='text-lg text-lightBlue-600'>
                                            #{orderNumber ?? "N/A"}
                                        </span>
                                        </h6>

                                        {submited ?
                                            <TicketSuccessful />
                                            :
                                            <div>

                                            <div className="flex flex-wrap">

                                                <div className="flex flex-wrap">
                                                    <div className="w-full  px-4">
                                                        <div className="relative w-full mb-3">

                                                            <label
                                                                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                                htmlFor="grid-password"> Select Complaint type </label>

                                                            <select
                                                                value={issue} onChange={handleChange}
                                                                className="block w-full text-gray-700  border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                                                                name="account_type">
                                                                <option value="all">
                                                                    Product damaged
                                                                </option>
                                                                <option value="customer">
                                                                    Product not delivered
                                                                </option>
                                                                <option value="employee">
                                                                    Others
                                                                </option>


                                                            </select>
                                                        </div>
                                                    </div>

                                                    <div className="w-full lg:w-6/12 px-4">

                                                    </div>
                                                </div>

                                            </div>


                                            <div className="flex flex-wrap bg-gray-200">
                                                <div className="w-full lg:w-12/12 px-4">
                                                    <div className="relative w-full mb-3 mt-6">
                                                        <label
                                                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                            htmlFor="grid-password"
                                                        >
                                                            Your Name
                                                        </label>
                                                        <input
                                                            name="name"
                                                            id="name"
                                                            type="text"
                                                            value={title} onInput={(e) => setTitle(e.target.value)}
                                                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                            placeholder="Type your name"
                                                            required
                                                        />
                                                    </div>


                                                    <div className="relative w-full mb-3 mt-6">
                                                        <label
                                                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                            htmlFor="grid-password"
                                                        >
                                                            Tell us about your issue
                                                        </label>
                                                        <textarea
                                                            name="description"
                                                            id="desc"
                                                            type="text"
                                                            value={message} onInput={(e) => setMessage(e.target.value)}
                                                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                            rows="12"
                                                            placeholder="Describe the issue your are facing with your order"
                                                            required
                                                        />
                                                    </div>


                                                    <div className="relative w-full mb-12 mt-12">
                                                        {loading ?
                                                            <button type="button"
                                                                    className="py-2 px-4 flex justify-center items-center  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-gray-500 w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                                                <svg width="20" height="20" fill="currentColor"
                                                                     className="mr-2 animate-spin"
                                                                     viewBox="0 0 1792 1792"
                                                                     xmlns="http://www.w3.org/2000/svg">
                                                                    <path
                                                                        d="M526 1394q0 53-37.5 90.5t-90.5 37.5q-52 0-90-38t-38-90q0-53 37.5-90.5t90.5-37.5 90.5 37.5 37.5 90.5zm498 206q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-704-704q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm1202 498q0 52-38 90t-90 38q-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-964-996q0 66-47 113t-113 47-113-47-47-113 47-113 113-47 113 47 47 113zm1170 498q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-640-704q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm530 206q0 93-66 158.5t-158 65.5q-93 0-158.5-65.5t-65.5-158.5q0-92 65.5-158t158.5-66q92 0 158 66t66 158z">
                                                                    </path>
                                                                </svg>
                                                                posting...
                                                            </button>
                                                            :
                                                            <button
                                                                className="bg-teal-500 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                                                                type={'submit'}
                                                                // onClick={ createTicket}


                                                            >
                                                                Submit complaint
                                                            </button>
                                                        }
                                                    </div>
                                                    {/* #Debug: KYC_docd*/}

                                                </div>
                                            </div>

                                        </div>}




                                    </form>
                                </main>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}
