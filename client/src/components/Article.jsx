import React from 'react'

function Article({article}) {
  return (
    <div className="article">
        <h2>{article.title}</h2>
        <p>{article.description}</p>
        <h3>Category:{article.category}</h3>
        <h3>Published:{article.date}</h3>
        <h3>Answer:{article.answer}</h3>
    </div>
  )
}

export default Article