import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import {useRouter} from "next/router";
import { linkBaseUrl } from '@/components/constants'
import React, { useEffect, useState } from 'react'

import moment from "moment/moment";
import Link from 'next/link'

export  const getStaticProps = async ()=> {
    const res = await   fetch(`${linkBaseUrl}/api/warehouse`);
    const  data = await  res.json();

    return {
        props: { warehouseList: data}
    };
}


const WarehouseManagement = ({warehouseList}) => {

    const [data, setData] = useState([]);
    const [locationName, setLocationName] = useState([]);
    const [term, setTerm] = useState('');

    const router = useRouter();

    async function getLocation(id){
        console.log(`ID =${id}`)
        const rawResponse = await fetch(`${linkBaseUrl}/api/location/${id}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
          /*  body: JSON.stringify(
                {
                    "name": regionName,
                    "color": color.hex.toString()

                }
            )*/
        });

        const resp = await rawResponse.json();

        console.log(`${resp.name}`)
        return resp.name;
    }

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
            setData(warehouseList);
        }


    }

    function splitMe(value){
        if(value !== null && value !== undefined){
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

        return "N/A"


    }


    useEffect(()=>{
        setData(warehouseList);

        async function fetchUserList() {


            let res =  await fetch(`${linkBaseUrl}/api/warehouse`);
            res = await res.json();
            var list= [];

            console.log(`---${res[0]}`)


            for(var i=0; i < res.length; i++){
                var name = await  getLocation(res[i].location_id);
                list.push(name);
            }
            console.log(`All Name: ${list}`);
            setLocationName(list);

        }

        fetchUserList();




    }, []);



    const list = [
        {
            'id':1,
            'code':'KM-SALES',
            'name': 'KUMASI SALE COLD ROOM',
            'region': 'KUMASI',
            'created': '02/04/2022',
            'status': 'active'
        },
        {
            'id':2,
            'code':'TM-SALES',
            'name': 'TEMA SALE COLD ROOM',
            'region': 'TEMA',
            'created': '02/04/2022',
            'status': 'active'
        },
        {
            'id':3,
            'code':'KS-SALES',
            'name': 'KASOA SALE COLD ROOM',
            'region': 'KASOA',
            'created': '02/04/2022',
            'status': 'active'
        },
    ];

    return (
        <AppLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    All users
                </h2>
            }>

            <Head>
                <title>Volta Catch - Warehouse Management</title>
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
                                                        <div className="w-3/5">
                                                            <h2 className="text-3xl text-black font-bold">
                                                                Warehouse Management
                                                            </h2>
                                                        </div>

                                                        <div className="w-1/5">
                                                            {/*// Add user button*/}
                                                            <div className=" inline-block text-left w-auto ">
                                                                `  <button type="button"
                                                                           className="border border-gray-300 bg-gray-100 shadow-sm hover:-bg-teal-500 hover:text-white justify-center rounded-md  px-4 py-2 text-sm font-medium text-gray-900 dark:text-gray-50 hover:bg-gray-50  focus:outline-none"
                                                                           id="options-menu"
                                                                           onClick={()=>{

                                                                               setTimeout(() => {
                                                                                   router.push("/dashboard/admin/warehouse-management/create");
                                                                               }, 1000);
                                                                           }}
                                                            >
                                                                Add warehouse

                                                            </button>
                                                            </div>
                                                        </div>

                                                        <div className="w-1/5">

                                                        </div>




                                                    </div>

                                                    <div className="flex flex-row mt-5">

                                                        <div className="w-1/5">
                                                            <select
                                                                className="block w-full text-gray-700  border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                                                                name="status_type">
                                                                <option value="none">
                                                                    Bulk Actions
                                                                </option>
                                                                <option value="delete">
                                                                    Delete
                                                                </option>



                                                            </select>
                                                        </div>

                                                        <div className="w-1/5">
                                                            {/*// Add user button*/}
                                                            <div className=" px-4 ">
                                                                `  <button type="button"
                                                                           className="border border-gray-300 bg-gray-100 shadow-sm hover:-bg-blue-500 hover:text-white justify-center rounded-md  px-6 py-2 text-sm font-medium text-gray-900 dark:text-gray-50 hover:bg-gray-50  focus:outline-none"
                                                                           id="options-menu"
                                                                           onClick={()=>{


                                                                           }
                                                                           }
                                                            >
                                                                Apply

                                                            </button>
                                                            </div>
                                                        </div>

                                                        <div className="w-1/5">
                                                            {/*// Add user button*/}
                                                            <div className=" inline-block text-left w-auto ">
                                                                `  <button type="button"
                                                                           className="border border-gray-300 bg-gray-100 shadow-sm hover:-bg-blue-500 hover:text-white justify-center rounded-md  px-4 py-2 text-sm font-medium text-gray-900 dark:text-gray-50 hover:bg-gray-50  focus:outline-none"
                                                                           id="options-menu"
                                                                           onClick={()=>{

                                                                           }}
                                                            >
                                                                Change

                                                            </button>
                                                            </div>
                                                        </div>

                                                        <div className="w-2/5">

                                                        </div>



                                                    </div>



                                                    <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                                                        <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                                                            <table className="min-w-full leading-normal">
                                                                <thead>
                                                                <tr>
                                                                    <th scope="col"
                                                                        className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                                                        <form>

                                                                            <input type="checkbox" value="Submit" onClick={()=>{}} />
                                                                        </form>
                                                                    </th>

                                                                    <th scope="col"
                                                                        className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                                                        Warehouse Code
                                                                    </th>
                                                                    <th scope="col"
                                                                        className="px-5 py-3 bg-white items-center border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                                                        Warehouse Name
                                                                    </th>

                                                                    <th scope="col"
                                                                        className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                                                        Warehouse region
                                                                    </th>
                                                                    <th scope="col"
                                                                        className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                                                        Created at
                                                                    </th>
                                                                    <th scope="col"
                                                                        className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                                                        status
                                                                    </th>
                                                                    <th scope="col"
                                                                        className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                                                    </th>
                                                                </tr>
                                                                </thead>

                                                                <tbody>

                                                                {data.length >0 && data.map((warehouse,index)=>(

                                                                    <tr  key={warehouse.id} className='pl-1'>
                                                                        <td className="px-2 py-5 border-b border-gray-200 bg-white text-sm">
                                                                            <form className="pl-1">

                                                                                <input type="checkbox" value="Submit" onClick={()=>{}} />
                                                                            </form>
                                                                        </td>

                                                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                                            <div className="flex items-center">

                                                                                <div className="ml-3">
                                                                                    <p className="text-gray-900 whitespace-no-wrap">
                                                                                        {warehouse.code}
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                                            <p className="text-gray-900 whitespace-no-wrap">
                                                                                {warehouse.name}
                                                                            </p>
                                                                        </td>

                                                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                                            <p className="text-gray-900 whitespace-no-wrap uppercase">
                                                                                {locationName[index]}
                                                                            </p>
                                                                        </td>
                                                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                                            <p className="text-gray-900 whitespace-no-wrap">
                                                                                {splitMe(warehouse.created_at)}
                                                                            </p>
                                                                        </td>
                                                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                                            <span
                                                                                className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                                                                <span aria-hidden="true"
                                                                                      className="absolute inset-0 bg-teal-500 opacity-50 rounded-full">
                                                                                </span>
                                                                                <span className={warehouse.status === 1 ? 'relative bg-green-light p-2  rounded text-white' : "relative bg-red-500 p-2  rounded text-white"}>
                                                                                     {warehouse.status === 1 ? 'Active' : 'NOT ACTIVE' }
                                                                                </span>
                                                                            </span>
                                                                        </td>
                                                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">

                                                                            <Link href={'/dashboard/admin/warehouse-management/view/'+ warehouse.id}>
                                                                                <span  className="text-indigo-600 hover:text-blueGray-800 py-1 px-3 rounded-md bg-gray-200 shadow-sm hover:-bg-teal-500 cursor-pointer">
                                                                                    View
                                                                                </span>
                                                                            </Link>



                                                                        </td>
                                                                    </tr>

                                                                ))}



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

export default WarehouseManagement
