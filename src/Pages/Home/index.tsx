import React from "react";
import { IFullProjectData } from "../../Interfaces";
import getAggregate from "../../utils/getAggregate";
import { useState } from "react";
import Project from "../../Project";

interface Iprops {
  projectData: IFullProjectData[];
}

export default function HomePage(props: Iprops): JSX.Element {
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("");
  // const [displayedProjects, setDisplayedProjects] = useState<IFullProjectData[]>(props.projectData);

  const aggregateRevenue = getAggregate(props.projectData);

  console.log(props.projectData);

  const projectTiles = props.projectData.map((project) => {
    return (
      <Project
        key={project.project.id}
        project={project.project}
        team={project.team}
        client={project.client}
      />
    );
  });

  function handleFilter(e: React.ChangeEvent<HTMLSelectElement>) {
    setFilter(e.target.value);
    // localStorage.setItem("filter", e.target.value);
  }

  function handleSort(e: React.ChangeEvent<HTMLSelectElement>) {
    setSort(e.target.value);
    // localStorage.setItem("sort", e.target.value);
  }

  return (
    <section className="responsive-wrapper">
      <h1>CorpSquad Project Dashboard</h1>
      <h3>Aggregate Consultancy Project Revenue</h3>
      <h1 className="cost-h1">£{aggregateRevenue}</h1>
      <div className="options-bar">
        <select onChange={handleFilter} value={filter}>
          <option value="">Filter By</option>
          {filterOptions.map((item) => (
            <option key={item.value} value={item.value}>
              {item.name}
            </option>
          ))}
        </select>
        <select onChange={handleSort} value={sort}>
          <option value="">Sort By</option>
          {sortOptions.map((item) => (
            <option key={item.value} value={item.value}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
      <div className="project-grid">{projectTiles}</div>
    </section>
  );
}

const filterOptions = [
  { name: "Start Date", value: "startDate" },
  { name: "Completion Date", value: "endDate" },
  { name: "Contract Size", value: "size" },
  { name: "Team Member", value: "employee" },
  { name: "Client ID", value: "client" },
];

const sortOptions = [
  { name: "Start Date", value: "startDate" },
  { name: "Completion Date", value: "endDate" },
  { name: "Contract Size", value: "size" },
];
