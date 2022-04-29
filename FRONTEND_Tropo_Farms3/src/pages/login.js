import ApplicationLogo from '@/components/ApplicationLogo'
import AuthCard from '@/components/AuthCard'
import AuthSessionStatus from '@/components/AuthSessionStatus'
import AuthValidationErrors from '@/components/AuthValidationErrors'
import Button from '@/components/Button'
import GuestLayout from '@/components/Layouts/GuestLayout'
import Input from '@/components/Input'
import Label from '@/components/Label'
import Link from 'next/link'
import { useAuth } from '@/hooks/auth'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Footer from '@/components/Footer/Footer'
import useLocalStorage from '@/components/CustomHooks/useLocalStorage'
import { KUserLoggedIn } from '@/components/constants'
import { toast, Toaster } from 'react-hot-toast'
import { RiCloseCircleFill } from '@react-icons/all-files/ri/RiCloseCircleFill'

const Login = () => {
    const router = useRouter()
    const [loggedIn,setLoggedIn] = useLocalStorage(KUserLoggedIn, 0);
    const [showToast, setShowToast] = useState(false);
    const [message, setMessage] = useState("Credentials incorrect!!!");
    const [checkoutOn,setCheckoutOn] = useLocalStorage("checkout", 0);
    const [rememberMe, setRememberMe] = useLocalStorage("remember_me", 'false');

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState([])
    const [status, setStatus] = useState(null)
    const [loading, setLoading] = useState(false);
    const [isAdmin, setIsAdmin] = useState('');



    function  showToaster(){

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


    /* const { login } = useAuth({
         middleware: 'guest',
         redirectIfAuthenticated: '/dashboard',
     })*/

  /*  async function login(e) {
        e.preventDefault();


        await login({ email, password, setErrors, setStatus })


        if (email === 'user@tropo.com' && password === '12345678') {

            setLoggedIn(1);

            if (checkoutOn == 1) {
                router.push("/products/checkout");
            } else {
                router.push("/products");
            }


        } else {
            showToaster();
            setShowNotification({ message: "credetnials incorrect!!!", error: true });
            // setErrors(['Please credetials not correct!'])
        }
    }*/

    const { login } = useAuth({
        middleware: 'guest',
        redirectIfAuthenticated: '/dashboard/admin',
    })


    // UI statessetRememberMe
    const [showNotification, setShowNotification] = useState({
        message: null,
        error: false,
    });





    function handleSetAdmin(e){
        e.preventDefault();
        if(e) {setRememberMe('true');} else {
            setRememberMe('false');
        }
        console.log(`you are admin? : ${e}`)
    }



    useEffect(() => {
        if (router.query.reset?.length > 0 && errors.length === 0) {
            setStatus(atob(router.query.reset))
        } else {
            setStatus(null)
        }
    },[])

    //  const submitForm = async event => {
    const submitForm = async event => {
        event.preventDefault()

        await login({ email, password, setErrors, setStatus })
    }

    return (
        <GuestLayout>
            <AuthCard >



                {/* Session Status */}
                <AuthSessionStatus className="mb-4" status={status} />

                {/* Validation Errors */}
                <AuthValidationErrors className="mb-4" errors={errors} />

                <div className="mt-4 flex content-center items-center justify-center h-full">
                    <div className="w-full lg:w-4/12 px-4">

                        <div className="relative mt-16 flex flex-col min-w-0 break-words w-full mb-6 shadow-sm rounded-lg bg-blueGray-200 border-0">
                            {/* notification banner */}
                            {showNotification.message && (
                                <div
                                    className={`${showNotification.error ? "bg-red-200" : "bg-green-200"
                                    }  m-10 flex flex-row items-center justify-between p-10 w-full rounded text-black`}
                                >
                                    {/* message */}
                                    <div className="flex flex-col items-center space-y-1 m-4">
                                        {showNotification.error ? <p className="text-red-600 text-sm">Error...</p> :
                                            <p className="text-green-600 text-sm">Success...</p>}
                                        <h5 className="text-sm m-10">{showNotification.message}</h5>
                                    </div>

                                    <RiCloseCircleFill
                                        className="w-12 h-12 text-gray-600"
                                        onClick={() => setShowNotification({ message: null })}
                                    />
                                </div>
                            )}
                            <div className="rounded-t mb-0 px-6 py-6">
                                <div className="text-center mb-3">
                                    <h6 className="text-blueGray-500 text-sm font-bold">
                                        Welcome
                                    </h6>
                                </div>
                                <div className="btn-wrapper text-center">
                                    {/* <button
                    className="bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                    type="button"
                  >
                    <img alt="..." className="w-5 mr-1" src="/img/github.svg" />
                    Github
                  </button>
                  <button
                    className="bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                    type="button"
                  >
                    <img alt="..." className="w-5 mr-1" src="/img/google.svg" />
                    Google
                  </button>*/}
                                </div>
                                <hr className="mt-5 border-b-1 border-blueGray-300" />
                            </div>
                            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                                <div className="text-blueGray-400 text-center mb-3 font-bold">
                                    <small>Please login into your account</small>
                                </div>
                                <form onSubmit={submitForm}>
                                    <div className="relative w-full mb-3">
                                        <label
                                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                            htmlFor="grid-password"
                                        >
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:ring focus:ring-indigo-200 focus:ring-opacity-50 w-full ease-linear transition-all duration-150"
                                            placeholder="Email"
                                            name="username"
                                            id="username"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                        />
                                    </div>

                                    <div className="relative w-full mb-3">
                                        <label
                                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                            htmlFor="grid-password"
                                        >
                                            Password
                                        </label>
                                        <input
                                            type="password"
                                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:ring focus:ring-indigo-200 focus:ring-opacity-50 w-full ease-linear transition-all duration-150"
                                            placeholder="Password"
                                            name="password"
                                            id="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div>
                                      {/*  <label className="inline-flex items-center cursor-pointer">
                                            <input
                                                id="customCheckLogin"
                                                type="checkbox"
                                                className="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                                checked={rememberMe}
                                                onChange={(e) => handleSetAdmin(e.target.checked)}
                                            />
                                            <span className="ml-2 text-sm font-semibold text-blueGray-600">
                        Login as Admin
                      </span>
                                        </label>*/}
                                    </div>

                                    <div className="text-center mt-6">
                                        { loading ?
                                            <button type="button"
                                                    className="py-2 px-4 flex justify-center items-center  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                                <svg width="20" height="20" fill="currentColor" className="mr-2 animate-spin"
                                                     viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M526 1394q0 53-37.5 90.5t-90.5 37.5q-52 0-90-38t-38-90q0-53 37.5-90.5t90.5-37.5 90.5 37.5 37.5 90.5zm498 206q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-704-704q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm1202 498q0 52-38 90t-90 38q-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-964-996q0 66-47 113t-113 47-113-47-47-113 47-113 113-47 113 47 47 113zm1170 498q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-640-704q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm530 206q0 93-66 158.5t-158 65.5q-93 0-158.5-65.5t-65.5-158.5q0-92 65.5-158t158.5-66q92 0 158 66t66 158z">
                                                    </path>
                                                </svg>
                                                loading
                                            </button>
                                            :
                                            <button
                                                className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                                                type="submit"


                                            >
                                                Sign In
                                            </button>
                                        }
                                    </div>
                                </form>
                            </div>
                        </div>



                        <div className="flex items-center justify-center mt-4 mb-12">
                            <Link href="/forgot-password">
                                <a className="text-center underline text-sm text-lightBlue-600 hover:text-gray-900">
                                    Forgot your password?
                                </a>
                            </Link>

                            <Button className="ml-5 text-sm text-lightBlue-600 bg-lightBlue-200 pr-12 pl-12">SIGN UP</Button>
                        </div>


                {/*   <div className="flex flex-wrap mt-6 relative">
              <div className="w-1/2 sr-only">
                <a
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  className="text-blueGray-200"
                >
                  <small>Forgot password?</small>
                </a>
              </div>
              <div className="w-1/2 text-right sr-only">
                <Link href="/auth/register">
                  <a href="#pablo" className="text-blueGray-200">
                    <small>Create new account</small>
                  </a>
                </Link>
              </div>
            </div>*/}
                    </div>
                </div>


            </AuthCard>
            <Footer/>
        </GuestLayout>
    )
}

export default Login
