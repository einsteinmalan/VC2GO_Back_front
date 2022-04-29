import React, { useContext, useState } from 'react'
import { TransitionGroup, CSSTransition } from "react-transition-group";
import ProductItem from "./ProductItem/ProductItem";
// import LoadingProducts from "./loaders/Products";
import NoResults from "../empty-states/NoResults/NoResults";
import styles from "./Products.module.scss";
import {categoryList} from '../data/data'
import {StoreContext} from '@/context/storeContext';
import { KCategory, KLastLocation, KUserLoggedIn } from '@/components/constants'
import { HomeIcon } from '@heroicons/react/outline/index'
import index from 'tailwindcss/lib/postcss-plugins/nesting'
import Footer from '@/components/Footer/Footer'
import ReactLoading from 'react-loading'
import {ProductContext} from '@/context/storeContext'
import { toast, Toaster } from 'react-hot-toast'
import useLocalStorage from '@/components/CustomHooks/useLocalStorage'


const Products = ({ searchTerm, productsList, openModal,warehouse }) => {

  const {  addProduct,setCategoryLoading, catLoading,totalItems,cart } = useContext(StoreContext);
    const [toggleState, setToggleState] = useState(1);
    const [showToast, setShowToast] = useState(false);
    const [message, setMessage] = useState("You already have a product from a different depot in your shopping Cart!!!");

    const [category,setCategory] = useLocalStorage(KCategory, '1');
    const [location,setLocation] = useLocalStorage('location', 'Malata');




    //console.log(`ADDProduct=>${addProduct}`)

  const term = searchTerm;

  const searchingFor = (searchText) => {
    return (x) => {
      return (
        x.name.toLowerCase().includes(searchText.toLowerCase()) || !searchText
      );
    };
  };


    const filterPerWarehouse = () => {
        return (x) => {
            return (
             x.warehouse === localStorage.getItem(KLastLocation)

            );
        };
    };

    function cartHasDifferentLocation(warehouz){

        let product_incompatible = [];
        let message = "You already have a product from a different depot in your shopping Cart!!!";
        if(cart?.length > 0){
            for(let i=0; i< cart.length; i++){

                if(cart[i].warehouse.trim() !== warehouz){
                    message = message + "\n" + `${cart[i].name + '(' + cart[i].quantity}` + ')' + ' ' + ':' + ` GHS ${cart[i].price}` + ` ->[${cart[i].warehouse}]`
                    setMessage(message);
                    showToaster();
                    setTimeout(()=>{

                    },2000)


                    return true;
                }
            }


        }else {
            return  false;
        }



        return false;


    }

    function  showToaster(){
      //  toast.error('You already have a product from a different depot in your shopping Cart!!!');
        //'You already have a product from a different depot in your shopping Cart!!!'

        toast.error( message, {
            style: {
                border: '1px solid #713200',
                padding: '16px',
                color: '#fff',
                backgroundColor:'#F42605'
            },
            iconTheme: {
                primary: '#fff',
                secondary: '#F7D23B',
            },
        })
    }

   /* const filteredData  = productsList
        .filter(
            item => item.warehouse.toLowerCase() === localStorage.getItem(KLastLocation).toLowerCase()
        );*/

    const filteredData  = productsList
        .filter(
            item => {
                 if(category !== "N/A"){
                    return    item.warehouse.toLowerCase() === location.toLowerCase() && item.category_id.toString() === category
                }else {
                    return    item.warehouse.toLowerCase() === location.toLowerCase()
                }

            }
        );



  const productsData = filteredData
    .filter(searchingFor(term))
    .map((product) => {
      return (
        <CSSTransition
          key={product.id}
          classNames="fadeIn"
          timeout={{
            enter: 300,
            exit: 500,
          }}
        >
          <ProductItem
            // key={product.id}
            price={product.price_per_kilo}
            name={product.name}
            image={product.image}
           // id={parseInt(product.id, 10)}
            id={product.id}
            unit="KG"
            addToCart={addProduct}
            // productQuantity={props.productQuantity}
            openModal={openModal}
            kg_available ={product.kg_available}
            fee_min = {product.fee_min}
            fee_max = {product.fee_max}
            weight_limit = {product.weight_limit}
            lon = {product.lon}
            lat = {product.lat}
            description = {product.description}
            warehouse = {product.warehouse}
            warehouse_id={product.warehouse_id}
            isActive = {product.isActive}
            category_id={product.category_id}
            price_per_crate={product.price_per_crate}
            price_per_half_crate = {product.price_per_half_crate}




          />
        </CSSTransition>
      );
    });

  // Empty and Loading States
  let view;
  // if (productsData.length <= 0 && !term) {
  //   view = <LoadingProducts />;
  // } else


  //if (productsData.length <= 0 && term) {
    if (productsData.length <= 0) {
    view = <NoResults />;
  } else {
    view = (
      <TransitionGroup component="div" className="flex flex-row flex-grow  grid md:grid-cols-2 sm:grid-cols-1  lg:grid-cols-3 xl:grid-cols-4 gap-2">
        {productsData}
      </TransitionGroup>
    );
  }
  return  <div className="flex ">
              <Toaster
                  position="top-center"
                  reverseOrder={false}
              />
          <nav className="hidden md:block   h-screen sticky  top-0  w-1/5 md:shadow transform bg-green sticky top-0 bottom-0  ">


                    <div className="h-450-px">
                        <div className="sidebar-content w-full px-4 py-4 mt-24 ">
                            <ul className="flex flex-col w-full">
                                {
                                    categoryList.map((category)=>(
                                        <li className="" onClick={() => {
                                            setCategoryLoading(2000);
                                            setToggleState(category.id);
                                            //localStorage.setItem(KCategory,category.id.toString());
                                            setCategory(category.id.toString())




                                        }}  key={category.id}>
                                 <span
                                     className={toggleState ===    category.id ?
                                         'flex flex-row items-center h-10 px-3 rounded-lg text-gray-700 bg-gray-100'
                                         : 'flex font-medium text-white px-4 my-4 text-md hover:text-lightBlue-600 cursor-pointer'}>
                                <span className="mt-1 ml-2">{category.name}</span></span>
                                        </li>
                                    ))
                                }
                            </ul>


                        </div>


                    </div>


              <div className="bg-orange-300 h-350-px ">  </div>

         </nav>

      {
          catLoading ?
              <div className="w-full mt-16 pt-12 grid place-items-center">
                  <ReactLoading type="spokes" color="#F42605" height={120} width={120}/>
                  <div className="text-center text-lg text-gray-500 "> Loading ...</div>
              </div>
              :
              <ProductContext.Provider value={
                  {
                      totalItem:totalItems,
                      setShowToast: setShowToast,
                      showToast: showToast.valueOf(),
                      showToaster: showToaster,
                      cartHasDifferentLocation: cartHasDifferentLocation

                  }
              }

              >


                  <div className={styles.productsWrapper}>{view}</div>
              </ProductContext.Provider>
      }




  </div>;
    <div>

    </div>
  //return <div className="flex-wrap flex-auto">{view}</div>;
};

export default Products;
