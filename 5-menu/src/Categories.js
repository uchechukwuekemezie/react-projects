import React from "react";

const Categories = ({categories, filterItems}) => {
  return (
    <div className="btn-container">
      <button className="filter-btn" onClick={()=>filterItems("all")}>All</button>
      <button className="filter-btn" onClick={()=>filterItems("breakfast")}>Breakfast</button>
    </div>
  );
};

export default Categories;
