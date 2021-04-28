import Link from 'next/link'
import { useRouter } from 'next/router'
import { useContext } from 'react'
import Frontlayout from '../../../components/layout/Frontlayout'
import { AppContext } from '../../../context/global'
import { useGetProyeks } from '../../../generated/hook'
import { formatMoney } from '../../../lib/formatMoney'
import { withApolloNoHeaders } from '../../../withApolloNoHeaders'
const index = () => {
    const{ data, loading, error } = useGetProyeks()
    const {islogin, setisLogin } : any= useContext(AppContext)
    const router = useRouter()
    const {pesan, rekening, total} = router.query

   return (
        <div>
            <Frontlayout title="List Mitra Usaha | Mitra Tani Membangun Negeri">
            <section className="page-section portfolio" id="portfolio" style={{marginTop: "22px"}}>
                <div className="container">
                { pesan == '1' ?
                    <div className="alert alert-warning alert-dismissible fade show" role="alert">
                        {/* @ts-ignore  */}
                    <strong>Terima Kasih!</strong> Data investasi anda telah masuk ke sistem kami, Silakan transfer sejumlah {formatMoney(parseInt(total))} ke rekening {rekening} dan konfirmasi pembayaran melalui <a href={`https://api.whatsapp.com/send?phone=${process.env.ADMIN_WA_NUMBER}`}>WhatsApp</a>.
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                    </div>
                : ''
                }
                    {/* Portfolio Section Heading*/}
                    <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">List Usaha Mitra</h2>
                    {/* Icon Divider*/}
                    <div className="divider-custom">
                    <div className="divider-custom-line" />
                    <div className="divider-custom-icon"><svg className="svg-inline--fa fa-star fa-w-18" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" /></svg>{/* <i class="fas fa-star"></i> Font Awesome fontawesome.com */}</div>
                    <div className="divider-custom-line" />
                    </div>
                    {/* Portfolio Grid Items*/}
                    <div className="row justify-content-center">
                    {/* Portfolio Item */}
                    {!data ? 'Loading...' : ''}
                    {data?.items?.proyek?.map((pro, k) => (
                    <div className="col-md-6 col-lg-4 mb-5" key={k}>
                    
                        <div className="card" style={{width: '18rem'}}>
                            {/* @ts-ignore  */}
                            <img className="card-img-top" src={pro?.thumbnail} alt={pro?.judul || "img"} />
                            <div className="card-body">
                                <h5 className="card-title">{pro?.judul}</h5>
                                <div className="row">
                                    <div className="col text-left"><small> Harga per slot</small> <br/>{formatMoney(pro?.harga_proyek)}</div>
                                    <div className="col text-right"> <small> Bagi Hasil</small> <br/>{pro?.persentase} %</div>
                                </div>
                                <div className="row">
                                    <div className="col text-left"></div>
                                    <div className="col text-right"><b> {pro?.periode} bulan </b></div>
                                </div>
                                <div className="row">
                                    {/* @ts-ignore  */}
                                    <div className="col text-left"><small> Tersisa</small> <br/>{parseInt(pro?.slot) - pro?.user_proyek?.length || pro?.dana_terkumpul / pro?.slot || pro?.slot }</div>
                                    <div className="col text-right"> <small> Total Slot</small> <br/>{pro?.slot}</div>
                                </div> <br/>
                                <div className="row">
                                    <div className="col text-left" data-toggle="modal" data-target={`#portfolioModal${k}`}><a  className="btn btn-primary">Detail</a></div>
                                    <div className="col text-right">{islogin ? <Link href={{pathname: '/input_proyek', query: {id : pro?.uuid} }}><button className="btn btn-primary">Danai Proyek</button></Link> : '' }</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    ))}
                    {/* Portfolio Item */}
                    {data?.items?.proyek?.map((pro, k) => (
                    <div key={k} className="portfolio-modal modal fade show" id={`portfolioModal${k}`} tabIndex={-1} role="dialog" aria-labelledby="portfolioModal6Label"  aria-modal="true">
                    <div className="modal-dialog modal-xl" role="document">
                        <div className="modal-content">
                        <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true"><svg className="svg-inline--fa fa-times fa-w-11" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512" data-fa-i2svg><path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" /></svg>{/* <i class="fas fa-times"></i> Font Awesome fontawesome.com */}</span>
                        </button>
                        <div className="modal-body text-center">
                            <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                {/* Portfolio Modal - Title*/}
                                <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0" id="portfolioModal6Label">{pro?.judul}</h2>
                                <p>{pro?.alamat}</p>
                                {/* @ts-ignore  */}
                                <img src={pro?.thumbnail} alt="" className="img-fluid"/>
                                {/* Icon Divider*/}
                                <div className="divider-custom">
                                    <div className="divider-custom-line" />
                                    <div className="divider-custom-icon"><svg className="svg-inline--fa fa-star fa-w-18" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" /></svg>{/* <i class="fas fa-star"></i> Font Awesome fontawesome.com */}</div>
                                    <div className="divider-custom-line" />
                                </div>
                                
                                {/* Portfolio Modal - Text*/}
                                <p className="mb-5" dangerouslySetInnerHTML={{ __html: pro?.deskripsi || "" }}></p> <br/>
                                <br/>
                                    <div className="row text-center">
                                        <table className="table table-bordered table-responsive">
                                            <thead>
                                                <tr>
                                                    <td>Status</td>
                                                    <td>Dana Terkumpul</td>
                                                    <td>Periode</td>
                                                    <td>Persentase Hasil</td>
                                                    <td>Harga Per Slot</td>
                                                    <td>Proposal</td>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>{pro?.status}</td>
                                                    <td>{formatMoney(pro?.dana_terkumpul)}</td>
                                                    <td>{pro?.periode} bulan</td>
                                                    <td>{pro?.persentase} %</td>
                                                    <td>{formatMoney(pro?.harga_proyek)}</td>
                                                    {/* @ts-ignore  */}
                                                    <td><a className="btn btn-primary" href={pro?.proposal}>Download</a></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                
                                <button className="btn btn-primary" data-dismiss="modal">
                                    <svg className="svg-inline--fa fa-times fa-w-11 fa-fw" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512" data-fa-i2svg><path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" /></svg>
                                    Tutup
                                </button>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    ))} 

                    </div>
                </div>
                </section>
            </Frontlayout>
        </div>
    );
}

export default withApolloNoHeaders(index);