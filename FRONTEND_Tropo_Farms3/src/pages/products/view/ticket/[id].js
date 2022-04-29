
import { ordersList, ticketList } from '@/components/data/data'
import Link from "next/link";
import Head from 'next/head'
import HeaderSimple from '@/components/Header/HeaderSimple'
import Invoice from '@/components/Products/Invoice/Invoice'
import Footer from '@/components/Footer/Footer'
import React from 'react'
import Ticket from '@/components/Products/Ticket/Ticket'



export  const getStaticPaths = async ()=>{
    //with API call
    /* const res = await fetch("https://jsonplaceholder.typicode.com/posts");
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
     }*/

    //with Local data
    const paths = ticketList.map(order =>({
        params:{id: order.id.toString()},

    }))

    return { paths, fallback:false}
}

export const getStaticProps = async ({params})=> {
    const orders = ticketList.filter(p => p.id.toString() === params.id)
    console.log(orders)

    return {
        props:{
            ticket: orders[0]
        }
    }
}

const TicketDetails = ({ticket})=>{

    return (
        <div >
            <Head>
                <title>  Ticket</title>
            </Head>

            <HeaderSimple title={"Invoice"}/>

            <Ticket ticket={ticket}/>


            <Footer/>


        </div>
    );

}

export default TicketDetails;
