

import { PhoneIcon, UserIcon } from '@heroicons/react/outline'

import { useRouter } from 'next/router'
import React, { Fragment, useContext, useEffect, useState } from 'react'
import HeaderSimple from '@/components/Header/HeaderSimple'
import Footer from '@/components/Footer/Footer'
import styles from "../Header/Header.module.scss";
import { KLastLocation, KUserLoggedIn } from '@/components/constants'
import  {StoreContext} from '@/context/storeContext';
import useLocalStorage from '@/components/CustomHooks/useLocalStorage'
import PureModal from 'react-pure-modal';
import 'react-pure-modal/dist/react-pure-modal.min.css';
import ReactLoading from 'react-loading';
import { Dialog, Transition } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/outline'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { toast, Toaster } from 'react-hot-toast'








const products = [
    {
        id: 1,
        name: "Carp",
        href: '#',
        price: '$32.00',
        color: 'Gray',
        size: 'S',
        imageSrc: '/fishes/Carp.jpg',
        imageAlt: "Front of women's basic tee in heather gray.",
    },
    // More products...
]

export default function Checkout() {

    const [data,setData] = useLocalStorage("cart", {});
    const [purchase,setPurchase] = useLocalStorage("purchase", {});
    const [checkoutOn,setCheckoutOn] = useLocalStorage("checkout", 0);
    const [location,setLocation] = useLocalStorage("location", 'Tema');
    const [startDate, setStartDate] = useState(new Date());
    const [userInfo,setUserInfo] = useLocalStorage("user", {
        name:'',
        phone:'',
        coupon:''
    });
    const [loggedIn,setLoggedIn] = useLocalStorage(KUserLoggedIn, 0);
    const [modal, setModal] = useState(false);
    const [momoNumber,setMomoNumber] = useState('');
    const [loading,setLoading]=useState(false);
    const [open, setOpen] = useState(false);
    const [pickup, setPickup] = useState("");
    const [network, setNetwork] = useState("MTN");
    const [logo, setLogo] = useState("/network/mtn.png");


    const [name, setName] = useLocalStorage("name", '');
    const [phone, setPhone] = useLocalStorage("phone", '');
    const [coupon, setCoupon] = useLocalStorage("coupon", '');


    const tax = 0.10;

    const weight_limit = 20;
    const fee_min = 10;
    const fee_max = 25;
    const [fee, setFee] = useState(0.00);
    const [shipping, setShipping] = useState(0.00);
    const [total,setTotal] = useState(0.00);
    const [subTotal,setSubTotal] = useState(0.00);




    //==================================  stocking cart  value in browser ==================================================


   const pickupList = [
       {
           id:1,
           name: 'In-store'
       },
       {
           id:2,
           name: 'Delivery'
       }
   ];

    const networkList = [
        {

            id:1,
            name: 'MTN',
            image:"/network/mtn.png"
        },
        {
            id:2,
            name: 'AirtelTigo',
            image:"/network/airtel.jpg"
        },
        {
            id:2,
            name: 'Vodafone',
            image:"/network/voda.jpg"
        }
    ];

   function selectPickup (e){


       setPickup(e.target.value);

   }

    function selectNetwork (e){


        setNetwork(e.target.value);
        if(e.target.value === "MTN"){
            setLogo("/network/mtn.png");
        }else if(e.target.value === "AirtelTigo"){
            setLogo("/network/airtel.jpg");
        }else {
            setLogo("/network/voda.jpg");
        }

    }




    function calculateSubtotal(data = []){
        let amount= 0.00;
        if(!data.isEmpty){
            for(let i = 0; i < data.length; i++){
                amount = amount + data[i].price * data[i].quantity;
            }
            setTotal(amount);
        }
    }

    function initFunc(){
        /*if(loggedIn === 1){
            setPhone(userInfo.phone);
            setName(userInfo.name);
            setCoupon(userInfo.coupon);
        }*/

       // setLocation(localStorage.getItem(KLastLocation ?? "Accra"));
        //setData(useLocalStorage());
        setTotal(data.totalAmount);
        calculateSubtotal(data.cart);
    }



    function  showToaster(message = "Please select a pick up method"){
        //  toast.error('You already have a product from a different depot in your shopping Cart!!!');
        //'You already have a product from a different depot in your shopping Cart!!!'

        toast.error( message, {
            style: {
                border: '1px solid #713200',
                padding: '16px',
                color: '#fff',
                backgroundColor:'#F42605'
            },
            iconTheme: {
                primary: '#fff',
                secondary: '#F7D23B',
            },
        })
    }


    useEffect(()=>{

        initFunc();

    },[loggedIn]);

    function deleteProduct(id){
        const newCart = data.cart.filter((x) => x.id !== id);
        setData(newCart);

        const datas = {
            cart:newCart,
            totalAmount: calculateSubtotal(newCart),
            totalItems: totalItems-1
        }
        saveCart(datas);
        calculateSubtotal(newCart);

    }

    function saveCart(data){

      //  window.localStorage.setItem("cart", JSON.stringify(data));
        setData(data);
        if(data.cart.length ===0 ){
            setTimeout(() => {
                router.push("/products")
            }, 3000);
        }
    }

    function confirmOrder (e){
        e.preventDefault();

    }






    //================================================================================

   // const [location, setLocation] = useState("N/A");

    const router = useRouter();

    const {
        locationName,
        handleChange,
        cart,
        totalItems,
        totalAmount,
        removeProduct,
        addProduct,
    } = useContext(StoreContext);

   console.log(`CART use COntext: ${cart}`);


    const handleName = (e) => {
        e.preventDefault();
    };

    const handlePhoneNumber = (e) => {
        e.preventDefault();
    };



    function getImage(fishName){
        return `/fishes/${fishName}.jpg`;
    }

    //========  Submit data ========================



    // submit entered information
    const submitData = async (ev) => {
        ev.preventDefault();


        if(loggedIn === 0){

            setCheckoutOn(1);

            router.push('/login')
        }

        setModal(true);

      /*  setTimeout(() => {
            /!*   router.push("/submitData/");*!/
            router.push('/products/invoice/')
        }, 1000)*/

    };

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


    const confirmData = async (ev) => {
       ev.preventDefault();

       if(pickup.length === 0){ //momoNumber
           showToaster();
           return null;
       }

        if(momoNumber.length === 0){ //momoNumber
            showToaster("Please enter your Mobile money number");
            return null;
        }

       if(loggedIn === 0){

          /* setUserInfo({
               name:name,
               phone:phone,
               coupon:coupon
           });*/

           setCheckoutOn(1);

           router.push('/login')
       }

        setLoading(true);

       function savePurchase(){
           const sale = {
               data: data,
               delivery:{
                   id:0,
                   trackorder_id:0,
                   deliverystatus_id:1,//1: pending  2: in-progress   3: completed   4: cancelled
                   longitude: 1.0812,
                   latitude: 0.35014,
                   destination:"N/A",
                   warehouseid: 1,
                   warehouse_name: location,
                   customer_name:name,
                   Customer_phone:phone,
                   agent_name: "N/A",
                   agent_phone:"N/A",
                   warehouse_long:0.821,
                   warehouse_lat: -0.12365,
                   delivery_date: startDate,
                   date: Date(),
                   network: network,
                   pickup:pickup,
                   order_id:makeid(7)
               }
           };

           setPurchase(sale);
        }

        setTimeout(() => {
            setLoading(false);
            setModal(false);
           // setPurchase(data);
            savePurchase();
            setCheckoutOn(0);
            setData({});



           // setOpen(true);

          router.push('/products/order-successful')

        }, 5000);








    };



















    return (
        <div className="bg-gray-200 ">

            <HeaderSimple/>

            <main className="md:w-8/12 max-w-7xl mx-auto px-4 pt-16 pb-16 sm:px-6 sm:pt-8 sm:pb-24 lg:px-8 xl:px-2 xl:pt-14 bg-white">
                <h1 className="sr-only">Checkout</h1>



                <div className="max-w-lg mx-auto grid grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
                    <div className="max-w-lg mx-auto w-full">
                        <h2 className="sr-only">Order summary</h2>

                        <Toaster
                            position="top-center"
                            reverseOrder={false}
                        />

                        <div className="flow-root">
                            <ul role="list" className="-my-6 divide-y divide-gray-200">
                                {data?.cart?.map((product) => (
                                    <li key={product.id} className="py-6 flex space-x-6">
                                        <img
                                            src={getImage(product.name)}
                                            alt={product.name}
                                            className=" flex-none w-24 h-24 object-center object-cover bg-gray-100 rounded-md"
                                        />
                                        <div className="flex-auto pl-4">
                                            <div className="space-y-1 sm:flex sm:items-start sm:justify-between sm:space-x-6">
                                                <div className="flex-auto text-sm font-medium space-y-1">
                                                    <h3 className="text-gray-900 text-lg">
                                                        <a href={product.href}>{product.name}</a>
                                                    </h3>
                                                    <p className="text-gray-900"><span className="text-xs text-gray-500">GHS</span> {product.price}<span className="text-xs text-lightBlue-600"> / {product.unit}</span></p>
                                                    <p className="hidden text-gray-900 sm:block"><span className="text-sm text-gray-500 text">Qty:</span> x{product.quantity} | Total = <span className="text-xs text-gray-500">GHS</span><span className="text-lg font-bold"> {(product.quantity * product.price).toFixed(2)}</span> </p>

                                                </div>
                                                <div className="flex-none flex space-x-4 pt-2">
                                                   {/* <button type="button" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                                                        Edit
                                                    </button>*/}
                                                    <div className="flex border  p-1 ">
                                                        <button type="button" className="text-sm font-medium text-red-500 hover:text-lightBlue-600"
                                                        onClick={()=>{deleteProduct(product.id)}}
                                                        >
                                                            Remove
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <dl className="text-sm font-medium text-gray-500 mt-10 space-y-6">
                            <div className="flex justify-between">
                                <dt>Subtotal</dt>
                                <dd className="text-gray-900">Ghs {total}</dd>
                            </div>
                            <div className="flex justify-between">
                                <dt>Taxes</dt>
                                <dd className="text-gray-900">Ghs {fee}</dd>
                            </div>
                            <div className="flex justify-between">
                                <dt>Shipping</dt>
                                <dd className="text-gray-900">Ghs {shipping}</dd>
                            </div>
                            <div className="flex justify-between border-t border-gray-200 text-gray-900 pt-6">
                                <dt className="text-base">Total</dt>
                                <dd className="text-base text-lg text-lightBlue-500">Ghs {total + fee + shipping}</dd>
                            </div>
                        </dl>
                    </div>

                    <div className="max-w-lg mx-auto w-full">
                        <button
                            type="button"
                            className="w-full flex items-center justify-center bg-black border border-transparent text-white rounded-md py-2 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                        >

                        </button>

                        <div className="relative mt-8">
                            <div className="absolute inset-0 flex items-center" aria-hidden="true">
                                <div className="w-full border-t border-gray-200" />
                            </div>
                            <div className="relative flex justify-center">
                                <span className="px-4 pt-4 bg-white text-sm font-medium text-gray-500">{" "}</span>
                            </div>
                        </div>






                        <form className="mt-6" onSubmit={submitData}>
                            <h2 className="text-lg font-medium text-gray-900">Contact information</h2>

                            <div className="mt-6">

                                {/*//==> Modal*/}

                                <form onSubmit={confirmData}>

                                    <Transition.Root show={open} as={Fragment}>
                                        <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" onClose={setOpen}>
                                            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                                                <Transition.Child
                                                    as={Fragment}
                                                    enter="ease-out duration-300"
                                                    enterFrom="opacity-0"
                                                    enterTo="opacity-100"
                                                    leave="ease-in duration-200"
                                                    leaveFrom="opacity-100"
                                                    leaveTo="opacity-0"
                                                >
                                                    <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                                                </Transition.Child>

                                                {/* This element is to trick the browser into centering the modal contents. */}
                                                <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
            &#8203;
          </span>
                                                <Transition.Child
                                                    as={Fragment}
                                                    enter="ease-out duration-300"
                                                    enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                                    enterTo="opacity-100 translate-y-0 sm:scale-100"
                                                    leave="ease-in duration-200"
                                                    leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                                    leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                                >
                                                    <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
                                                        <div>
                                                            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                                                                <CheckIcon className="h-6 w-6 text-green-600" aria-hidden="true" />
                                                            </div>
                                                            <div className="mt-3 text-center sm:mt-5">
                                                                <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-teal-500 ">
                                                                    Payment successful
                                                                </Dialog.Title>
                                                                <div className="mt-2">
                                                                    <p className="text-sm text-gray-500">
                                                                        Your Order has been processed and waiting for delivery!
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="mt-5 sm:mt-6">
                                                            <button
                                                                type="button"
                                                                className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-teal-500 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
                                                                onClick={() => setOpen(false)}
                                                            >
                                                                Continue shopping
                                                            </button>
                                                        </div>
                                                    </div>
                                                </Transition.Child>
                                            </div>
                                        </Dialog>
                                    </Transition.Root>

                                <PureModal
                                    header="Confirm Oder"
                                    footer={
                                        <div>
                                            <button className="mr-4  text-red-500" onClick={()=>(setModal(false))} >Cancel</button>
                                            <button className="p-2 mr-4 px-6 rounded-md bg-teal-500 text-white" onClick={confirmData}>Confirm</button>

                                        </div>
                                    }
                                    isOpen={modal}
                                    closeButton="close"
                                    closeButtonPosition="bottom"
                                    onClose={() => {
                                        setModal(false);
                                        return true;
                                    }}
                                >
                                    <div className="mt-2">
                                        {/*//88*/}
                                        <p className="text-left text-sm font-medium text-gray-500"> Network:

                                            <span className="flex-row">
                                          <select
                                              className="mx-2 w-100-px text-gray-700 text-sm py-1 px-2 border border-gray-300 bg-white rounded-md shadow-sm focus:none "
                                              value={network} onChange={selectNetwork}
                                              name="account_type">
                                                                {networkList.map((option) => (
                                                                    <option value={option.name} key={option.id}>{option.name}</option>
                                                                ))}
                                            </select>
                                </span>

                                            <span className="text-lg font-medium text-gray-500">

                                                <img src={logo} width={35}  height={35}  className="right-0"/>

                                          </span>

                                        </p>







                                        <label htmlFor="phone" className="block text-sm font-medium text-lightBlue-600 text-center mb-3 ">
                                            Enter your Momo number
                                        </label>
                                        <p className="text-sm text-center">You will receive a MoMo prompt on</p>
                                        <p className="text-sm text-center mb-3 "> your phone. Validate it</p>


                                        { loading ?
                                            <div className="w-full pt-6 grid place-items-center">
                                                <ReactLoading type="spokes" color="#F42605" height={30} width={30}/>

                                            </div>:
                                            <div className="mt-1">
                                                <input
                                                    type="text"
                                                    name="phone"
                                                    id="phone"
                                                    required={true}
                                                    placeholder="0 x x x x x x x x x"
                                                    minLength={10}
                                                    autoComplete="tel"
                                                    maxLength={10}
                                                    className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                    value={momoNumber}
                                                    onChange={(e) => setMomoNumber(e.target.value)}
                                                />
                                            </div>}



                                    </div>
                                </PureModal>
                              </form>





                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                                    Full Name (*)
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="text"
                                        name="phone"
                                        id="phone"
                                        required={true}
                                        placeholder="Please Enter the receiver full name"
                                        autoComplete="tel"
                                        value={name}
                                        className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="mt-6">
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                                   Phone Number (*)
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="text"
                                        name="phone"
                                        id="phone"
                                        required={true}
                                        placeholder="Please Enter the receiver phone number"
                                        autoComplete="tel"
                                        value={phone}
                                        className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        onChange={(e) => setPhone(e.target.value)}
                                    />
                                </div>
                            </div>


                            <div className="mt-6">
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                                    Coupon code
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="text"
                                        name="phone"
                                        id="phone"
                                        placeholder="xxxx-xxx-xxxx"
                                        autoComplete="tel"
                                        value={coupon}
                                        className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        onChange={(e) => setCoupon(e.target.value)}
                                    />
                                </div>
                            </div>



                            <div className="mt-4 mb-6 ">
                                <button
                                    type="button"
                                    disabled
                                    className="w-full py-6 text-left text-sm font-medium text-gray-500 cursor-auto"
                                >
                                    Choose Delivery Date : <span className="text-left text-md font-medium uppercase text-lightBlue-600">
                                    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                                </span>
                                </button>


                            </div>



                            {/*//88*/}
                            <p className="text-left text-sm font-medium text-gray-500"> Choose Pick-up:

                              <span className="flex-row">
                                          <select
                                              className="mx-2 w-100-px text-gray-700 text-lg py-1 px-2 border border-gray-300 bg-white rounded-md shadow-sm focus:none "
                                              value={pickup} onChange={selectPickup}
                                              name="account_type">
                                                                {pickupList.map((option) => (
                                                                    <option value={option.name} key={option.id}>{option.name}</option>
                                                                ))}
                                            </select>
                                </span>

                                <span className="text-lg font-medium text-gray-500">

                                  {/*  {pickup ==="Delivery" ? data.cart.fee_min : ""}*/}

                                </span>

                            </p>










                            <div className="mt-10 mb-6 border-t border-b border-gray-200 divide-y divide-gray-200">
                                <button
                                    type="button"
                                    disabled
                                    className="w-full py-6 text-left text-sm font-medium text-gray-500 cursor-auto"
                                >
                                    Delivery Location : <span className="text-left text-md font-medium uppercase text-lightBlue-600">{location?.toUpperCase()}</span>
                                </button>
                                <button
                                    type="button"
                                    disabled
                                    className="w-full py-6 text-left text-sm font-medium text-gray-500 cursor-auto"
                                >
                                    Payment Method : <span className="text-left md:text-md sm:text-sm font-medium uppercase text-lightBlue-600">Mobile Money</span>
                                </button>


                                {/*Billing Address*/}
                                {/* <button
                                type="button"
                                disabled
                                className="w-full py-6 text-left text-lg font-medium text-gray-500 cursor-auto"
                            >
                                Billing address
                            </button>*/}

                            </div>

                            <div className={styles.center}>
                                {data.cart?.length === 0 ? <div></div> :<button
                                    type="submit"
                                    disabled={false}
                                    className="p-4 w-6/12 grid  bg-teal-500 border border-transparent rounded-md shadow-sm   text-sm font-medium text-white hover:text-blueGray-300   disabled:bg-gray-100 disabled:text-gray-500 disabled:cursor-not-allowed cursor-pointer"

                                >
                                    Confirm Order
                                </button> }
                            </div>


                        </form>


                    </div>
                </div>
            </main>

            <Footer/>
        </div>
    )
}
