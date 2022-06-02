import { IFullProjectData } from "../../Interfaces";
import getAggregate from "../../utils/getAggregate";
import React, { useEffect, useState } from "react";
import Project from "../../Project";
import getPlaceholder from "../../utils/getPlaceholder";
import filterProjects from "../../utils/filterProjects";
import sortProjects from "../../utils/sortProjects";
import { filterOptions } from "../../utils/filterProjects";
import { sortOptions } from "../../utils/sortProjects";
import { filterCostOptions } from "../../utils/filterProjects"


interface Iprops {
  projectData: IFullProjectData[];
}

export default function HomePage(props: Iprops): JSX.Element {
  const [filter, setFilter] = useState("");
  const [filterVal, setFilterVal] = useState("");
  const [filterCost, setFilterCost] = useState("");
  const [sort, setSort] = useState("");
  const [toggleSubmit, setToggleSubmit] = useState(false);
  const [filteredProjects, setfilteredProjects] = useState<IFullProjectData[]>([]);
  const [dateRange, setDateRange] = useState("");
  
  
  
  useEffect(() => {
    setfilteredProjects(props.projectData);
  }, [props.projectData]);

  useEffect(() => {

    if(filter === "startDate" || filter === "endDate"){
        const filteredresults = filterProjects(
        filter,
        dateRange,
        props.projectData
      );
  
      const sortedResults = sortProjects(sort, filteredresults);
      setfilteredProjects(sortedResults);
    }

    if(filter === "size") {
      const filteredresults = filterProjects(
        filter,
        filterCost,
        props.projectData
      );
  
      const sortedResults = sortProjects(sort, filteredresults);
      setfilteredProjects(sortedResults);
       } 
      
     if(filter !== "size" && filter !== "startDate" && filter !== 'endDate')  {

    const filteredresults = filterProjects(
      filter,
      filterVal,
      props.projectData
    );

    const sortedResults = sortProjects(sort, filteredresults);
    // localStorage.setItem("sort", sort);
    // localStorage.setItem("filter", filter);
    // localStorage.setItem("filter", filterCost);
    setfilteredProjects(sortedResults);
  }
    // eslint-disable-next-line
  }, [toggleSubmit, sort]);

  const aggregateRevenue = getAggregate(props.projectData);

  const placeholderVal = getPlaceholder(filter);

  function handleFilter(e: React.ChangeEvent<HTMLSelectElement>) {
    setFilter(e.target.value);
  }

  function handleDateFilter(e: React.ChangeEvent<HTMLInputElement>){
    setDateRange(e.target.value)
  }

  function handleCostFilter(e: React.ChangeEvent<HTMLSelectElement>){
    setFilterCost(e.target.value)
    setToggleSubmit((prev) => !prev);
  }

  function handleSort(e: React.ChangeEvent<HTMLSelectElement>) {
    setSort(e.target.value);
  }

  function handleSubmit() {
    setToggleSubmit((prev) => !prev);
  }

  function handleReset() {
    setFilter("");
    setFilterVal("");
    setSort("");
    setFilterCost("");
    setDateRange("");
    setToggleSubmit((prev) => !prev);
  }

  const filteredTiles = filteredProjects.map((project) => {
    return (
      <Project
        key={project.project.id}
        project={project.project}
        team={project.team}
        client={project.client}
      />
    );
  });

  return (
    <section className="responsive-wrapper">
      <div className="header">
        <h1>CorpSquad Project Dashboard</h1>

        <div className="cost-analysis">
          <h2>Completed Projects</h2>
          <div className="aggregate">
            <h3>Aggregate Consultancy Project Revenue:</h3>
            <h1 className="cost-h1">£{aggregateRevenue}</h1>
          </div>
        </div>

        {(filter === "id" || filter === "client" || filter === "employee") && (
          <div className="search-bar">
            <h3>Search: </h3>
            <input
              type="text"
              placeholder={placeholderVal}
              id="search"
              value={filterVal}
              onChange={(e) => setFilterVal(e.target.value)}
            />
            <button onClick={handleSubmit}>Apply Filter</button>
            <button onClick={handleReset}>Reset</button>
          </div>
        )}
        { filter === "size" && 
        <div>
        <select onChange={handleCostFilter} value={filterCost}>
           <option value="">Select Cost Range</option>
           {filterCostOptions.map((item) => (
              <option key={item.value} value={item.value}>
                {item.name}
              </option>
            ))}
        </select>
        <button onClick={handleReset}>Reset</button>
        </div>
        }
        { (filter === "startDate" || filter === "endDate") &&
          <div>
          <input
              type="text"
              placeholder={placeholderVal}
              id="startDate"
              value={dateRange}
              onChange={handleDateFilter}
            />
            <button onClick={handleSubmit}>Apply Filter</button>
            <button onClick={handleReset}>Reset</button>
        </div>
        }
  

        <div className="options-bar">
          <h3>Filter:</h3>
          <select onChange={handleFilter} value={filter}>
            <option value="">Filter By</option>
            {filterOptions.map((item) => (
              <option key={item.value} value={item.value}>
                {item.name}
              </option>
            ))}
          </select>

          <h3>Sort:</h3>
          <select onChange={handleSort} value={sort}>
            <option value="">Sort By</option>
            {sortOptions.map((item) => (
              <option key={item.value} value={item.value}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="content">
        <div className="project-grid">{filteredTiles}</div>
      </div>
    </section>
  );
}
