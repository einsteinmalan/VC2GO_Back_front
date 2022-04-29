import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import {useRouter} from "next/router";
import { linkBaseUrl } from '@/components/constants'
import React, { useEffect, useState } from 'react'

import moment from "moment/moment";

export  const getStaticProps = async ()=> {
    const res = await   fetch(`${linkBaseUrl}/api/caterory`);
    console.log(`CATEGORY: ${res}`);
    //const  data = await  res.json();
    const  data = await  res.json();

    return {
        props: { location: data}
    };
}


const InventoryCategory = ({location}) => {

    const [data, setData] = useState([]);
    const [term, setTerm] = useState('');

    const router = useRouter();

    const searchingFor = (searchText) => {
        return (x) => {
            return (
                x.name.toLowerCase().includes(searchText.toLowerCase()) || !searchText
            );
        };
    };

    function search (e){
        e.preventDefault();
        let newData =    data.filter( function (item) {
            return item.name.toLowerCase() === term.toLowerCase();
        });

        console.log(`${newData}`)

        if(newData.length > 0){
            setData(newData);
        }else {
            setData(location);
        }


    }

    function splitMe(value){
        var str_1 = value.split(".");
        var str_2 = str_1[0];
        var str_3 = str_2.split("T");
        var str_date = str_3[0];
        var str_time = str_3[1];
        var fulldate = `${str_date} ${str_time}`;
        // console.log(`TO_SPLIT: ${fulldate}`);

        // moment("2015-12-18 07:10:54", "YYYY-MM-DD HH:mm:ss").fromNow();
        return   moment(fulldate, "YYYY-MM-DD HH:mm:ss").fromNow();

    }


    useEffect(()=>{
        setData(location)
    }, [])

    return (
        <AppLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    All Warehouse Region
                </h2>
            }>

            <Head>
                <title>Volta Catch - Warehouse Region</title>
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

                                                        <div className="flex flex-row relative w-3/5 ">

                                                            <div className=" mr-4 ">

                                                                {/*
                                                                <select
                                                                    className="block w-full text-gray-700  border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                                                                    name="stock_status">
                                                                    <option value="all">
                                                                        Show all
                                                                    </option>
                                                                    <option value="in_stock">
                                                                        In-Stock
                                                                    </option>
                                                                    <option value="out_of_stock">
                                                                        Out-of-Stock
                                                                    </option>


                                                                </select>*/}
                                                            </div>

                                                            <div className="  ">


                                                                <div className="text-end ">
                                                                    <form onSubmit={search}
                                                                          className="flex flex-col md:flex-row w-3/4 md:w-full max-w-sm md:space-x-3 space-y-3 md:space-y-0 justify-center">
                                                                        <div className=" relative ">
                                                                            <input type="text" id="&quot;form-subscribe-Filter"
                                                                                   value={term}
                                                                                   onInput={e => setTerm(e.target.value)}
                                                                                   onChange={search}
                                                                                   className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                                                                   placeholder="Warehouse region"/>
                                                                        </div>
                                                                        <button
                                                                            className="px-6 ml-3 border border-gray-300 bg-gray-100 shadow-sm hover:-bg-gray-900 hover:text-white justify-center rounded-md py-2 text-sm font-medium text-gray-900 dark:text-gray-50 hover:bg-gray-50  focus:outline-none "
                                                                            type="submit">
                                                                            Filter
                                                                        </button>
                                                                    </form>
                                                                </div>
                                                            </div>

                                                        </div>




                                                        <div className="relative inline-block text-left w-auto  mr-4">
                                                            <button type="button"
                                                                    className="border border-gray-300 bg-lightBlue-500  shadow-sm flex items-center hover:-bg-blue-900 justify-center w-full rounded-md  px-4 py-2 text-sm font-medium text-white dark:text-gray-50 hover:bg-gray-50  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-500"
                                                                    id="options-menu"
                                                                    onClick={()=>{

                                                                        setTimeout(() => {
                                                                            router.push("/dashboard/admin/warehouse-region/create");
                                                                        }, 1000);
                                                                    }}
                                                            >
                                                                Add region

                                                            </button>
                                                        </div>
                                                    </div>





                                                    <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                                                        <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                                                            <table className="table-fixed min-w-full leading-normal ">
                                                                <thead>
                                                                <tr>
                                                                    <th scope="col"
                                                                        className="px-3 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                                                        Region Name
                                                                    </th>

                                                                    <th scope="col"
                                                                        className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                                                        CREATED AT
                                                                    </th>
                                                                    <th scope="col"
                                                                        className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                                                    </th>
                                                                </tr>
                                                                </thead>

                                                                <tbody>

                                                                {
                                                                    data.length > 0 &&
                                                                    data.map((item)=>(
                                                                        <tr key={item.id}>
                                                                            <td className="px-3 py-5 border-b border-gray-200 bg-white text-sm">
                                                                                <p className="text-gray-900 whitespace-no-wrap">
                                                                                    {item.name}
                                                                                </p>
                                                                            </td>


                                                                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                                                <p className="text-gray-900 whitespace-no-wrap">
                                                                                    {splitMe(item.created_at)}
                                                                                </p>
                                                                            </td>

                                                                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                                                <a href="#" className="text-indigo-600 hover:text-blueGray-800">
                                                                                    View
                                                                                </a>
                                                                            </td>
                                                                        </tr>
                                                                    ))
                                                                }


                                                                </tbody>
                                                            </table>




                                                            <div
                                                                className="px-5 bg-white py-5 flex flex-col xs:flex-row items-center xs:justify-between">
                                                                <div className="flex items-center">
                                                                    <button type="button"
                                                                            className="w-full p-4 border text-base rounded-l-xl text-gray-600 bg-white hover:bg-gray-100">
                                                                        <svg width="9" fill="currentColor" height="8" className=""
                                                                             viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                                                            <path
                                                                                d="M1427 301l-531 531 531 531q19 19 19 45t-19 45l-166 166q-19 19-45 19t-45-19l-742-742q-19-19-19-45t19-45l742-742q19-19 45-19t45 19l166 166q19 19 19 45t-19 45z">
                                                                            </path>
                                                                        </svg>
                                                                    </button>
                                                                    <button type="button"
                                                                            className="w-full px-4 py-2 border-t border-b text-base text-indigo-500 bg-white hover:bg-gray-100 ">
                                                                        1
                                                                    </button>
                                                                    <button type="button"
                                                                            className="w-full px-4 py-2 border text-base text-gray-600 bg-white hover:bg-gray-100">
                                                                        2
                                                                    </button>
                                                                    <button type="button"
                                                                            className="w-full px-4 py-2 border-t border-b text-base text-gray-600 bg-white hover:bg-gray-100">
                                                                        3
                                                                    </button>
                                                                    <button type="button"
                                                                            className="w-full px-4 py-2 border text-base text-gray-600 bg-white hover:bg-gray-100">
                                                                        4
                                                                    </button>
                                                                    <button type="button"
                                                                            className="w-full p-4 border-t border-b border-r text-base  rounded-r-xl text-gray-600 bg-white hover:bg-gray-100">
                                                                        <svg width="9" fill="currentColor" height="8" className=""
                                                                             viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                                                            <path
                                                                                d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z">
                                                                            </path>
                                                                        </svg>
                                                                    </button>
                                                                </div>
                                                            </div>
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

export default InventoryCategory
