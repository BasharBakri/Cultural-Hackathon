import React from 'react'
import Article from './Article'

function Articles({articles,isAdmin}) {
  return (
    <div className="articles">
      {
        articles.map((a,i)=>{
            return <Article isAdmin={isAdmin} key={i} article={a}/>
        })
      }
      </div>
  )
}

export default Articles