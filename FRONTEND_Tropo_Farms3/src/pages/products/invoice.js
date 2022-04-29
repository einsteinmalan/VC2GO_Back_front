import Head from 'next/head'
import HeaderSimple from '@/components/Header/HeaderSimple'
import Invoice from '@/components/Products/Invoice/Invoice'
import Footer from '@/components/Footer/Footer'
import React from 'react'


const InvoicePage = () => {




    return (
        <>
            <Head>
                <title>  Invoice</title>
            </Head>

            <HeaderSimple title={"Invoice"}/>

            <Invoice/>


            <Footer/>


        </>
    );
};


export default InvoicePage;
