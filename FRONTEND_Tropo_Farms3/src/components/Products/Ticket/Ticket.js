
import { useRouter } from 'next/router'

const TcketDetails = ({ticket})=>{
    console.log(`--> ${ticket?.order_number}`)
    const router = useRouter();

    function getStatusColor(status){
        if(status ==="pending"){
            return "bg-blueGray-400 md:mt-1 p-1 rounded tex-sm mt-2 px-4";
        }
        if(status ==="in-progress"){
            return "bg-lightBlue-500 md:mt-1 p-1 rounded tex-sm mt-2 px-4";
        }
        if(status ==="cancelled"){
            return "bg-red-500 md:mt-1 p-1 rounded tex-sm mt-2 px-4";
        }
        if(status ==="resolved"){
            return "bg-teal-200 md:mt-1 p-1 rounded tex-sm mt-2 px-4";
        }

        return "bg-orange-500 md:mt-1 p-1 rounded tex-sm mt-2 px-4";
    }

    function getIssueType(iType){
        if(iType === 1){
            return "Product Damaged At Delivery";
        }
        if(iType === 2){
            return "Product Not Delivered";
        }
        if(iType === 3){
            return "Other";
        }
    }




    return(
        <div className="flex items-center justify-center min-h-screen bg-gray-200 mb-6">
            <div className="w-3/5 bg-white shadow-lg mt-16">
                <div className="flex justify-between p-4">
                    <div>
                        <h1 className="text-3xl  font-extrabold tracking-widest text-indigo-500">Warehouse</h1>
                        <p className="text-base">{ticket?.warehouse.location} {ticket?.warehouse.contact !== null && ticket?.warehouse.contact} </p>
                    </div>
                    <div className="p-2">
                        <ul className="flex">

                            <li className="flex flex-col p-2 border-l-2 border-indigo-200">
                                <img src="/logooo.png" className="mb-2"/>
                                <span className="text-sm">
                                    Volta Catch, Accra PMB 450
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="w-full h-0.5 bg-lightBlue-500"></div>
                <div className="flex justify-between p-4">

                    <div>
                        <h6 className="font-bold">Order Date : <span
                            className="text-sm font-medium"> {ticket?.date}</span></h6>
                        <h6 className="font-bold">Order ID : <span
                            className="text-sm font-medium"> {ticket?.order_number}</span></h6>
                        <h6 className="font-bold">Status : <span
                            className={getStatusColor(ticket?.status)}> {ticket?.status.toUpperCase()}</span></h6>
                    </div>
                    <div className="w-40">
                        <address className="text-sm">
                            <span className="font-bold">Issue type : </span>
                            {getIssueType(ticket?.tickettype_id)}


                        </address>
                    </div>
                    <div></div>
                </div>

                <div className=" p-4">
                    <div className="border-b border-gray-200 shadow mt-8 mb-2">
                        {ticket?.complaint}
                    </div>

                    <hr/>

                    <div className="border-b border-gray-200 shadow mt-2 mb-6">
                        {ticket?.admin_message}
                    </div>
                </div>
                <div className="flex justify-between p-4">
                    <div>
                        <h3 className="text-xl">customer Service :</h3>
                        <ul className="text-xs list-disc list-inside">
                            <li>Please note that once you submit a ticket, it can take a maximun</li>
                            <li>of 24 hours before a customer care can reach you to resolve the</li>
                            <li>issue depending on the volume of order we have at the moment.</li>
                            <li>We encourage you to be patient until your problem is solved. Thanks</li>
                        </ul>
                    </div>

                    {/*Signature*/}
                    {/*  <div className="p-4">
                            <h3>Signature</h3>
                            <div className="text-4xl italic text-indigo-500">AAA</div>
                        </div>*/}
                </div>
                <div className="w-full h-0.5 bg-indigo-500"></div>

                <div className="p-4">
                    <div className="flex items-center justify-center">
                        Thank you very much for doing business with us.
                    </div>
                    <div className="flex items-end justify-end space-x-3">
                        <button className="px-4 py-2 text-sm text-green-600 bg-green-100"
                                onClick={()=>{
                                    router.back()
                                }}
                        >Print</button>
                        <button className="px-4 py-2 text-sm text-blue-600 bg-blue-100"
                                onClick={()=>{
                                    router.back()
                                }}
                        >Save</button>
                        <button className="rounded border-blueGray-500 hover:shadow-lg hover:-mt-4 p-3 px-4 py-2 text-sm text-white bg-red-500">Cancel Ticket</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export  default TcketDetails;
