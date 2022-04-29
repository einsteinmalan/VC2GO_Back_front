
import { SelectorIcon, CheckIcon } from '@heroicons/react/outline/index'
import { usersList } from '@/components/data/data'
import { useEffect, useState } from 'react'
import useLocalStorage from '@/components/CustomHooks/useLocalStorage'

 const ChooseDeliveryAgent = (props) =>{

     const [selectedIndex, setSelectedIndex] = useState(1);
     const [selectedName, setSelectedName] = useState('');
     const [selectedPhone, setSelectedPhone] = useState('');
     const [openSelector, setOpenSelector] = useState(false);
     const [agentList,setAgentList] = useState([]);
     const [purchase,setPurchase] = useLocalStorage("purchase", {});
     const [temp,setTemp] = useState({});


     function initialize(){
         setTemp(purchase);
     }

     function updatePurchaseInfo(){
         const tempInfo = temp;
         tempInfo.delivery?.agent_name = selectedName;
         tempInfo.delivery?.agent_phone = selectedPhone;
         tempInfo.delivery?.deliverystatus_id = 2;

         setPurchase(tempInfo);

     }

     function parseSelectedUser(index){
         setSelectedName(agentList[index]?.name)
         setSelectedPhone(agentList[index]?.phone)

         purchase?.delivery?.agent_name = agentList[index]?.name;
         purchase?.delivery?.agent_phone = agentList[index]?.phone;

         setPurchase(purchase);
     }

     function handleClickSelect(index){
         setSelectedIndex(index);
         parseSelectedUser(index);
         setOpenSelector(false);

         updatePurchaseInfo();

     }

     function getAgentList(){
         const pList = usersList.filter((x) => x.role === 'Hub cordinator');
         setAgentList(pList);
     }

     useEffect(()=>{
         getAgentList();
         initialize();
         handleClickSelect(1);
     },[])




    return (
        <div>


            <div className="w-full ">
                <div className=" relative">
                    <div type="button"
                            className="relative w-full bg-lightBlue-200 rounded-md shadow-lg pl-3 mr-2 py-3 text-left  focus:outline-none focus:outline-none  sm:text-sm">
                            <span className="flex items-center">
                                <img src="/user.png" width={32} height={32} alt="person" className="flex-shrink-0 h-6 w-6 rounded-full"/>
                                <span className="ml-3 block truncate">
                                    {selectedName} | <span className='text-lightBlue-600'>{selectedPhone}</span>
                                </span>
                            </span>
                             <span className="ml-3 absolute mr-1 right-0 top-10-px flex items-center cursor-pointer " onClick={()=>{setOpenSelector(!openSelector)}}>
                                 {/*<img width={18} height={18} src="/fav_yellow.png" alt="person" className="flex-shrink-0 h-6 w-6 rounded-full"/>*/}
                                 <SelectorIcon width={18} height={18} />
                            </span>
                    </div>

                    {/*//ADD h-95-px*/}
                    <div className="absolute mt-1 w-full z-10  rounded-md bg-white shadow-lg mr-2 overflow-y-scroll">
                        <ul tabIndex="-1" role="listbox" aria-labelledby="listbox-label"
                            aria-activedescendant="listbox-item-3"
                            className="max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">

                            {openSelector ? agentList?.map((agent,i)=>(
                                <li id="listbox-item-0" role="option" key={i} onClick={()=>{
                                    handleClickSelect(i);
                                }}
                                    className="text-gray-900 cursor-default cursor-pointer hover:-bg-teal-500 mr-3  select-none relative py-2 pl-3 ">
                                    <div className="flex items-center text-lightBlue-600 hover:text-white">
                                        <img width={32} height={32} src="/user.png" alt="person"
                                             className="flex-shrink-0 h-6 w-6 rounded-full"/>
                                        <span className="ml-3 block font-normal truncate">
                                            {agent.name} | <span className=''> {agent.phone}</span>
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

  export default ChooseDeliveryAgent;
