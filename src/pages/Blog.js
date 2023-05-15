import { useEffect, useState } from "react";
import {Link} from 'react-router-dom';
function Blog(){
    const [articles,setArticles] = useState([]);
    const [loading,setLoading] = useState(true);

    useEffect(function() {
        document.title="blog";
      async function getArticles(){
        const request = await fetch('https://api.spaceflightnewsapi.net/v3/articles');
        const response  =await request.json();
        setLoading(false);
        setArticles(response);
        console.log(response);
      }
      getArticles();
    },[])
    return(
        <>
        <section className="section">
            <h1 className="section-title">INI HALAMAN Blog</h1>
            <p className="section-description"> here you can look informasi which i shared in this page</p>
            <p className="section-description"> berikut ini adalah tulisan tulisanku</p>

            {/* jika loading nya false maka munculkan data datanya */}
            {loading ?(
                <p>loading......</p>
            ) : (
                <div>
                   {articles.map((article) => {
                    return(
                        <>
                        <article key={article.id} className="article">
                            <h2 className="article-title"><Link to={`/Blog/${article.id}`}>{article.title}</Link></h2>
                             <img src={article.imageUrl} height={200} width={200} rel="img" className="article-image"/>
                             <p className="article-summary">{article.summary}</p>
                             <time className="article-time">{new Date(article.publishedAt).toLocaleDateString()}</time>
                            <p className="article-url"> <a href={article.url} target="_blank" rel="noreferrrer">sumber: {article.newsSite}</a></p>
                             <hr/>
                        </article>
                        </>
                    )
                   })}
                </div>
            )}
        </section>
        </>
    )
}

export default Blog;