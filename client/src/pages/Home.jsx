import React from 'react'
import Article from '../components/Article';

function Home() {
    const articles=[
        {
          title: "New Study Finds that Coffee May Reduce Risk of Heart Disease",
          description:
            "A new study published in the American Journal of Cardiology suggests that drinking coffee may lower the risk of heart disease.",
          date: "2022-05-12",
          answer: "positive",
          image: "https://example.com/images/coffee-heart.jpg",
          category: "Health",
        },
        {
          title: "Scientists Discover New Gene Linked to Alzheimer's Disease",
          description:
            "Researchers at the University of California have identified a new gene that appears to play a key role in the development of Alzheimer's disease.",
          date: "2022-06-18",
          answer: "negative",
          image: "https://example.com/images/alzheimers-gene.jpg",
          category: "Science",
        },
        {
          title:
            "New Survey Shows Majority of Americans Believe Climate Change is Real",
          description:
            "A new survey conducted by the Pew Research Center has found that 65% of Americans believe that climate change is happening and is largely caused by human activity.",
          date: "2022-07-23",
          answer: "positive",
          image: "https://example.com/images/climate-change.jpg",
          category: "Environment",
        },
        {
          title: "Study Shows Link Between Social Media Use and Depression in Teens",
          description:
            "A new study published in the Journal of Adolescent Health has found that excessive social media use is linked to an increased risk of depression in teenagers.",
          date: "2022-09-01",
          answer: "negative",
          image: "https://example.com/images/social-media-depression.jpg",
          category: "Psychology",
        },
      ];
      

  return (
    <div className="home">
      <div className="articles">
      {
        articles.map((a,i)=>{
            return <Article key={i} article={a}/>
        })
      }
      </div>
    </div>
  )
}

export default Home