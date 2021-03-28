import React from "react";

function MenuItems({ menuItems }) {
  return (
    <div>
      {menuItems.map((item) => {
        return (
          <div className="project" key={item.id}>
            <div className="image-data">
              <img src={item.image} alt="" />
              <ul className="hover-items">
                <li>
                  <a href={item.link1}></a>
                  <a href={item.link2}></a>
                </li>
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default MenuItems;
