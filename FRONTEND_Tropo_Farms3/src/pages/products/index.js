import React, { useState, FunctionComponent, useEffect, useReducer } from 'react'
import { GetStaticProps } from "next";

// import axios from "axios";

import Header from "../../components/Header/Header";
import Products from "../../components/Products/Products";
import Footer from "../../components/Footer/Footer";
import QuickView from "../../components/QuickView/QuickView";
import ReactLoading from 'react-loading';
import { KAllLocation, KCategory, KLastLocation, KWarehouseID } from '@/components/constants'
import CategoryFilter from '@/components/Products/CategoryFilter'
import ProductIMageGrid from '@/components/NewProducts/ProductIMageGrid'
import {StoreContext} from '@/context/storeContext';
import CartReducer from '@/context/CartReducer'
import Checkout from '@/components/checkout/Checkout'
import useLocalStorage from '@/components/CustomHooks/useLocalStorage'
import { allProducts } from '@/components/data/data'

const Home = () => {

    const initCart = {
        cart: [],
        totalItems: 0,
        totalAmount: 0,
        bounce: false,
    };



    const [term, setTerm] = useState("");
    const [data,setData]=useState([]);
    const [loading,setLoading]=useState(true);
    const [modalActive, flipModelState] = useState(false);
    const [locationName,setLocationName]=useState("Accra");
    const[savedCart, setSavedCart] = useState(initCart);
    const [catLoading, setCatLoading] = useState(false);
    const [location,setLocation] = useLocalStorage("location", 'Tema');
    const [category,setCategory] = useLocalStorage(KCategory, 'N/A');



    //custom Hook
    function setCategoryLoading(milliseconds){
        setCatLoading(true);

        setTimeout(() => {
            setCatLoading(false);
        }, milliseconds);
    }



    const initQuickPreview = {
        image: "blank",
        id: 0,
        price: 0,
        name: "blank",
    };


    function saveLocID(name){
        const locSet =   data.filter(loc => loc.location === name);
        console.log(`localSet:${locSet} `)
        return locSet[0].id.toString();
    }



    const [quickViewProduct, setQuickViewProduct] = useState(
        initQuickPreview
    );

    // Search by Keyword
    const handleSearch = (e) => {
        setTerm(e.target.value);
    };

    // Mobile Search Reset
    const resetSearch = () => {
        setTerm("");
    };

    // Open Modal
    const openModal = (product) => {
        setQuickViewProduct(product);
        flipModelState(true);
    };

    // Close Modal
    const closeModal = () => {
        flipModelState(false);
    };


    //============================================================

    const getData=()=>{
        /*fetch('products.json'
            ,{
                headers : {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )
            .then(function(response){
              //  console.log(response)
                return response.json();
            })
            .then(function(myJson) {
               // console.log(myJson);
                setData(myJson)
                setLoading(false)

            });*/

        setData(allProducts);
        setLoading(false)
    }



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

      deleteProduct(id);
    };

    const addProduct = (selectedProducts) => {
        dispatch({
            type: "ADD_PRODUCT",
            payload: selectedProducts,
        });
        ToDisk(selectedProducts);

    };

    const bouceEnd = () => {
        dispatch({
            type: "BOUNCE_END",
        });
    };

    function ToDisk(selectedProducts){
        const newCart = savedCart.cart === undefined ? [] : [...savedCart.cart] ;
        const productID = selectedProducts.id;
        const productQty = selectedProducts.quantity;
        const isExist = newCart.findIndex((element) => element.id === productID);
        if (isExist !== -1) {
            newCart[isExist].quantity += productQty;
        } else {
            newCart.push(selectedProducts);
        }
        const newTotalItems = newCart.length;
        const newTotalAmount = newCart.reduce((acc, currentProduct) => {
            return acc + currentProduct.price * currentProduct.quantity;
        }, 0);

        const added = {

            cart: newCart,
            totalItems: newTotalItems,
            totalAmount: newTotalAmount,
            bounce: false,
        };
        saveCart(added);

    }

    function handleChange(e){
        setLocationName(e.target.value);
        setLoading(true);
        setLocation( e.target.value);
       // localStorage.removeItem(KCategory);
        setCategory("1");
        setTimeout(() => {
            setLoading(false)
        }, 1000);


    }

    //==================================  stocking cart  value in browser ==========

     function getCart() {


        const saved =  localStorage.getItem('cart');


        if (saved !== null) {
            setSavedCart(JSON.parse(saved))

            return JSON.parse(saved);

        }
        return {};
    }


    function replenishStore(jsonData){

        jsonData.map((item)=>{
        console.log(`Product: ${item.name}`);
            addProduct(item);
        })
    }





    //======================================================================================

    function calculateSubtotal(data = []){
        let amount= 0.00;
        if(!data.isEmpty){
            for(let i = 0; i < data.length; i++){
                amount = amount + data[i].price * data[i].quantity;
            }
            return amount;
        }
        return amount;
    }


    function deleteProduct(id){
        const newCart = savedCart.cart.filter((x) => x.id !== id);
        setSavedCart(newCart);

        const datas = {
            cart: newCart.length > 0 ? newCart : [] ,
            totalAmount: newCart.length > 0 ? calculateSubtotal(newCart) : 0,
            totalItems: newCart.length > 0 ? savedCart.totalItems-1 : 0,
        }
        saveCart(datas);
        //calculateSubtotal(newCart);

    }

    function saveCart(data){


        setSavedCart(data);


       // window.sessionStorage.setItem("cart", JSON.stringify(data));
        localStorage.setItem('cart', JSON.stringify(data));

    }


    useEffect(()=>{

       // setSavedCart(useLocalStorage())
        setLocationName(location);
        getCart();

        replenishStore(savedCart.cart);



        setTimeout(() => {
            getData();
        }, 3000);

    },[]);


    return (
        /*<div className="container">*/
        <div >
            <StoreContext.Provider value={
                {
                    locationName,
                    handleChange: handleChange,
                    cart: savedCart.cart,
                    totalItems: state.totalItems,
                    totalAmount: state.totalAmount,
                    bounce: state.bounce,
                    removeProduct,
                    addProduct,
                    bouceEnd,
                    setCategoryLoading,
                    catLoading,

                }
            }  >
                {/*Header*/}
                <div className="  mb-6 pb-4 ">
                    <Header
                        handleSearch={handleSearch}
                        resetSearch={resetSearch}
                        searchValue={term}
                    />
                </div>
                {/* <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
                <CategoryFilter/>
            </nav>*/}

                {loading ?
                    <div className="w-full mt-16 pt-12 grid place-items-center">
                        <ReactLoading type="spokes" color="#F42605" height={120} width={120}/>
                        <div className="text-center text-lg text-gray-500 pt-6"> Loading ...</div>
                    </div>
                    :


                    <div>

                        {/*//Banner top*/}
                        <div className="min-h-screen-15 bg-orange-300 mx-2 my-2">

                        </div>

                        <Products
                            productsList={data}
                            searchTerm={term}
                            openModal={openModal}
                            warehouse={localStorage.getItem(KLastLocation)}
                        />

                    </div>


                }
                <div className="main-content flex flex-col flex-grow p-4">


                    <div
                        className="flex flex-col flex-grow border-4 border-gray-400 border-dashed bg-white rounded mt-4"
                    ></div>

                </div>

                <QuickView
                    product={quickViewProduct}
                    openModalState={modalActive}
                    closeModal={closeModal}
                />
                <div className="hidden"> <Checkout/></div>

            </StoreContext.Provider>



            <Footer/>


        </div>
    );
};
export default Home;

/*export const getStaticProps = async () => {
    const url =
        "https://script.google.com/macros/s/AKfycbwrtpxP95JWg2GghdxdxXDltiL101EWGhOGaJZZ0rRmedAow0t4hrQ4/exec";
    // const res = await axios.get(url);
    const res =    fetch('products.json'
        ,{
            headers : {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }
    );

    //const data =  res.json();
    // const data = await res.data;
    return { props: { products: (await res).json() } };


};*/
