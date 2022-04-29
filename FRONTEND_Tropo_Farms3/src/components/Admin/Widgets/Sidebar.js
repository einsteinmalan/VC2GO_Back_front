import React, { useState } from 'react'
import Link from "next/link";
import { useRouter } from "next/router";

//import NotificationDropdown from "./NotificationDropdown.js";
import UserDropdown from "./UserDropdown.js";
import {kUserTokenKey} from '@/components/constants'
import useLocalStorage from '@/components/CustomHooks/useLocalStorage'
import { HeartIcon, MinusCircleIcon, MinusIcon } from '@heroicons/react/solid/esm'
import { PlusCircleIcon, PlusIcon } from '@heroicons/react/outline/esm'

export default function Sidebar() {
    const [collapseShow, setCollapseShow] = React.useState("hidden");
    const router = useRouter();

    const [hideAdministration,setHideAdministration] = useState(true);
    const [menuIndex, setMenuIndex] = useLocalStorage(1);




    return (
        <>
            <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
                <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
                    {/* Toggler */}
                    <button
                        className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                        type="button"
                        onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}
                    >
                        <i className="fas fa-bars"></i>
                    </button>
                    {/* Brand */}
                    <Link href="/">
                        <a
                            href="#pablo"
                            className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
                        >
                            <img src='/logooo.png' />
                        </a>
                    </Link>
                    {/* User */}
                    <ul className="md:hidden items-center flex flex-wrap list-none">
                        <li className="inline-block relative">
                           {/* <NotificationDropdown />*/}
                        </li>
                        <li className="inline-block relative">
                            <UserDropdown />
                        </li>
                    </ul>
                    {/* Collapse */}
                    <div
                        className={
                            "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
                            collapseShow
                        }
                    >
                        {/* Collapse header */}
                        <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-blueGray-200">
                            <div className="flex flex-wrap">
                                <div className="w-6/12">
                                    <Link href="/">
                                        <a
                                            href="#pablo"
                                            className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
                                        >
                                            Volta Catch
                                        </a>
                                    </Link>
                                </div>
                                <div className="w-6/12 flex justify-end">
                                    <button
                                        type="button"
                                        className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                                        onClick={() => setCollapseShow("hidden")}
                                    >
                                        <i className="fas fa-times"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* Form */}
                        <form className="mt-6 mb-4 md:hidden">
                            <div className="mb-3 pt-0">
                                <input
                                    type="text"
                                    placeholder="Search"
                                    className="border-0 px-3 py-2 h-12 border border-solid  border-blueGray-500 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal"
                                />
                            </div>
                        </form>




                        {/* Divider */}
                        <hr className="my-4 md:min-w-full" />
                        {/* Heading */}
                        <div className={menuIndex === 1 ? 'transition-all flex bg-teal-500 md:min-w-full text-white text-md font-medium block align-text-bottom align-text-center no-underline cursor-pointer border-blueGray-500 border-1 p-2 ' : 'flex md:min-w-full text-teal-500 text-md font-medium block align-text-bottom align-text-center no-underline cursor-pointer bg-menu-big-off border-1 p-2 '}>
                         <div className="w-4/5">
                             <h6
                                 onClick={()=>{setMenuIndex(1)}}
                             >
                                 Administration
                             </h6>
                         </div>

                           <div className="w-1/5 px-2">
                               {menuIndex ===1 ? <MinusIcon width={25} color='#fff'  /> :<PlusCircleIcon width={25} color='#06AA26'/>}
                           </div>
                        </div>




                        <ul className="md:flex-col md:min-w-full flex flex-col list-none">

                            <div className={menuIndex == 1 ?'': 'hidden'}>
                                <li className="items-center">
                                    <Link href="/dashboard/admin">
                                        <a
                                            href="#admin"
                                            className={
                                                "text-xs  py-3 font-bold block " +
                                                (router.pathname.indexOf("/dashboard/admin") === -1
                                                    ? "text-lightBlue-500 hover:text-lightBlue-600 "
                                                    : "text-blueGray-700 hover:text-blueGray-500 ")
                                            }
                                        >
                                            <i
                                                className={
                                                    "fas fa-tv mr-2 text-sm " +
                                                    (router.pathname.indexOf("/dashboard/admin") !== -1
                                                        ? "opacity-75"
                                                        :
                                                        "text-blueGray-300")
                                                }
                                            />{" "}
                                            Dashboard
                                        </a>
                                    </Link>
                                </li>



                                {/* #Debug:Stock */}
                                <li className="items-center">
                                    <Link href="/dashboard/admin/warehouse-region">
                                        <a
                                            href="#stock"
                                            className={
                                                "text-xs  py-3 font-bold block " +
                                                (router.pathname.indexOf("/dashboard/admin/warehouse-region") !== -1
                                                    ? "text-lightBlue-500 hover:text-lightBlue-600 bg-menu-small-on"
                                                    : "text-blueGray-700 hover:text-blueGray-500")
                                            }
                                        >
                                            <i
                                                className={
                                                    "fas fa-gavel mr-2 text-sm " +
                                                    (router.pathname.indexOf("/dashboard/admin/warehouse-region") !== -1
                                                        ? "opacity-75"
                                                        : "text-blueGray-300")
                                                }
                                            ></i>{" "}
                                            Warehouse Region
                                        </a>
                                    </Link>
                                </li>





                                {/* #Debug:Delivery */}
                                <li className="items-center">
                                    <Link href="/dashboard/admin/delivery-status">
                                        <a
                                            href="#delivery"
                                            className={
                                                "text-xs  py-3 font-bold block " +
                                                (router.pathname.indexOf("/dashboard/admin/delivery-status") !== -1
                                                    ? "text-lightBlue-500 hover:text-lightBlue-600 bg-menu-small-on"
                                                    : "text-blueGray-700 hover:text-blueGray-500")
                                            }
                                        >
                                            <i
                                                className={
                                                    "fas fa-file mr-2 text-sm " +
                                                    (router.pathname.indexOf("/dashboard/admin/delivery-status") !== -1
                                                        ? "opacity-75"
                                                        : "text-blueGray-300")
                                                }
                                            ></i>{" "}
                                            Delivery status
                                        </a>
                                    </Link>
                                </li>


                                {/* #Debug:Shipping Status */}
                                <li className="items-center">
                                    <Link href="/dashboard/admin/shipping_status">
                                        <a
                                            href="#delivery"
                                            className={
                                                "text-xs  py-3 font-bold block " +
                                                (router.pathname.indexOf("/dashboard/admin/shipping_status") !== -1
                                                    ? "text-lightBlue-500 hover:text-lightBlue-600 bg-menu-small-on"
                                                    : "text-blueGray-700 hover:text-blueGray-500")
                                            }
                                        >
                                            <i
                                                className={
                                                    "fas fa-file mr-2 text-sm " +
                                                    (router.pathname.indexOf("/dashboard/admin/shipping_status") !== -1
                                                        ? "opacity-75"
                                                        : "text-blueGray-300")
                                                }
                                            ></i>{" "}
                                            Shipping status
                                        </a>
                                    </Link>
                                </li>


                                {/* #Debug:Order Status */}
                                <li className="items-center">
                                    <Link href="/dashboard/admin/order_status">
                                        <a
                                            href="#delivery"
                                            className={
                                                "text-xs  py-3 font-bold block " +
                                                (router.pathname.indexOf("/dashboard/admin/order_status") !== -1
                                                    ? "text-lightBlue-500 hover:text-lightBlue-600 bg-menu-small-on"
                                                    : "text-blueGray-700 hover:text-blueGray-500")
                                            }
                                        >
                                            <i
                                                className={
                                                    "fas fa-file mr-2 text-sm " +
                                                    (router.pathname.indexOf("/dashboard/admin/order_status") !== -1
                                                        ? "opacity-75"
                                                        : "text-blueGray-300")
                                                }
                                            ></i>{" "}
                                            Order status
                                        </a>
                                    </Link>
                                </li>

                                {/* #Debug:Inventory Category */}
                                <li className="items-center">
                                    <Link href="/dashboard/admin/inventory-category">
                                        <a
                                            href="#delivery"
                                            className={
                                                "text-xs  py-3 font-bold block " +
                                                (router.pathname.indexOf("/dashboard/admin/inventory-category") !== -1
                                                    ? "text-lightBlue-500 hover:text-lightBlue-600 bg-menu-small-on"
                                                    : "text-blueGray-700 hover:text-blueGray-500")
                                            }
                                        >
                                            <i
                                                className={
                                                    "fas fa-file mr-2 text-sm " +
                                                    (router.pathname.indexOf("/dashboard/admin/inventory-category") !== -1
                                                        ? "opacity-75"
                                                        : "text-blueGray-300")
                                                }
                                            ></i>{" "}
                                            Inventory Category
                                        </a>
                                    </Link>
                                </li>


                                {/* #Debug:Coupon */}
                                <li className="items-center">
                                    <Link href="/dashboard/admin/coupon">
                                        <a
                                            href="#coupon"
                                            className={
                                                "text-xs  py-3 font-bold block " +
                                                (router.pathname.indexOf("/dashboard/admin/coupon") !== -1
                                                    ? "text-lightBlue-500 hover:text-lightBlue-600 bg-menu-small-on"
                                                    : "text-blueGray-700 hover:text-blueGray-500")
                                            }
                                        >
                                            <i
                                                className={
                                                    "fas fa-money mr-2 text-sm " +
                                                    (router.pathname.indexOf("/dashboard/admin/coupon") !== -1
                                                        ? "opacity-75"
                                                        : "text-blueGray-300")
                                                }
                                            ></i>{" "}
                                            Coupon
                                        </a>
                                    </Link>
                                </li>




                                {/* #Debug:Announcement */}
                                <li className="items-center">
                                    <Link href="/dashboard/admin/announcement">
                                        <a
                                            href="#announcement"
                                            className={
                                                "text-xs  py-3 font-bold block " +
                                                (router.pathname.indexOf("/dashboard/admin/announcement") !== -1
                                                    ? "text-lightBlue-500 hover:text-lightBlue-600 bg-menu-small-on"
                                                    : "text-blueGray-700 hover:text-blueGray-500")
                                            }
                                        >
                                            <i
                                                className={
                                                    "fas fa-fingerprint mr-2 text-sm " +
                                                    (router.pathname.indexOf("/dashboard/admin/announcement") !== -1
                                                        ? "opacity-75"
                                                        : "text-blueGray-300")
                                                }
                                            ></i>{" "}
                                            Announcement
                                        </a>
                                    </Link>
                                </li>
                            </div>


                            {/*//Report & Analysis*/}
                            <div className={menuIndex === 2 ? 'transition-all flex bg-teal-500 md:min-w-full text-white text-md  font-medium block align-text-bottom align-text-center no-underline cursor-pointer border-blueGray-500 border-1 p-2 ' : 'flex md:min-w-full text-teal-500 text-md  font-medium block align-text-bottom align-text-center no-underline cursor-pointer bg-menu-big-off border-1 p-2 '}>
                                <div className="w-4/5">
                                    <h6
                                        onClick={()=>{setMenuIndex(2)}}
                                    >
                                        Report & Analysis
                                    </h6>
                                </div>

                                <div className="w-1/5 px-2">
                                    {menuIndex ===2 ? <MinusIcon width={25} color='#fff'  /> :<PlusCircleIcon width={25} color='#06AA26'/>}
                                </div>
                            </div>

                            <div className={menuIndex ===2 ? '':'hidden'}>
                                {/* #Debug:Reports */}
                                <ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-2">
                                    <li className="items-center">
                                        <Link href="/dashboard/admin/reports">
                                            <a
                                                href="#users"
                                                className={
                                                    "text-xs  py-2 pb-2 font-bold block " +
                                                    (router.pathname.indexOf("/dashboard/admin/reports") !== -1
                                                        ? "text-lightBlue-500 hover:text-lightBlue-600 bg-menu-small-on"
                                                        : "text-blueGray-700 hover:text-blueGray-500")
                                                }
                                            >
                                                <i
                                                    className={
                                                        "fas fa-user-circle mr-2 text-sm " +
                                                        (router.pathname.indexOf("/dashboard/admin/reports") !== -1
                                                            ? "opacity-75"
                                                            : "text-blueGray-300")
                                                    }
                                                />{" "}
                                                Reports
                                            </a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>


                            {/*// User Management*/}
                            <div className={menuIndex === 3 ? 'transition-all flex bg-teal-500 md:min-w-full text-white text-md  font-medium block align-text-bottom align-text-center no-underline cursor-pointer border-blueGray-500 border-1 p-2 ' : 'flex md:min-w-full text-teal-500 text-md  font-medium block align-text-bottom align-text-center no-underline cursor-pointer bg-menu-big-off border-1 p-2 '}>
                                <div className="w-4/5">
                                    <h6
                                        onClick={()=>{setMenuIndex(3)}}
                                    >
                                        User Management
                                    </h6>
                                </div>

                                <div className="w-1/5 px-2">
                                    {menuIndex ===3 ? <MinusIcon width={25} color='#fff'  /> :<PlusCircleIcon width={25} color='#06AA26'/>}
                                </div>
                            </div>

                           <div className={menuIndex ===3 ? '': 'hidden'}>
                               {/* #Debug:users */}
                               <li className="items-center">
                                   <Link href="/dashboard/admin/users/all">
                                       <a
                                           href="#users"
                                           className={
                                               "text-xs  py-3 font-bold block " +
                                               (router.pathname.indexOf("/dashboard/admin/users/all") !== -1
                                                   ? "text-lightBlue-500 hover:text-lightBlue-600 bg-menu-small-on"
                                                   : "text-blueGray-700 hover:text-blueGray-500")
                                           }
                                       >
                                           <i
                                               className={
                                                   "fas fa-user-circle mr-2 text-sm " +
                                                   (router.pathname.indexOf("/dashboard/admin/users/all") !== -1
                                                       ? "opacity-75"
                                                       : "text-blueGray-300")
                                               }
                                           />{" "}
                                           Users
                                       </a>
                                   </Link>
                               </li>


                               {/* #Debug:Tickets */}
                               <li className="items-center border-collapse">
                                   <Link href="/dashboard/admin/tickets">
                                       <a
                                           href="#tickets"
                                           className={
                                               "text-xs  py-3 font-bold block " +
                                               (router.pathname.indexOf("/dashboard/admin/tickets") !== -1
                                                   ? "text-lightBlue-500 hover:text-lightBlue-600 bg-menu-small-on"
                                                   : "text-blueGray-700 hover:text-blueGray-500")
                                           }
                                       >
                                           <i
                                               className={
                                                   "fas fa-bullhorn mr-2 text-sm " +
                                                   (router.pathname.indexOf("/dashboard/admin/tickets") !== -1
                                                       ? "opacity-75"
                                                       : "text-blueGray-300")
                                               }
                                           ></i>{" "}
                                           Tickets
                                       </a>
                                   </Link>
                               </li>


                               {/* #Debug:Create users */}
                               <li className="items-center">
                                   <Link href="/dashboard/admin/users/create">
                                       <a
                                           href="#users"
                                           className={
                                               "text-xs  py-3 font-bold block " +
                                               (router.pathname.indexOf("/dashboard/admin/users/create") !== -1
                                                   ? "text-lightBlue-500 hover:text-lightBlue-600 bg-menu-small-on"
                                                   : "text-blueGray-700 hover:text-blueGray-500")
                                           }
                                       >
                                           <i
                                               className={
                                                   "fas fa-user-circle mr-2 text-sm " +
                                                   (router.pathname.indexOf("/dashboard/admin/users/create") !== -1
                                                       ? "opacity-75"
                                                       : "text-blueGray-300")
                                               }
                                           />{" "}
                                           Add New User
                                       </a>
                                   </Link>
                               </li>
                           </div>

                            {/*//=======================  end user management ===============================================*/}



                            {/*// User Management*/}
                            <div className={menuIndex === 4 ? 'transition-all flex bg-teal-500 md:min-w-full text-white text-md  font-medium block align-text-bottom align-text-center no-underline cursor-pointer border-blueGray-500 border-1 p-2 ' : 'flex md:min-w-full text-teal-500 text-md  font-medium block align-text-bottom align-text-center no-underline cursor-pointer bg-menu-big-off border-1 p-2 '}
                                 onClick={()=>{setMenuIndex(4)}}
                            >
                                <div className="w-4/5">
                                    <h6

                                    >
                                        Master Data Mgt.
                                    </h6>
                                </div>

                                <div className="w-1/5 px-2">
                                    {menuIndex ===4 ? <MinusIcon width={25} color='#fff'  /> :<PlusCircleIcon width={25} color='#06AA26'/>}
                                </div>
                            </div>

                            <div className={menuIndex ===4 ? '': 'hidden'}>
                                {/* #Debug:Warehouse Management */}
                                <li className="items-center">
                                    <Link href="/dashboard/admin/warehouse-management">
                                        <a
                                            href="#orders"
                                            className={
                                                "text-xs  py-3 font-bold block " +
                                                (router.pathname.indexOf("/dashboard/admin/warehouse-management") !== -1
                                                    ? "text-lightBlue-500 hover:text-lightBlue-600 bg-menu-small-on"
                                                    : "text-blueGray-700 hover:text-blueGray-500")
                                            }
                                        >
                                            <i
                                                className={
                                                    "fas fa-credit-card mr-2 text-sm " +
                                                    (router.pathname.indexOf("/dashboard/admin/warehouse-management") !== -1
                                                        ? "opacity-75"
                                                        : "text-blueGray-300")
                                                }
                                            />{" "}
                                            Warehouse Management
                                        </a>
                                    </Link>
                                </li>


                                {/* #Debug:Inventory Listing */}
                                <li className="items-center">
                                    <Link href="/dashboard/admin/inventory-listing">
                                        <a
                                            href="#orders"
                                            className={
                                                "text-xs  py-3 font-bold block " +
                                                (router.pathname.indexOf("/dashboard/admin/inventory-listing") !== -1
                                                    ? "text-lightBlue-500 hover:text-lightBlue-600 bg-menu-small-on"
                                                    : "text-blueGray-700 hover:text-blueGray-500")
                                            }
                                        >
                                            <i
                                                className={
                                                    "fas fa-credit-card mr-2 text-sm " +
                                                    (router.pathname.indexOf("/dashboard/admin/inventory-listing") !== -1
                                                        ? "opacity-75"
                                                        : "text-blueGray-300")
                                                }
                                            />{" "}
                                            Inventory Listing
                                        </a>
                                    </Link>
                                </li>


                                {/* #Debug:Price List Mgt. */}
                                <li className="items-center">
                                    <Link href="/dashboard/admin/price-list">
                                        <a
                                            href="#orders"
                                            className={
                                                "text-xs  py-3 font-bold block " +
                                                (router.pathname.indexOf("/dashboard/admin/price-list") !== -1
                                                    ? "text-lightBlue-500 hover:text-lightBlue-600 bg-menu-small-on"
                                                    : "text-blueGray-700 hover:text-blueGray-500")
                                            }
                                        >
                                            <i
                                                className={
                                                    "fas fa-credit-card mr-2 text-sm " +
                                                    (router.pathname.indexOf("/dashboard/admin/price-list") !== -1
                                                        ? "opacity-75"
                                                        : "text-blueGray-300")
                                                }
                                            />{" "}
                                            Price List Management
                                        </a>
                                    </Link>
                                </li>



                                {/* #Debug:Driver Mgt. */}
                                <li className="items-center">
                                    <Link href="/dashboard/admin/driver-management">
                                        <a
                                            href="#orders"
                                            className={
                                                "text-xs  py-3 font-bold block " +
                                                (router.pathname.indexOf("/dashboard/admin/driver-management") !== -1
                                                    ? "text-lightBlue-500 hover:text-lightBlue-600 bg-menu-small-on"
                                                    : "text-blueGray-700 hover:text-blueGray-500")
                                            }
                                        >
                                            <i
                                                className={
                                                    "fas fa-credit-card mr-2 text-sm " +
                                                    (router.pathname.indexOf("/dashboard/admin/driver-management") !== -1
                                                        ? "opacity-75"
                                                        : "text-blueGray-300")
                                                }
                                            />{" "}
                                            Driver Management
                                        </a>
                                    </Link>
                                </li>


                                {/* #Debug:Shipping Type. */}
                                <li className="items-center">
                                    <Link href="/dashboard/admin/shipping-type">
                                        <a
                                            href="#orders"
                                            className={
                                                "text-xs  py-3 font-bold block " +
                                                (router.pathname.indexOf("/dashboard/admin/shipping-type") !== -1
                                                    ? "text-lightBlue-500 hover:text-lightBlue-600 bg-menu-small-on"
                                                    : "text-blueGray-700 hover:text-blueGray-500")
                                            }
                                        >
                                            <i
                                                className={
                                                    "fas fa-credit-card mr-2 text-sm " +
                                                    (router.pathname.indexOf("/dashboard/admin/shipping-type") !== -1
                                                        ? "opacity-75"
                                                        : "text-blueGray-300")
                                                }
                                            />{" "}
                                            Shipping Type
                                        </a>
                                    </Link>
                                </li>
                            </div>



                            {/*//=======================  end Master Data Mgt ===============================================*/}



                            {/*// User Management*/}
                            <div className={menuIndex === 5 ? 'transition-all flex bg-teal-500 md:min-w-full text-white text-md  font-medium block align-text-bottom align-text-center no-underline cursor-pointer border-blueGray-500 border-1 p-2 ' : 'flex md:min-w-full text-teal-500 text-md  font-medium block align-text-bottom align-text-center no-underline cursor-pointer bg-menu-big-off border-1 p-2 '}>
                                <div className="w-4/5">
                                    <h6
                                        onClick={()=>{setMenuIndex(5)}}
                                    >
                                        Logistics Mgt.
                                    </h6>
                                </div>

                                <div className="w-1/5 px-2">
                                    {menuIndex ===5 ? <MinusIcon width={25} color='#fff'  /> :<PlusCircleIcon width={25} color='#06AA26'/>}
                                </div>
                            </div>


                           <div className={menuIndex === 5 ? '': 'hidden'}>
                               {/* #Debug:Inventory Transfer */}
                               <li className="items-center">
                                   <Link href="/dashboard/admin/inventory-transfer">
                                       <a
                                           href="#orders"
                                           className={
                                               "text-xs  py-3 font-bold block " +
                                               (router.pathname.indexOf("/dashboard/admin/inventory-transfer") !== -1
                                                   ? "text-lightBlue-500 hover:text-lightBlue-600 bg-menu-small-on"
                                                   : "text-blueGray-700 hover:text-blueGray-500")
                                           }
                                       >
                                           <i
                                               className={
                                                   "fas fa-credit-card mr-2 text-sm " +
                                                   (router.pathname.indexOf("/dashboard/admin/inventory-transfer") !== -1
                                                       ? "opacity-75"
                                                       : "text-blueGray-300")
                                               }
                                           />{" "}
                                           Inventory Transfer
                                       </a>
                                   </Link>
                               </li>


                               {/* #Debug:Pick & Pack */}
                               <li className="items-center">
                                   <Link href="/dashboard/admin/pick-pack">
                                       <a
                                           href="#orders"
                                           className={
                                               "text-xs  py-3 font-bold block " +
                                               (router.pathname.indexOf("/dashboard/admin/pick-pack") !== -1
                                                   ? "text-lightBlue-500 hover:text-lightBlue-600 bg-menu-small-on"
                                                   : "text-blueGray-700 hover:text-blueGray-500")
                                           }
                                       >
                                           <i
                                               className={
                                                   "fas fa-credit-card mr-2 text-sm " +
                                                   (router.pathname.indexOf("/dashboard/admin/pick-pack") !== -1
                                                       ? "opacity-75"
                                                       : "text-blueGray-300")
                                               }
                                           />{" "}
                                           Pick & Pack
                                       </a>
                                   </Link>
                               </li>


                               {/* #Debug:Shipping Status */}
                               <li className="items-center">
                                   <Link href="/dashboard/admin/shipping-status">
                                       <a
                                           href="#orders"
                                           className={
                                               "text-xs  py-3 font-bold block " +
                                               (router.pathname.indexOf("/dashboard/admin/shipping-status") !== -1
                                                   ? "text-lightBlue-500 hover:text-lightBlue-600 bg-menu-small-on"
                                                   : "text-blueGray-700 hover:text-blueGray-500")
                                           }
                                       >
                                           <i
                                               className={
                                                   "fas fa-credit-card mr-2 text-sm " +
                                                   (router.pathname.indexOf("/dashboard/admin/shipping-status") !== -1
                                                       ? "opacity-75"
                                                       : "text-blueGray-300")
                                               }
                                           />{" "}
                                           Shipping
                                       </a>
                                   </Link>
                               </li>
                           </div>


                            {/*//=======================  end Logistics Mgt. ===============================================*/}









                        {/* Divider */}
                        <hr className="my-4 md:min-w-full" />
                        {/* Heading */}


                            <div className=" py-4">
                                <button
                                    className="bg-red-400 hover:text-lightBlue-600 text-white font-semibold hover:text-red-500 py-2 px-4 border border-blue-500 hover:border-transparent rounded-full  "
                                    onClick={() => {
                                        localStorage.removeItem(`${kUserTokenKey}`);
                                        setTimeout(() => {
                                            router.push("/");
                                        },1000);
                                    }}
                                >
                                    Logout
                                </button>
                            </div>

                        </ul>


                    </div>
                </div>
            </nav>
        </>
    );
}
