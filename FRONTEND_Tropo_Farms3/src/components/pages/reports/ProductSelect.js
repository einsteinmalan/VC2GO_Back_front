
import { SelectorIcon, CheckIcon } from '@heroicons/react/outline/index'
import { allProducts, deliveryAgentList } from '@/components/data/data'
import { useContext, useEffect, useState } from 'react'
import {  ReportContext } from '@/context/storeContext'

const ProductSelect = () =>{

    const {
        /*selectedIndex,
        handleClickSelect,
        selectedWarehouse,
        parseSelectedUser,
        selectedName,
        setSelectedImage,
        openSelector,
        setOpenSelector,
        getImage,
        warehouseList,
        getWarehouseProductList,
        setWarehouseList*/
        setOnFocus,

    } =   useContext(ReportContext);


    const [warehouseList,setWarehouseList] = useState([]);


    const [selectedImage, setSelectedImage] = useState('');
    const [selectedIndex, setSelectedIndex] = useState(1);
    const [selectedWarehouse, setSelectedWarehouse] = useState('');
    const [selectedName, setSelectedName] = useState('');
    const [openSelector, setOpenSelector] = useState(false);


    function parseSelectedUser(index){
        console.log(`WAREHOUSE: ${warehouseList}`)
        setSelectedName(warehouseList[index].name)
        setSelectedImage(warehouseList[index].name)
        setSelectedWarehouse(warehouseList[index].warehouse)
        setOnFocus(warehouseList[index])
    }

    function handleClickSelect(index){
        setSelectedIndex(index);
        parseSelectedUser(index);
        setOpenSelector(false);

    }

    function getImage(fishName){
        return `/fishes/${fishName}.jpg`;
    }

    const searchingFor = (searchText) => {
        return (x) => {
            return (
                x.warehouse.toLowerCase().includes(searchText.toLowerCase())
            );
        };
    };

    function getWarehouseProductList(location ='Takoradi'){


        const prod = allProducts.filter((product) => {
            return product.warehouse.toLowerCase().includes(location.toLowerCase());
            // Use the toLowerCase() method to make it case-insensitive
        });

        //console.log(`---LIST : ${prod.length}`);

         setSelectedName(prod[0].name);
         setSelectedIndex(0);
         setSelectedWarehouse(prod[0].warehouse);
         setOnFocus(prod[0])



        setWarehouseList(prod);




        return prod;


    }




    useEffect(()=>{

        getWarehouseProductList()

        console.log(`---LIST LOCAL : ${warehouseList.length}`);
      //  handleClickSelect(1);
    },[])




    return (
        <div>


            <div className="w-full ">
                <div className=" relative">
                    <div type="button"
                         className="relative w-full bg-lightBlue-200 rounded-md shadow-lg pl-3 mr-2 py-3 text-left  focus:outline-none focus:outline-none  sm:text-sm">
                            <span className="flex items-center">
                                <img src={getImage(selectedName)} width={32} height={32} alt="person" className="flex-shrink-0 h-6 w-6 rounded-full"/>
                                <span className="ml-3 block truncate">
                                    {selectedName} | <span className='text-lightBlue-600'>({selectedWarehouse})</span>
                                </span>
                            </span>
                        <span className="ml-3 absolute mr-1 right-0 top-10-px flex items-center cursor-pointer " onClick={()=>{setOpenSelector(!openSelector)}}>
                                 {/*<img width={18} height={18} src="/fav_yellow.png" alt="person" className="flex-shrink-0 h-6 w-6 rounded-full"/>*/}
                            <SelectorIcon width={18} height={18} />
                            </span>
                    </div>

                    <div className={openSelector ? ' absolute mt-1 w-full z-10 h-130-px rounded-md bg-white shadow-lg mr-2 overflow-y-scroll' : ' absolute mt-1 w-full z-10 rounded-md bg-white shadow-lg mr-2 overflow-y-scroll'}>
                        <ul tabIndex="-1" role="listbox" aria-labelledby="listbox-label"
                            aria-activedescendant="listbox-item-3"
                            className="max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">

                            {openSelector ? warehouseList.map((agent,index)=>(
                                <li id="listbox-item-0" role="option" key={index} onClick={()=>{
                                    handleClickSelect(index);
                                }}
                                    className="text-gray-900 cursor-default cursor-pointer hover:-bg-teal-500 mr-3  select-none relative py-2 pl-3 ">
                                    <div className="flex items-center text-lightBlue-600 hover:text-white">
                                        <img width={32} height={32} src={getImage(agent.name)} alt="person"
                                             className="flex-shrink-0 h-6 w-6 rounded-full"/>
                                        <span className="ml-3 block font-normal truncate">
                                            {agent.name} | <span className=''> ({agent.warehouse})</span>
                                     </span>
                                    </div>
                                    <span className="ml-2 absolute  right-0 top-10-px flex items-center">
                              {selectedIndex === agent.id ? <CheckIcon width={18} height={18}/> :<div>{''}</div>}
                                 </span>

                                </li>

                            )) : <div>{''}</div>}



                        </ul>
                    </div>


                </div>

            </div>


        </div>
    )

}

export default ProductSelect;
