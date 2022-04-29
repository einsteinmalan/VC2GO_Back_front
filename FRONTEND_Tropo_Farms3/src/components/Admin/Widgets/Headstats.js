import { useEffect, useState } from "react";

import CardStats from "./CardStats.js";
//import {kUserIdKey, kUserUuidKey, linkAllCrypto, linkAllUsers, linkCompanyProfit} from "../utils/constants";




export default function HeaderStats({crypto,users}) {

    const [cryptoLen, setCryptoLen] = useState(0);
    const [usersLen, setUsersLen] = useState(0);
    const [profit, setProfit] = useState(0);


   /* useEffect(() => {

        /!*const res = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=$symbol&vs_currencies=usd')
         const posts = await res.json()*!/

        let uuid = localStorage.getItem(`${kUserUuidKey}`);
        /!*console.log(`${linkAllCrypto}?uuid=${uuid}`);*!/

        async function getDollarValue(symbol) {
            let res =  await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${symbol}&vs_currencies=usd`);
            res = await res.json()
            //console.log(res.symbol.usd);
            /!*console.log(res[`${symbol}`]['usd']);*!/
            return res[`${symbol}`]['usd'];
        }

        async function fetchCrypto() {
            let crypto_res = await fetch(`${linkAllCrypto}?uuid=${uuid}`,{
                method: "get",
                headers: {
                    "Content-Type": "application/json"
                },

            });
            crypto_res = await crypto_res.json()
            setCryptoLen(crypto_res.data.length)
        }

        async function fetchUsers() {
            let users_res =  await fetch(linkAllUsers);
            users_res = await users_res.json()
            setUsersLen(users_res.length)
        }

        async function fetchProfit() {
            let sum = 0;
            let users_res =  await fetch(`${linkCompanyProfit}?uuid=${uuid}`);
            users_res = await users_res.json();
            for(var i=0; i <users_res.data.length; i++){
                /!* console.log(users_res.data[i].name);*!/
                var coinName = users_res.data[i].name;
                var fee = users_res.data[i].fee;
                var dolval = await getDollarValue(coinName);
                sum = sum + (dolval * fee);
                /!*console.log(`Money is: ${sum}`);*!/
            }

            setProfit(sum);


        }



        fetchCrypto();
        fetchUsers();
        fetchProfit();

    }, [])*/

    return (
        <>
            {/* Header */}
            <div className="relative bg-teal-500 md:pt-2 pb-4 pr-4">
                <div className="px-4 md:px-10 mx-auto w-full">
                    <div>
                        {/* Card stats */}
                        <div className="flex flex-wrap">
                            <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                                <CardStats
                                    statSubtitle="Orders"
                                    statTitle={cryptoLen.toString()}
                                    statArrow="up"
                                    statPercent="0"
                                    statPercentColor="text-emerald-500"
                                    statDescripiron="This month"
                                    statIconName="fab fa-bitcoin"
                                    statIconColor="bg-lightBlue-500"
                                />
                            </div>
                            <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                                <CardStats
                                    statSubtitle="Delivery"
                                    statTitle="0"
                                    statArrow="up"
                                    statPercent="0"
                                    statPercentColor="text-red-500"
                                    statDescripiron="This month"
                                    statIconName="fas fa-chart-pie"
                                    statIconColor="bg-orange-500"
                                />
                            </div>
                            <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                                <CardStats
                                    statSubtitle="Users"
                                    statTitle={usersLen.toString()}
                                    statArrow="up"
                                    statPercent="0"
                                    statPercentColor="text-orange-500"
                                    statDescripiron="This month"
                                    statIconName="fas fa-users"
                                    statIconColor="bg-pink-500"
                                />
                            </div>
                            <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                                <CardStats
                                    statSubtitle="Tickets"
                                    statTitle= {profit.toString()}
                                    statArrow="up"
                                    statPercent="0"
                                    statPercentColor="text-emerald-500"
                                    statDescripiron="This month"
                                    statIconName="fas fa-dollar-sign"
                                    statIconColor="bg-red-500"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
