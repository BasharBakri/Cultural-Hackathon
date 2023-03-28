import { useContext, useEffect, useState } from "react";
import { AppContext } from "../App";
import Article from "../components/Article";
import { getArticles } from "../utils/articles.mjs";
function Admin() {
    const appContext=useContext(AppContext)
    const [articles,setArticles]=useState([])
    const refreshArticles=(cat)=>{
      appContext.loading.play()
      getArticles().then((data)=>{
        setArticles(data)
        appContext.loading.pause()
      })
  }
  useEffect(()=>{
      refreshArticles()
  },[])

  return (
    <div className="admin">
      <div className="articles">
        {articles.map((a, i) => {
          return <Article key={i} article={a} />;
        })}
      </div>
    </div>
  );
}

export default Admin;
