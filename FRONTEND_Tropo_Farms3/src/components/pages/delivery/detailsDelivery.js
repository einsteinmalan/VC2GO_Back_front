import { LocationMarkerIcon } from '@heroicons/react/outline/index'
import React, { useEffect, useState } from 'react'
import ChooseDeliveryAgent from '@/components/pages/delivery/ChooseDelivery'
import { deliveryOrderList, ordersList } from '@/components/data/data'
import DeliveryMap from '@/components/pages/delivery/DisplayMapDelivery'


const DetailsDelivery = ({order})=>{

    const [chooseDelivery, setChooseDelivery] = useState(false);
    const [orderList, setOrderList] = useState({});
    const [ready, setReady] = useState(false);

   const maps = {
       //5.529280, -0.428219  (kasoa)
       //5.686764, -0.109624  (East Legon)
        center: {
            lat: 5.529280,
            lng: -0.428219
        },
        zoom: 11
    }

    function handleDeliveryChoice(){
        setChooseDelivery(!chooseDelivery);
    }

    function getOrderList(id){
        const selectedOrder = ordersList.filter(p => p.id === id);

        setOrderList(selectedOrder[0]);
        setReady(true);
        // console.log(`ORDER: => \n ${selectedOrder[0].warehouse.location}`)
        //console.log(`orderList: => \n ${orderList.warehouse.location}`)
    }


    function calculateSubtotal(list_products){
        let subtotal = 0.0;
        let subTotalDiscount = orderList.subsubTotal_coupon !== null ? orderList.subsubTotal_coupon/100:1;

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

    function getDeliveryStatus(status){
        if(status ===1){
            return 'Pending';
        }else if(status ===2){
            return 'In-progress';
        }else if(status ===3){
            return 'Cancelled';
        }else if(status ===4){
            return 'Completed';
        }
    }


    useEffect(()=>{
        getOrderList(order.order_id);
    },[])




    return(
        <div className="flex items-center justify-center min-h-screen bg-gray-200 mb-6 pb-16 pt-8">
            {  ready ?  <div className="w-4/5 bg-white shadow-lg mt-16">
                <div className="flex justify-between p-4">
                    <div>
                        <h1 className="text-3xl  font-extrabold tracking-widest text-indigo-500">Warehouse</h1>
                        <p className="text-base">{orderList.warehouse.location} {orderList.warehouse.contact !== null && orderList.warehouse.contact} </p>
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
                            className="text-sm font-medium"> {orderList?.date}</span></h6>
                        <h6 className="font-bold">Order ID : <span
                            className="text-sm font-medium"> {orderList?.order_number}</span></h6>
                        <h6 className="font-bold">Status : <span
                            className={order.deliverystatus_id === 1 ? 'text-sm font-medium text-teal-500' : 'text-sm font-medium'}> {getDeliveryStatus(order.deliverystatus_id)}</span>
                        </h6>
                    </div>
                    <div className="w-40">
                        <address className="text-sm">
                            <span className="font-bold">Ship To : </span>
                            {order.customer_name}


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
                                orderList.products.length > 0 && orderList.products.map((product) => (

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
                                            -GHS {discountedValue(product.subsubTotal, product.discount)}
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
                                <td className="text-sm font-bold tracking-wider">
                                    <b>GHS {calculateSubtotal(orderList.products)}</b></td>
                            </tr>

                            <tr>
                                <th colSpan="3"></th>
                                <td className="text-sm font-bold"><b>Coupon</b></td>
                                <td className="text-sm font-bold"><b><span
                                    className="text-red-500">GHS {orderList.subsubTotal_coupon !== null ? calculateSubtotal(orderList.products) * orderList.subsubTotal_coupon / 100 : 'N/A'}</span></b>
                                </td>
                            </tr>

                            <tr className="text-sm  bg-gray-800 py-5">
                                <th colSpan="3"></th>
                                <td className="text-md font-bold text-lightBlue-600"><b>Total to Pay</b></td>
                                <td className="text-lg font-bold text-lightBlue-600">
                                    <b>GHS {orderList.subsubTotal_coupon !== null ? calculateSubtotal(orderList.products) - calculateSubtotal(orderList.products) * orderList.subsubTotal_coupon / 100 : calculateSubtotal(orderList.products)}</b>
                                </td>


                            </tr>


                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="flex justify-items-center align-middle p-4 pt-8">
                    <div className='flex-row  r'>


                        <span className="text-lg text-black font-bold mt-5"> Delivery Agent: </span>

                    </div>

                    <div className="ml-5 align-middle w-2/5 pb-16">
                        <div className="text-gray-900 cursor-default cursor-pointer bg-lightBlue-500 mr-3  select-none relative py-2 pl-3 ">
                            <div className="flex items-center text-white">
                                <img width={42} height={42} src="/user.png" alt="person"
                                     className="flex-shrink-0 h-6 w-6 rounded-full"/>
                                <span className="ml-3 block font-normal truncate">
                                            {order.agent_name} | <span className=''> {order.agent_phone}</span>
                                     </span>

                            </div>
                        </div>


                    </div>

                                 <span className='ml-20'>
                                    <LocationMarkerIcon width={32} height={32} />
                                     {order.destination}
                                </span>




                </div>

                    <DeliveryMap props = {maps} />

                <div className="h-95-px  w-4/7">



                </div>



                <div className="p-4 ">



                </div>

            </div>
                :
                <div className="w-4/5 bg-white shadow-lg mt-16"> </div>
            }
        </div>
    )
}

export  default DetailsDelivery;
