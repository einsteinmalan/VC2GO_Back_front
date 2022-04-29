import React, { useEffect, useState } from 'react'
import PhoneIcon from '@heroicons/react/outline/PhoneIcon'
import {couponList} from '../../components/data/data'
import { KWarehouseID } from '@/components/constants'

const UserHome = () => {

    const [toggleState, setToggleState] = useState(1);
    const [totalOrders, setTotalOrders] = useState(11);
    const [totalCoupon, setTotalCoupons] = useState(1);
    const [username, setUsername] = useState("Anthony Osei");
    const [phoneNumber, setPhoneNumber] = useState("055 856 4587");



    useEffect(()=>{
        setTotalCoupons(couponList.length)
    })

    return (
        <>

            <div className="">

                <div className="flex flex-row container mx-auto px-4 mt-20">

                    <div className="w-2/5 ">

                        <div className="pl-4 mr-4">
                            <img
                                alt="..."
                                src="/user.png"
                                className="shadow-xl rounded-full "
                                style={{ maxWidth: "150px" }}
                            />
                        </div>

                    </div>

                    <div className="w-2/5 ">

                        <div>
                            <p className="font-bold text-lg"> Salei Adjei</p>
                            <p className="font-normal text-lg"> 055******10</p>
                            <button type="button"
                                    disabled={false}
                                    className=' border border-gray-300  bg-teal-500 dark:bg-gray-800 shadow-sm flex items-center justify-center w-100-px rounded-md  px-4 py-2 text-sm font-medium text-white dark:text-gray-50 hover:bg-gray-50 dark:hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-500'
                                    id="options-menu"

                                    onClick={()=>{ }} >
                                Edit profile

                            </button>
                        </div>

                    </div>

                    <div className="w-1/5 mt-24">
                        <span className="text-lg font-normal"> Status:</span> <span className="text-3xl font-bold">VIP 2</span>
                    </div>

                </div>

                <div className="relative py-2 bg-gray-300 mb-5">

                </div>


                <div className="px-6">

                    <div className="mt-10 py-2 border-t border-gray-300 text-center">
                        <div className="flex flex-wrap justify-center">

                            <div  className="relative  mb-3 w-3/5">
                                <label
                                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                    htmlFor="grid-password"
                                >

                                    <span className="text-lg text-black mt-3 mb-2 font-bold"> Coupon Code Previously Used ({couponList.length})</span>
                                </label>
                            </div>

                            {
                                couponList && couponList.map((coupon)=>(
                                    <div className="relative  mb-3 w-3/5" key={coupon.id}>

                                        <input
                                            type="email"
                                            value={coupon.code} /*onInput={e => setCryptoSymbol(e.target.value)}*/
                                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-teal-500 bg-gray-100 font-bold rounded text-sm  shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                            placeholder="Enter symbol here..."
                                            minLength= {120}
                                            disabled={true}
                                        />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>


            </div>

        </>
    );
};

export default  UserHome;
