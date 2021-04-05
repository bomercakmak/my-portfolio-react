import React, {useState}from "react";
import Title from "../Components/Title";
import Categories from "../Components/Categories";
import MenuItems from "../Components/MenuItems";
import projects from "../Components/allProjects";

const allCategories = ['All', ...new Set(projects.map(item => item.category))]


function ProjectsPage() {
  let listedProjects = projects.sort((a, b) => b.id - a.id);

  const [categories] = useState(allCategories)
    const [menuItems,setMenuItems] = useState(listedProjects)
    const filter = (category) => {
      if(category === 'All'){
        setMenuItems(listedProjects);
        return
      }
        const filteredData = listedProjects.filter((item) =>{
          return item.category === category
        })
        setMenuItems(filteredData)
    }


  return (
    <div className="ProjectPage">
      <div className="title">
        <Title title={"Projects"} span={"Projects"} />
      </div>
      <div className="projects-data">
        <Categories filter={filter} categories={categories}/>
        <MenuItems menuItems={menuItems}/>
      </div>
    </div>
  );
}

export default ProjectsPage;
