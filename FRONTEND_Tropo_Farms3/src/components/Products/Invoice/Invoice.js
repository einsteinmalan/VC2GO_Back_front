
 //BACKUP
 /*
import Link from 'next/link'
import { EmojiSadIcon } from '@heroicons/react/outline/index'
import React from 'react'

import { KOrderNumber } from '@/components/constants'
import { ordersList } from '@/components/data/data'
import { useRouter } from 'next/router'
import useLocalStorage from '@/components/CustomHooks/useLocalStorage'

const Invoice = ({order})=>{

    const [purchase,setPurchase] = useLocalStorage("purchase", {});

    const router = useRouter();

    function calculateSubtotal(list_products){
        let subtotal = 0.0;
        let subTotalDiscount = order?.totalAmount ;
        //   let subTotalDiscount = order?.totalAmount !== null ? order?.subsubTotal_coupon/100:1;

        for (let i = 0; i < list_products?.length; i++) {
            let productDiscount = list_products[i].discount != null ? list_products[i].discount/100 : 0;
            subtotal =subtotal + list_products[i].subsubTotal - (list_products[i].subsubTotal * productDiscount);
            console.log(`subtotal +: ${list_products[i].subsubTotal - (list_products[i].subsubTotal * productDiscount)}`)
            console.log(`subtotal is: ${subtotal}`)
        }

      /!*  list_products.map((product) =>{
            let productDiscount = product.discount != null ? product.discount/100 : 1;
            subtotal =subtotal + product.subsubTotal - (product.subsubTotal * productDiscount);
            console.log(`subtotal is: ${subtotal}`)
        });
*!/

        console.log(`Final subtotal is: ${subTotalDiscount}`)

      // return subtotal ;
        return subTotalDiscount;
    }

    function discountedValue(price, discount){
        return price * (discount/100);
    }




    return(
        <div className="flex items-center justify-center min-h-screen bg-gray-200 mb-6 pb-16 pt-8">
            <div className="w-3/5 bg-white shadow-lg mt-16">
                <div className="flex justify-between p-4">
                    <div>
                        <h1 className="text-3xl  font-extrabold tracking-widest text-indigo-500">Warehouse</h1>
                        <p className="text-base">{order?.warehouse?.location} {order?.warehouse?.contact !== null && order?.warehouse?.contact} </p>
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
                            className="text-sm font-medium"> {order?.date}</span></h6>
                        <h6 className="font-bold">Order ID : <span
                            className="text-sm font-medium"> {order?.order_number}</span></h6>
                        <h6 className="font-bold">Status : <span
                            className={order?.status ==="Completed" ?'text-sm font-medium text-teal-500' :'text-sm font-medium'}> {order?.status}</span></h6>
                    </div>
                    <div className="w-40">
                        <address className="text-sm">
                            <span className="font-bold">Ship To : </span>
                            {order?.fullname}


                        </address>
                    </div>
                    <div></div>
                </div>

                <div className="flex justify-center p-4">
                    <div className="border-b border-gray-200 shadow">
                        <table className="">
                            <thead className="bg-gray-50">
                            <tr>
                                <th className="px-4 py-2 text-xs text-gray-500 ">
                                    #
                                </th>
                                <th className="px-4 py-2 text-xs text-gray-500 ">
                                    Product Name
                                </th>
                                <th className="px-4 py-2 text-xs text-gray-500 ">
                                    Quantity
                                </th>
                                <th className="px-4 py-2 text-xs text-gray-500 ">
                                    Discount
                                </th>
                                <th className="px-4 py-2 text-xs text-gray-500 ">
                                    Subtotal
                                </th>
                            </tr>
                            </thead>
                            <tbody className="bg-white shadow-sm">

                            {
                                purchase.cart?.length > 0 && purchase.cart.map((product)=>(

                                    <tr className="whitespace-nowrap" key={product.id}>
                                        <td className="px-6 py-4 text-sm text-gray-500">
                                            {product.id}
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="text-sm text-gray-900">
                                                {product.name}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="text-sm text-gray-500">{product.quantity}</div>
                                        </td>
                                        <td className="px-6 py-4 text-sm text-red-500">
                                            -GHS  {discountedValue(product.quantity,0)}
                                        </td>
                                        <td className="px-6 py-4">
                                            GHS {product.subsubTotal}
                                        </td>
                                    </tr>

                                ))
                            }



                            <tr className="">
                                <td colSpan="3"></td>
                                <td className="text-sm font-bold">Sub Total</td>
                                <td className="text-sm font-bold tracking-wider"><b>GHS {calculateSubtotal(purchase.cart)}</b></td>
                            </tr>

                            <tr>
                                <th colSpan="3"></th>
                                <td className="text-sm font-bold"><b>Coupon</b></td>
                               {/!* <td className="text-sm font-bold"><b><span className="text-red-500">GHS {order?.subsubTotal_coupon !== null ? calculateSubtotal(purchase.cart) * order?.subsubTotal_coupon/100 : "N/A" }</span></b></td>*!/}
                                <td className="text-sm font-bold"><b><span className="text-red-500">GHS 0</span></b></td>

                            </tr>

                            <tr className="text-sm  bg-gray-800 py-5">
                                <th colSpan="3"></th>
                                <td className="text-md font-bold text-lightBlue-600"><b>Total to Pay</b></td>
                               {/!* <td className="text-lg font-bold text-lightBlue-600" ><b>GHS {order?.subsubTotal_coupon !== null ?calculateSubtotal(purchase.cart) - calculateSubtotal(purchase.cart) * order?.subsubTotal_coupon/100 : calculateSubtotal(purchase.cart) }</b></td>*!/}
                                <td className="text-lg font-bold text-lightBlue-600" ><b>GHS {order?.totalAmount  }</b></td>


                            </tr>


                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="flex justify-between p-4">
                    <div>
                        <h3 className="text-xl">Terms And Condition :</h3>
                        <ul className="text-xs list-disc list-inside">
                            <li>All orders are to be paid only on delivery by Mobile Money</li>
                            <li>The delivery agent will call the number you provided at checkout</li>
                            <li>Please check with the delivery agent that all is well before making any transaction</li>
                        </ul>
                    </div>

                    {/!*Signature*!/}
                    {/!*  <div className="p-4">
                            <h3>Signature</h3>
                            <div className="text-4xl italic text-indigo-500">AAA</div>
                        </div>*!/}
                </div>
                <div className="w-full h-0.5 bg-indigo-500"></div>

                <div className="p-4">
                    <div className="flex items-center justify-center">
                        Thank you very much for doing business with us.
                    </div>
                    <div className="flex items-end justify-end space-x-3">

                        <button className="px-4 py-2 text-sm text-blue-600 bg-blue-100"
                                onClick={()=>{

                                    router.back()
                                }}
                        >Save</button>



                        <button

                            className="min-w-140-px flex items-center justify-center bg-red-500 hover:shadow-md py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-white hover:-bg-blue-500 focus:outline-none  md:w-auto"
                            onClick={()=>{

                                localStorage.setItem(KOrderNumber,order?.order_number);
                                router.push('/products/view/ticket/create')

                            }}
                        >
                            <EmojiSadIcon width={22}/>  Send Complaint

                        </button>

                    </div>
                </div>

            </div>
        </div>
    )
 }

 export  default Invoice;
*/



 import Link from 'next/link'
 import { EmojiSadIcon } from '@heroicons/react/outline/index'
 import React from 'react'

 import { KOrderNumber } from '@/components/constants'
 import { ordersList } from '@/components/data/data'
 import { useRouter } from 'next/router'
 import useLocalStorage from '@/components/CustomHooks/useLocalStorage'

 const Invoice = ({order})=>{

     const [purchase,setPurchase] = useLocalStorage("purchase", {});
     const [orderNumber,setOrderNumber] = useLocalStorage("order_number", 'N/A');

     const router = useRouter();

     function showDate(value){
         if(value === null || value === undefined){
             return "";
         }
         var str_1 = value.split("T");
         var str_2 = str_1[0];
         return str_2;

     }

     function calculateSubtotal(list_products){
         let subtotal = 0.0;
         let subTotalDiscount = order?.totalAmount ;
         //   let subTotalDiscount = order?.totalAmount !== null ? order?.subsubTotal_coupon/100:1;

         for (let i = 0; i < list_products?.length; i++) {
             let productDiscount = list_products[i].discount != null ? list_products[i].discount/100 : 0;
             subtotal =subtotal + list_products[i].subsubTotal - (list_products[i].subsubTotal * productDiscount);
             console.log(`subtotal +: ${list_products[i].subsubTotal - (list_products[i].subsubTotal * productDiscount)}`)
             console.log(`subtotal is: ${subtotal}`)
         }

         /*  list_products.map((product) =>{
               let productDiscount = product.discount != null ? product.discount/100 : 1;
               subtotal =subtotal + product.subsubTotal - (product.subsubTotal * productDiscount);
               console.log(`subtotal is: ${subtotal}`)
           });
   */

         console.log(`Final subtotal is: ${subTotalDiscount}`)

         // return subtotal ;
         return subTotalDiscount;
     }

     function discountedValue(price, discount){
         return price * (discount/100);
     }


     function deliveryStatusName(status_id){
         if(status_id===2){
             return "In-progress";
         } else if(status_id ===3){
             return "Completed";
         }else if(status_id ===4){
             return "Cancelled";
         }

         return "Pending";
     }

     function deliveryStatusCss(status_id){
         if(status_id===2){
             return "md:mt-1 pl-4 text-sm font-medium text-lightBlue-500";
         } else if(status_id ===3){
             return "md:mt-1 pl-4 text-sm font-medium text-teal-500";
         }else if(status_id ===4){
             return "md:mt-1 pl-4 text-sm font-medium text-red-500";
         }

         return "md:mt-1 pl-4 text-sm font-medium text-gray-500 ";
     }




     return(
         <div className="flex items-center justify-center min-h-screen bg-gray-200 mb-6 pb-16 pt-8">
             <div className="w-3/5 bg-white shadow-lg mt-16">
                 <div className="flex justify-between p-4">
                     <div>
                         <h1 className="text-3xl  font-extrabold tracking-widest text-indigo-500">Warehouse</h1>
                         <p className="text-base">{purchase?.delivery?.warehouse_name} </p>
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
                             className="text-sm font-medium"> {purchase?.delivery?.date}</span></h6>
                         <h6 className="font-bold">Order ID : <span
                             className="text-sm font-medium"> {purchase?.delivery?.order_id}</span></h6>
                         <h6 className="font-bold">Status : <span
                             className={deliveryStatusCss(purchase?.delivery?.deliverystatus_id)}> {deliveryStatusName(purchase?.delivery?.deliverystatus_id)}</span></h6>

                         <h6 className="font-bold">Delivery Date : <span
                             className="text-sm font-medium"> {showDate(purchase?.delivery?.delivery_date)}</span>
                         </h6>

                         <h6 className="font-bold">Network : <span
                             className="text-sm font-medium"> {purchase?.delivery?.network}</span>
                         </h6>

                         <h6 className="font-bold">Pickup : <span
                             className="text-sm font-medium"> {purchase?.delivery?.pickup}</span>
                         </h6>

                         <h6 className="font-bold">Number : <span
                             className="text-sm font-medium"> {purchase?.delivery?.Customer_phone}</span>
                         </h6>

                         {purchase?.delivery?.agent_name !== "N/A" ? <h6 className="font-bold">Delivery Agent : <span
                             className="text-sm font-medium"> {purchase?.delivery?.agent_name} (Phone: {purchase?.delivery?.agent_phone})</span>
                         </h6>
                             : <div></div>
                         }




                     </div>
                     <div className="w-40">
                         <address className="text-sm">
                             <span className="font-bold">Ship To : </span>
                             {purchase?.delivery?.customer_name}


                         </address>
                     </div>
                     <div></div>
                 </div>

                 <div className="flex justify-center p-4">
                     <div className="border-b border-gray-200 shadow">
                         <table className="">
                             <thead className="bg-gray-50">
                             <tr>
                                 <th className="px-4 py-2 text-xs text-gray-500 ">
                                     #
                                 </th>
                                 <th className="px-4 py-2 text-xs text-gray-500 ">
                                     Product Name
                                 </th>
                                 <th className="px-4 py-2 text-xs text-gray-500 ">
                                     Quantity
                                 </th>
                                 <th className="px-4 py-2 text-xs text-gray-500 ">
                                     Discount
                                 </th>
                                 <th className="px-4 py-2 text-xs text-gray-500 ">
                                     Subtotal
                                 </th>
                             </tr>
                             </thead>
                             <tbody className="bg-white shadow-sm">

                             {
                                 purchase?.data?.cart?.length > 0 && purchase?.data?.cart.map((product)=>(

                                     <tr className="whitespace-nowrap" key={product.id}>
                                         <td className="px-6 py-4 text-sm text-gray-500">
                                             {product.id}
                                         </td>
                                         <td className="px-6 py-4">
                                             <div className="text-sm text-gray-900">
                                                 {product.name}
                                             </div>
                                         </td>
                                         <td className="px-6 py-4">
                                             <div className="text-sm text-gray-500">{product.quantity}</div>
                                         </td>
                                         <td className="px-6 py-4 text-sm text-red-500">
                                             -GHS  {discountedValue(product.quantity,0)}
                                         </td>
                                         <td className="px-6 py-4">
                                             GHS {product.quantity * product.price}
                                         </td>
                                     </tr>

                                 ))
                             }



                             <tr className="">
                                 <td colSpan="3"></td>
                                 <td className="text-sm font-bold">Sub Total</td>
                                 <td className="text-sm font-bold tracking-wider"><b>GHS {calculateSubtotal(purchase.cart)}</b></td>
                             </tr>

                             <tr>
                                 <th colSpan="3"></th>
                                 <td className="text-sm font-bold"><b>Coupon</b></td>
                                 {/* <td className="text-sm font-bold"><b><span className="text-red-500">GHS {order?.subsubTotal_coupon !== null ? calculateSubtotal(purchase.cart) * order?.subsubTotal_coupon/100 : "N/A" }</span></b></td>*/}
                                 <td className="text-sm font-bold"><b><span className="text-red-500">GHS 0</span></b></td>

                             </tr>

                             <tr className="text-sm  bg-gray-800 py-5">
                                 <th colSpan="3"></th>
                                 <td className="text-md font-bold text-lightBlue-600"><b>Total to Pay</b></td>
                                 {/* <td className="text-lg font-bold text-lightBlue-600" ><b>GHS {order?.subsubTotal_coupon !== null ?calculateSubtotal(purchase.cart) - calculateSubtotal(purchase.cart) * order?.subsubTotal_coupon/100 : calculateSubtotal(purchase.cart) }</b></td>*/}
                                 <td className="text-lg font-bold text-lightBlue-600" ><b>GHS {order?.totalAmount  }</b></td>


                             </tr>


                             </tbody>
                         </table>
                     </div>
                 </div>
                 <div className="flex justify-between p-4">
                     <div>
                         <h3 className="text-xl">Terms And Condition :</h3>
                         <ul className="text-xs list-disc list-inside">
                             <li>All orders are to be paid only on delivery by Mobile Money</li>
                             <li>The delivery agent will call the number you provided at checkout</li>
                             <li>Please check with the delivery agent that all is well before making any transaction</li>
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

                         <button className="px-4 py-2 text-sm text-blue-600 bg-blue-100"
                                 onClick={()=>{

                                     router.back()
                                 }}
                         >Save</button>



                         <button

                             className="min-w-140-px flex items-center justify-center bg-red-500 hover:shadow-md py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-white hover:-bg-blue-500 focus:outline-none  md:w-auto"
                             onClick={()=>{

                                 setOrderNumber(purchase?.delivery?.order_id);
                                 router.push('/products/view/ticket/create')

                             }}
                         >
                             <EmojiSadIcon width={22}/>  Send Complaint

                         </button>

                     </div>
                 </div>

             </div>
         </div>
     )
 }

 export  default Invoice;

