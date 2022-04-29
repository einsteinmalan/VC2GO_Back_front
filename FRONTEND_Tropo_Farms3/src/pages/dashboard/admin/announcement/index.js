import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import { useState } from 'react'

const AnnouncementBoard = () => {

    const [loading, setLoading] = useState(false);
    const [title, setTitle] = useState("");
    const [link, setLink] = useState("");
    const [message, setMessage] = useState("");
    const [announceList, setAnnounceList] = useState([]);


    const createAnnouncement = async (ev) =>{
        console.log("POSTING ANNOUNCE...");
        ev.preventDefault();
        if(title.length !== 0 && message.length !== 0){
            try{
                setLoading(true);
                const rawResponse = await fetch('url', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(
                        {
                            "title": xxxxxxxxx,
                            "message": xxxxxxxxxxxx


                        }
                    )
                });
                const content = await rawResponse.json();
                setLoading(false);
                initFields();

                console.log(content);
            }catch (e) {
                console.log(e)
            }
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
                        <div className="w-full flex" >
                            <div className="w-1/5"></div>
                            <div className="w-4/5 ">
                               <main>
                                   <form onSubmit={createAnnouncement}>

                                       <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                                           Create Announcement
                                       </h6>



                                       <div className="flex flex-wrap">

                                           <div className="flex flex-wrap">
                                               <div className="w-full  px-4">
                                                   <div className="relative w-full mb-3">

                                                       <label  className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                               htmlFor="grid-password" >  User Type   </label>

                                                       <select
                                                           className="block w-full text-gray-700  border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                                                           name="account_type">
                                                           <option value="all">
                                                               Show all
                                                           </option>
                                                           <option value="customer">
                                                               Customer
                                                           </option>
                                                           <option value="employee">
                                                               Employee
                                                           </option>
                                                           <option value="admin">
                                                               Admin
                                                           </option>
                                                           <option value="customer_service">
                                                               Customer Service
                                                           </option>
                                                           <option value="logistic">
                                                               Logistic
                                                           </option>
                                                           <option value="delivery">
                                                               Delivery
                                                           </option>

                                                       </select>
                                                   </div>
                                               </div>

                                               <div className="w-full lg:w-6/12 px-4">

                                               </div>
                                           </div>

                                       </div>


                                       <div className="flex flex-wrap">
                                           <div className="w-full lg:w-12/12 px-4">
                                               <div className="relative w-full mb-3 mt-6">
                                                   <label
                                                       className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                       htmlFor="grid-password"
                                                   >
                                                       Title
                                                   </label>
                                                   <input
                                                       name="title"
                                                       id="tiele"
                                                       type="text"
                                                       value={title} onInput={(e )=> setTitle(e.target.value)}
                                                       className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                       placeholder="Title here..."
                                                       required
                                                   />
                                               </div>

                                               <div className="relative w-full mb-3 mt-6">
                                                   <label
                                                       className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                       htmlFor="grid-password"
                                                   >
                                                       Link
                                                   </label>
                                                   <input
                                                       name="link"
                                                       id="link"
                                                       type="text"
                                                       value={link} onInput={(e) => setLink(e.target.value)}
                                                       className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                       placeholder="link here..."
                                                       required
                                                   />
                                               </div>

                                               <div className="relative w-full mb-3 mt-6">
                                                   <label
                                                       className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                       htmlFor="grid-password"
                                                   >
                                                       Message to Users
                                                   </label>
                                                   <textarea
                                                       name="link"
                                                       id="link"
                                                       type="text"
                                                       value={message} onInput={(e) => setMessage(e.target.value)}
                                                       className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                       rows="12"
                                                       placeholder="Write here message that will be sent to selected users group"
                                                       required
                                                   />
                                               </div>

                                               {/*//#Debug: Drag-n-drop functionalities*/}
                                               <div className="sm:col-span-6">
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


                                               <div className="relative w-full mb-12 mt-12">
                                                   { loading ?
                                                       <button type="button"
                                                               className="py-2 px-4 flex justify-center items-center  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-gray-500 w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                                           <svg width="20" height="20" fill="currentColor" className="mr-2 animate-spin"
                                                                viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                                               <path
                                                                   d="M526 1394q0 53-37.5 90.5t-90.5 37.5q-52 0-90-38t-38-90q0-53 37.5-90.5t90.5-37.5 90.5 37.5 37.5 90.5zm498 206q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-704-704q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm1202 498q0 52-38 90t-90 38q-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-964-996q0 66-47 113t-113 47-113-47-47-113 47-113 113-47 113 47 47 113zm1170 498q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-640-704q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm530 206q0 93-66 158.5t-158 65.5q-93 0-158.5-65.5t-65.5-158.5q0-92 65.5-158t158.5-66q92 0 158 66t66 158z">
                                                               </path>
                                                           </svg>
                                                           posting...
                                                       </button>
                                                       :
                                                       <button
                                                           className="bg-teal-500 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                                                           type={"submit"}
                                                           // onClick={ createAnnouncement}


                                                       >
                                                           Post Announce
                                                       </button>
                                                   }
                                               </div>
                                               {/* #Debug: KYC_docd*/}

                                           </div>
                                       </div>


                                   </form>
                               </main>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </AppLayout>
    )
}

export default AnnouncementBoard
