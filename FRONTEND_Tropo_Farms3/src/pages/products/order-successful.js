

import Head from 'next/head'
import HeaderSimple from '@/components/Header/HeaderSimple'
import Try from '@/components/TRY/Try'
import Footer from '@/components/Footer/Footer'
import { useEffect, useState } from 'react'
import PaymentSuccess from '@/components/checkout/PaymentSuccess'


const OrderSuccessful = () => {






    return (



        <>
            <Head>
                <title>  TRY FEATURE</title>
            </Head>

            {/* <HeaderSimple title={"Invoice"}/>*/}

            {/*<PUT Code here>*/}

           <div className="w-full grid grid-cols-3 bg-gray-100">
              <div className='w-1/5'> </div>
               <div className='w-full'> <PaymentSuccess/></div>
               <div className='w-1/5'> </div>

           </div>







        </>
    );
};
export default OrderSuccessful;
