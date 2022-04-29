import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import { useState } from 'react'

const CreateStock = () => {

    const [name, setName] = useState('');
    const [category_id, setCategory_id] = useState(0);
    const [warehouse_id, setWarehouse_id] = useState(0);
    const [sku, setSku] = useState('');
    const [pictureList, setPictureList] = useState([]);
    const [price_per_kilo, setPrice_per_kilo] = useState(0);
    const [crate_available, setCrate_available] = useState(0);
    const [kg_available, setKg_available] = useState(0);
    const [price_per_crate, setPrice_per_crate] = useState(0);
    const [isActive, setIsActive] = useState(0);
    const [inStock, setInStock] = useState(0);
    const [fee_min, setFee_min] = useState(0);
    const [fee_max, setFee_max] = useState(0);
    const [weight_limit, setWeight_limit] = useState(0);
    const [attribute, setAttribute] = useState('');
    const [attributeList, setAttributeList] = useState([]);


    async function createStock(ev){
        ev.preventDefault();
      /*  setLoading(true);
        const rawResponse = await fetch(`${linkBlockchain}/crypto/add/crypto`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    "uuid": "3434...",
                    "crypto_name": cryptoName,
                    "crypto_symbol": cryptoSymbol,
                    "contract_address": contractAddress,
                    "contract_abi": contractAbi,
                    "contract_address_test": contractAddressTest,
                    "contract_abi_test": contractAbiTest,
                    "amount_min": amountMin,
                    "staking_amount_min": stakingMin,
                    "days": stakingDay,
                    "rates": stakingRate,
                    "stakable": stakablechecked,
                    "available":availableChecked,
                    "crypto_type": tokenChecked ? "token": "coin" ,//  "token/coin",
                    "crypto_name_market": marketName,
                    "blockchain":blockChain
                }
            )
        });
        const content = await rawResponse.json();
        setLoading(false);
        initFields();*/

    }


    function handleInStock(e){
        //  e.preventDefault();

        const checked = e.target.checked;

        setInStock(checked ? 1: 0);

    }


    function handleIsActive(e){
        //  e.preventDefault();

        const checked = e.target.checked;

        setIsActive(checked ? 1: 0);

    }

    function removeAttribute(index) {
        console.log(index);
        //preventDefault();

        let newAttributeLiist = attributeList.filter(function(e, i) {
            return i !== index;
        })


        setAttributeList(newAttributeLiist);

    }



    function addAtribute(e) {
        e.preventDefault();


        if( attribute.length > 0){
           console.log(`LEN ATTR: ${attribute.length}`)
            setAttributeList([...attributeList, attribute]);
            setAttribute('');
        }



    }




    return (
        <AppLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    All Coupons
                </h2>
            }>

            <Head>
                <title>Volta Catch - Coupons</title>
            </Head>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg left-260-px">
                        <div className="flex w-full">

                            <div className="w-1/5"> </div>

                            <div className="w-4/5">
                                <main>
                                    <div className="p-6 bg-gray-100 border-b border-gray-200">

                                        {/*//Place Form here*/}
                                        <div className="flex-auto px-4 lg:px-10 py-10 pt-0 mt-3 pt-2">
                                            <form onSubmit={createStock}>
                                                <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                                                    PRODUCT INFO
                                                </h6>
                                                <div className="flex flex-wrap">
                                                    <div className="w-full lg:w-6/12 px-4">
                                                        <div className="relative w-full mb-3">
                                                            <label
                                                                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                                htmlFor="grid-password"
                                                            >
                                                                Product Name
                                                            </label>
                                                            <input
                                                                type="text"
                                                                value={name} onInput={e => setName(e.target.value)}
                                                                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                                placeholder="Enter product name..."
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="w-full lg:w-6/12 px-4">
                                                        <div className="relative w-full mb-3">
                                                            <label
                                                                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                                htmlFor="grid-password"
                                                            >
                                                                Product Category
                                                            </label>
                                                            {/*//Select Options*/}
                                                            <div className="">


                                                                <select

                                                                    className="block w-full text-gray-700  border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                                                                    name="delivery_status ">

                                                                    <option value="in_progress">
                                                                        Category 1
                                                                    </option>
                                                                    <option value="delivered">
                                                                        Category 2
                                                                    </option>
                                                                    <option value="delivered">
                                                                        Category 3
                                                                    </option>


                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>



                                                    <div className="w-full lg:w-6/12 px-4">
                                                        <div className="relative w-full mb-3">
                                                            <label
                                                                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                                htmlFor="grid-password"
                                                            >
                                                                Warehouse / Depot
                                                            </label>
                                                            <input
                                                                type="text"
                                                                value={name} onInput={e => setName(e.target.value)}
                                                                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                                placeholder="Type and pick warehouse for this product"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="w-full lg:w-6/12 px-4">
                                                        <div className="relative w-full ">
                                                            <div className="relative w-full mb-3">
                                                                <label
                                                                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                                    htmlFor="grid-password"
                                                                >
                                                                    Product SKU
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    value={sku} onInput={e => setSku(e.target.value)}
                                                                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                                    placeholder="Enter Product SKU..."
                                                                />
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>

                                                {/*//#Debug: Row-form*/}
                                                <div className="flex flex-wrap">
                                                    <div className="w-full lg:w-6/12 px-4">
                                                        <div className="relative w-full mb-3">
                                                            <label
                                                                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                                htmlFor="grid-password"
                                                            >
                                                                Price Per Kilogram (GHS)
                                                            </label>
                                                            <input
                                                                type="text"
                                                                value={price_per_kilo} onInput={e => setPrice_per_kilo(e.target.value)}
                                                                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                                placeholder="Enter price per kilogram "
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="w-full lg:w-6/12 px-4">
                                                        <div className="relative w-full mb-3">
                                                            <label
                                                                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                                htmlFor="grid-password"
                                                            >
                                                                Price per crate (GHS)
                                                            </label>
                                                            <input
                                                                type="text"
                                                                value={price_per_crate} onInput={e => setPrice_per_crate(e.target.value)}
                                                                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                                placeholder="Enter price per crate"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>

                                                {/*//#Debug: Row-form*/}
                                                <div className="flex flex-wrap">
                                                    <div className="w-full lg:w-6/12 px-4">
                                                        <label
                                                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                            htmlFor="grid-password"
                                                        >
                                                            KG available
                                                        </label>
                                                        <input
                                                            type="text"
                                                            value={kg_available} onInput={e => setKg_available(e.target.value)}
                                                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                            placeholder="[...]"
                                                        />
                                                    </div>
                                                    <div className="w-full lg:w-6/12 px-4">
                                                        <div className="relative w-full mb-3">
                                                            <label
                                                                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                                htmlFor="grid-password"
                                                            >
                                                                Crate available
                                                            </label>
                                                            <input
                                                                type="text"
                                                                value={crate_available} onInput={e => setCrate_available(e.target.value)}
                                                                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                                placeholder="[...]"
                                                            />
                                                        </div>
                                                    </div>


                                                </div>
                                                {/*//Blockchain*/}
                                                <div className="flex flex-wrap">
                                                    <div className="w-full lg:w-6/12 px-4">
                                                        <label
                                                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                            htmlFor="grid-password"
                                                        >
                                                           Fee minimun (GHS)
                                                        </label>
                                                        <input
                                                            type="text"
                                                            value={fee_min} onInput={e => setFee_min(e.target.value)}
                                                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                            placeholder="Enter crypto market name "
                                                        />
                                                    </div>
                                                    <div className="w-full lg:w-6/12 px-4">
                                                        <div className="relative w-full mb-3">
                                                            <label
                                                                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                                htmlFor="grid-password"
                                                            >
                                                                Fee maximun (GHS)
                                                            </label>
                                                            <input
                                                                type="text"
                                                                value={fee_max} onInput={e => setFee_max(e.target.value)}
                                                                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                                placeholder="0"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="flex flex-wrap">
                                                    <div className="w-full">
                                                        <label
                                                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                            htmlFor="grid-password"
                                                        >
                                                            {" "}
                                                        </label>
                                                        <div className="w-full lg:w-6/12 px-4">

                                                            <div className="relative w-full mb-3">
                                                                <label
                                                                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                                    htmlFor="grid-password"
                                                                >
                                                                    Weight Limit
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    value={weight_limit} onInput={e => setWeight_limit(e.target.value)}
                                                                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                                    placeholder="Enter the weight limit..."
                                                                />
                                                            </div>


                                                        </div>

                                                    </div>
                                                </div>

                                                {/*//#Debug: Drag-n-drop functionalities*/}
                                                <div className="sm:col-span-6  p-3 bg-white mt-4">
                                                    <label htmlFor="cover-photo" className="block uppercase text-sm font-medium text-gray-700">
                                                        Select picture
                                                    </label>
                                                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                                        <div className="space-y-1 text-center">
                                                            <svg
                                                                className="mx-auto h-12 w-12 text-gray-400"
                                                                stroke="currentColor"
                                                                fill="none"
                                                                viewBox="0 0 48 48"
                                                                aria-hidden="true"
                                                            >
                                                                <path
                                                                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                                                    strokeWidth={2}
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                />
                                                            </svg>
                                                            <div className="flex text-sm text-gray-600">
                                                                <label
                                                                    htmlFor="file-upload"
                                                                    className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                                                                >
                                                                    <span>Upload a file</span>
                                                                    <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                                                                </label>
                                                                <p className="pl-1">or drag and drop</p>
                                                            </div>
                                                            <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                                                        </div>
                                                    </div>
                                                </div>


                                                <hr className="mt-6 border-b-1 border-blueGray-300" />

                                                <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                                                    PRODUCT AVAILALABILITY
                                                </h6>

                                                {/*//#deubg: switch button - STAKABLE*/}
                                                <div className="flex flex-wrap lg:w-6/12">
                                                    <div className="w-full lg:w-3/12 px-4 ">
                                                        <label
                                                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                            htmlFor="grid-password"
                                                        >
                                                            {" "}
                                                        </label>
                                                        <div className="w-full lg:w-6/12 px-4">
                                                            <div
                                                                className="relative inline-block w-10 mr-2 align-baseline select-none">
                                                                <input type="checkbox" name="toggle" id="Blue"
                                                                       onChange={handleInStock}
                                                                       value={inStock === 1}
                                                                       className="checked:bg-blue-500 outline-none focus:outline-none right-0 checked:right-0 duration-200 ease-in absolute block w-8 h-8 rounded-full bg-white border-2 appearance-none cursor-pointer"/>
                                                                <label htmlFor="Blue"
                                                                       className="block overflow-hidden  rounded-full bg-gray-300 cursor-pointer">
                                                                </label>
                                                            </div>


                                                        </div>



                                                    </div>

                                                    <div className="w-full lg:w-9/12 px-2 mt-8 ">
                                                        <span className=" uppercase text-blueGray-600 text-xs mt-10  font-bold"> In Stock   </span>
                                                    </div>
                                                </div>


                                                {/*//#deubg: switch button - IS TOKEN*/}
                                                <div className="flex flex-wrap lg:w-6/12">
                                                    <div className="w-full lg:w-3/12 px-4 ">
                                                        <label
                                                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                            htmlFor="grid-password"
                                                        >
                                                            {" "}
                                                        </label>
                                                        <div className="w-full lg:w-6/12 px-4">
                                                            <div
                                                                className="relative inline-block w-10 mr-2 align-baseline select-none">
                                                                <input type="checkbox" name="toggle" id="Blue"
                                                                       onChange={handleIsActive}
                                                                       value={isActive ===1}
                                                                       className="checked:bg-blue-500 outline-none focus:outline-none right-0 checked:right-0 duration-200 ease-in absolute block w-8 h-8 rounded-full bg-white border-2 appearance-none cursor-pointer"/>
                                                                <label htmlFor="Blue"
                                                                       className="block overflow-hidden  rounded-full bg-gray-300 cursor-pointer">
                                                                </label>
                                                            </div>


                                                        </div>



                                                    </div>

                                                    <div className="w-full lg:w-9/12 px-4 mt-8 ">
                                                        <span className="uppercase text-blueGray-600 text-xs mt-8  font-bold"> is Active   </span>
                                                    </div>
                                                </div>


                                                {/*//#deubg: switch button - IS AVAILABLE*/}



                                                <hr className="mt-6 border-b-1 border-blueGray-300" />

                                                <button className="text-white py-3 px-6 bg-teal-500 rounded-md mt-16 text-sm mt-3 ml-120 font-bold uppercase"> CREATE PRODUCT</button>

                                                {/*<h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                                                    PRODUCT ATTRIBUTE
                                                </h6>*/}

                                                {/*//#debug: Investment Day/Rate*/}


                                                {/*//Add Attribute*/}
                                        {/* <div className="flex relative ">
                                               <span className="rounded-l-md inline-flex  items-center px-3     text-gray-500  text-sm">
                                                     <button onClick={addAtribute}>
                                                       <img src="/plus.png" className="w-8 h-8"/>
                                                     </button>
                                               </span>
                                                    <input type="text" id="with-day"
                                                           value={attribute} onInput={e => setAttribute(e.target.value)}
                                                           className="rounded flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                                           name="url" placeholder="Product attribute"/>

                                                </div>

                                                //Attribute
                                                <div
                                                    className="container p-8 mt-8 flex relative flex-col  w-full  bg-white dark:bg-gray-800 rounded-lg shadow">

                                                    {attributeList.map((attr,index)=>(
                                                        <div>
                                                            <ul className="flex flex-row " key={index}>
                                                                <li className="flex flex-row">
                                                                    <div className="flex relative mb-4">

                                                                        <input type="text" id="with-email mb-4"
                                                                               className="rounded flex-1 appearance-none border border-blueGray-600 w-full py-2 px-4 bg-lightBlue-200 text-red-500 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                                                               name="url" placeholder={attr}  disabled="true"/>
                                                                        <span className="mt-2 p-2">{" "}</span>

                                                                        <span className="rounded-l-md inline-flex  items-center px-3     text-gray-500  text-sm">
                                                           <button  onClick={removeAttribute(index)}>
                                                               <img src="/multiply.png" className="w-8 h-8"/>
                                                           </button>
                                                        </span>
                                                                                        </div>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        ))}

                                                 </div>
*/}

                                            </form>
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

export default CreateStock
