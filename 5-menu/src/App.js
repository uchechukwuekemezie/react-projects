import React, { useState } from "react";
import data from "./data";
import Menu from "./Menu";
import Categories from "./Categories"

const allCategories = ["all", ...new Set(data.map((datum)=> datum.category))];
console.log(allCategories);


const App = () => {
  const [menuData, setMenuData] = useState(data);
  const [categories, setCategories] = useState([allCategories]);

  const filterItems = (category) => {
    if(category==="all") {
      setMenuData(data)
      return;
    }
    const newData = data.filter((datum) => datum.category === category);
    setMenuData(newData)
  };
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2> Our Menu</h2>
          <div className="underline"></div>
          <Categories categories={categories} filterItems={filterItems} />
          <Menu items={menuData} />
        </div>
      </section>
    </main>
  );
};

export default App;
