
 //BACKUP
 /*

import  {ordersList} from '@/components/data/data';
import Link from "next/link";
import Head from 'next/head'
import HeaderSimple from '@/components/Header/HeaderSimple'
import Invoice from '@/components/Products/Invoice/Invoice'
import Footer from '@/components/Footer/Footer'
import React from 'react'
import useLocalStorage from '@/components/CustomHooks/useLocalStorage'



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
}

export const getStaticProps = async ({params})=> {
    const orders = ordersList.filter(p => p.id.toString() === params.id)

    return {
        props:{
            order: orders[0]
        }
    }
}

const InvoiceDetails = ({order})=>{









    return (
        <div >
            <Head>
                <title>  Invoice</title>
            </Head>

            <HeaderSimple title={"Invoice"}/>

            <Invoice order={order}/>


            <Footer/>


        </div>
    );

}

export default InvoiceDetails;
*/


 import  {ordersList} from '@/components/data/data';
 import Link from "next/link";
 import Head from 'next/head'
 import HeaderSimple from '@/components/Header/HeaderSimple'
 import Invoice from '@/components/Products/Invoice/Invoice'
 import Footer from '@/components/Footer/Footer'
 import React from 'react'
 import useLocalStorage from '@/components/CustomHooks/useLocalStorage'
 import { KUserLoggedIn } from '@/components/constants'





 const InvoiceDetails = ()=>{

     const [purchase,setPurchase] = useLocalStorage("purchase", {});


     return (
         <div >
             <Head>
                 <title>  Invoice</title>
             </Head>

             <HeaderSimple title={"Invoice"}/>

             <Invoice order={purchase?.data}/>


             <Footer/>


         </div>
     );

 }

 export default InvoiceDetails;

