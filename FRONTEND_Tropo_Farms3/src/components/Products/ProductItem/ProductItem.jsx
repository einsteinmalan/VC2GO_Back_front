import React, { useState, useEffect, useReducer, useContext } from 'react'
import Counter from "../../Counter/Counter";
import styles from "./ProductItem.module.scss";
import cartReducer from  "../../../context/CartReducer";

import { ProductContext, StoreContext } from '@/context/storeContext'
import { KLastLocation, KWarehouseID } from '@/components/constants'
import Button from '@/components/Button'








const ProductItem = ({
  addToCart,
  openModal,
  id,
  price,
  image,
  name,
  unit,
  kg_available,
  fee_min  ,
  fee_max,
  weight_limit,
  lon,
  lat,
  description,
   warehouse,
   warehouse_id,
   isActive,
    category_id,
    price_per_crate,
    price_per_half_crate
}) => {
  const [quantity, updateQuantity] = useState(1);
  const [isAdded, setAddState] = useState(false);
  const [mass, setMass] = useState('KG');
  const [pricee, setPricee] = useState(price);
  const [isPerKilo, setIsPerKilo] = useState(true);
    const [metric, setMetric] = useState(1);//Crate Half-crate

  const {totalItem,setShowToast,showToast,showToaster,cartHasDifferentLocation} =   useContext(ProductContext);

  const metricList = [
      {
          id:1,
          name:"Kilo",
      },
      {
          id:2,
          name:"Crate",
      },
      {
          id:3,
          name:"Half-crate",
      },
  ];

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

    const initialStat = {
        cart: [],
        totalItems: 0,
        totalAmount: 0,
        bounce: false,
    };

  const [state, dispatch] = useReducer(cartReducer,initialStat);

  const addButtonClicked = (
    imageLocal,
    nameLocal,
    priceLocal,
    idLocal,
    unitLocal,
    quantityLocal
  ) => {
    const selectedProduct = {
      image: getImage(imageLocal),
      name: nameLocal,
      price: priceLocal,
      id: idLocal,
      quantity: quantityLocal,
      unit: unitLocal,
      warehouse: warehouse,
      fee_min: fee_min,
      fee_max: fee_min
    };
    addToCart(selectedProduct);
    setAddState(true);
  };

  const quickView = (
    quickImage,
    quickName,
    quickPrice,
    quickId
  ) => {
    const quickViewProduct = {
      image: quickImage,
      name: quickName,
      price: quickPrice,
      id: quickId,
    };
    openModal(quickViewProduct);
  };

  function setKiloCrate(){
      setMass(isPerKilo ? "CRATE": "KG")
      setIsPerKilo(!isPerKilo)

  }

  function getImage(fishName){
      return `/fishes/${fishName}.jpg`;
  }

    function setPrice(index){
        if(index === '1'){
            setPricee(price);
            setMass( "KG");

        }else  if(index === '2'){
            setPricee(price_per_crate);
            setMass( "CRATE");
        }else  if(index === '3'){
            setPricee(price_per_half_crate);
            setMass( "HALF-CRATE");
        }

    }

    function selectMetric(e){
        console.log(`target Value: ${e.target.value}`);
        setMetric(e.target.value);
        setPrice(e.target.value)

    }

  // let quantity = props.productQuantity;
  return (
    <div className="p-4 min-w-300-px ">
      <div className={styles.product}>
        <div className={styles.outline}>
          <div
            className={styles.productImage}
            onClick={() => quickView(getImage(image), name, price, id)}
            role="button"
          >

            <img src={getImage(name)} alt="" />
          </div>
          <h4 className={styles.productName}>{`${name}`}</h4>
          <p className={styles.productPrice}> {pricee} /
              <span className="" ><span className="flex-row">
                  <select
                      className="ml-1 w-100-px text-gray-700 text-sm py-1 px-1 border border-gray-300 bg-white rounded-md shadow-sm focus:none "
                      value={metric} onChange={selectMetric}
                      name="account_type">
                                        {metricList.map((option) => (
                                            <option value={option.id} key={option.id}>{option.name}</option>
                                        ))}
                                    </select>
              </span></span> </p>

         <div className="flex flex-row justify-items-center">

          <Counter productQuantity={quantity} updateQuantity={updateQuantity} />
         </div>
          <div className={styles.productAction}>
            <button
              className={!isAdded ? "" : styles.added}
              type="button"
              onClick={() =>{

                  if(cartHasDifferentLocation(warehouse)){

                  }else {
                      addButtonClicked(image, name, pricee, id, mass, quantity)
                  }

              }

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

export default ProductItem;
