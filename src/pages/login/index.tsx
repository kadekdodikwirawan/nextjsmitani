import axios from "axios";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import Frontlayout from "../../components/layout/Frontlayout"
import { AppContext } from "../../context/global";
// @ts-ignore 
import ReCAPTCHA from "react-google-recaptcha"

const index = () => {
    const initialLogin = {
        "email" : "",
        "password": ""
    }
    const [login, setLogin] = useState(initialLogin)
    const [loading, setLoading] = useState(false)
    const [alertN, setAlertN] = useState('')
    const [captcha, setCaptcha] = useState()
    const router = useRouter()
    const {islogin, setisLogin} :any = useContext(AppContext)


    const handleLogin =(e :any)=>{
        const { name, value } = e.target;
            setLogin(prevState => ({
        ...prevState,
            [name]: value
        }));
    }
    const onChangeC =(value :any)=>{
        setCaptcha(value);
        
    }
    const loginSubmit = async (e :any)=>{
        e.preventDefault()
        // const RECAPTCHA_SERVER_KEY = "6Lfvg3IaAAAAAF7hJ1wjCLh1i4nznDMUwTnis9Aa"
        // const humanKey = captcha
        
        // const isHuman = await fetch(`https://www.google.com/recaptcha/api/siteverify`, {
        //     method: "post",
        //     headers: {
        //         Accept: "application/json",
        //         "Content-Type": "application/x-www-form-urlencoded; charset=utf-8"
        //     },
        //     body: `secret=${RECAPTCHA_SERVER_KEY}&response=${humanKey}`
        //     })
        //     .then(res => res.json())
        //     .then(json => json.success)
        //     .catch(err => {
        //         console.log(err);
                
        //     })
        //     if (humanKey === null || !isHuman) {
        //         console.log('not human');
                
        //       }else{
            if(captcha !== undefined){
                setLoading(true)
                axios.post(process.env.ADMIN_URL+'/auth/login', login)
                .then(function (res :any){
                    const token = res.data.data.access_token
                    localStorage.setItem('access_token', token)
                    setisLogin(true)
                    router.push('/profile')
                    setLoading(false)
                })
                .catch(function (error : any) {
                    if (error.response){
                    alert('Terjadi kesalahan ' + error.response.data.errors[0].message)
                    setLoading(false)
                    }
                })
            }else{
                setAlertN('<p class="text-danger">Captcha error</p>')
            }
            // }
    }
    {islogin ? router.push('/profile') : '' }
    return (
        <div>
            {islogin == false ? 
            <Frontlayout title="Login | Mitra Tani Membangun Negeri">
            <section className="page-section portfolio" id="portfolio" style={{marginTop:"25px"}}>
                <div className="container">
                            {/* Portfolio Section Heading*/}
                            <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Login</h2>
                            
                    <div className="form-group m-5">
                    <form>
                        <div className="control-group">
                                    <div className="form-group floating-label-form-group controls mb-0 pb-2">
                        <label htmlFor="Email">Email</label>
                        <input className="form-control" type="email" onChange={handleLogin} name="email" placeholder="Email"/>
                        </div></div>
                        <div className="control-group">
                                    <div className="form-group floating-label-form-group controls mb-0 pb-2">
                        <label htmlFor="Passord">Password</label>
                        <input className="form-control" type="password" onChange={handleLogin} name="password" placeholder="Password"/>
                        </div></div>
                        <br/>
                        <ReCAPTCHA sitekey="6Lfvg3IaAAAAABB8j0zT55xB2xKF-devfUvRJcsW" onChange={onChangeC} />
                        <p dangerouslySetInnerHTML={{__html: alertN}}></p>
                    <button onClick={loginSubmit} className="btn btn-primary btn-xl" disabled={loading ? true : false} >{loading ? 'Loading...' : 'Login'}</button>
                    </form> 
                    </div>
                </div>
            </section>
            </Frontlayout>
            : ''}
        </div>
    );
}

export default index;