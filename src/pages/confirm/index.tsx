import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import Confirmemail from "../../components/frontend/Confirmemail";
import Frontlayout from "../../components/layout/Frontlayout";
import { AuthWrapper } from "../../context/authContext";
import { AppContext } from "../../context/global";

const index = () => {
    const router = useRouter()
    const {emailkonfirmasi} : any= useContext(AppContext)


    if(emailkonfirmasi === true){
        router.push('/profile')
    }
    return (
        <div>
            <Frontlayout title="Email Konfirmasi || Mitra Tani Membangun Negeri">
                <AuthWrapper>
                <section className="page-section portfolio" id="portfolio" style={{ marginTop: "25px" }}>
                    <div className="container">
                        <Confirmemail/>
                    </div>
                </section>
                </AuthWrapper>
            </Frontlayout>
        </div>
    );
}

export default index;