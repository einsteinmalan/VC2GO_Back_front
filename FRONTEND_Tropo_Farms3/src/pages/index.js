import Head from 'next/head'
import Link from 'next/link'
import { useAuth } from '@/hooks/auth'
import { Maison } from '@/components/home/Home'

export default function Home() {
    const { user } = useAuth({ middleware: 'guest' })

    return (
        <>
            <Head>
                <title>Topo Farms</title>
            </Head>


            <div className="w-full flex flex-row w-6/12 items-center p-2 justify-between bg-white shadow-xs h-10 bg-teal-500">


                <div className="flex flex-row-reverse text-white mr-4 ml-4 md:hidden">
                    <button>

                    </button>
                </div>
                <div className="flex items-center mr-8 hidden md:flex">


                </div>
            </div>
            <Maison/>


        </>
    )
}
