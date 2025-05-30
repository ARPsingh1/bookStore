import React from 'react'
import { useAuth } from '../../context/AuthProvider';
import toast from 'react-hot-toast';

const Logout = () => {
    const [authUser, setAuthUser] = useAuth();
    const handleLogout = () => {
        try {
            setAuthUser({
                ...authUser,
                user: null
            })
            localStorage.removeItem("Users");
            toast.success('Logout Successfully')
            setTimeout(() => {
                window.location.reload()
                },1000);
        }
    catch (err) {
        toast.error("Error : "+ err.message)
        setTimeout(() => {
            
        }, 2000);
    }
}
return (
    <>
        <button className="px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer" onClick={handleLogout} >
            Logout
        </button>
    </>
)
}

export default Logout
