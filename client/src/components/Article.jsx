import React, { useEffect } from 'react'

function Article({article,isAdmin}) {
  return (
    <div className="article">
        <div className="detials">
        <h2>{article.title}</h2>
        <p>{article.description}</p>
        <h3>Category:{article.category}</h3>
        <h3>Published:{article.date}</h3>
        <h3>Answer:{article.answer}</h3>
        <h3>Author:{article.author}</h3>
        <h3>Source:{article.source}</h3>
        <button>Active:No</button>
        </div>
        <div style={{backgroundImage:'url("/new.jpg")'}} className="image"></div>
    </div>
  )
}

export default Article