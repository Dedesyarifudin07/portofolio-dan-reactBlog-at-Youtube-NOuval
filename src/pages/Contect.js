import { useEffect } from "react";

function Contect(){
    useEffect(() => {
        document.title ="Contact";
    },[])
    return(
        <>
        <section className="section">
            <h1 className="section-title">INI HALAMAN Contect</h1>
            <p className="section-description">here you can call me for working together</p>
            <p className="section-description">my number : 085773863369</p>
        </section>
        </>
    )
}

export default Contect;