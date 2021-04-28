import { useRouter } from "next/router";
import { useEffect } from "react";
import Frontlayout from "../../components/layout/Frontlayout";
import Loading from "../../components/loader/Loading";

const index = () => {
    const router = useRouter()
    useEffect(() => {
        router.push(process.env.ADMIN_URL || '')
    }, [])
    return (
        <div>
            <Frontlayout title="Login | Mitra Tani Membangun Negeri">
                <Loading/>
            </Frontlayout>
        </div>
    );
}

export default index;