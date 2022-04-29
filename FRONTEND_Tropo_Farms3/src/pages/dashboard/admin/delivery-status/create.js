import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import {useRouter} from "next/router";
import { usersList } from '@/components/data/data'
import Link from 'next/link'
import React, { useState } from 'react';
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/lib/css/styles.css";
import { linkBaseUrl } from '@/components/constants'
import ReactLoading from 'react-loading';



const CreateDeliveryStatusPage = () => {

    const router = useRouter();

    const [regionName,setRegionName] = useState('');
    const [loading,setLoading] = useState(false);

    const [color, setColor] = useColor("hex", "#121212");


    //setColor
    function onDrag(color, c) {
        c.preventDefault();
        setColor(color);
    }


    // submit entered information
    const submitData = async (ev) => {
        ev.preventDefault();

        setLoading(true);
        const rawResponse = await fetch(`${linkBaseUrl}/api/delivery-status`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    "name": regionName,
                    "color": color.hex.toString()

                }
            )
        });
        const content = await rawResponse.json();
        console.log(content);

        if(content !== null && content !== undefined){
            setRegionName('');
            setLoading(false);
            setTimeout(() => {
                router.push("/dashboard/admin/delivery-status/");
            }, 300);

        }else{
            setLoading(false);
        }






    };

    return (
        <AppLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Add Delivery Status
                </h2>
            }>

            <Head>
                <title>Volta Catch - Delivery Status</title>
            </Head>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg left-260-px">
                        <div className="flex w-full">

                            <div className="w-1/5"> </div>

                            <div className="w-4/5">
                                <main>
                                    <div className="p-6 bg-white border-b border-gray-200">
                                        <div className="grid grid-cols-1 ">
                                            <div className="container mx-auto px-4 sm:px-8 ">
                                                <div className="py-8">
                                                    <div className="flex flex-row mb-1 sm:mb-0 justify-between w-full">
                                                        <div className="w-2/5">
                                                            <h2 className="text-3xl text-black font-bold">
                                                                Create Delivery Status
                                                            </h2>
                                                        </div>


                                                        <div className="w-3/5">

                                                        </div>




                                                    </div>




                                                    <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                                                        <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">

                                                            {/*//Form*/}

                                                            <form onSubmit={submitData}>
                                                                <div className="flex flex-row m-3 p-2">

                                                                    <div className="w-4/5 flex flex-row">
                                                                        <div className="w-1/3 text-lg text-black font-semibold mt-2">
                                                                            Status Name
                                                                        </div>

                                                                        <div className="w-2/3 ">

                                                                            <div className="mt-1">
                                                                                <input
                                                                                    type="text"
                                                                                    name="region_name"
                                                                                    id="region_name"
                                                                                    required={true}
                                                                                    placeholder="Status name"
                                                                                    value={regionName}
                                                                                    className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-0 focus:border-gray-500 sm:text-sm"
                                                                                    onInput={(e) => setRegionName(e.target.value)}
                                                                                />
                                                                            </div>

                                                                        </div>

                                                                    </div>

                                                                    <div className="w-1/5">

                                                                    </div>

                                                                </div>

                                                                <div className="flex flex-row m-3 p-2">

                                                                    <div className="w-4/5 flex flex-row">
                                                                        <div className="w-1/3 text-lg text-black font-semibold mt-2">
                                                                            Pick Color
                                                                        </div>

                                                                        <div className="w-2/3 ">

                                                                            <div className="flex flex-row mb-2">

                                                                                <div className="w-3/5">
                                                                                    <input
                                                                                        type="text"
                                                                                        name="region_name"
                                                                                        id="region_name"
                                                                                        // color={color.hex}
                                                                                        required={true}
                                                                                        disabled={true}
                                                                                        placeholder={color.hex.toString()}
                                                                                        value={color.hex.toString()}
                                                                                        className="block w-full border-gray-300  shadow-sm focus:ring-0 focus:border-gray-500 sm:text-sm"
                                                                                        onInput={(e) => setRegionName(e.target.value)}
                                                                                    />

                                                                                </div>

                                                                                <div className="w-2/5">

                                                                                    <div style={{backgroundColor: color.hex, width:100, height:42}}>

                                                                                    </div>

                                                                                </div>

                                                                            </div>



                                                                            <div>
                                                                                <ColorPicker width={456} height={228} color={color} onChange={setColor} hideHSV dark />

                                                                            </div>

                                                                        </div>

                                                                    </div>

                                                                    <div className="w-1/5">

                                                                    </div>

                                                                </div>

                                                                <div className="flex flex-row mb-5">

                                                                    <div className="w-3/5"></div>

                                                                    <div  className="w-1/5 mr-4 ">
                                                                        {/*// Add user button*/}
                                                                        <div className="  text-left w-auto  ">
                                                                            `  <button type="button"
                                                                                       className="border border-gray-300 bg-gray-200 shadow-sm hover:text-white  hover:-bg-gray-900 justify-center rounded-md  px-12 py-2 text-sm font-medium text-black  hover:shadow-md "
                                                                                       id="options-menu"
                                                                                       onClick={()=>{
                                                                                           router.back();


                                                                                       }}
                                                                        >
                                                                            Cancel

                                                                        </button>
                                                                        </div>
                                                                    </div>

                                                                    <div className="w-1/5  text-left w-auto  ">
                                                                        `  <button type="submit"
                                                                                   className="border border-gray-300 bg-teal-500 shadow-sm hover:-bg-teal-900 hover:text-white justify-center rounded-md  px-12 py-2 text-sm font-medium text-white dark:text-gray-50 hover:bg-gray-50  focus:outline-none"
                                                                                   id="options-menu"
                                                                                   onClick={()=>{


                                                                                   }}
                                                                    >
                                                                        Add

                                                                    </button>
                                                                    </div>




                                                                </div>
                                                            </form>

                                                            {
                                                                loading ?

                                                                    <div
                                                                        className="w-full lg:w-8/12 pt-6 grid place-items-center">
                                                                        <ReactLoading type="spokes" color="#F42605" height={60}
                                                                                      width={60}/>

                                                                    </div>
                                                                    :
                                                                    <div></div>
                                                            }


                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                    </div>
                                </main>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </AppLayout>
    )
}

export default CreateDeliveryStatusPage
