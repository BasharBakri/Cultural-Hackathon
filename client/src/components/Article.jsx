import React, { useContext, useEffect } from "react";
import { FaCalendarTimes } from "react-icons/fa";
import { MdCategory, MdOutlineManageSearch } from "react-icons/md";
import { HiNewspaper } from "react-icons/hi";
import { changeArticleStatus } from "../utils/articles.mjs";
import { AppContext } from "../contexts/AppContext.jsx";

function Article({ article, isAdmin }) {
  const appContext=useContext(AppContext)
  const onChnageActivityArticle=()=>{
    appContext.loading.play()
    changeArticleStatus(article).then((data)=>{
      appContext.loading.pause()
      alert('Status Article changed to:'+data)
    }).catch(err=>{
      alert(err+'')
    })
  }
  return (
    <div className="article">
      <div className="detials">
        <div className="top">
          <h3 className="icon">
            <FaCalendarTimes size={25} />
            {article.date}
          </h3>
          <h3 className="icon">
            <MdCategory size={25} />
            {article.category}
          </h3>
          <h3 className="icon">
            <HiNewspaper size={25} />
            {article.author}
          </h3>
        </div>
        <h2>{article.title}</h2>
        <p>{article.description}</p>
        <a className="src" href="#">
          <h3>
            Source
            <MdOutlineManageSearch size={30} />: {article.source}
          </h3>
        </a>
        {isAdmin && (
          <div className="switch">
          <div className="data">
          <h2>Active:</h2>
            <input onChange={()=>onChnageActivityArticle()}  defaultChecked={article.isActive} type="checkbox" id={article.id} />
            <label htmlFor={article.id}></label>
          </div>
          </div>
        )}
      </div>
      <div
        style={{ backgroundImage: 'url("/new.jpg")' }}
        className="image"
      ></div>
    </div>
  );
}

export default Article;
