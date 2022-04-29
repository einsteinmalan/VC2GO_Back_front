import Navigation from '@/components/Layouts/Navigation'
import { useAuth } from '@/hooks/auth'
import Sidebar from '@/components/Admin/Widgets/Sidebar'
import AdminNavBar from '@/components/Admin/Widgets/AdminNavBar'
import HeaderStats from '@/components/Admin/Widgets/Headstats'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'





const AppLayout = ({ header, children }) => {
    const { user } = useAuth({ middleware: 'auth' })
    const [role, setRole] = useState('Manager')

    const router = useRouter()

    useEffect(()=>{
        /*console.log(`USER: ${user}`);
        if(user === null || user === undefined){
            router.push("/login");
        }*/
    })

    return (
        <div className="min-h-screen bg-gray-100">
            <Navigation user={user} />

            {/* Page Heading */}


            <Sidebar />
            <div className="relative md:ml-64 bg-blueGray-100">

                {/* Header */}
                <HeaderStats />
            </div>

            {/* Page Content */}
            <main>{children}</main>
        </div>
    )
}

export default AppLayout
