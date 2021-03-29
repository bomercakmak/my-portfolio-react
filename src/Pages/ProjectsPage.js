import React, {useState}from "react";
import Title from "../Components/Title";
import Categories from "../Components/Categories";
import MenuItems from "../Components/MenuItems";
import projects from "../Components/allProjects";


function ProjectsPage() {
    const [categories, setCategories] = useState(null)
    const [menuItems,setMenuItems] = useState(projects)
  return (
    <div className="ProjectPage">
      <div className="title">
        <Title title={"Projects"} span={"Projects"} />
      </div>
      <div className="projects-data">
        <Categories />
        <MenuItems menuItems={menuItems}/>
      </div>
    </div>
  );
}

export default ProjectsPage;
