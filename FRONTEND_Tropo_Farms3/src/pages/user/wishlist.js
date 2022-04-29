
import  Head from  'next/head';
import { useRouter } from 'next/router'
import React,{useState,useEffect} from 'react';
import ReactLoading from 'react-loading';
import { KAllLocation, KLastLocation, KWarehouseID } from '@/components/constants'
import  {StoreContext} from '@/context/storeContext';
import Checkout from '@/components/checkout/Checkout'
import Home from '@/pages/products'
import Ticket from '@/components/Products/Ticket/Ticket'
import WishListItem from '@/components/Products/Wishlist/WishlistItem'
import HeaderSimple from '@/components/Header/HeaderSimple'
import Footer from '@/components/Footer/Footer'




const WishlistPage = () => {
    const [data,setData]=useState([]);
    const [isReady,setIsReady]=useState(false);
    const [loading,setLoading]=useState(true);
    const [warehouseID,setWarehouseID]=useState(-1);
    const [locationName,setLocationName]=useState("Pick a location");
    const [allLocation,setAllLocation]=useState([]);

    const router = useRouter();



    function handleChange(e){


    }

    const getData=()=>{
        fetch('location.json'
            ,{
                headers : {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )
            .then(function(response){
                console.log(response)
                return response.json();
            })
            .then(function(myJson) {
                console.log(myJson);
                setData(myJson)
                setAllLocation(myJson);
                setLoading(false);
                // localStorage.setItem(KAllLocation,myJson);
            });
    }

    useEffect(()=>{
        /*    setTimeout(() => {
                getData();
            }, 3000);*/

    },[]);


    return (
        <>
            <Head>
                Ticket
            </Head>
            <HeaderSimple title="Wishlist"/>

            <div className="relative ">     <WishListItem/> </div>




            <Footer/>


        </>
    );
};

export default WishlistPage;
