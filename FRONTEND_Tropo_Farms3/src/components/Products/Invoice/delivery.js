import { UserAddIcon } from '@heroicons/react/outline/index'
import React, { useState } from 'react'
import ChooseDeliveryAgent from '@/components/pages/delivery/ChooseDelivery'


const DeliveryInvoice = ({order})=>{

     const [chooseDelivery, setChooseDelivery] = useState(false);

     function handleDeliveryChoice(){
         setChooseDelivery(!chooseDelivery);
     }


    function calculateSubtotal(list_products){
        let subtotal = 0.0;
        let subTotalDiscount = order.subsubTotal_coupon !== null ? order.subsubTotal_coupon/100:1;

        for (let i = 0; i < list_products.length; i++) {
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

        console.log(`Final subtotal is: ${subtotal * subTotalDiscount}`)

        return subtotal ;
    }

    function discountedValue(price, discount){
        return price * (discount/100);
    }




    return(
        <div className="flex items-center justify-center min-h-screen bg-gray-200 mb-6 pb-16 pt-8">
            <div className="w-4/5 bg-white shadow-lg mt-16">
                <div className="flex justify-between p-4">
                    <div>
                        <h1 className="text-3xl  font-extrabold tracking-widest text-indigo-500">Warehouse</h1>
                        <p className="text-base">{order.warehouse.location} {order.warehouse.contact !== null && order.warehouse.contact} </p>
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
                            className="text-sm font-medium"> {order.date}</span></h6>
                        <h6 className="font-bold">Order ID : <span
                            className="text-sm font-medium"> {order.order_number}</span></h6>
                        <h6 className="font-bold">Status : <span
                            className={order.status ==="Completed" ?'text-sm font-medium text-teal-500' :'text-sm font-medium'}> {order.status}</span></h6>
                    </div>
                    <div className="w-40">
                        <address className="text-sm">
                            <span className="font-bold">Ship To : </span>
                            {order.fullname}


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
                                order.products.length > 0 && order.products.map((product)=>(

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
                                            -GHS  {discountedValue(product.subsubTotal,product.discount)}
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
                                <td className="text-sm font-bold tracking-wider"><b>GHS {calculateSubtotal(order.products)}</b></td>
                            </tr>

                            <tr>
                                <th colSpan="3"></th>
                                <td className="text-sm font-bold"><b>Coupon</b></td>
                                <td className="text-sm font-bold"><b><span className="text-red-500">GHS {order.subsubTotal_coupon !== null ? calculateSubtotal(order.products) * order.subsubTotal_coupon/100 : "N/A" }</span></b></td>
                            </tr>

                            <tr className="text-sm  bg-gray-800 py-5">
                                <th colSpan="3"></th>
                                <td className="text-md font-bold text-lightBlue-600"><b>Total to Pay</b></td>
                                <td className="text-lg font-bold text-lightBlue-600" ><b>GHS {order.subsubTotal_coupon !== null ?calculateSubtotal(order.products) - calculateSubtotal(order.products) * order.subsubTotal_coupon/100 : calculateSubtotal(order.products) }</b></td>


                            </tr>


                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="flex justify-items-center p-4 pt-8">
                    <div className='flex-row  r'>
                       {/* //Put Delivery Agent selection here*/}

                       <span className="text-lg text-black font-bold mt-3"> Delivery Agent: </span>

                    </div>

                    <div className="ml-5 align-middle w-4/7 pb-16">
                        {chooseDelivery ?
                            <ChooseDeliveryAgent />
                            :
                            <button

                            className=" flex items-center justify-center bg-gray-100 hover:shadow-md py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 md:w-auto"
                            onClick={handleDeliveryChoice}
                        >
                            <UserAddIcon width={22}/> Add Delivery Agent

                        </button>}
                    </div>

                  {/*  <span><div>Hi---------------</div></span>*/}


                </div>

                <div className="w-full h-0.5 bg-indigo-500"></div>

              {/*  <div className="p-4">
                    <div className="flex items-center justify-center">
                        Thank you very much for doing business with us.
                    </div>
                    <div className="flex items-end justify-end space-x-3">
                        <button className="px-4 py-2 text-sm text-green-600 bg-green-100">Print</button>
                        <button className="px-4 py-2 text-sm text-blue-600 bg-blue-100"
                                onClick={()=>{
                                    router.push('/user/wishlist')
                                }}
                        >Save</button>
                        <button className="rounded border-blueGray-500 hover:shadow-lg hover:-mt-4 p-3 px-4 py-2 text-sm text-white bg-red-500">Send a Ticket</button>
                    </div>
                </div>*/}

            </div>
        </div>
    )
}

export  default DeliveryInvoice;
