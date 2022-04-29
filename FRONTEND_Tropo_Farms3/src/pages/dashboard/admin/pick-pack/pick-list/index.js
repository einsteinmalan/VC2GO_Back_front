
import  {ordersList} from '@/components/data/data';
import Link from "next/link";
import Head from 'next/head'
import HeaderSimple from '@/components/Header/HeaderSimple'
import Invoice from '@/components/Products/Invoice/Invoice'
import Footer from '@/components/Footer/Footer'
import React, { useEffect, useState } from 'react'
import DeliveryInvoice from '@/components/Products/Invoice/delivery'
import useLocalStorage from '@/components/CustomHooks/useLocalStorage'
import DeliveryInvoiceTest from '@/components/Products/Invoice/delivery_test'
import DeliveryInvoiceAdmin from '@/components/Products/Invoice/delivery_admin'


/*
export  const getStaticPaths = async ()=>{
    //with API call
    /!* const res = await fetch("https://jsonplaceholder.typicode.com/posts");
     console.log('response from server' +res);

     const data =  await res.json();
     console.log(data);
     const paths = data.map(user=>{
         return {
             params: { id: user.id.toString()}
         }
     })

     return {
         paths,
         fallback: false
     }*!/

    //with Local data
    const paths = ordersList.map(order =>({
        params:{id: order.id.toString()},

    }))

    return { paths, fallback:false}
}*/

/*export const getStaticProps = async ({params})=> {
    const orders = ordersList.filter(p => p.id.toString() === params.id)

    return {
        props:{
            order: orders[0]
        }
    }
}*/



/*const DeliveryOrderBy = ()=>{   //const DeliveryOrderBy = ({order})=>{





    return (
        <div >
            <Head>
                <title>  Invoice</title>
            </Head>

            <HeaderSimple title={"Invoice"}/>

            <DeliveryInvoice order={order}/>



            <Footer/>


        </div>
    );

}*/


const PickListGeneration = ()=>{   //const DeliveryOrderBy = ({order})=>{


    const [purchase,setPurchase] = useLocalStorage("purchase", {});

    const [order, setOrder] = useState({});


    useEffect(()=>{

        setOrder(purchase);


    },[])


    return (
        <div >
            <Head>
                <title>  Invoice</title>
            </Head>

            <HeaderSimple title={"Invoice"}/>

            {/*<DeliveryInvoice order={order}/>*/}

            <DeliveryInvoiceAdmin order={purchase} />



            <Footer/>


        </div>
    );

}

export default PickListGeneration;
