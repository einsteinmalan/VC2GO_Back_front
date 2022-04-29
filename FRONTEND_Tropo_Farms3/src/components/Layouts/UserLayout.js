import React, { useState } from 'react'
import HeaderAuth from '@/components/Header/HeadAuth'
import Footer from '@/components/Footer/Footer'

const UserLayout = () => {

    const [toggleState, setToggleState] = useState(1);
    const [title, setTitle] = useState("Account");

    return (
        <>

            <HeaderAuth />

            <div class="flex bg-gray-100 text-gray-800">
                <nav
                    class="h-screen sticky top-0  w-1/5 md:shadow transform -translate-x-full md:translate-x-0 transition-transform duration-150 ease-in bg-green"
                >
                    <div class="sidebar-header flex items-center justify-center py-4">

                    </div>
                    <div class="sidebar-content px-4 py-6 mt-24">
                        <ul class="flex flex-col w-full">
                            <li class="my-px" onClick={()=>setToggleState(1)}>
                                <span
                                    className={toggleState ==1 ? 'flex flex-row items-center h-10 px-3 rounded-lg text-gray-700 bg-gray-100' : 'flex font-medium text-sm text-white px-4 my-4 uppercase hover:text-lightBlue-600 cursor-pointer'}>Account</span>
                            </li>


                            <li class="my-px" onClick={()=>setToggleState(2)}>
                                <span class={toggleState === 2 ?'flex flex-row items-center h-10 px-3 rounded-lg text-gray-700 bg-gray-100':'flex font-medium text-sm text-white px-4 my-4 uppercase hover:text-lightBlue-600 cursor-pointer'}>Order status</span>
                            </li>


                            <li class="my-px" onClick={()=>setToggleState(3)}>
                                <span class={toggleState === 3 ?'flex flex-row items-center h-10 px-3 w-full rounded-lg text-gray-700 bg-gray-100':'flex font-medium text-sm text-white px-4 my-4 uppercase hover:text-lightBlue-600 cursor-pointer'}>Invoice</span>
                            </li>

                            <li className="my-px" onClick={()=>setToggleState(4)}>
                                <span className={toggleState === 4 ?'flex flex-row items-center h-10 px-3 rounded-lg text-gray-700 bg-gray-100':'flex font-medium text-sm text-white px-4 my-4 uppercase hover:text-lightBlue-600 cursor-pointer'}>Wishlist</span>
                            </li>


                            <li className="my-px" onClick={() => setToggleState(5)}>
                                <span
                                    className={toggleState === 5 ? 'flex flex-row items-center h-10 px-3 rounded-lg text-gray-700 bg-gray-100' : 'flex font-medium text-sm text-white px-4 my-4 uppercase hover:text-lightBlue-600 cursor-pointer'}>Ticket</span>
                            </li>


                            <li class="my-px mt-24">
                                <span
                                    className="font-medium text-sm text-white px-4 pt-20 hover:text-lightBlue-600 cursor-pointer">Logout</span>
                            </li>
                        </ul>
                    </div>
                </nav>


                <main class="main flex flex-col flex-grow -ml-64 md:ml-0 transition-all duration-150 ease-in">
                    <header class="header bg-white shadow py-4 px-4">
                        <div class="header-content flex items-center flex-row">
                            <form action="#">
                                <div class="hidden md:flex relative">



                                </div>

                            </form>

                        </div>
                    </header>
                    <div class="main-content flex flex-col flex-grow p-4">


                        <div
                            class="flex flex-col flex-grow border-4 border-gray-400 border-dashed bg-white rounded mt-4"
                        ></div>
                    </div>
                    <Footer/>

                </main>
            </div>
        </>
    );
};

export default  UserLayout;
