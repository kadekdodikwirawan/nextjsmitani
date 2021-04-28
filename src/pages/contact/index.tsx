import { useRouter } from "next/router";
import { useState } from "react";
import Frontlayout from "../../components/layout/Frontlayout";

const index = () => {
    const initInput = {
        "nama": "",
        "alamat": "",
        "phone": "",
        "message": "",
    }
    const [kontak, setKontak] = useState(initInput)
    const handlehangeInput =(e : any)=>{
        const { name, value } = e.target;
        setKontak(prevState => ({
          ...prevState,
            [name]: value
        }));
        // console.log(user);  
      }
      const router = useRouter()
      const handleSubmit=(e :any)=>{
          e.preventDefault()
        router.push('https://api.whatsapp.com/send?phone='+process.env.ADMIN_WA_NUMBER+'&text=Saya%20'+kontak.nama+'%0AAlamat%20'+kontak.alamat+'%0A%0A'+kontak.message)
      }
    return (
        <div>
            <Frontlayout title="Contact | Mitra Tani Membangun Negeri">
            <section className="page-section" id="contact" style={{marginTop: "22px"}}>
                <div className="container">
                    {/* Contact Section Heading*/}
                    <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Kontak Kami</h2>
                    {/* Icon Divider*/}
                    <div className="divider-custom">
                    <div className="divider-custom-line" />
                    <div className="divider-custom-icon"><svg className="svg-inline--fa fa-star fa-w-18" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" /></svg>{/* <i class="fas fa-star"></i> Font Awesome fontawesome.com */}</div>
                    <div className="divider-custom-line" />
                    </div>
                    {/* Contact Section Form*/}
                    <div className="row">
                    <div className="col-lg-8 mx-auto">
                       
                        <form id="contactForm" name="sentMessage">
                        <div className="control-group">
                            <div className="form-group floating-label-form-group controls mb-0 pb-2">
                            <label>Nama</label>
                            <input className="form-control" name="nama" onChange={handlehangeInput} type="text" placeholder="Nama" />
                            <p className="help-block text-danger" />
                            </div>
                        </div>
                        <div className="control-group">
                            <div className="form-group floating-label-form-group controls mb-0 pb-2">
                            <label>Alamat</label>
                            <input className="form-control" name="alamat" onChange={handlehangeInput} type="text" placeholder="Alamat"  />
                            <p className="help-block text-danger" />
                            </div>
                        </div>
                        <div className="control-group">
                            <div className="form-group floating-label-form-group controls mb-0 pb-2">
                            <label>Nomor Hp</label>
                            <input className="form-control" name="phone" onChange={handlehangeInput} type="tel" placeholder="Nomor Hp"  />
                            <p className="help-block text-danger" />
                            </div>
                        </div>
                        <div className="control-group">
                            <div className="form-group floating-label-form-group controls mb-0 pb-2">
                            <label>Pesan</label>
                            <textarea className="form-control" name="message" onChange={handlehangeInput} placeholder="Pesan"  />
                            <p className="help-block text-danger" />
                            </div>
                        </div>
                        <br />
                        <div id="success" />
                        <div className="form-group"><button className="btn btn-primary btn-xl" onClick={handleSubmit}  type="submit">Send</button></div>
                        </form>
                    </div>
                    </div>
                </div>
                </section>
                </Frontlayout>
        </div>
    );
}

export default index;