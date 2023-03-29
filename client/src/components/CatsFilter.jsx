import { useState } from "react";
import { GrView } from "react-icons/gr";
export default function CatsFilter({ cats, refreshArticles }) {
  const [showCats, setShowCats] = useState(false);
  function toggleShowCats() {
    setShowCats(!showCats);
  }

  function onSelectCat(c) {
    refreshArticles(c)
    toggleShowCats();
  }

  return (
    <div className="cats-filter">
      <div className="title">
        <h2>Topics</h2>
        <button className="showCats" onClick={toggleShowCats}>
          <GrView size={30} color={"red"} />
        </button>
      </div>
      <div className={`topics ${showCats ? "show" : ""}`}>
        <button onClick={() => onSelectCat()}>
          <h3>Show All</h3>
        </button>
        {cats.map((c, i) => {
          return (
            <button key={i} onClick={() => onSelectCat(c)}>
              <h3>{c}</h3>
            </button>
          );
        })}
      </div>
    </div>
  );
}
