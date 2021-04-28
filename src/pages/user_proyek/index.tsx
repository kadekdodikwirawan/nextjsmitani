import { useRouter } from "next/router";
import Frontlayout from "../../components/layout/Frontlayout"
import { AuthWrapper } from "../../context/authContext";
import { useGetUserProyek } from "../../generated/hook";
import { formatMoney } from "../../lib/formatMoney";
import { withApollo } from "../../withApollo";


const index = () => {
    const router = useRouter()
    const {data, loading, error} = useGetUserProyek()
    let n = 1

    return (
        <div>
            <Frontlayout title="Proyek Saya | Mitra Tani Membangun Negeri">
                <AuthWrapper>
                    <section className="page-section portfolio" id="portfolio" style={{marginTop:"25px"}}>
                        <div className="container text-center">
                        {loading ? <p className="mt-4">Loading...</p> : 
                        <>
                                    {/* Portfolio Section Heading*/}
                                    <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Proyek yang anda Jalani</h2> <br/>
                                        
                                            <table className="text-center table table-responsive table-striped">
                                                <thead>
                                                    <tr>
                                                        <td>No</td>
                                                        <td>Nama Proyek</td>
                                                        <td>Status</td>
                                                        <td>Harga</td>
                                                        <td>Persentase</td>
                                                        <td>Periode</td>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {loading ? <tr><td colSpan={6}> <p className="text-center">Loading..</p> </td></tr> : ''}
                                                    { data ? data?.items?.user_proyek?.map((dat, k)=>(
                                                        <tr key={k}>
                                                            <td>{n++}</td>
                                                            <td>{dat?.proyeks?.judul}</td>
                                                            <td>{dat?.status == 'published' ? 'Disetujui' : 'Pending'}</td>
                                                            <td>{formatMoney(dat?.proyeks?.harga_proyek)}</td>
                                                            <td>{dat?.proyeks?.persentase} %</td>
                                                            <td>{dat?.proyeks?.periode} bulan</td>
                                                        </tr>
                                                    )) : ''}
                                                    {data?.items?.user_proyek?.length == 0 ? <tr> <td colSpan={6}> <p className="text-center">Belum ada data investasi</p> </td></tr> : ''}
                                                </tbody>
                                                <tfoot><tr><td></td></tr></tfoot>
                                            </table>
                            </>
                            }
                        </div>
                    </section>
                </AuthWrapper>
            </Frontlayout>
        </div>
    );
}

export default withApollo(index);