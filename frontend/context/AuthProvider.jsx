import React, { createContext, useContext, useState } from 'react'
export const Authcontext=createContext();

export default function AuthProvider({children}){
  const initialAuthUser=localStorage.getItem("Users");
  const [authUser,setAuthUser]=useState(
    initialAuthUser?JSON.parse(initialAuthUser):undefined
);
return(
    <Authcontext.Provider value={[authUser,setAuthUser]}>
        {children}
    </Authcontext.Provider>
)
}
export const useAuth=()=>{
   return useContext(Authcontext)
}
