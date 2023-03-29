export const getArticles = async (cat) => {
  const res=await fetch('https://hackathon.cyclic.app/api/v1/news/articles').then((res)=>res.json())
  return res.data
  // return new Promise((res) => {
  //   setTimeout(() => {
  //     if (cat) res(articles.filter((f) => f.category === cat));
  //     else res(articles);
  //   }, 1000);
  // });
};

export const getSelectedArticles = async (cat) => {
  const data=await getArticles();
  return data.filter(f=>f.isInHomePage)
  // return new Promise((res) => {
  //   setTimeout(() => {
  //     if(cat)
  //     res(articles.filter((f) => f.isActive && cat===f.category));
  //     else
  //     res(articles.filter((f) => f.isActive));
  //   }, 1000);
  // });
};

export const changeArticle=async(article)=>{

  const res=await fetch('https://hackathon.cyclic.app/api/v1/news/articles/'+article._id,{
    headers: {
      "Content-Type": "application/json",
    },
    method: "Put",
    body:JSON.stringify(article)
  }).then(res=>res.json())
  debugger
  return res.data;
}


export const getCategories = async () => {
  const data=await getArticles();
  const cats=data.map(f=>f.isInHomePage?f.category:'').filter(f=>f?f:'')
  return [...new Set(cats)]
  }
