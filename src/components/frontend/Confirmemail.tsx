import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Confirmemail = () => {

    const [tokenemail, setTokenemail] = useState('')
    const [info, setInfo] = useState('')
    const router = useRouter()
    const {email, id} = router.query
    const kirimEmail =()=>{
        axios.get(process.env.HOOK+'/proyekmnghook/kirim_link_konfirmasi.php?token='+tokenemail+'&email='+email+'&id='+id+'&url='+process.env.PUBLIC_URL)
        .then(res=>{
            setInfo('Link konfirmasi berhasil terkirim')
        })
        .catch(err=>{
            console.log(err);
            setInfo('Link konfirmasi gagal terkirim')
        })
    }
    
    useEffect(() => {
       const token = localStorage.getItem('access_token') || ""
       const users = localStorage.getItem('user_session')
       setTokenemail(token)
    }, [])

    return (
        <>
        <div className="card">
        <div className="card-header">
            Konfirmasi email
        </div>
        <div className="card-body">
            <h5 className="card-title">Konfirmasi via email</h5>
            <p className="card-text">Silakan klik Konfirmasi dan cek email anda untuk verifikasi akun anda.</p>
            <button onClick={kirimEmail} className="btn btn-primary mb-4">Konfirmasi</button>
            <p>{info}</p>
        </div>
        </div>
        </>

    );
}

export default Confirmemail;