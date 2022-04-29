import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import { CheckIcon, MinusCircleIcon } from '@heroicons/react/outline'
import ProductSelect from '@/components/pages/reports/ProductSelect'
import { Step,Stepper } from '@leafygreen-ui/stepper'
import { ReportContext } from '@/context/storeContext'
import { allProducts } from '@/components/data/data'




const pattern2 = ({user}) => {

    const [currentStep, setCurrentStep] = useState(0);
    const [username, setUsername] = useState('name');







    return (
        <AppLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    User Detail
                </h2>
            }>

            <Head>
                <title>Volta Catch - User Detail</title>
            </Head>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg left-260-px">
                        <div className="flex w-full">

                            <div className="w-1/5"> </div>

                            <div className="w-4/5">
                                <main>
                                    <div className="p-6 bg-gray-200 border-b border-gray-200">
                                        <div className="container mx-auto px-4 sm:px-8 ">
                                            <div className="py-8">

                                                <div className="flex flex-row">

                                                    {/*// Left panel*/}
                                                    <div className="w-full lg:w-8/12">
                                                        <div className="w-full  px-4 mb-3">
                                                            <div className="relative w-full ">
                                                                <label
                                                                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                                    htmlFor="grid-password"
                                                                >
                                                                    Full Name
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    value={username} onInput={e => setUsername(e.target.value)}
                                                                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:ring-0 focus:border-gray-300 w-full ease-linear transition-all duration-150"
                                                                    placeholder="Enter username"
                                                                />
                                                            </div>
                                                        </div>


                                                    </div>


                                                    {/*// Right panel*/}
                                                    <div className="w-full lg:w-4/12 px-4">
                                                        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
                                                            <div className="px-6">
                                                                <div className="flex flex-wrap justify-center">
                                                                    <div className="w-full px-4 flex justify-center">
                                                                        <div className="relative">
                                                                            <img
                                                                                alt="..."
                                                                                src="/user.png"
                                                                                className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                    <div className="w-full px-4 text-center mt-20">
                                                                        <div className="flex justify-center py-4 lg:pt-4 pt-8">
                                                                            <div className="mr-4 p-3 text-center">
                                                                                          <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                                                                                            22
                                                                                          </span>
                                                                                                    <span className="text-sm text-blueGray-400">Send</span>
                                                                                                </div>
                                                                                                <div className="mr-4 p-3 text-center">
                                                                                          <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                                                                                            10
                                                                                          </span>
                                                                                                            <span className="text-sm text-blueGray-400">Buy</span>
                                                                                                </div>
                                                                                                <div className="lg:mr-4 p-3 text-center">
                                                                                          <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                                                                                            89
                                                                                          </span>
                                                                                <span className="text-sm text-blueGray-400">Withdraw</span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>


                                                                <div className="shadow-lg rounded-2xl w-36 p-4 bg-white dark:bg-gray-800">
                                                                    <div className="flex items-center">
                                                                        <span className="bg-purple-500 p-2 h-4 w-4 rounded-full relative">

                                                                        </span>
                                                                        <p className="text-md text-gray-700 dark:text-gray-50 ml-2">
                                                                            Balance
                                                                        </p>
                                                                    </div>
                                                                    <div className="flex flex-col justify-start">
                                                                        <p className="text-gray-800 text-4xl text-left dark:text-white font-bold my-4">
                                                                            $ XXXXXXXXXXX
                                                                        </p>
                                                                        <div className="relative w-28 h-2 bg-gray-200 rounded">
                                                                            <div className="absolute top-0 h-2  left-0 rounded bg-blueGray-700 w-2/3">
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div className="text-center mt-12">
                                                                    <h3 className="text-xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                                                                        First Last Name
                                                                    </h3>
                                                                    <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                                                                        <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>{" "}
                                                                        Country
                                                                    </div>

                                                                </div>
                                                                <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                                                                    <div className="flex flex-wrap justify-center">
                                                                        <div className="w-full lg:w-9/12 px-4 mb-2">

                                                             <span className="relative z-0 inline-flex shadow-sm rounded-md">

                                            <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                                                 <img className="-ml-2 pr-2 mr-2 h-8 w-8 text-gray-400" aria-hidden="true" src="/user.png"/>{" "}
                                                SIMBOOL
                                              </div>

                                                  <button
                                                      type="button"
                                                      className="-ml-px relative inline-flex items-center px-3 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                                                  >
                                                      ZZZZZZZ
                                                  </button>
                                            </span>
                                                                        </div>
                                                                    </div>
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

export default pattern2
