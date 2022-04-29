import React, { useContext, useEffect, useReducer, useState } from 'react'
import HeaderAuth from '@/components/Header/HeadAuth'
import Footer from '@/components/Footer/Footer'
import UserHome from '@/components/UserAccount/UserHome'
import WishListItem from '@/components/Products/Wishlist/WishlistItem'
import OrderHistory from '@/components/UserAccount/OrderHistory'
import OrderTicket from '@/components/UserAccount/OrderTicket'
import { HomeIcon } from '@heroicons/react/outline/index'
import { useRouter } from 'next/router'
import {WishListContext} from '@/context/wishListContext';
import QuickView from '@/components/QuickView/QuickView'
import QuickViewWishList from '@/components/QuickView/QuickviewWishList'
import { StoreContext } from '@/context/storeContext'
import CartReducer from '@/context/CartReducer'
import { KLastLocation, KUserLoggedIn } from '@/components/constants'
import HeaderAccount from '@/components/Header/HeaderAccount'
import useLocalStorage from '@/components/CustomHooks/useLocalStorage'


const UserAccount = () => {

    const [toggleState, setToggleState] = useState(1);
    const [title, setTitle] = useState("Account");
    const router = useRouter();

    const [modalActive, flipModelState] = useState(false);
    const [term, setTerm] = useState("");

    const [cart, setCart] = useState([]);
    const [isAdded, setAddState] = useState(false);
    const [savedData,satSavedData] = useState({});
    const [loggedIn,setLoggedIn] = useLocalStorage(KUserLoggedIn, 0);
    const [checkoutOn,setCheckoutOn] = useLocalStorage("checkout", 0);






    //=============== All compoments needed
    const initialState = {
        cart: [],
        totalItems: 0,
        totalAmount: 0,
        bounce: false,
    };


    const [state, dispatch] = useReducer(CartReducer, initialState);


    const removeProduct = (id) => {
        dispatch({
            type: "REMOVE_PRODUCT",
            payload: id,
        });

    };

    const addProduct = (selectedProducts) => {
        dispatch({
            type: "ADD_PRODUCT",
            payload: selectedProducts,
        });
    };

    const bouceEnd = () => {
        dispatch({
            type: "BOUNCE_END",
        });
    };

    function handleChange(e){
        setLocationName(e.target.value);
        setLoading(true);
        console.log(`Selected: ${e.target.value}`);
        localStorage.setItem(KLastLocation, e.target.value);
        setTimeout(() => {
            setLoading(false)
        }, 1000);


    }

    //==================================  stocking cart  value in browser ==========


    //Function to persist the cart state into the browser


    function replenishStore(jsonData){
        jsonData?.map((item)=>{
            console.log(`Product: ${item.name}`);
            addProduct(item);
        })
    }



    useEffect(()=>{

        // window.sessionStorage.setItem(key, JSON.stringify(value)); //sessionStorage in case no need to persist data for  too long
    },[]);


    //======================================================================================








    const initQuickPreview = {

        id: 0,
        picture: '#',
        name: 'N/A',
        price_per_kilo: 0,
        warehouse_id: 0,
        warehouse_name: 'N/A',
        product_id: 0,
        isActive: false,
        inStock: false,


    };

    const [quickViewProduct, setQuickViewProduct] = useState(
        initQuickPreview
    );

    // Open Modal
    const openModal = (product) => {
        setQuickViewProduct(product);
        flipModelState(true);
    };

    // Close Modal
    const closeModal = () => {
        flipModelState(false);
    };


    // Search by Keyword
    const handleSearch = (e) => {
        setTerm(e.target.value);
    };

    // Mobile Search Reset
    const resetSearch = () => {
        setTerm("");
    };



    return (
        <>

            <WishListContext.Provider value={
                {
                    openModal,
                    handleChange,
                    cart,
                    totalItems: state.totalItems,
                    totalAmount: state.totalAmount,
                    removeProduct,
                    bounce:state.bounce,
                    bouceEnd,

                }
            }>

               {/* <HeaderAuth title={title} />*/}
                <div className="  mb-6 pb-4 ">
                    <HeaderAccount
                        handleSearch={handleSearch}
                        resetSearch={resetSearch}
                        searchValue={term}
                    />
                </div>

                <div className="flex bg-gray-100 text-gray-800">
                    <nav
                        className="h-screen  w-1/5 md:shadow transform -translate-x-full md:translate-x-0 transition-transform duration-150 ease-in bg-gray-100"
                    >

                        <div className="sidebar-content px-4 py-6 mt-5">
                            <ul className="flex flex-col w-full">

                                <li className="my-px" onClick={() => {
                                    setTimeout(() => {
                                        router.push("/products");
                                    }, 1000);


                                }}>
                                <span
                                    className={toggleState == 8 ? 'bg-teal-500 flex flex-row items-center h-10 px-3 rounded-lg text-white ' : 'flex font-medium text-sm text-black px-4 my-4 uppercase hover:text-lightBlue-600 cursor-pointer'}><HomeIcon width={27} /> <span className="mt-1 ml-2">Shop</span></span>
                                </li>


                                <li className="my-px" onClick={()=>{setToggleState(1);setTitle("Account")}}>
                                <span
                                    className={toggleState ==1 ? 'flex flex-row items-center h-10 px-3 rounded-lg text-white bg-teal-500' : 'flex font-medium text-sm text-black px-4 my-4 uppercase hover:text-lightBlue-600 cursor-pointer'}>Account</span>
                                </li>


                                <li className="my-px"  onClick={()=>{setToggleState(2);setTitle("Order Status")}}>
                                    <span className={toggleState === 2 ?'flex flex-row items-center h-10 px-3 rounded-lg text-white bg-teal-500':'flex font-medium text-sm text-black px-4 my-4 uppercase hover:text-lightBlue-600 cursor-pointer'}>Order status</span>
                                </li>


                                {/*invoice*/}
                                {/*          <li className="my-px" onClick={()=>{setToggleState(3);setTitle("Invoice")}}>
                                <span className={toggleState === 3 ?'flex flex-row items-center h-10 px-3 w-full rounded-lg text-gray-700 bg-gray-100':'flex font-medium text-sm text-white px-4 my-4 uppercase hover:text-lightBlue-600 cursor-pointer'}>Invoice</span>
                            </li>*/}

                                <li className="my-px" onClick={()=>{setToggleState(4);setTitle("Wishlist")}}>
                                    <span className={toggleState === 4 ?'flex flex-row items-center h-10 px-3 rounded-lg text-white bg-teal-500':'flex font-medium text-sm text-black px-4 my-4 uppercase hover:text-lightBlue-600 cursor-pointer'}>Wishlist</span>
                                </li>


                                <li className="my-px" onClick={()=>{setToggleState(5);setTitle("Ticket")}}>
                                <span
                                    className={toggleState === 5 ? 'flex flex-row items-center h-10 px-3 rounded-lg text-white bg-teal-500' : 'flex font-medium text-sm text-black px-4 my-4 uppercase hover:text-lightBlue-600 cursor-pointer'}>Ticket</span>
                                </li>


                                <li className="my-px mt-16"
                                    onClick={()=>{
                                        setCheckoutOn(0);
                                        setTimeout(() => {
                                            router.push("/dashboard/admin/orders")
                                        }, 500);
                                    }}>
                                <span
                                    className="font-medium text-sm text-black px-4  hover:text-lightBlue-600 cursor-pointer">
                                    Admin Arena</span>
                                </li>


                                <li className="my-px mt-8">
                                <span
                                    className="font-medium text-sm text-black px-4  hover:text-lightBlue-600 cursor-pointer"
                                    onClick={()=>{

                                        setLoggedIn(0);
                                        router.push("/products");
                                    }}>

                                    Logout</span>
                                </li>
                            </ul>
                        </div>
                        <div className="bg-orange-300 h-350-px ">  </div>
                    </nav>


                    <main id="main-content" className="w-4/5 items-stretch flex flex-col flex-grow md:ml-0 transition-all duration-150 ease-in">
                        <header className="header bg-white shadow py-4 px-4">
                            <div className="flex items-center items-stretch grid grid-cols-1">
                                {toggleState === 1 ? <UserHome/> : <div></div>}
                                {toggleState === 4 ? <WishListItem/> : <div></div>}
                                {toggleState === 2 ? <OrderHistory/> : <div></div>}
                                {toggleState === 5 ? <OrderTicket/> : <div></div>}

                            </div>
                        </header>
                        <div className="main-content flex flex-col flex-grow p-4">


                            <div
                                className="flex flex-col flex-grow border-4 border-gray-400 border-dashed bg-white rounded mt-4"
                            ></div>
                        </div>
                        <Footer/>

                    </main>
                </div>

                <QuickViewWishList
                    product={quickViewProduct}
                    openModalState={modalActive}
                    closeModal={closeModal}
                />

            </WishListContext.Provider>

        </>
    );
};

export default  UserAccount;
