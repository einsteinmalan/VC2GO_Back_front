

import { useRouter } from 'next/router'
import React,{useState,useEffect} from 'react';
import ReactLoading from 'react-loading';
import { KAllLocation, KLastLocation, KWarehouseID } from '@/components/constants'
import HeaderHome from '@/components/Header/HeaderHome'
import useLocalStorage from '@/components/CustomHooks/useLocalStorage'
import styles from "../../components/Products/Products.module.scss";


export const Maison = () => {
    const [data,setData]=useState([]);
    const [isReady,setIsReady]=useState(false);
    const [loading,setLoading]=useState(true);
    const [warehouseID,setWarehouseID]=useState(-1);
    const [locationName,setLocationName]=useState("Pick a location");
    const [allLocation,setAllLocation]=useState([]);
    const [location,setLocation] = useLocalStorage("location", 'Malata');


    const router = useRouter();

    function saveLocID(name){
      const locSet =   data.filter(loc => loc.location === name);
      return locSet[0].id.toString() ?? data[0].id.toString();
    }

    function handleChange(e){
        console.log(`Selected: ${e.target.value}`);
        setLocationName(e.target.value);
        //localStorage.setItem(KLastLocation, e.target.value);
        setLocation(e.target.value);
       // localStorage.setItem(KWarehouseID, saveLocID(e.target.value));

    }

    const getData=()=>{
        fetch('location.json'
            ,{
                headers : {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )
            .then(function(response){
                console.log(response)
                return response.json();
            })
            .then(function(myJson) {
                console.log(myJson);
                setData(myJson)
                setAllLocation(myJson);
                setLoading(false);
               // localStorage.setItem(KAllLocation,myJson);
            });
    }

    useEffect(()=>{
        setTimeout(() => {
            getData();
        }, 4000);

    },[]);


    return (
        <>
            <HeaderHome title="Welcome"/>


            <div className="background-image flex items-stretch min-h-screen" >
                <div className="bg-[url('/bgg.jpg')]  overflow-hidden  border rounded shadow-sm lg:flex-row sm:mx-auto">


                    <div className=" justify-center p-8  lg:p-16 lg:pl-10 lg:w-1/2 mt-16 ml-20 ">

                       <div className="mt-20 bg-white rounded-lg ">
                           <div className="flex flex-row w-4/5 mx-4 ">


                               <div className="w-3/5 mr-4">


                                   <div>
                                       <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                                           {" "}
                                       </p>
                                   </div>
                                   <h5 className="mb-3 text-3xl font-bold leading-none sm:text-4xl">
                                       Welcome to Volta Catch
                                   </h5>

                                   <p className="mb-5 text-gray-800 mr-4">
                                       Kindly choose on the right hand side your closest location to the delivery point for your next purchase

                                   </p>

                               </div>


                               <div className="w-2/5">

                                   <div className="text-left w-auto flex-1 ">

                                       {loading ?
                                           <div className="w-full lg:w-8/12 pt-6 grid place-items-center">
                                               <ReactLoading type="spokes" color="#F42605" height={60} width={60}/>
                                               <div className="text-center text-lg text-gray-500 pt-6"> Loading location...</div>
                                           </div>
                                           :
                                           <div className="flex flex-row w-full mt-5 lg:w-8/12  items-start">

                                               {/* select*/}
                                               <div className="w-3/5 max-w-200-px mt-3">




                                                   <select
                                                       className="block w-full text-gray-700 py-2 px-3 border border-teal-500 bg-white rounded-md shadow-sm  focus:border-teal "
                                                       value={locationName} onChange={handleChange}
                                                       name="account_type">
                                                       {data.map((option) => (
                                                           <option value={option.location.toLowerCase()} key={option.id}>{option.location}</option>
                                                       ))}
                                                   </select>

                                                   <div className="divide-y divide-double"></div>
                                               </div>

                                               {/* Button*/}
                                               <div className="w-2/5  mt-3 ml-2  px-1">


                                                   <button type="button"
                                                           disabled={isReady}
                                                           className={isReady ? 'mx-4 border border-gray-300  bg-gray-200 dark:bg-gray-800 shadow-sm flex items-center justify-center w-full rounded-md  px-4 py-2 text-sm font-medium text-white dark:text-gray-50 hover:bg-gray-50 dark:hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-500':' border border-gray-300  bg-teal-500 dark:bg-gray-800 shadow-sm flex items-center justify-center w-full rounded-md  px-4 py-2 text-sm font-medium text-white dark:text-gray-50 hover:bg-gray-50 dark:hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-500'}
                                                           id="options-menu"

                                                           onClick={()=>{
                                                               //   localStorage.setItem(KLastLocation, locationName);
                                                               localStorage.setItem(KWarehouseID, warehouseID.toString());
                                                               console.log(`Warehouse_ID: ${warehouseID}`)
                                                               setIsReady(true);

                                                               setTimeout(() => {
                                                                   router.push("/products/");
                                                               }, 1000);


                                                           }
                                                           }
                                                   >
                                                       Shop

                                                   </button>
                                                   <a
                                                       href="/"
                                                       aria-label=""
                                                       className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                                                   >
                                                       {"  "}
                                                       <svg
                                                           className="inline-block w-3 ml-2"
                                                           fill="currentColor"
                                                           viewBox="0 0 12 12"
                                                       >
                                                           <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                                                       </svg>
                                                   </a>
                                               </div>

                                           </div>
                                       }

                                       {isReady ? <div className="w-full lg:w-8/12 pt-6 grid place-items-center">
                                           <ReactLoading type="spin" color="#F42605" height={50} width={50}/>
                                       </div> : <div></div>
                                       }

                                   </div>

                               </div>


                           </div>
                       </div>


                    </div>


                </div>
            </div>


        </>
    );
};
