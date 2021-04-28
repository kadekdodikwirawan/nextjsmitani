import axios from "axios";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import Frontlayout from "../../components/layout/Frontlayout";
import { AppContext } from "../../context/global";

const index = () => {
  const initUser  = {
    "first_name": "",
    "last_name": "",
    "no_hp": "",
    "email" : "",
    "password" : "",
    "role":"37296a69-03ee-4833-a5de-e54c44ff26b9"
  }
  const [user, setUser] = useState(initUser)
  const [passwordc, setPasswordc] = useState("")
  const [alertN, setAlert] = useState("")
  const [loading, setLoading] = useState(false)
  const {islogin} : any = useContext(AppContext)
  const router = useRouter()

  const handlehangeUser =(e : any)=>{
    const { name, value } = e.target;
    setUser(prevState => ({
      ...prevState,
        [name]: value
    }));
    // console.log(user);  
  }
  const handleMatchPass=(e :any)=>{
    if(user.password === e.target.value){
      setPasswordc('')
    }else{
      setPasswordc('Password tidak sama')
    }
  }
  const handleRegister =(e: any)=>{
    e.preventDefault()
    setLoading(true)
    if(user.email == '' || user.first_name == '' || user.last_name == '' || user.no_hp == '' || user.password == ''){
      setAlert('<p class="text-danger">Lengkapi data anda</p>')
      setLoading(false)
    }else{
        axios.post(process.env.ADMIN_URL+'/users', user)
        .then(function (response :any) {
          axios.post(process.env.ADMIN_URL+'/auth/login', {"email" : user.email, "password": user.password })
            .then(res=>{
              const token = res.data.data.access_token
              localStorage.setItem('access_token', token)
              router.push('/profile')
            })
            .catch(function (error : any) {
              console.log(error);
            })
        })
        .catch(function (error : any) {
          if (error.response){
            setAlert('<p class="text-danger">Terjadi kesalahan atau user sudah ada</p>')
            setLoading(false)
          }
        })
      }
  }
  const handleRegbutton=(e :any)=>{
    e.preventDefault()
    setPasswordc('Password tidak sama')
  }
  {islogin ? router.push('/profile') : ''}
  return (
    <div>
      <Frontlayout title="Daftar Mitra | | Mitra Tani Membangun Negeri">
      <section className="page-section portfolio" id="portfolio" style={{marginTop:"25px"}}>
          <div className="container">
                    {/*Section Heading*/}
                    <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Daftar</h2>
                    
            <div className="form-group m-5">
              <form>
              <div className="control-group">
                            <div className="form-group floating-label-form-group controls mb-0 pb-2">
                <label htmlFor="Nama">Nama Depan</label>
                <input className="form-control" type="text" onChange={handlehangeUser} name="first_name" placeholder="Nama depan" required/>
                </div></div>
              <div className="control-group">
                            <div className="form-group floating-label-form-group controls mb-0 pb-2">
                <label htmlFor="Nama B">Nama Belakang</label>
                <input className="form-control" type="text" onChange={handlehangeUser} name="last_name" placeholder="Nama Belakang" required/>
                </div></div>
                <div className="control-group">
                            <div className="form-group floating-label-form-group controls mb-0 pb-2">
                <label htmlFor="Email">Email</label>
                <input className="form-control" type="email" onChange={handlehangeUser} name="email" placeholder="Email" required/>
                </div></div>
                <div className="control-group">
                            <div className="form-group floating-label-form-group controls mb-0 pb-2">
                <label htmlFor="No_hp">Nomor Hp</label>
                <input className="form-control" type="number" onChange={handlehangeUser} name="no_hp" placeholder="Nomor Hp" required/>
                </div></div>
                <div className="control-group">
                            <div className="form-group floating-label-form-group controls mb-0 pb-2">
                <label htmlFor="Password">Password</label>
                <input className="form-control" type="password" onChange={handlehangeUser} name="password" placeholder="Password" required/>
                </div></div>
                <div className="control-group">
                            <div className="form-group floating-label-form-group controls mb-0 pb-2">
                <label htmlFor="Password">Konfirmasi Password</label>
                <input className="form-control" type="password" onChange={handleMatchPass}  placeholder="Ketik ulang Password" required/>
                <small>{passwordc != '' ? passwordc : '' }</small>
                </div></div> <br/>
                <button onClick={passwordc != '' ? handleRegbutton : handleRegister} className="btn btn-primary btn-xl" disabled={loading}>{loading ? 'Loading...' : 'Daftar'}</button>
              </form> <br/>
              <div dangerouslySetInnerHTML={ {__html: alertN}}></div>
            </div>
          </div>
      </section>
      </Frontlayout>
    </div>
  );
}

export default index;