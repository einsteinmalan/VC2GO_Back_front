import React, { useState, useEffect, useRef, useContext } from "react";

import  {StoreContext} from '@/context/storeContext';
import styles from "./Header.module.scss";

import { useRouter } from 'next/router'

/* eslint-disable consistent-return */



const HeaderAuth = ({ title="Checkout", role="customer", name="user", image="/user.png" }) => {




    useEffect(() => {


    }, []);




    return (
        <header className={styles.header} >
            <div className="drop-shadow-md">
                <div className={styles.container}>
                    <div className="flex flex-row ">





                        <div className="">
                            <div className={styles.brand}>
                                <img
                                    className={styles.logo}
                                    src="/logooo.png"
                                    alt="Tropo Farm Logo"
                                />
                            </div>
                        </div>

                        <div className="pl-10 text-lg text-gray-500 ">
                            {title}
                        </div>

                        <div className="absolute right-25 px-12">
                            <a href className="flex flex-row items-center">
                                <img
                                    src={image}
                                    alt
                                    className="h-10 w-10 bg-gray-200 border rounded-full"
                                />
                                <span className="flex flex-col ml-2">
                                     <span
                                         className="truncate w-20 font-semibold tracking-wide leading-none">{name}</span>
                                     <span
                                         className="truncate w-20 text-gray-500 text-xs leading-none mt-1">{role}</span>
                               </span>
                            </a>
                        </div>


                        <div className={styles.right}>
                            <img
                                className={styles.logo}
                                src="/nosmay.png"
                                alt="Nosmay Logo"

                            />
                        </div>

                    </div>


                </div>
            </div>

        </header>
    );
};

export default HeaderAuth;
