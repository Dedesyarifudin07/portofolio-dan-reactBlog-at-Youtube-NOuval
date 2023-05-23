import { useEffect } from "react";
import Dede from '../img/fotoSaya.png';
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
import Rj from '../img/buat_rj.jpg';
import BelajarMikrotik from '../img/belajar_mikrotik.jpg';
function Home(){
    useEffect(() => {
        document.title ="Home";
    },[])
    return(
        <>
        <section className="section-1">
            <div className="section-satu">
                <h2 >Hello perkenalkan <br/>Saya <span className="name">Dede syarifudin</span></h2>
                <div  className="section-article">
                  <span>Saya Seorang Lulusan yang berasal dari Smk Taruna Terpadu 1,Jurusan saya <b><span className="major">Teknik Komputer  dan Jaringan</span> </b>
                   Tetapi Saya juga Menyukai Programming Walaupun Agak sulit tapi ini menyenangkan dan Membuat saya Bahagia,Dan Saya juga Senang Tentang tkj Dan itu Memamng basic saya</span>
                
                </div>
                
            </div>
            <div className="section-gambar">
                <img src={Dede}  height="400px" width="300px" alt="foto" />
              <span>
              <svg  className="blob" width="400" height="400" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
                <defs><clipPath id="b">
                  <path fill="currentColor" d="M761 609.5q-42 109.5-151.5 248t-281 62Q157 843 84.5 671.5t41-302Q239 239 369.5 211t266.5-5.5Q772 228 787.5 364T761 609.5Z"/></clipPath><filter id="a" x="-50vw" y="-50vh" width="100vw" height="100vh"><feFlood flood-color="#fff" result="neutral-gray"/>
                  <feTurbulence type="fractalNoise" baseFrequency="2.5" numOctaves="100" stitchTiles="stitch" result="noise"/><feColorMatrix in="noise" type="saturate" values="0" result="destaturatedNoise"/><feComponentTransfer in="desaturatedNoise" result="theNoise"><feFuncA type="table" tableValues="0 0 0.15 0"/>
                  </feComponentTransfer><feBlend in="SourceGraphic" in2="theNoise" mode="soft-light" result="noisy-image"/></filter></defs><g filter="url(#a)" clip-path="url(#b)"><path fill="#26cf31" d="M761 609.5q-42 109.5-151.5 248t-281 62Q157 843 84.5 671.5t41-302Q239 239 369.5 211t266.5-5.5Q772 228 787.5 364T761 609.5Z"/></g></svg>
              </span>

                
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
                         <img src={website} alt="build-website" height="179px"></img>
                            <div className="deskription">
                                <h5> membuat website </h5>
                                <p>membuat website seperti landing page,blog post,menggunakan html css , react js</p>

                            </div>
                       </div>
                       <div className="card">
                         <img src={Rj} alt="build-website" height="179px"></img>
                            <div className="deskription">
                            <h5> Membuat Kabel Lan </h5>
                                <p>Membuat Kabel lan dengan type sraight</p>

                            </div>
                       </div>
                       <div className="card">
                         <img src={BelajarMikrotik} alt="build-website" height="179px"></img>
                            <div className="deskription">
                            <h5>mensetting mikrotik</h5>
                                <p>mensetting konfigurasi jaringan dengan mikrotik sesuai keinginan klien,
                                    misalkan membuat login page,meblokir situs website agar tidak bisa di akses ketika
                                    tersambung internet,misalkan youtube,mengatur limit bandwith,dll.
                                </p>
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
                       <div className="card-skills">
                         <img src={mikrotik} alt="build-website" height="179px"></img>
                       </div>
                </div>
             </div>
        </section>
        </section>
        <div className="footer ">
                  <span> @Created BY@DedeSyarifudin.2023</span>
        </div>
        


        
        </>
    )
}

export default Home;