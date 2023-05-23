import {  useEffect, useState } from "react";
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
    }
    getArticles();
},[])
// const AppContextValue = {articles,setArticles}
    return(
        <>
            <section className="section">
                <h1 className="articleTitle">Ini Halaman Blog</h1>
                <p className="articleDeskription"> here you can look informasi which i shared in this page</p>
                <p className="articleDeskription"> berikut ini adalah tulisan tulisanku</p>
                {/* jika loading nya false maka munculkan data datanya */}
                {loading ?(
                    <p>loading......</p>
                ) : (
                    <div>
                    {articles.map((article) => {
                        return(
                            <>
                            <article key={article.id} className="article">
                                <h2 className="articleTitle"><Link to={`/Blog/${article.id}`}>{article.title}</Link></h2>
                                <img src={article.imageUrl} rel="img" alt="foto" className="articleImage"/>
                                <p className="articleSummary">{article.summary}</p>
                                <time className="articleTime">{new Date(article.publishedAt).toLocaleDateString()}</time>
                                <p className="articleUrl"> Sumber <a href={article.url} target="_blank" rel="noreferrer">{article.newsSite}</a></p>
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