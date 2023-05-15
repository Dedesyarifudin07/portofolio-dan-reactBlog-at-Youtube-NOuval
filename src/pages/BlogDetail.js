import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BlogDetail= () => {
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
      console.log(response)
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
     {/* jika loading false maka tampilkan data datanya */}
     {loading ? (
      <div>
        loading .........
      </div>
     ):(
      <articles classname="article" >
        <h2 className="article-title"> {articles.title}</h2>
        <img src={articles.imageUrl} alt={articles.title} className="article-image"/>
        <p className="article-url"> sumber: <a href={articles.url} target="_blank" rel="noreferrer">{articles.newsSite}</a></p>
        <h3 className="article-summary">{articles.summary}</h3>
        <time>Published at :{new Date(articles.publishedAt).toLocaleDateString()}</time>
        
      </articles>

     )}
    </>
  )
}

export default BlogDetail;