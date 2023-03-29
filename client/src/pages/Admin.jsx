import { useContext, useEffect, useState } from "react";
import Article from "../components/Article";
import Articles from "../components/Articles";
import { AppContext } from "../contexts/AppContext";
import { getArticles } from "../utils/articles.mjs";
function Admin() {
  const appContext = useContext(AppContext);
  const [articles, setArticles] = useState([]);
  const refreshArticles = (cat) => {
    appContext.loading.play();
    getArticles().then((data) => {
      setArticles(data);
      appContext.loading.pause();
    });
  };
  useEffect(() => {
    refreshArticles();
  }, []);

  return (
    <div className="admin">
      <Articles isAdmin={true} articles={articles} />
    </div>
  );
}

export default Admin;
