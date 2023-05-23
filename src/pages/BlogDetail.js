import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BlogDetail= () => {
  // const context = useAppContext();
  // console.log(context.articles)
  const params = useParams();
  const [articles,setArticles] = useState({});
  const [loading,setLoading] = useState(true);
  const [notFound,SetNotFound] = useState(false);
  useEffect(() => {
     const getArticles = async () => {
      const request = await fetch(`https://api.spaceflightnewsapi.net/v3/articles/${params.id}`);

      if(!request.ok){
        return SetNotFound(true);
    }

      const response = await request.json();
      document.title = response.title;
      setArticles(response);
      setLoading(false)
    }
    getArticles();
  },[params])


  if(notFound){
    return (
      <h1>halaman kaga ada bang</h1>
    )
  }
  return(
    <>
    <section className="section">
     {/* jika loading false maka tampilkan data datanya */}
     {loading ? (
      <div>
        loading .........
      </div>
     ):(
      <articles classname="article" >
        <h2 className="articleTitle"> {articles.title}</h2>
        <img src={articles.imageUrl} alt={articles.title} className="articleImage"/>
        <p className="articleUrl"> sumber: <a href={articles.url} target="_blank" rel="noreferrer">{articles.newsSite}</a></p>
        <h3 className="articleSummary">{articles.summary}</h3>
        <time>Published at :{new Date(articles.publishedAt).toLocaleDateString()}</time>
        
      </articles>

     )}

    </section>
    </>
  )
}

export default BlogDetail;