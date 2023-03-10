import React, { useEffect, useState } from "react";
import { projectsData, projectsNav } from "./Data";
import WorksItems from "./WorksItems";
import { AnimatePresence, motion } from "framer-motion";

const Works = () => {
  const [item, setItem] = useState({ name: "all" });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (item.name === "all") {
      setProjects(projectsData);
    } else {
      const newProjects = projectsData.filter((project) => {
        return project.category.toLowerCase() === item.name;
      });
      setProjects(newProjects);
    }
  }, [item]);

  const handleClick = (el, index) => {
    setItem({ name: el.target.textContent.toLowerCase() });
    setActive(index);
  };
  return (
    <div>
      <div className="work__filters">
        {projectsNav.map((item, index) => {
          return (
            <span
              onClick={(e) => handleClick(e, index)}
              className={`work__item ${index === active ? "active-work" : ""}`}
              key={index}
            >
              {item.name}
            </span>
          );
        })}
      </div>

      <div className="work__container container grid">
        <AnimatePresence>
          {projects.map((item) => {
            return <WorksItems item={item} key={item.id} />;
          })}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Works;
