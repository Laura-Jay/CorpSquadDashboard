import { IFullProjectData } from "../Interfaces";

export default function filterProjects(
  filterType: string,
  filterVal: string,
  projectsArr: IFullProjectData[]
): IFullProjectData[] {
  let filteredProjects: IFullProjectData[] = [];

  if (filterType) {
    switch (filterType) {
      // case "startDate":

      // break;
      // case "endDate":

      // break;
      case "size":
        if (filterVal.includes(">")) {
          const value = filterVal.replace(">", "");
          parseInt(value);
          filteredProjects = projectsArr.filter(
            (project) => project.project.size >= value
          );
        } else if (filterVal.includes("<")) {
          const value = filterVal.replace("<", "");
          parseInt(value);
          filteredProjects = projectsArr.filter(
            (project) => project.project.size
          );
        }

        break;
      case "employee":
        for (const project of projectsArr) {
          for (const employee of project.team) {
            if (
              employee.id === filterVal ||
              employee.name.includes(filterVal) ||
              employee.role.includes(filterVal)
            ) {
              filteredProjects.push(project);
            }
          }
        }
        break;
      case "client":
        filteredProjects = projectsArr.filter(
          (project) =>
            project.client.id === filterVal ||
            project.client.name.includes(filterVal)
        );

        break;
      case "id":
        filteredProjects = projectsArr.filter(
          (project) => project.project.id === filterVal
        );
        break;
    }

    return filteredProjects;
  }

  return projectsArr;
}

export const filterOptions = [
  { name: "Start Date", value: "startDate" },
  { name: "Completion Date", value: "endDate" },
  { name: "Contract Size", value: "size" },
  { name: "Team Member", value: "employee" },
  { name: "Client", value: "client" },
  { name: "Project ID", value: "id" },
];
