
import  Head from  'next/head';
import { useRouter } from 'next/router'
import React,{useState,useEffect} from 'react';
import ReactLoading from 'react-loading';
import { KAllLocation, KLastLocation, KWarehouseID } from '@/components/constants'
import  {StoreContext} from '@/context/storeContext';
import Checkout from '@/components/checkout/Checkout'
import Home from '@/pages/products'
import UserAccount from '@/components/UserAccount/UserAccount'
import HeaderSimple from '@/components/Header/HeaderSimple'
import Footer from '@/components/Footer/Footer'




 const UseraccountPage = () => {
    const [data,setData]=useState([]);


    const router = useRouter();

    function handleChange(e){


    }



    useEffect(()=>{


    },[]);


    return (
        <>
            <Head>
                User Account
            </Head>
          {/*  <HeaderSimple title="My Account"/>*/}

            <UserAccount/>

           {/* <Footer/>*/}


        </>
    );
}

export default UseraccountPage;
