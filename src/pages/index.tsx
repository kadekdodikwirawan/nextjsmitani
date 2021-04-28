import Header from '../components/frontend/Header';
import Frontlayout from '../components/layout/Frontlayout';
import { withApollo } from '../withApollo';
// @ts-ignore 
import Slider from "react-slick";

const index = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return (
        <div>
            <Frontlayout title="Mi Tani | Mitra Tani Membangun Negeri">
                <Header/>

                <section className="page-section" id="alasan">
                    <div className="container">
                        {/* Contact Section Heading*/}
                        <h2 className="page-section-heading text-center text-secondary mb-0">Alasan Mi Tani Hadir</h2>
                        {/* Icon Divider*/}
                        <div className="divider-custom">
                        <div className="divider-custom-line" />
                        <div className="divider-custom-icon"><svg className="svg-inline--fa fa-star fa-w-18" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" /></svg>{/* <i class="fas fa-star"></i> Font Awesome fontawesome.com */}</div>
                        <div className="divider-custom-line" />
                        </div>
                        <img src="https://tropic.id/static/media/reasontropic.38888d21.png" alt="" className="img-fluid"/><br/>
                        {/* Contact Section Form*/}
                    </div>
                </section>
                <section className="page-section" id="cara">
                    <div className="container">
                        {/* Contact Section Heading*/}
                        <h2 className="page-section-heading text-center text-secondary mb-0">Bagaimana Mi Tani Bekerja ?</h2>
                        <h3 className="text-center text-secondary mb-0">Mi Tani Menghadirkan Ekosistem Pertanian Yang Sehat dan Modern ?</h3>
                        <h5 className="text-center text-secondary mb-0">Yaitu dengan skema:</h5>
                        
                        {/* Icon Divider*/}
                        <div className="divider-custom">
                        <div className="divider-custom-line" />
                        <div className="divider-custom-icon"><svg className="svg-inline--fa fa-star fa-w-18" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" /></svg>{/* <i class="fas fa-star"></i> Font Awesome fontawesome.com */}</div>
                        <div className="divider-custom-line" />
                        </div>
                        <div>
                            <div className="row">
                                <div className="col-md-4">
                                <div className="lc-block">
                                    <img className="img-fluid" src="https://tropic.id/static/media/sideworkmodel.8763d641.png" />
                                </div>{/* /lc-block */}
                                </div>{/* /col */}
                                <div className="col-md-8">
                                <div className="lc-block">
                                    <div className="d-flex px-3">
                                    <div>
                                        <svg width="6em" height="6em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg" lc-helper="svg-icon">
                                        <path d="M4.605 2.5V2v.5zM3.61 3.6l.498-.043V3.55l-.498.05zM7 2.5h.5A.5.5 0 0 0 7 2v.5zm-.676 1.454l.304.397-.304-.397zm3.352 0l-.304.397.304-.397zM9 2.5V2a.5.5 0 0 0-.5.5H9zm3.39 1.1l-.498-.05v.007l.498.043zM12.1 7l-.498-.043a.5.5 0 0 0 .498.543V7zm1.854-.676l.397.304-.397-.304zm0 3.352l.397-.304-.397.304zM12.1 9v-.5a.5.5 0 0 0-.498.542L12.1 9zm.29 3.4l-.498.043v.007l.498-.05zM9 13.5h-.5a.5.5 0 0 0 .5.5v-.5zm.676-1.454l-.304-.397.304.397zm-3.352 0l.304-.397-.304.397zM7 13.5v.5a.5.5 0 0 0 .5-.5H7zm-2.395 0V13v.5zm-.995-1.1l.498.05v-.007L3.61 12.4zM3.9 9l.498.042A.5.5 0 0 0 3.9 8.5V9zm-1.854.676l-.397-.304.397.304zm0-3.352l-.397.304.397-.304zM3.9 7v.5a.5.5 0 0 0 .498-.543L3.9 7zm.705-5a1.5 1.5 0 0 0-1.493 1.65l.995-.1A.5.5 0 0 1 4.605 3V2zM7 2H4.605v1H7V2zm.5.882V2.5h-1v.382h1zm-.872 1.469c.375-.287.872-.773.872-1.469h-1c0 .195-.147.42-.48.675l.608.794zM6.5 4.5l.001-.006a.113.113 0 0 1 .012-.025.459.459 0 0 1 .115-.118l-.608-.794c-.274.21-.52.528-.52.943h1zM8 5c-.491 0-.912-.1-1.19-.24a.86.86 0 0 1-.271-.194.213.213 0 0 1-.039-.063V4.5h-1c0 .568.447.947.862 1.154C6.807 5.877 7.387 6 8 6V5zm1.5-.5v.003a.213.213 0 0 1-.039.064.86.86 0 0 1-.27.193C8.91 4.9 8.49 5 8 5v1c.613 0 1.193-.123 1.638-.346.415-.207.862-.586.862-1.154h-1zm-.128-.15c.065.05.099.092.115.119.008.013.01.021.012.025L9.5 4.5h1c0-.415-.246-.733-.52-.943l-.608.794zM8.5 2.883c0 .696.497 1.182.872 1.469l.608-.794c-.333-.255-.48-.48-.48-.675h-1zm0-.382v.382h1V2.5h-1zm2.895-.5H9v1h2.395V2zm1.493 1.65A1.5 1.5 0 0 0 11.395 2v1a.5.5 0 0 1 .498.55l.995.1zm-.29 3.392l.29-3.4-.996-.085-.29 3.4.996.085zm.284-.542H12.1v1h.782v-1zm.675-.48c-.255.333-.48.48-.675.48v1c.696 0 1.182-.497 1.469-.872l-.794-.608zm.943-.52c-.415 0-.733.246-.943.52l.794.608a.459.459 0 0 1 .118-.115.113.113 0 0 1 .025-.012L14.5 6.5v-1zM16 8c0-.613-.123-1.193-.346-1.638-.207-.415-.586-.862-1.154-.862v1h.003l.01.003a.237.237 0 0 1 .053.036.86.86 0 0 1 .194.27c.14.28.24.7.24 1.191h1zm-1.5 2.5c.568 0 .947-.447 1.154-.862C15.877 9.193 16 8.613 16 8h-1c0 .491-.1.912-.24 1.19a.86.86 0 0 1-.194.271.214.214 0 0 1-.063.039H14.5v1zm-.943-.52c.21.274.528.52.943.52v-1l-.006-.001a.113.113 0 0 1-.025-.012.458.458 0 0 1-.118-.115l-.794.608zm-.675-.48c.195 0 .42.147.675.48l.794-.608c-.287-.375-.773-.872-1.469-.872v1zm-.782 0h.782v-1H12.1v1zm.788 2.858l-.29-3.4-.996.084.29 3.401.996-.085zM11.395 14a1.5 1.5 0 0 0 1.493-1.65l-.995.1a.5.5 0 0 1-.498.55v1zM9 14h2.395v-1H9v1zm.5-.5v-.382h-1v.382h1zm0-.382c0-.195.147-.42.48-.675l-.608-.794c-.375.287-.872.773-.872 1.469h1zm.48-.675c.274-.21.52-.528.52-.943h-1l-.001.006a.113.113 0 0 1-.012.025.459.459 0 0 1-.115.118l.608.794zm.52-.943c0-.568-.447-.947-.862-1.154C9.193 10.123 8.613 10 8 10v1c.492 0 .912.1 1.19.24.14.07.226.14.271.194a.214.214 0 0 1 .039.063v.003h1zM8 10c-.613 0-1.193.123-1.638.346-.415.207-.862.586-.862 1.154h1v-.003l.003-.01a.214.214 0 0 1 .036-.053.859.859 0 0 1 .27-.194C7.09 11.1 7.51 11 8 11v-1zm-2.5 1.5c0 .415.246.733.52.943l.608-.794a.459.459 0 0 1-.115-.118.113.113 0 0 1-.012-.025L6.5 11.5h-1zm.52.943c.333.255.48.48.48.675h1c0-.696-.497-1.182-.872-1.469l-.608.794zm.48.675v.382h1v-.382h-1zM4.605 14H7v-1H4.605v1zm-1.493-1.65A1.5 1.5 0 0 0 4.605 14v-1a.5.5 0 0 1-.498-.55l-.995-.1zm.29-3.393l-.29 3.401.996.085.29-3.4-.996-.086zm-.284.543H3.9v-1h-.782v1zm-.675.48c.255-.333.48-.48.675-.48v-1c-.696 0-1.182.497-1.469.872l.794.608zm-.943.52c.415 0 .733-.246.943-.52l-.794-.608a.459.459 0 0 1-.118.115.112.112 0 0 1-.025.012L1.5 9.5v1zM0 8c0 .613.123 1.193.346 1.638.207.415.586.862 1.154.862v-1h-.003a.213.213 0 0 1-.064-.039.86.86 0 0 1-.193-.27C1.1 8.91 1 8.49 1 8H0zm1.5-2.5c-.568 0-.947.447-1.154.862C.123 6.807 0 7.387 0 8h1c0-.492.1-.912.24-1.19a.86.86 0 0 1 .194-.271.213.213 0 0 1 .063-.039H1.5v-1zm.943.52c-.21-.274-.528-.52-.943-.52v1l.006.001a.112.112 0 0 1 .025.012c.027.016.068.05.118.115l.794-.608zm.675.48c-.195 0-.42-.147-.675-.48l-.794.608c.287.375.773.872 1.469.872v-1zm.782 0h-.782v1H3.9v-1zm-.788-2.858l.29 3.4.996-.085-.29-3.4-.996.085z" />
                                        </svg>
                                    </div>
                                    <div className="lc-block pl-4">
                                        <div >
                                        <h3 className="h5 font-weight-bolder">Seleksi &amp; Pembinaan Calon Mitra Tani</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et metus id ligula malesuada placerat
                                            sit amet quis enim.</p>
                                        </div>
                                    </div>
                                    </div>
                                </div> <br/>
                                <div className="lc-block">
                                    <div className="d-flex px-3">
                                    <div>
                                        <svg width="6em" height="6em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg" lc-helper="svg-icon">
                                        <path fillRule="evenodd" d="M4 11H2v3h2v-3zm5-4H7v7h2V7zm5-5h-2v12h2V2zm-2-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1h-2zM6 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm-5 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3z" />
                                        </svg>
                                    </div>
                                    <div className="lc-block pl-4">
                                        <div >
                                        <h3 className="h5 font-weight-bolder">Seleksi &amp; Pembinaan Calon Mitra Tani</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et metus id ligula malesuada placerat
                                            sit amet quis enim.</p>
                                        </div>
                                    </div>
                                    </div>
                                </div><br/>
                                <div className="lc-block">
                                    <div className="d-flex px-3">
                                    <div>
                                        <svg width="6em" height="6em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg" lc-helper="svg-icon">
                                        <path fillRule="evenodd" d="M1 2.5A1.5 1.5 0 0 1 2.5 1h1A1.5 1.5 0 0 1 5 2.5h4.134a1 1 0 1 1 0 1h-2.01c.18.18.34.381.484.605.638.992.892 2.354.892 3.895 0 1.993.257 3.092.713 3.7.356.476.895.721 1.787.784A1.5 1.5 0 0 1 12.5 11h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5H6.866a1 1 0 1 1 0-1h1.711a2.839 2.839 0 0 1-.165-.2C7.743 11.407 7.5 10.007 7.5 8c0-1.46-.246-2.597-.733-3.355-.39-.605-.952-1-1.767-1.112A1.5 1.5 0 0 1 3.5 5h-1A1.5 1.5 0 0 1 1 3.5v-1zM2.5 2a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm10 10a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1z" />
                                        </svg>
                                    </div>
                                    <div className="lc-block pl-4">
                                        <div >
                                        <h3 className="h5 font-weight-bolder">Seleksi &amp; Pembinaan Calon Mitra Tani</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et metus id ligula malesuada placerat
                                            sit amet quis enim.</p>
                                        </div>
                                    </div>
                                    </div>
                                </div><br/>
                                <div className="lc-block">
                                    <div className="d-flex px-3">
                                    <div>
                                        <svg width="6em" height="6em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg" lc-helper="svg-icon">
                                        <path fillRule="evenodd" d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
                                        <path fillRule="evenodd" d="M10.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
                                        </svg>
                                    </div>
                                    <div className="lc-block pl-4">
                                        <div >
                                        <h3 className="h5 font-weight-bolder">Seleksi &amp; Pembinaan Calon Mitra Tani</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et metus id ligula malesuada placerat
                                            sit amet quis enim.</p>
                                        </div>
                                    </div>
                                    </div>
                                </div>{/* /lc-block */}
                                </div>{/* /col */}
                            </div>
                        </div>

                        {/* Contact Section Form*/}
                    </div>
                </section>
                <section className="page-section" id="testimoni">
                    <div className="container">
                    <h2 className="page-section-heading text-center text-secondary mb-0">Testimoni Hasil Investasi di Mi Tani ?</h2>
                        <div id="carouselExampleIndicators" className="carousel slide mt-4" data-ride="carousel">
                            <ol className="carousel-indicators">
                                <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
                                <li data-target="#carouselExampleIndicators" data-slide-to={1} />
                                <li data-target="#carouselExampleIndicators" data-slide-to={2} />
                            </ol>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                <img className="d-block w-100" src="https://kastara.id/wp-content/uploads/2020/07/Ahmad-Riza-Patria31.jpg" alt="First slide" />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>Ini Caption Block 1</h5>
                                    <p>Deskripsi</p>
                                </div>
                                </div>
                                <div className="carousel-item">
                                <img className="d-block w-100" src="https://lh3.googleusercontent.com/proxy/BNJzSCo62IHW6FQJpB-jW3x-QpG_1JYqmdr4Yjzb9V8Qf8XJrIGfYAcBYDnVidM_k7xo9rzR2fpG_4ksQkjYiLc30WkHAqPxeZSxas1_DhKAUAlx89f17wbNs1comg" alt="Second slide" />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>Ini Caption Block 2</h5>
                                    <p>Deskripsi</p>
                                </div>
                                </div>
                                <div className="carousel-item">
                                <img className="d-block w-100" src="https://kastara.id/wp-content/uploads/2020/09/Minapadi.jpg" alt="Third slide" />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>Ini Caption Block 3</h5>
                                    <p>Deskripsi</p>
                                </div>
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true" />
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true" />
                                <span className="sr-only">Next</span>
                            </a>
                        </div>

                    </div>
                </section>

            </Frontlayout>
        </div>
    );
}

export default withApollo(index);