import React, { useContext, useEffect, useRef } from "react";
import { FaCalendarTimes } from "react-icons/fa";
import { MdCategory, MdOutlineManageSearch } from "react-icons/md";
import { HiNewspaper } from "react-icons/hi";
import { changeArticle } from "../utils/articles.mjs";
import { AppContext } from "../contexts/AppContext.jsx";

function Article({ article, isAdmin }) {
  const appContext=useContext(AppContext)
  const catInputRef=useRef()
  const onChnageActivityArticle=()=>{
    appContext.loading.play()
    article.isInHomePage=!article.isInHomePage;
    changeArticle(article).then((data)=>{
      appContext.loading.pause()
      alert('Status Article changed to:'+data.isInHomePage)
    }).catch(err=>{
      alert(err+'')
    })
  }

  const onChnageArticle=()=>{
    article.category=catInputRef.current.value
    debugger
    appContext.loading.play()
    changeArticle(article).then((data)=>{
      appContext.loading.pause()
      alert('cat Article changed to:'+data.category)
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
            {article.category??'no category'}
          </h3>
          <h3 className="icon">
            <HiNewspaper size={25} />
            {article.author}
          </h3>
        </div>
        <h2>{article.title}</h2>
        <p>{article.description}</p>
        <a className="src" href={article.articleURL}>
          <h3>
            Source
            <MdOutlineManageSearch size={30} />: {article.websiteName}
          </h3>
        </a>
        {isAdmin && (
          <div className="switch">
          <div className="data">
          <h2>Active:</h2>
            <input onChange={()=>onChnageActivityArticle()}  defaultChecked={article.isInHomePage} type="checkbox" id={article.id} />
            <label htmlFor={article.id}></label>
            <button onClick={()=>onChnageArticle()} className="catBtn">save cat</button>
            <input ref={catInputRef} type="text" placeholder={article.category} />
          </div>
          </div>
        )}
      </div>
      <div
        style={{ backgroundImage: `url(${article.imageUrl})` }}
        className="image"
      ></div>
    </div>
  );
}

export default Article;
