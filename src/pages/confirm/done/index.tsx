import axios from "axios";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Frontlayout from "../../../components/layout/Frontlayout"
import useQuery from "../../../lib/useQuery";

const index = () => {

    const router = useRouter()
    const query = useQuery()

    const updateUser =()=>{
        // @ts-ignore 
        axios.patch(process.env.ADMIN_URL+'/users/'+query.id+'?access_token='+query.token, { "email_confirm": 1})
        .then(res=>{
            router.push('/profile')
        }).catch(err=>{
            router.push('/login')
        })
        
    }

    useEffect(() => {
        if(!query) {return};
        updateUser()
    }, [query])

    return (
        <>
        <Frontlayout title="Terimakasih, akun anda terkonfirmasi">
             
        </Frontlayout>   
        </>
    );
}

export default index;