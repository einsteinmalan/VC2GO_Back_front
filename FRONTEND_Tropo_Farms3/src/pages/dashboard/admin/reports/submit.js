import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import { CheckIcon, MinusCircleIcon } from '@heroicons/react/outline'
import ProductSelect from '@/components/pages/reports/ProductSelect'
import { Step,Stepper } from '@leafygreen-ui/stepper'
import { ReportContext } from '@/context/storeContext'
import { allProducts } from '@/components/data/data'




const ReportBoard = () => {

    const [currentStep, setCurrentStep] = useState(0);
    const [saleList,setSaleList] = useState([]);
    const [onelineSaleList,setOnelineSaleList] = useState([]);
    const [onFocus,setOnFocus] = useState({});
    const [quantity,setQuantity] = useState('');
    const [measure,setMeasure] = useState('KG');
    const [price,setPrice] = useState(0);

    function addProduct(product){
        if(!saleList.includes(product)){

            if(!isNaN(parseFloat(quantity))){

            // const   unitPrice = measure === 'KG' ? onFocus.price_per_kilo : onFocus.price_per_crate ;
                const   unitPrice = price ;

             const totalAmount = unitPrice * parseFloat(quantity);

             const newRecord = {
                 id:product.id,
                 name: product.name,
                 warehouse: product.warehouse,
                 picture: product.picture,
                 warehouse_id: product.warehouse_id,
                 category_id: product.category_id,
                 measurement:measure,
                 totalAmount: totalAmount.toFixed(2),
                 quantity: quantity,
                 unit_price: unitPrice,

             }


                const checkList = saleList.filter((item) => {
                    return item.id === product.id ;

                });

             if(checkList.length === 0){
                 const list = [...saleList,newRecord]
                 setSaleList(list);
             }


            }




        }else {
            console.log(`ADDED PROD NOT ADDED!: ${saleList.length}`)
        }
    }

    function removeProduct(id){
        const newCart = saleList.filter((x) => x.id !== id);
        setSaleList(newCart);
    }

    function getImage(fishName){
        return `/fishes/${fishName}.jpg`;
    }

    function generateOnlineSale(location){

        const prod = allProducts.filter((product) => {
            return product.warehouse.toLowerCase().includes(location.toLowerCase());
            // Use the toLowerCase() method to make it case-insensitive
        });

        let onlineList = [];

        for(let i=0; i <2; i++){
            onlineList.push(prod[i]);

        }


        for(let i=0; i <onlineList.length; i++){
            const rando = Math.random() * (10 - 1) + 1;
            const mezure = rando %2  ===0 ? 'KG':'Crate';
            const   unitPrice = mezure === 'KG' ? onlineList[i].price_per_kilo : onlineList[i].price_per_crate ;
            const quantities = Math.random() * (20 - 1) + 1;
            const totalAmount = unitPrice * quantities;

            const newRecord = {
                id:onlineList[i].id,
                name: onlineList[i].name,
                warehouse: onlineList[i].warehouse,
                picture: onlineList[i].picture,
                warehouse_id: onlineList[i].warehouse_id,
                category_id: onlineList[i].category_id,
                measurement:measure,
                totalAmount: totalAmount.toFixed(2),
                quantity: quantities,
                unit_price: unitPrice.toFixed(2),

            }

            const list = [...onelineSaleList,newRecord]
            setOnelineSaleList(list);

        }


    }

    function increateStep(){
        if(currentStep === 0){
            setCurrentStep(1);
        }else if(currentStep === 1){
            setCurrentStep(2);
        }else if(currentStep === 2){
            return ;
        }
    }




    return (
        <AppLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    All Reports
                </h2>
            }>

            <Head>
                <title>Volta Catch - Report</title>
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

                                                    <ReportContext.Provider value={
                                                        {
                                                            addProduct:addProduct,
                                                            setOnFocus:setOnFocus

                                                        }
                                                    }>
                                                        {/*//Stepper*/}
                                                        <div className='mt-1 mb-5 mx-4'>
                                                            <Stepper currentStep={currentStep} maxDisplayedSteps={3}>
                                                                <Step>Add record for Offline sale</Step>
                                                                <Step>Online sale</Step>
                                                                <Step>Review & Submit</Step>
                                                            </Stepper>
                                                        </div>

                                                        {/*// 2 column Grid for report steps*/}
                                                        <div className='grid grid-cols-2 bg-gray-200 ml-2 mt-5'>

                                                            {/*//First Column of Gris*/}
                                                            <div>
                                                                {  currentStep === 0 || currentStep === 1?

                                                                    <div className="flex flex-row justify-between p-2 bg-white">
                                                                        <div><h1 className="text-lg font-extrabold tracking-tight   text-gray-900 mt-3 "> {currentStep === 0 ? 'Select product' : ''} </h1></div>
                                                                        <div className='text-lg text-lightBlue-600 hover:text-teal-500 font-semibold mt-3 mr-4 bg-white cursor-pointer ' onClick={increateStep}>Next </div>
                                                                    </div>
                                                                    :
                                                                    <div></div>


                                                                }



                                                                {/*//ROW: Product | Option|Quantity*/}
                                                                { currentStep === 0 ?
                                                                    <div>

                                                                        <div className='flex flex-row'>
                                                                            <div className='w-6/12 mr-2'>
                                                                                <ProductSelect />
                                                                            </div>

                                                                            <div className='w-6/12 mr-2 flex flex-row'>

                                                                                {/*//#Option*/}
                                                                                <div className="relative w-full  ">


                                                                                    <select
                                                                                        className="relative w-full text-gray-700 mr-2  mt-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none  focus:ring-0 "
                                                                                        name="report_type"
                                                                                        value={measure}
                                                                                        onChange={({ target: { value } }) => setMeasure(value)}
                                                                                    >
                                                                                        <option value="Crate">
                                                                                            Crate
                                                                                        </option>
                                                                                        <option value="KG">
                                                                                            KG
                                                                                        </option>

                                                                                    </select>
                                                                                </div>

                                                                                {/*//#Quantity Field*/}
                                                                                <div className="text-end  relative max-w-50-px   mr-1 mt-2">
                                                                                    <form
                                                                                        className="   max-h-22-px md:space-y-0 justify-center">
                                                                                        <div className=" relative ">
                                                                                            <input type="text" id="&quot;form-subscribe-Filter"
                                                                                                   className=" rounded-lg border-transparent  appearance-none border border-gray-300 w-full py-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-0 focus:border-transparent"
                                                                                                   placeholder="Qty"
                                                                                                   value={quantity} onInput={e => setQuantity(e.target.value)}
                                                                                            />
                                                                                        </div>

                                                                                    </form>
                                                                                </div>

                                                                                {/*//#Quantity Field*/}
                                                                                <div className="text-end relative w-2/3   mx-2 mt-2">
                                                                                    <form
                                                                                        className="   max-h-22-px md:space-y-0 justify-center">
                                                                                        <div className=" relative ">
                                                                                            <input type="text" id="&quot;form-subscribe-Filter"
                                                                                                   className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-0 focus:border-transparent"
                                                                                                   placeholder="Price"
                                                                                                   value={price} onInput={e => setPrice(e.target.value)}
                                                                                            />
                                                                                        </div>

                                                                                    </form>
                                                                                </div>

                                                                            </div>



                                                                        </div>
                                                                        <div className='w-2/5'>
                                                                            <button
                                                                                className="w-1/3 bg-lightBlue-600 text-white active:bg-blueGray-600  hover:-bg-teal-500 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-3 mt-5 w-full ease-linear transition-all duration-150"
                                                                                type={"submit"}
                                                                                onClick={()=>{
                                                                                    addProduct(onFocus);
                                                                                }}

                                                                            >
                                                                                Add sold product
                                                                            </button>
                                                                        </div>

                                                                    </div>
                                                                    : currentStep === 1 ?
                                                                    <div></div>
                                                                    :
                                                                            <div>
                                                                                {/*#debug online*/}
                                                                                <h1 className="text-lg font-extrabold tracking-tight text-gray-900 ml-20 mt-1 underline font-medium "> List
                                                                                    of products sold today offline</h1>
                                                                                <div className=''>
                                                                                    <ul tabIndex="-1" role="listbox"
                                                                                        aria-labelledby="listbox-label"
                                                                                        aria-activedescendant="listbox-item-3"
                                                                                        className="max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                                                                                        {saleList.length > 0 ? saleList.map((agent, index) => (
                                                                                            <li id="listbox-item-0" role="option"
                                                                                                key={index} onClick={() => {

                                                                                            }}
                                                                                                className="text-gray-900 cursor-default    select-none relative py-2 pl-3 ">
                                                                                                <div className="flex items-center ">
                                                                                                    <img width={32} height={32}
                                                                                                         src={getImage(agent.name)}
                                                                                                         alt="person"
                                                                                                         className="flex-shrink-0 h-6 w-6 rounded-full"/>
                                                                                                    <span
                                                                                                        className="ml-3 block font-normal truncate">
                                                                                           {agent.name} | <span
                                                                                                        className=''> (x{agent.quantity} {agent.measurement}) GHS{agent.totalAmount}</span>
                                                                                      </span>
                                                                                                </div>



                                                                                            </li>

                                                                                        )) : <div>{''}</div>}
                                                                                    </ul>

                                                                                </div>
                                                                            </div>

                                                                }


                                                            </div>

                                                            {/*//Second column of grid*/}
                                                            { currentStep == 0 ?
                                                                 <div>
                                                                    <h1 className="text-lg font-extrabold tracking-tight text-gray-900 ml-20 mt-1 underline font-medium "> List
                                                                        of products sold today offline</h1>
                                                                    <div className=''>
                                                                        <ul tabIndex="-1" role="listbox"
                                                                            aria-labelledby="listbox-label"
                                                                            aria-activedescendant="listbox-item-3"
                                                                            className="max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                                                                            {saleList.length > 0 ? saleList.map((agent, index) => (
                                                                                <li id="listbox-item-0" role="option"
                                                                                    key={index} onClick={() => {

                                                                                }}
                                                                                    className="text-gray-900 cursor-default  hover:-bg-red-500 mr-3  hover:text-white select-none relative py-2 pl-3 ">
                                                                                    <div className="flex items-center ">
                                                                                        <img width={32} height={32}
                                                                                             src={getImage(agent.name)}
                                                                                             alt="person"
                                                                                             className="flex-shrink-0 h-6 w-6 rounded-full"/>
                                                                                        <span
                                                                                            className="ml-3 block font-normal truncate">
                                                                                           {agent.name} | <span
                                                                                            className=''> (x{agent.quantity} {agent.measurement}) GHS{agent.totalAmount}</span>
                                                                                      </span>
                                                                                    </div>

                                                                                    <span
                                                                                        className="ml-2 absolute  right-0 top-0 mt-2     flex items-center pb-2 cursor-pointer">
                                                                                                     <MinusCircleIcon
                                                                                                         width={32}
                                                                                                         height={32}
                                                                                                         onClick={() => {
                                                                                                             removeProduct(agent.id)
                                                                                                         }}/>
                                                                                                </span>

                                                                                </li>

                                                                            )) : <div>{''}</div>}
                                                                        </ul>

                                                                    </div>
                                                                 </div>
                                                                :
                                                                 <div>
                                                                   {/*#debug online*/}
                                                                     <h1 className="text-lg font-extrabold tracking-tight text-gray-900 ml-20 mt-1 underline font-medium "> List
                                                                         of products sold today online</h1>
                                                                     <div className=''>
                                                                         <ul tabIndex="-1" role="listbox"
                                                                             aria-labelledby="listbox-label"
                                                                             aria-activedescendant="listbox-item-3"
                                                                             className="max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                                                                             {onelineSaleList.length > 0 ? onelineSaleList.map((agent, index) => (
                                                                                 <li id="listbox-item-0" role="option"
                                                                                     key={index} onClick={() => {

                                                                                 }}
                                                                                     className="text-gray-900 cursor-default    select-none relative py-2 pl-3 ">
                                                                                     <div className="flex items-center ">
                                                                                         <img width={32} height={32}
                                                                                              src={getImage(agent.name)}
                                                                                              alt="person"
                                                                                              className="flex-shrink-0 h-6 w-6 rounded-full"/>
                                                                                         <span
                                                                                             className="ml-3 block font-normal truncate">
                                                                                           {agent.name} | <span
                                                                                             className=''> (x{agent.quantity} {agent.measurement}) GHS{agent.totalAmount}</span>
                                                                                      </span>
                                                                                     </div>



                                                                                 </li>

                                                                             )) : <div>{''}</div>}
                                                                         </ul>

                                                                     </div>
                                                                 </div>

                                                            }

                                                        </div>

                                                        {/*//w-Full Button  summary of report*/}

                                                        { currentStep ===2 ?
                                                            <div className=' w-full flex flex-row justify-items-center  '>
                                                                <div className='w-2/5 ml-20 '>
                                                                    <button
                                                                        className="w-1/3 bg-lightBlue-600 text-white active:bg-blueGray-600  hover:-bg-teal-500 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-3 mt-5 w-full ease-linear transition-all duration-150"
                                                                        type={"submit"}
                                                                        onClick={()=>{
                                                                            addProduct(onFocus);
                                                                        }}

                                                                    >
                                                                        Submit Report
                                                                    </button>
                                                                </div>

                                                                <div className="text-lg text-red-500 hover:text-red-500 cursor-pointer mt-6 ml-20 " onClick={()=>{setCurrentStep(0)}}> Cancel </div>
                                                            </div>
                                                            : <div></div>
                                                        }


                                                    </ReportContext.Provider>





                                                    <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                                                        <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">

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

export default ReportBoard
