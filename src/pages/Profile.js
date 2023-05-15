import { useEffect } from "react";

function Profile(){
    useEffect(() => {
        document.title ="Profile";
    },[])
    return(
        <>
        <section className="section">
            <h1 className="section-title">INI HALAMAN Profile</h1>
            <p className="section-description"> here you can look my profile if you want know about me hahaha</p>

            {/* halaman profile */}
            <div className="profile">
                <h2 className="profile-article">sdfsdfsdfsdfds</h2>
            </div>


            {/* project yang pernah di kerjakan */}
        </section>
        </>
    )
}

export default Profile;