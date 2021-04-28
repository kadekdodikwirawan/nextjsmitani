import { getDefaultValues } from "@apollo/client/utilities";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Frontlayout from "../../components/layout/Frontlayout";
import { AuthWrapper } from "../../context/authContext"
import { formatMoney } from "../../lib/formatMoney";
const index = () => { 
    const [data, setData] = useState({
        "id": "",
        "judul" : "",
        "alamat" : "",
        "harga_proyek": ""
    })
    const initInputData = {
        "proyeks": "",
        "jumlah": 1,
        "via_rekening": ""
    }
    const [inputData, setInputData] = useState(initInputData)
    const router = useRouter()
    const {id} = router.query
    
    const handleProyekInput =()=>{
        axios.post(process.env.ADMIN_URL+'/items/user_proyek?access_token='+localStorage.getItem('access_token'), inputData)
        .then((res)=>{
            const user = localStorage.getItem('user_session') || ""
            const json = JSON.parse(user)
            const email = json.email 
            // hook kirim email
            axios.get(process.env.HOOK+'/proyekmnghook/c_mailtouser.php?via_rekening='+inputData.via_rekening+'&user_email='+email+'&total='+parseInt(data.harga_proyek) * inputData.jumlah)
            .then(res=>{})
            .catch(err=>{alert(err)})
            router.push('/list/usaha?pesan=1&total='+parseInt(data.harga_proyek) * inputData.jumlah+'&rekening='+inputData.via_rekening)
        })
        .catch((err)=>{
            router.push('/list/usaha')
        })
        
    }
    const handleInputChange =(e: any)=>{
        const { name, value } = e.target;
        setInputData(prevState => ({
      ...prevState,
        [name]: value
    }));
    }
    useEffect(() => {
        axios.get(process.env.ADMIN_URL+'/items/proyek?filter[uuid][_eq]='+id)
            .then((res) =>{
            setData( {"id" : res.data.data[0].id,
                    "judul" : res.data.data[0].judul,
                    "alamat" : res.data.data[0].alamat,
                    "harga_proyek" : res.data.data[0].harga_proyek})
            setInputData({"proyeks" : res.data.data[0].id, "jumlah": 1, "via_rekening" : ""})
            })
            .catch((err)=>{
                router.push('/list/usaha')
            })
    }, [])
            

    return (
        <div>
            <Frontlayout title="Konfirmasi Proyek | Mitra Tani Membangun Negeri">
            <AuthWrapper>
            <section className="page-section portfolio" id="portfolio" style={{marginTop:"25px"}}>
                <div className="container text-center">
                    <h2 className="page-section-heading text-uppercase text-secondary mb-0">Konfirmasi Pendanaan Proyek</h2>
                    <h3 className="text-center mt-5">{data.judul}</h3>
                    <p className="text-center">{data.alamat}</p>
                        <div className="control-group">
                                    <div className="form-group floating-label-form-group controls mb-0 pb-2">
                        <label htmlFor="Email">Jumlah slot</label>
                        
                        <input className="form-control" type="number" onChange={handleInputChange} name="jumlah" placeholder="Jumlah Slot jika lebih dari 1"/>
                        </div></div>
                        <div className="control-group">
                        
                        <label htmlFor="Rekening text-left">Via Rekening</label>
                        <select className="form-control" onChange={handleInputChange} name="via_rekening" placeholder="Rekening">
                            <option value="">--Pilih Bank</option>
                            <option value="BCA - an(Admin 123456)">BCA - an(Admin 123456)</option>
                            <option value="BRI - an(Admin 123456)">BRI - an(Admin 123456)</option>
                            <option value="BNI - an(Admin 123456)">BNI - an(Admin 123456)</option>
                        </select>
                        </div> <br/>
                        { inputData.jumlah >=1 && inputData.via_rekening != "" ?
                        <p className="p-5 bg-warning rounded-4">
                            Silakan klik Konfirmasi dan transfer sejumlah {formatMoney(parseInt(data.harga_proyek) * inputData.jumlah)} ke rekening {inputData.via_rekening}
                        </p> :
                        <p className="p-5 bg-warning rounded-4">
                            Silakan masukan jumlah slot dan pilih rekening bank
                        </p>
                        }
                    {inputData.via_rekening != "" ?
                    <button className="btn btn-primary"  onClick={handleProyekInput}>Konfirmasi</button>    
                    :
                    <button className="btn btn-primary" disabled>Konfirmasi</button>    
                    }           
                </div>
            </section>
            </AuthWrapper>
            </Frontlayout>
        </div>
    );
}

export default index;