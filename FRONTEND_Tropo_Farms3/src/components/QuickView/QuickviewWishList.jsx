import React, { useEffect, useReducer, useRef, useState } from 'react'

import useClickOutside from "../../util/clickOutside";
//import styles from "./QuickView.module.scss";
import styles from "./QuickViewWishList.module.scss";

import Counter from '@/components/Counter/Counter'
import CartReducer from '@/context/CartReducer'
import { KLastLocation } from '@/components/constants'




const QuickViewWishList = ({ closeModal, openModalState, product }) => {
    const domNode = useRef();

    const [quantity, updateQuantity] = useState(1);
    const [isAdded, setAddState] = useState(false);
    const [productType, setProductType] = useState("");
    const [priceTage, setPriceTage] = useState(0);



    useEffect(() => {
        if (!isAdded) {
            return;
        }
        const timer1 = setTimeout(() => setAddState(false), 3500);
        // this will clear Timeout when component unmount like in willComponentUnmount
        return () => {
            clearTimeout(timer1);
        };
    }, [isAdded]);


   function handleChange(e) {

       // this.setState({ fruit: e.target.value });
        setProductType(e.target.value);

    }



    const addProduct = (selectedProducts) => {
        dispatch({
            type: "ADD_PRODUCT",
            payload: selectedProducts,
        });
    };


    const addButtonClicked = (
        imageLocal,
        nameLocal,
        priceLocal,
        idLocal,
        quantityLocal
    ) => {
        const selectedProduct = {
            image: getImage(imageLocal),
            name: nameLocal,
            price: priceLocal,
            id: idLocal,
            quantity: quantityLocal,
            unit: "KG",
        };
        addProduct(selectedProduct);
        setAddState(true);

    };


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



    const bouceEnd = () => {
        dispatch({
            type: "BOUNCE_END",
        });
    };



    //==================================  stocking cart  value in browser ==========


    useClickOutside(closeModal, domNode, false);




    function getImage(fishName){

        return `/fishes/${fishName}.jpg`;
    }






    return (
        <div
            className={
                openModalState
                    ? `${styles.modalWrapper} ${styles.active}`
                    : styles.modalWrapper
            }
        >
            <div className={styles.modal} ref={domNode}>
                <button type="button" className={styles.close} onClick={closeModal}>
                    &times;
                </button>
                <div className={styles.quickViewDetails}>
                    <div className="object-contain h-48 w-96 grid place-items-center">
                        <img src={getImage(product.name)} alt={product.name}  className="h-250-px object-contain"/>
                    </div>
                    <div className={styles.quickViewDetails}>
                        <span className={styles.productName}>{product.name}</span>
                       {/* <span className="text-gray-500 text-sm">{product.description}</span>*/}

                        <div className="Flex w-full mt-3">

                            <span className={styles.productPrice}>{productType}</span>
                            <select onChange={handleChange}
                                className="block w-3/5 text-gray-700 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                                name="account_type">
                                <option value={product.price_per_kilo}>
                                    Per Kilogram (KG)
                                </option>
                                <option value={product.price_per_kilo*10}>
                                    Per Crate
                                </option>

                            </select>
                        </div>

                    </div>

                    <Counter productQuantity={quantity} updateQuantity={updateQuantity} />
                    <div className={styles.productAction}>
                        <button
                            className={!isAdded ? "border-2 bg-gray-200 hover:shadow-md  p-2 rounded-md " : styles.added}
                            type="button"
                            onClick={() =>
                                addButtonClicked(getImage(product.name), name, product.price_per_kilo, product.id, quantity)
                            }
                        >
                            {!isAdded ? "ADD TO CART" : "✔ ADDED"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuickViewWishList;
