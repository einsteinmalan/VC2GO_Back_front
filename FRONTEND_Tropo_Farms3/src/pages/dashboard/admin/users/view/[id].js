

import { ordersList, ticketList, usersList } from '@/components/data/data'
import Link from "next/link";
import Head from 'next/head'
import HeaderSimple from '@/components/Header/HeaderSimple'
import Invoice from '@/components/Products/Invoice/Invoice'
import Footer from '@/components/Footer/Footer'
import React from 'react'
import Ticket from '@/components/Products/Ticket/Ticket'
import UserDetail from '@/components/Admin/Users/UserDetail'



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
    const paths = usersList.map(order =>({
        params:{id: order.id.toString()},

    }))

    return { paths, fallback:false}
}

export const getStaticProps = async ({params})=> {
    const orders = usersList.filter(p => p.id.toString() === params.id)
    console.log(orders)

    return {
        props:{
            user: orders[0]
        }
    }
}

const UserViewDetail = ({user})=>{

    return (
        <div >
            <Head>
                <title>  User Details</title>
            </Head>



            <UserDetail user={user}/>


            <Footer/>


        </div>
    );

}

export default UserViewDetail;
