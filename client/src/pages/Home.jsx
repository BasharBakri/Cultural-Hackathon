import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from "../contexts/AppContext";
import Article from '../components/Article';
import Articles from '../components/Articles';
import CatsFilter from '../components/CatsFilter';
import { getCategories, getSelectedArticles } from '../utils/articles.mjs';

function Home() {
    const appContext=useContext(AppContext)
    const [articles,setArticles]=useState([])
    const [cats,setCats]=useState([])

    const refreshArticles=(cat)=>{
        appContext.loading.play()
       getSelectedArticles(cat).then((data)=>{
        setArticles(data)
        appContext.loading.pause()
       })
    }

    useEffect(()=>{
        refreshArticles()
        getCategories().then((data)=>setCats(data))
    },[])
      
  return (
    <div className="home">
      <Articles articles={articles}/>
      <CatsFilter cats={cats} refreshArticles={refreshArticles}/>
    </div>
  )
}

export default Home