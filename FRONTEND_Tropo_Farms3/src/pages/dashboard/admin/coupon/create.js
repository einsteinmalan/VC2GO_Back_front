import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import { useState } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CreateCoupon = () => {


    const [name, setName] = useState('');
    const [coupon_code, setCoupon_code] = useState('');
    const [expiry_date, setExpiry_date] = useState('');
    const [status, setStatus] = useState(1);
    const [startDate, setStartDate] = useState(new Date());
    const [by_percentage, setBy_percentage] = useState(0);
    const [by_fix_sum, setBy_fix_sum] = useState(0);
    const [amount, setAmount] = useState(0);











    async function createCoupon(ev){
        ev.preventDefault();
        /*  setLoading(true);
          const rawResponse = await fetch(`${linkBlockchain}/crypto/add/crypto`, {
              method: 'POST',
              headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify(
                  {
                      "uuid": "3434...",
                      "crypto_name": cryptoName,
                      "crypto_symbol": cryptoSymbol,
                      "contract_address": contractAddress,
                      "contract_abi": contractAbi,
                      "contract_address_test": contractAddressTest,
                      "contract_abi_test": contractAbiTest,
                      "amount_min": amountMin,
                      "staking_amount_min": stakingMin,
                      "days": stakingDay,
                      "rates": stakingRate,
                      "stakable": stakablechecked,
                      "available":availableChecked,
                      "crypto_type": tokenChecked ? "token": "coin" ,//  "token/coin",
                      "crypto_name_market": marketName,
                      "blockchain":blockChain
                  }
              )
          });
          const content = await rawResponse.json();
          setLoading(false);
          initFields();*/

    }


    function handleStatus(e){
        //  e.preventDefault();

        const checked = e.target.checked;

        setStatus(status ? 1: 0);

    }






    return (
        <AppLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    All Coupons
                </h2>
            }>

            <Head>
                <title>Volta Catch - Coupons</title>
            </Head>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg left-260-px">
                        <div className="flex w-full">

                            <div className="w-1/5"> </div>

                            <div className="w-4/5">
                                <main>
                                    <div className="p-6 bg-gray-100 border-b border-gray-200">

                                        {/*//Place Form here*/}
                                        <div className="flex-auto px-4 lg:px-10 py-10 pt-0 mt-3 pt-2">
                                            <form onSubmit={createCoupon}>
                                                <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                                                    COUPON CREATION
                                                </h6>
                                                <div className="flex flex-wrap">
                                                    <div className="w-full lg:w-6/12 px-4">
                                                        <div className="relative w-full mb-3">
                                                            <label
                                                                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                                htmlFor="grid-password"
                                                            >
                                                                Coupon Name
                                                            </label>
                                                            <input
                                                                type="text"
                                                                value={name} onInput={e => setName(e.target.value)}
                                                                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                                placeholder="Enter Coupon name..."
                                                            />
                                                        </div>
                                                    </div>


                                                    <div className="w-full lg:w-6/12 px-4">
                                                        <div className="relative w-full mb-3">
                                                            <label
                                                                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                                htmlFor="grid-password"
                                                            >
                                                                Coupon Amount
                                                            </label>
                                                            <input
                                                                type="text"
                                                                value={amount} onInput={e => setAmount(e.target.value)}
                                                                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                                placeholder="Enter Coupon name..."
                                                            />
                                                        </div>
                                                    </div>


                                                    <div className="w-full lg:w-6/12 px-4">
                                                        <div className="relative w-full mb-3">
                                                            <label
                                                                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                                htmlFor="grid-password"
                                                            >
                                                                Coupon Category
                                                            </label>
                                                            {/*//Select Options*/}
                                                            <div className="">


                                                                <select

                                                                    className="block w-full text-gray-700  border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                                                                    name="delivery_status ">

                                                                    <option value="in_progress">
                                                                        Percentage
                                                                    </option>
                                                                    <option value="delivered">
                                                                       Fix Amount
                                                                    </option>



                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>



                                                    <div className="w-full lg:w-6/12 px-4">
                                                        <div className="relative w-full ">
                                                            <div className="relative w-full mb-3">
                                                                <label
                                                                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                                    htmlFor="grid-password"
                                                                >
                                                                    Expiring Date
                                                                </label>
                                                                {/*<DatePicker selected={startDate} onChange={(date:Date) => setStartDate(date)} />*/}
                                                                <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                                                            </div>

                                                        </div>
                                                    </div>


                                                    <div className="w-full lg:w-6/12 px-4">
                                                        <div className="relative w-full mb-3">
                                                            <label
                                                                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                                htmlFor="grid-password"
                                                            >
                                                                Coupon code
                                                            </label>

                                                            <div className="flex-row justify-items-start">
                                                                <input
                                                                    type="text"
                                                                    value={coupon_code} onInput={e => setCoupon_code(e.target.value)}
                                                                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                                    placeholder="Enter coupon code manually or click generate button"
                                                                />

                                                                <button
                                                                    className="flex-shrink-0 mx-4 px-6 py-2 mt-3 text-base font-semibold text-white bg-teal-500 rounded-lg shadow-md hover:-bg-blue-500 focus:outline-none focus:ring-2 "
                                                                    >
                                                                    Generate
                                                                </button>



                                                                </div>

                                                            </div>


                                                    </div>


                                                </div>

                                                {/*//#Debug: Row-form*/}



                                                <hr className="mt-6 border-b-1 border-blueGray-300" />

                                                <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                                                    COUPON AVAILALABILITY
                                                </h6>


                                                {/*//#deubg: Status*/}
                                                <div className="flex  justify-items-start lg:w-6/12">
                                                    <div className="w-full lg:w-3/12  ">
                                                        <label
                                                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                            htmlFor="grid-password"
                                                        >
                                                            {" "}
                                                        </label>
                                                        <div className="w-full lg:w-6/12 pl-3">
                                                            <div
                                                                className="relative inline-block w-10 align-baseline select-none">
                                                                <input type="checkbox" name="toggle" id="Blue"
                                                                       onChange={handleStatus}
                                                                       value={status ===1}
                                                                       className="checked:bg-blue-500 outline-none focus:outline-none right-0 checked:right-0 duration-200 ease-in absolute block w-8 h-8 rounded-full bg-white border-2 appearance-none cursor-pointer"/>
                                                                <label htmlFor="Blue"
                                                                       className="block overflow-hidden  rounded-full bg-gray-300 cursor-pointer">
                                                                </label>
                                                            </div>


                                                        </div>



                                                    </div>

                                                    <div className="w-full lg:w-9/12  mt-8 ">
                                                        <span className="uppercase text-blueGray-600 text-xs mt-8  font-bold"> Active  </span>
                                                    </div>
                                                </div>


                                                {/*<div className="flex  justify-items-start lg:w-6/12 mt-4">
                                                    <button
                                                        className=" mx-4 px-6 py-2 mt-3 text-base font-semibold text-white bg-teal-500 rounded-lg shadow-md hover:-bg-blue-500 focus:outline-none focus:ring-2 "
                                                    >
                                                        Generate
                                                    </button>
                                                </div>*/}


                                            </form>
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

export default CreateCoupon
