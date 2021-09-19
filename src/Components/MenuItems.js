import React from "react";

function MenuItems({ menuItems }) {
  return (
    <div className="projects">
      {menuItems.map((item) => {
        return (
          <div className="project" key={item.id}>
            <div className="image-data">
              <img src={item.image} alt="" />
              <ul className="hover-items">
                <li>
                  {item.icon1 === "" ? null : (
                    <div className="aDiv">
                      <a href={item.link1} target="_blank" rel="noreferrer">
                        {item.icon1}{" "}
                      </a>
                    </div>
                  )}
                  {item.icon2 === "" ? null : (
                    <div className="aDiv">
                      <a href={item.link2} target="_blank" rel="noreferrer">
                        {item.icon2}
                      </a>
                    </div>
                  )}
                </li>
              </ul>
            </div>
            <a
              href={item.link1 ? item.link1 : item.link2}
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <h5>{item.title}</h5>
            </a>

            <p>{item.info}</p>
          </div>
        );
      })}
    </div>
  );
}

export default MenuItems;
