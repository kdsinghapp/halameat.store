import React from "react";

const Sidebar = () => {
  return (
    <div className="h-100 sidebar-content">
      <div>
        <input
          type="text"
          id="box"
          placeholder="Search anything..."
          class="search__box"
        />
        <i
          class="fas fa-search search__icon"
        ></i>
      </div>
      <ul className="list-styled" style={{color:"black"}}> 
        <li>Desserts</li>
        <li>Chicken</li>
      </ul>
    </div>
  );
};

export default Sidebar;
