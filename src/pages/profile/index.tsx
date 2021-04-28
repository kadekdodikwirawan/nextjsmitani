import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import Frontlayout from "../../components/layout/Frontlayout"
import { AuthWrapper } from "../../context/authContext";
import { AppContext } from "../../context/global";

const index = () => {
    const initProfile = {
    "id": "",
    "first_name": 	"",
    "last_name":	"",
    "email":	"",
    "no_hp":	""
    }
    const initProfileEdited = {
        "first_name": 	"",
        "last_name":	"",
        "email":	"",
        "no_hp":	"",
        "password": ""
        }
    const [loading, setLoading] = useState(false)
    const [profile, setProfile] = useState(initProfile)
    const [profileEdited, setprofileEdited] = useState(initProfileEdited)
    const [alertN, setAlertN] = useState('')

    // context 
    const {emailkonfirmasi} : any = useContext(AppContext)
    const router = useRouter()

    const getUser = ()=>{
        axios.get(process.env.ADMIN_URL+'/users?access_token='+localStorage.getItem('access_token'))
            .then(function(res : any){
                    const datauser = {
                        "id": res.data.data[0].id,
                        "first_name": 	res.data.data[0].first_name,
                        "last_name":	res.data.data[0].last_name,
                        "email":	res.data.data[0].email,
                        "no_hp":	res.data.data[0].no_hp
                    }
                    setProfile(datauser);
                    setprofileEdited({
                        "first_name": 	res.data.data[0].first_name,
                        "last_name":	res.data.data[0].last_name,
                        "email":	res.data.data[0].email,
                        "no_hp":	res.data.data[0].no_hp,
                        "password": ""
                    })
                    localStorage.setItem('user_session', JSON.stringify(datauser))
                
              })
            .catch(function (error : any) {
                if (error.response){
                    console.log(error.errors);
                }
            })
    } 
    const handleProfiileEditChange =(e : any)=>{
        const { name, value } = e.target;
        setprofileEdited(prevState => ({
        ...prevState,
        [name]: value
    }));
    }
    const handleUpdate=(e :any)=>{
        e.preventDefault()
        if(profileEdited.password == ""){
            setAlertN('<p class="text-danger">Silakan isi password anda</p>')
        }else{
            setLoading(true)
            axios.patch(process.env.ADMIN_URL+'/users/'+profile.id+'?access_token='+localStorage.getItem('access_token'), profileEdited)
            .then((res)=>{
                setLoading(false)
                getUser()
                setAlertN('<p class="text-success">Data berhasil diupdate<p/>')
            })
            .catch((error=>{
                setLoading(false)
                console.log(error);
            }))
        }
    }

    useEffect(() => {
            getUser()
    }, [])
    return (
        <div>
            <AuthWrapper>
            <Frontlayout title="Profile || Mitra Tani Membangun Negeri">
                <section className="page-section portfolio" id="portfolio" style={{marginTop:"25px"}}>
                    <div className="container">
                            {/* Section Heading*/}
                            <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Profile anda</h2>
                            <p className="mt-4">
                            <a className="btn btn-primary" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="true" aria-controls="collapseExample">
                            Edit Profile
                            </a>
                            <Link href="/user_proyek"><button className="ml-2  btn btn-primary" type="button">
                            Proyek Anda
                            </button></Link>
                        </p>
                        <div className="collapse show in" id="collapseExample">
                            <div className="card card-body">
                                <div className="form-group m-5">
                                    {profile.first_name == "" ? 'Loading...' : 
                                    <form>
                                                <div className="control-group">
                                                    <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                                        <label htmlFor="Nama">Nama Depan</label>
                                                        <input className="form-control" type="text" onChange={handleProfiileEditChange} name="first_name" placeholder={profile.first_name} />
                                                    </div></div>
                                                <div className="control-group">
                                                    <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                                        <label htmlFor="Nama B">Nama Belakang</label>
                                                        <input className="form-control" type="text" onChange={handleProfiileEditChange} name="last_name" placeholder={profile.last_name} />
                                                    </div></div>
                                                <div className="control-group">
                                                    <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                                        <label htmlFor="Email">Email</label>
                                                        <input className="form-control" type="email" onChange={handleProfiileEditChange} name="email" placeholder={profile.email} />
                                                    </div></div>
                                                <div className="control-group">
                                                    <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                                        <label htmlFor="No_hp">Nomor Hp</label>
                                                        <input className="form-control" type="number" onChange={handleProfiileEditChange} name="no_hp"  placeholder={profile.no_hp} />
                                                    </div></div>
                                                <div className="control-group">
                                                    <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                                        <label htmlFor="Password">Password</label>
                                                        <input className="form-control" type="password" onChange={handleProfiileEditChange} name="password" placeholder="Input password baru" required />
                                                    </div></div>
                                                <br />
                                                <button onClick={handleUpdate} className="btn btn-primary btn-xl">{loading ? 'Loading...' : 'Update'}</button>
                                    </form>
                                    }
                                    <br/>
                                <div dangerouslySetInnerHTML={ {__html: alertN}}></div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </section>
            </Frontlayout>
            </AuthWrapper>
        </div>
    );
}

export default index;