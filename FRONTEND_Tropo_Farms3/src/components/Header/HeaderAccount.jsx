import React, { useState, useEffect, useRef, useContext } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import CartScrollBar from "../CartScrollBar/CartScrollBar";
import EmptyCart from "../empty-states/EmptyCart/EmptyCart";

import  {StoreContext} from '@/context/storeContext';
import styles from "./Header.module.scss";
import useClickOutside from "../../util/clickOutside";
import { useRouter } from 'next/router'
import { WishListContext } from '@/context/wishListContext'




const HeaderAccount = ({ handleSearch, resetSearch, searchValue }) => {
    const [showCart, flipState] = useState(false);
    const [mobileSearch, setSearch] = useState(false);
    const [location,setLocation] = useState([]);
    const [data,setData] = useState({});
    const [total,setTotal] = useState(0.00);
    const [subTotal,setSubTotal] = useState(0.00);
    const [cart, setCart] = useState([]);


    //Added to persist cart state into the browser
  //  const [value,setValue] = useLocalStorage();


    const router = useRouter();

    const {
        locationName,
        handleChange,
       // cart,
        totalItems,
        totalAmount,
        removeProduct,
        bounce,
        bouceEnd,
    } = useContext(WishListContext);

    const cartPreview = useRef();


    function calculateSubtotal(data = []){
        let amount= 0.00;
        if(!data.isEmpty){
            for(let i = 0; i < data.length; i++){
                amount = amount + data[i].price * data[i].quantity;
            }
            setTotal(amount);
        }
    }


    function saveCart(data){

        window.localStorage.setItem("cart", JSON.stringify(data));
        setData(data);
        /*if(data.cart.length ===0 ){
            setTimeout(() => {
                router.push("/products")
            }, 3000);
        }*/
    }

    function deleteProduct(id){
        const newCart = cart.filter((x) => x.id !== id);


        const datas = {
            cart:newCart,
            totalAmount: calculateSubtotal(newCart),
            totalItems: totalItems-1
        }

        saveCart(datas);


    }




    //==================================  stocking cart  value in browser ==================================================

    function useLocalStorage(){
        if(typeof window !== "undefined"){
            const saved = window.localStorage.getItem('cart');


            if(saved !== null && saved !== undefined){
                // return JSON.parse(saved);
                const someData = JSON.parse(saved);
                setCart(someData.cart);
                replenishStore(someData.cart);
            }

        }
        return {};
    }

    function replenishStore(jsonData){
        jsonData?.map((item)=>{
            console.log(`Product: ${item.name}`);
            //addProduct(item);
        })
    }




    //======================================================================================





    useEffect(() => {

      useLocalStorage();

        if (bounce) {
            const timer1 = setTimeout(() => bouceEnd(), 1000);
            // this will clear Timeout when component unmount like in willComponentUnmount
            return () => {
                clearTimeout(timer1);
            };
        }
    }, [bounce, bouceEnd]);

    const handleCart = () => {
        flipState((prevCart) => !prevCart);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const handleMobileSearch = () => {
        setSearch(true);
    };

    const handleSearchNav = () => {
        setSearch(false);
        resetSearch();
    };

    /* function handleChange(e){
         console.log(`Selected: ${e.target.value}`);
         localStorage.setItem(KLastLocation, e.target.value);
         setLocationName(e.target.value);

     }*/

    function handleSlection(e){
        handleChange(e);
    }

    useClickOutside(() => flipState(false), cartPreview, true);


    function getImage(fishName){

        return `/fishes/${fishName}.jpg`;
    }

    const cartItems = cart?.map((product) => {
        return (
            <CSSTransition
                key={product.id}
                classNames="fadeIn"
                timeout={{
                    enter: 500,
                    exit: 300,
                }}
            >
                <li className={styles.cartItem} key={product.name}>
                    <img
                        className={styles.productImage}
                        src={getImage(product.name)}
                        alt="product"
                    />
                    <div className={styles.productInfo}>
                        <p className={styles.productName}>{product.name}</p>
                        <p className={styles.productPrice}>{product.price.toFixed(2)}</p>
                    </div>
                    <div className={styles.productTotal}>
                        <p className={styles.quantity}>
                            {product.quantity > 1 ? "x" : "x"}{" "}  {product.quantity}
                        </p>
                        <p ><span  className={styles.amountghs}></span> <span className={styles.amount}>{(product.quantity * product.price).toFixed(2)} </span> </p>

                    </div>
                    <button
                        className={styles.productRemove}
                        onClick={() => {
                            removeProduct(product.id);
                            deleteProduct(product.id);
                        }}
                        type="button"
                    >
                        ×
                    </button>
                </li>
            </CSSTransition>
        );
    });
    let view;
    if (cartItems?.length <= 0) {
        view = <EmptyCart />;
    } else {
        view = (
            <TransitionGroup component="ul" className={styles.cartItems}>
                {cartItems}
            </TransitionGroup>
        );
    }

    let cartBox = null;

    if (showCart)
        cartBox = (
            <div
                className={`${styles.cartPreview} ${styles.active}`}
                ref={cartPreview}
            >
                <CartScrollBar>{view}</CartScrollBar>
                <div className={styles.actionBlock}>
                    <button
                        type="button"
                        className={cart?.length > 0 ? " " : styles.disabled}

                        onClick={()=>{
                            if(cart.length > 0){
                                const data = {
                                    cart:cart,
                                    totalAmount: totalAmount,
                                    totalItems: totalItems
                                }
                                saveCart(data);
                                setTimeout(() => {
                                    router.push("/products/checkout");
                                })
                            }

                        }}
                    >
                        PROCEED TO CHECKOUT
                    </button>
                </div>
            </div>
        );

    return (
        <header className={styles.header} >
            <div className={styles.container}>
                <div className="xl:w-3/12 lg:w-3/12 sm:w-3/12 px-4 items-start">
                    <div className="relative w-full ">


                        {location.length > 0 &&
                        <select
                            className="block w-full text-gray-700 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                            value={locationName} onChange={handleSlection}
                            name="location">
                            {location.map((option) => (
                                <option value={option.location.toLowerCase()} key={option.index}>{option.location}</option>
                            ))}
                        </select>}
                    </div>
                </div>


                <div className={styles.brand}>
                    <img
                        className={styles.logoleft}
                        src="/logooo.png"
                        alt="Tropo Farm Logo"
                    />
                </div>

                <div className={styles.search}>
                    {/*<button
                        className={styles.mobileSearch}
                        onClick={handleMobileSearch}
                        type="button"
                    >
                        <img
                            src="https://res.cloudinary.com/sivadass/image/upload/v1494756966/icons/search-green.png"
                            alt="search"
                        />
                    </button>
                    <form
                        action="#"
                        method="get"
                        className={
                            mobileSearch
                                ? `${styles.searchForm} ${styles.active}`
                                : `${styles.searchForm}`
                        }
                    >
                        <button
                            className={styles.backButton}
                            onClick={handleSearchNav}
                            type="button"
                        >
                            <img
                                src="https://res.cloudinary.com/sivadass/image/upload/v1494756030/icons/back.png"
                                alt="back"
                            />
                        </button>
                        <input
                            type="search"
                            placeholder="Search for saved product"
                            className={styles.searchKeyword}
                            value={searchValue}
                            onChange={handleSearch}
                        />
                        <button
                            className={styles.searchButton}
                            type="submit"
                            onClick={handleSubmit}
                            aria-label="submit"
                        />
                    </form>*/}
                </div>

                <div className={styles.cart}>
                    <div className={styles.cartInfo}>
                        <table>
                            <tbody>
                            <tr>
                                <td>items</td>
                                <td>:</td>
                                <td>
                                    <strong>{totalItems}</strong>
                                </td>
                            </tr>
                            <tr>
                                <td>Total (Ghs)</td>
                                <td>:</td>
                                <td>
                                    <strong>{totalAmount.toFixed(2)}</strong>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <button
                        className={styles.cartIcon}
                        onClick={handleCart}
                        type="button"
                    >
                        <img
                            className={bounce ? styles.tada : " "}
                            src="/shopping.png"
                            alt="Cart"
                        />
                        {totalItems ? (
                            <span className={styles.cartCount}>{totalItems}</span>
                        ) : (
                            ""
                        )}
                    </button>
                    {cartBox}
                </div>

                <div className="pl-4 max-w-120-px">
                    <img
                        className={styles.logo}
                        src="/nosmay.png"
                        alt="Nosmay Logo"

                    />
                </div>
            </div>
        </header>
    );
};

export default HeaderAccount;
