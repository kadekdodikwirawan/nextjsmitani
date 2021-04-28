import axios from "axios";
import { useState } from "react";
import Frontlayout from "../../../components/layout/Frontlayout";

const index = () => {
    const [inputemail, setEmail] = useState({
        "email": ""
    })

    const handleReqPass =(e :any)=>{
        e.preventDefault()
        axios.post(process.env.ADMIN_URL+'/auth/password/request', inputemail)
        .then(res=>{
        })
    }
    const handleInpuChange =(e :any)=>{
        const { name, value } = e.target;
            setEmail(prevState => ({
            ...prevState,
            [name]: value
        }));
    }
    return (
        <Frontlayout title="Reset Password">
        <section className="page-section portfolio" id="portfolio" style={{marginTop:"25px"}}>
            <div className="container">
                    {/*Section Heading*/}
                    <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Daftar</h2>
                <div>
                    <form>
                        <input type="email" name="email" onChange={handleInpuChange}/>
                        
                    <button onClick={handleReqPass}>OK</button>
                    </form>
                </div>
            </div>
        </section>
        </Frontlayout>
    );
}

export default index;