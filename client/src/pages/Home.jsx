import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../App';
import Article from '../components/Article';
import { getArticles,getCategories } from '../utils/articles.mjs';

function Home() {
    const appContext=useContext(AppContext)
    const [articles,setArticles]=useState([])
    const [cats,setCats]=useState([])
    const refreshArticles=(cat)=>{
        appContext.loading.play()
       getArticles(cat).then((data)=>{
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
      <div className="articles">
      {
        articles.map((a,i)=>{
            return <Article key={i} article={a}/>
        })
      }
      </div>
      <div className="cats-filter">
        <div className="title">
        <h2>Topics</h2>
        </div>
        <div className="topics">
        <button onClick={()=>refreshArticles()}><h3>Show All</h3></button>
        {
            cats.map((c,i)=>{
                return <button onClick={()=>refreshArticles(c)}><h3 key={i}>{c}</h3></button>
            })
        }
        </div>
      </div>
    </div>
  )
}

export default Home