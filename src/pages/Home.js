import { useEffect } from "react";
import jokowi from '../img/jokowi.png';
import html from '../img/html.png';
import css from '../img/css.png';
import reactjs from '../img/react.png';
import winbox from '../img/winbox.png';
import excel from '../img/excel.png';
import word from '../img/word.jpg';
import cisco from '../img/cisco.png';
import rakitpc from '../img/img/rakitpc.jpeg';
import mikrotik from '../img/img/imkrotik.jpg';
import website from '../img/img/dede.png';
function Home(){
    useEffect(() => {
        document.title ="Home";
    },[])
    return(
        <>
        <section className="section-1">
            <div className="section-satu">
                <p className="section-article">Hello perkenalkan Nama Saya Dede syarifudin</p>
                <p className="section-article">Saya Seorang Lulusan yang berasal dari Smk Taruna Terpadu 1,Jurusan saya Teknik Komputer  dan Jaringan
                Tetapi Saya juga Menyukai Programming Walaupun Agak sulit tapi ini menyenangkan dan Membuat saya Bahagia,Dan Saya juga Senang Tentang tkj Dan itu Memamng basic saya</p>
            </div>
            <div className="section-gambar">
                <img src={jokowi}  height="300px" width="300px" alt="foto" />
            </div>
        </section>
        {/* project */}
        <section className="section-2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1300 200"><path fill="rgba(0,255,255)" fill-opacity="1" d="M0,32L48,74.7C96,117,192,203,288,202.7C384,203,480,117,576,106.7C672,96,768,160,864,186.7C960,213,1056,203,1152,181.3C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
             <div className="section-2-project">
                <h1 className="section-2-project-judul"> my project</h1>
                <div className="section-2-project-gambar">
                       <div className="card">
                            <img src={rakitpc} alt="rakitpc" height="179"></img> 
                            <div className="deskription">
                                <h5> merakit komputer</h5>  
                                <p> Merakit satu persatu bagian komputer,sampai instalasi os,misalkan os ubuntu,windows,dll</p>                   
                            </div>
                       </div>
                       <div className="card"> 
                            <img src={mikrotik} alt="mikrotik" height="179px"></img>
                            <div className="deskription">
                                <h5>mensetting mikrotik</h5>
                                <p>mensetting konfigurasi mikrotik sesuai keinginan klien,
                                    misalkan membuat user dan password baru,meblokir situs website agar tidak bisa di akses ketika
                                    ber internet,misalkan youtube,mengatur limit bandwith,dll.
                                </p>
                            </div>
                       </div>
                       <div className="card">
                         <img src={website} alt="build-website" height="179px"></img>
                            <div className="deskription">
                                <h5> membuat website </h5>
                                <p>membuat website seperti landing page,blog post,menggunakan html css , react js</p>

                            </div>
                       </div>
                       
                </div>
             </div>
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="rgba(0,255,255)" fill-opacity="1" d="M0,160L288,32L576,96L864,64L1152,192L1440,160L1440,0L1152,0L864,0L576,0L288,0L0,0Z"></path></svg>
             {/* skills */}
          <section className="section-2 ">
             <div className="section-2-skills">
                <h1 className="section-2-project-judul"> my skills</h1>
                <div className="section-2-project-gambar">
                       <div className="card-skills">
                            <img src={html} alt="rakitpc" height="179"></img> 
                       </div>
                       <div className="card-skills"> 
                            <img src={css} alt="mikrotik" height="179px"></img>
                       </div>
                       <div className="card-skills">
                         <img src={reactjs} alt="build-website" height="179px"></img>
                       </div>
                       <div className="card-skills">
                         <img src={word} alt="build-website" height="179px"></img>
                       </div>
                       <div className="card-skills">
                         <img src={winbox} alt="build-website" height="179px"></img>
                       </div>
                       <div className="card-skills">
                         <img src={excel} alt="build-website" height="179px"></img>
                       </div>
                       <div className="card-skills">
                         <img src={cisco} alt="build-website" height="179px"></img>
                       </div>
                </div>
             </div>
        </section>
        </section>


        
        </>
    )
}

export default Home;