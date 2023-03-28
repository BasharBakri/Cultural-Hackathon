import React from 'react'
import Article from './Article'

function Articles({articles}) {
  return (
    <div className="articles">
      {
        articles.map((a,i)=>{
            return <Article key={i} article={a}/>
        })
      }
      </div>
  )
}

export default Articles