import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/global";

const Navbar = () => {
  const {islogin, setisLogin, emailkonfirmasi, setEmailkonfirmasi} :any = useContext(AppContext)
  
  const router = useRouter()
  const handleLogout =()=>{
      setisLogin(false)
      localStorage.removeItem('access_token')
      localStorage.removeItem('user_session') 
      router.push('/login')
    }
  
  useEffect(() => {
      if(localStorage.getItem('access_token') != null){
      axios.get(process.env.ADMIN_URL+'/users?access_token='+localStorage.getItem('access_token'))
      .then(function(res : any){
          setisLogin(true)
          if(res.data.data[0].email_confirm === 1){
            setEmailkonfirmasi(true)
          }
      })
      .catch(function (error : any) {
          if (error.response){
          setisLogin(false)
          localStorage.removeItem('access_token')
          }
      })
    }else{
      setisLogin(false)
    }
}, [])
    return (
    <>
  <ul className="navbar-nav ml-auto">
      <li className="nav-item mx-0 mx-lg-1"><Link href="/list/usaha"><a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger">List Usaha</a></Link></li>
      <li className="nav-item mx-0 mx-lg-1"><Link href="/carainvestasi"><a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger">Cara Investasi</a></Link></li>
      <li className="nav-item mx-0 mx-lg-1"><Link href="/contact"><a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger">Contact</a></Link></li>
      {islogin == false ?
      <>
      <li className="nav-item mx-0 mx-lg-1"><Link href="/login"><a className="text-center nav-link py-3 px-0 px-lg-3 rounded btn-outline-success">Login</a></Link></li>
      <li className="nav-item mx-0 mx-lg-1"><Link href="/register"><a className="text-center nav-link py-3 px-0 px-lg-3 rounded btn-success">Daftar</a></Link></li>
      </>
      : 
      <>
      <li className="nav-item mx-0 mx-lg-1"><Link href="/profile"><a className="text-center nav-link py-3 px-0 px-lg-3 rounded">Profile</a></Link></li>
      <li className="nav-item mx-0 mx-lg-1"><a href="#" onClick={handleLogout} className="text-center nav-link py-3 px-0 px-lg-3 rounded btn-danger">Log Out</a></li>
      </>
      }
  </ul>
  </>
    );
}

export default Navbar;