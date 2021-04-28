import axios from 'axios';
import { useRouter } from 'next/router';
import { createContext, useContext, useEffect, useState } from 'react';
import { AppContext } from './global';

// @ts-ignore 
export const AuthContext = createContext();

export function AuthWrapper({ children }: any) {

//   const [islogin, setisLogin] = useState(false)
const {islogin, setisLogin, setEmailkonfirmasi} :any = useContext(AppContext)
  const router = useRouter()
  
  useEffect(() => {
    axios.get(process.env.ADMIN_URL+'/users?access_token='+localStorage.getItem('access_token'))
    .then(function(res : any){
      if(res.data.data[0].email_confirm === 0){
        setEmailkonfirmasi(false)
        setisLogin(true)
        router.push('/confirm?email='+res.data.data[0].email+'&id='+res.data.data[0].id)
      }else{
        setEmailkonfirmasi(true)
        setisLogin(true)
      }
    })
    .catch(function (error : any) {
        if (error.response){
        setisLogin(false)
        localStorage.removeItem('access_token')
        localStorage.removeItem('user_session')
        router.push('/login')
        }
    })
}, [])
  return (
    <AuthContext.Provider value={
        {islogin, setisLogin}
        }>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(AuthContext);
}