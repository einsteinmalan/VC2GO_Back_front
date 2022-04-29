import Head from 'next/head'
import HeaderSimple from '@/components/Header/HeaderSimple'
import React from 'react'
import Footer from '@/components/Footer/Footer'

const GuestLayout = ({ children }) => {
    return (
        <div>
            <Head>
                <title>Volta Catch</title>
            </Head>
            <HeaderSimple title="Login"/>

            <div className="font-sans text-gray-900 antialiased ">
                {children}
            </div>

        </div>
    )
}

export default GuestLayout
