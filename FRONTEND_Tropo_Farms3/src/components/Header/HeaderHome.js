import React, { useState, useEffect, useRef, useContext } from "react";

import  {StoreContext} from '@/context/storeContext';
import styles from "./Header.module.scss";

import { useRouter } from 'next/router'

/* eslint-disable consistent-return */



const HeaderHome = ({ title="Checkout" }) => {




    useEffect(() => {


    }, []);




    return (
        <header className={styles.headerHome} >
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

export default HeaderHome;
