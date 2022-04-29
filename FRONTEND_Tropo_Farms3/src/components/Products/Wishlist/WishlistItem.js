

import { useContext, useEffect, useReducer, useState } from 'react'
import styles from "../../Header/Header.module.scss";
import { WishListContext } from '@/context/wishListContext'
import { KLastLocation } from '@/components/constants'
import { useRouter } from 'next/router'
import CartReducer from '@/context/CartReducer'





const WishListItem = () =>{

    const [showModal, setShowModal] = useState(false);
    const [location, setLocation] = useState("N/A");
    const [total,setTotal] = useState(0.00);
    const [totalItem,setTotalItem] = useState(0);
    const [data,setData] = useState({});
    const router = useRouter();



    const {  openModal } = useContext(WishListContext);

    function showProduct(product={}){
        openModal(product);
    }

    const wishlist = [


        {
            id: 2,
            picture: '#',
            name: 'Tilapia',
            price_per_kilo: 57.97,
            warehouse_id: 1,
            warehouse_name: 'Kumasi',
            product_id: 0,
            isActive: true,
            inStock: true,

        },
        {
            id: 3,
            picture: '#',
            name: 'Nana-Esi',
            price_per_kilo: 27.79,
            warehouse_id: 1,
            warehouse_name: 'Kumasi',
            product_id:1,
            isActive: true,
            inStock: false,

        },
        {
            id: 4,
            picture: '#',
            name: 'Bayad',
            price_per_kilo: 96.19,
            warehouse_id:3,
            warehouse_name: 'Sunyani',
            product_id: 0,
            isActive: true,
            inStock: true,

        },
        {
            id: 5,
            picture: '#',
            name: 'snakehead',
            price_per_kilo: 70.83,
            warehouse_id: 8,
            warehouse_name: 'Dansoman',
            product_id: 4,
            isActive: true,
            inStock: true,

        },
        {
            id: 6,
            picture: '#',
            name: 'Gold',
            price_per_kilo:50.86,
            warehouse_id: 2,
            warehouse_name: 'East Legon',
            product_id: 6,
            isActive: true,
            inStock: true,

        },
        {
            id: 7,
            picture: '#',
            name: 'catfish',
            price_per_kilo: 12.24,
            warehouse_id: 8,
            warehouse_name: 'Kumasi',
            product_id:7,
            isActive: true,
            inStock: false,

        },
        {
            id: 8,
            picture: '#',
            name: 'Cassava',
            price_per_kilo: 16.06,
            warehouse_id: 9,
            warehouse_name: 'Cape Coast',
            product_id: 9,
            isActive: true,
            inStock: true,

        },

        {
            id: 9,
            picture: '#',
            name: 'Haze',
            price_per_kilo: 30.57,
            warehouse_id: 8,
            warehouse_name: 'Takoradi',
            product_id: 12,
            isActive: true,
            inStock: true,

        },



    ]


    function getImage(fishName){
        return `/fishes/${fishName}.jpg`;
    }

    //=============== All compoments needed
    const initialState = {
        cart: [],
        totalItems: 0,
        totalAmount: 0,
        bounce: false,
    };


    const [state, dispatch] = useReducer(CartReducer, initialState);


    const removeProduct = (id) => {
        dispatch({
            type: "REMOVE_PRODUCT",
            payload: id,
        });
    };

    const addProduct = (selectedProducts) => {
        dispatch({
            type: "ADD_PRODUCT",
            payload: selectedProducts,
        });
    };

    const bouceEnd = () => {
        dispatch({
            type: "BOUNCE_END",
        });
    };




    //==================================  stocking cart  value in browser ==========



    //Function to persist the cart state into the browser
   /* function getLocalStorage(){
        if(typeof window !== "undefined"){
            const saved = window.sessionStorage.getItem('cart');
            //  const saved = window.sessionStorage.getItem(key); // sessionStorage in case no need to persist data for  too long

            if(saved !== null && saved !== undefined){
                // return JSON.parse(saved);
                const someData = JSON.parse(saved);
                replenishStore(someData.cart);
            }

        }
        return {};
    }*/

    function replenishStore(jsonData){
        jsonData?.map((item)=>{
            console.log(`Product: ${item.name}`);
            addProduct(item);
        })
    }




    //==================================  stocking cart  value in browser ==================================================

    //Function to persist the cart state into the browser
    function getDataFromLocalStorage(){
        if(typeof window !== "undefined"){
            const saved = window.sessionStorage.getItem('cart');
            //  const saved = window.sessionStorage.getItem(key); // sessionStorage in case no need to persist data for  too long

            if(saved !== null && saved !== undefined){
                // return JSON.parse(saved);
                const someData = JSON.parse(saved);
                replenishStore(someData.cart);
                return JSON.parse(saved);
            }

        }
        return {};
    }

    function calculateSubtotal(data = []){
        let amount= 0.00;
        if(!data.isEmpty){
            for(let i = 0; i < data.length; i++){
                amount = amount + data[i].price * data[i].quantity;
            }
            setTotal(amount);
            setTotalItem(data.length)
        }
    }



    useEffect(()=>{
        setLocation(localStorage.getItem(KLastLocation));
        setData(getDataFromLocalStorage());
        setTotal(data.totalAmount);
        setTotalItem(data.totalItems)
        //calculateSubtotal(data.cart);
        // window.sessionStorage.setItem(key, JSON.stringify(value)); //sessionStorage in case no need to persist data for  too long
    },[]);


    function deleteWishlistProduct(id){
        const newCart = data.cart.filter((x) => x.id !== id);
        setData(newCart);

        const datas = {
            cart:newCart,
            totalAmount: calculateSubtotal(newCart),
            totalItems: setTotalItem(totalItem-1)
        }

       // saveCart(datas);
       // calculateSubtotal(newCart);

    }

    function saveCart(data){

        window.sessionStorage.setItem("cart", JSON.stringify(data));
        setData(data);
        /*if(data.cart.length ===0 ){
            setTimeout(() => {
                router.push("/products")
            }, 3000);
        }*/
    }






    //================================================================================






    return (
        <>
            <div className="flex w-full ">
                <div className="mt-24 flex w-full ">
                    <div className="w-2/12"> </div>
                    <div className="w-8/12  grid bg-white md:grid-cols-2  gap-6 p-3">
                        {
                            wishlist.map((product)=>(
                                <div>
                                    <div className="flex  max-w-400-px bg-white shadow-lg rounded-lg overflow-hidden">
                                        <div className={styles.imgbox}>
                                            <img src={getImage(product.name)} width="100" height="100"/>
                                        </div>
                                        <div className="w-2/3 p-4">
                                            <h1 className="text-gray-900 font-bold text-xl">
                                                {product.name}
                                            </h1>
                                            <p className="mt-1 text-gray-600 text-sm ">
                                                ({product.warehouse_name}) <span className="text-xs text-teal-500"> [In stock]</span>
                                            </p>


                                            <div >
                                                <div className="flex item-center  justify-between mt-1">
                                                    <h1 className="text-gray-700 font-bold text-lg">
                                                        <span className="text-sm text-gray-500">GHS</span>{product.price_per_kilo}<span className="text-xss text-gray-500">/KG</span>
                                                    </h1>

                                                </div>
                                            </div>

                                            <div >
                                                <div className="flex  mt-2">

                                                    <button data-modal-toggle="medium-modal"
                                                            className="px-3 py-2 ml-5 bg-lightBlue-500 text-white text-xs  font-bold uppercase rounded justify-items-end"
                                                            onClick={()=>showProduct(product)}
                                                    >
                                                        Add to Card
                                                    </button>
                                                    <div className="max-h-22-px max-w-22-px ml-5 pt-1 bg-contain  cursor-pointer">
                                                       {/* <img src="/cancel.png" />*/}
                                                        <div className="text-sm text-red-500">Remove</div>
                                                    </div>
                                                </div>
                                            </div>


                                        </div>
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                    <div className="w-2/12"> </div>
                </div>

                {/*Modal*/}
                {showModal ? (
                    <>
                        <div
                            className="ml-120 mt-24 overflow-x-hidden overflow-y-auto fixed max-h-860-px  z-50 outline-none focus:outline-none"
                        >
                            <div className="relative w-auto my-6 mx-auto justify-center  max-w-3xl ">
                                {/*content*/}
                                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                    {/*header*/}
                                    <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                                        <h3 className="text-3xl font-semibold">
                                            Modal Title
                                        </h3>
                                        <button
                                            className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                            onClick={() => setShowModal(false)}
                                        >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                                        </button>
                                    </div>
                                    {/*body*/}
                                    <div className="relative p-6 flex-auto">
                                        <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                                            I always felt like I could do anything. That’s the main
                                            thing people are controlled by! Thoughts- their perception
                                            of themselves! They're slowed down by their perception of
                                            themselves. If you're taught you can’t do anything, you
                                            won’t do anything. I was taught I could do everything.
                                            I always felt like I could do anything. That’s the main
                                            thing people are controlled by! Thoughts- their perception
                                            of themselves! They're slowed down by their perception of
                                            themselves. If you're taught you can’t do anything, you

                                        </p>
                                    </div>
                                    {/*footer*/}
                                    <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                        <button
                                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                            type="button"
                                            onClick={() => setShowModal(false)}
                                        >
                                            Close
                                        </button>
                                        <button
                                            className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                            type="button"
                                            onClick={() => setShowModal(false)}
                                        >
                                            Save Changes
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.box}> </div>
                    </>
                ) : null}

            </div>



        </>



    )
}

export default  WishListItem
