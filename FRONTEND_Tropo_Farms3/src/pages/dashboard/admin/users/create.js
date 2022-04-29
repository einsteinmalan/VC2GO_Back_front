import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import {useRouter} from "next/router";
import { usersList } from '@/components/data/data'
import Link from 'next/link'
import React, { useState } from 'react'

const CreateUserPage = () => {

    const router = useRouter();

    const [firstName,setFirstName] = useState('');
    const [lastName,setLastName] = useState('');
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [email,setEmail] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('');
    const [role,setRole] = useState('');


    // submit entered information
    const submitData = async (ev) => {
        ev.preventDefault();



    };

    return (
        <AppLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Add New User
                </h2>
            }>

            <Head>
                <title>Volta Catch - Users</title>
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
                                                        <div className="w-1/5">
                                                            <h2 className="text-3xl text-black font-bold">
                                                                Add New User
                                                            </h2>
                                                        </div>


                                                        <div className="w-4/5">

                                                        </div>




                                                    </div>




                                                    <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                                                        <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">

                                                            {/*//Form*/}

                                                            <form onSubmit={submitData}>
                                                                <div className="flex flex-row">

                                                                    {/* //#Left Pane*/}
                                                                    <div className="w-2/3">

                                                                        {/*//#Form First-name */}
                                                                        <div className="flex flex-row m-3 p-2">

                                                                            <div className="w-1/3 text-lg text-black font-semibold mt-2">
                                                                                First Name
                                                                            </div>

                                                                            <div className="w-2/3 ">

                                                                                <div className="mt-1">
                                                                                    <input
                                                                                        type="text"
                                                                                        name="firstname"
                                                                                        id="firstname"
                                                                                        required={true}
                                                                                        placeholder="Please enter the user first name"
                                                                                        autoComplete="First name"
                                                                                        value={firstName}
                                                                                        className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-0 focus:border-gray-500 sm:text-sm"
                                                                                        onChange={(e) => setFirstName(e.target.value)}
                                                                                    />
                                                                                </div>

                                                                            </div>

                                                                        </div>

                                                                        {/*//#Form Last name */}
                                                                        <div className="flex flex-row m-3 p-2">

                                                                            <div className="w-1/3 text-lg text-black font-semibold mt-2">
                                                                                Last Name
                                                                            </div>

                                                                            <div className="w-2/3 ">

                                                                                <div className="mt-1">
                                                                                    <input
                                                                                        type="text"
                                                                                        name="firstname"
                                                                                        id="firstname"
                                                                                        required={true}
                                                                                        placeholder="Please enter the user last name"
                                                                                        autoComplete="First name"
                                                                                        value={lastName}
                                                                                        className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-0 focus:border-gray-500 sm:text-sm"
                                                                                        onChange={(e) => setLastName(e.target.value)}
                                                                                    />
                                                                                </div>

                                                                            </div>

                                                                        </div>

                                                                        {/*//#Form username */}
                                                                        <div className="flex flex-row m-3 p-2">

                                                                            <div className="w-1/3 text-lg text-black font-semibold mt-2">
                                                                                Username
                                                                            </div>

                                                                            <div className="w-2/3 ">

                                                                                <div className="mt-1">
                                                                                    <input
                                                                                        type="text"
                                                                                        name="username"
                                                                                        id="username"
                                                                                        required={true}
                                                                                        placeholder="Please enter the username"
                                                                                        autoComplete="username"
                                                                                        value={username}
                                                                                        className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-0 focus:border-gray-500 sm:text-sm"
                                                                                        onChange={(e) => setUsername(e.target.value)}
                                                                                    />
                                                                                </div>

                                                                            </div>

                                                                        </div>

                                                                        {/*//#Form Email */}
                                                                        <div className="flex flex-row m-3 p-2">

                                                                            <div className="w-1/3 text-lg text-black font-semibold mt-2">
                                                                                Email
                                                                            </div>

                                                                            <div className="w-2/3 ">

                                                                                <div className="mt-1">
                                                                                    <input
                                                                                        type="text"
                                                                                        name="email"
                                                                                        id="email"
                                                                                        required={true}
                                                                                        placeholder="Please enter the email"
                                                                                        autoComplete="email"
                                                                                        value={email}
                                                                                        className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-0 focus:border-gray-500 sm:text-sm"
                                                                                        onChange={(e) => setEmail(e.target.value)}
                                                                                    />
                                                                                </div>

                                                                            </div>

                                                                        </div>

                                                                        {/*//#Form Password */}
                                                                        <div className="flex flex-row m-3 p-2">

                                                                            <div className="w-1/3 text-lg text-black font-semibold mt-2">
                                                                                Password
                                                                            </div>

                                                                            <div className="w-2/3 ">

                                                                                <div className="mt-1">
                                                                                    <input
                                                                                        type="text"
                                                                                        name="password"
                                                                                        id="password"
                                                                                        required={true}
                                                                                        placeholder="Please enter the password"
                                                                                        autoComplete="password"
                                                                                        value={password}
                                                                                        className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-0 focus:border-gray-500 sm:text-sm"
                                                                                        onChange={(e) => setPassword(e.target.value)}
                                                                                    />
                                                                                </div>

                                                                            </div>

                                                                        </div>


                                                                        {/*//#Form confirm password */}
                                                                        <div className="flex flex-row m-3 p-2">

                                                                            <div className="w-1/3 text-lg text-black font-semibold mt-2">
                                                                                Confirm Password
                                                                            </div>

                                                                            <div className="w-2/3 ">

                                                                                <div className="mt-1">
                                                                                    <input
                                                                                        type="text"
                                                                                        name="confirm_password"
                                                                                        id="confirm_password"
                                                                                        required={true}
                                                                                        placeholder="Please confirm password"
                                                                                        autoComplete="confirm_password"
                                                                                        value={confirmPassword}
                                                                                        className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-0 focus:border-gray-500 sm:text-sm"
                                                                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                                                                    />
                                                                                </div>

                                                                            </div>

                                                                        </div>


                                                                    </div>


                                                               {/*     //#Right Pane*/}
                                                                    <div className="w-1/3 mt-4">

                                                                        <div className="w-2/3">
                                                                            <select
                                                                                className="block w-full text-gray-700  border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                                                                                name="status_type">
                                                                                <option value="none">
                                                                                    Role
                                                                                </option>
                                                                                <option value="admin">
                                                                                    Admin
                                                                                </option>
                                                                                <option value="customer_service">
                                                                                    Customer service
                                                                                </option>
                                                                                <option value="logistics_manager">
                                                                                    Logistics Manager
                                                                                </option>
                                                                                <option value="logistics">
                                                                                    Logistics
                                                                                </option>
                                                                                <option value="merchant">
                                                                                    Merchant
                                                                                </option>


                                                                            </select>
                                                                        </div>
                                                                        <div className="w-1/3">

                                                                        </div>

                                                                    </div>

                                                                </div>

                                                                <div className="flex flex-row mb-5">

                                                                    <div className="w-4/5"></div>

                                                                    <div  className="w-1/5 mr-4">
                                                                        {/*// Add user button*/}
                                                                        <div className=" inline-block text-left w-auto ">
                                                                            `  <button type="button"
                                                                                       className="border border-gray-300 bg-teal-500 shadow-sm hover:-bg-blue-500 hover:text-white justify-center rounded-md  px-4 py-2 text-sm font-medium text-white dark:text-gray-50 hover:bg-gray-50  focus:outline-none"
                                                                                       id="options-menu"
                                                                                       onClick={()=>{


                                                                                       }}
                                                                        >
                                                                            Create User

                                                                        </button>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </form>


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

export default CreateUserPage
