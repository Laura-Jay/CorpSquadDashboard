import { IFullProjectData } from "../Interfaces";

export const sortOptions = [
  { name: "Start Date (ascending)", value: "startDateAsc" },
  { name: "Start Date (descending)", value: "startDateDes" },
  { name: "Completion Date (ascending)", value: "endDateAsc" },
  { name: "Completion Date (descending)", value: "endDateDes" },
  { name: "Contract Size (ascending)", value: "sizeAsc" },
  { name: "Contract Size (descending)", value: "sizeDes" },
];

function sortStartDate(a: IFullProjectData, b: IFullProjectData) {
  const dateA = new Date(a.project.startDate);
  const dateB = new Date(b.project.startDate);
  return dateA > dateB ? 1 : -1;
}

function sortEndDate(a: IFullProjectData, b: IFullProjectData) {
  const dateA = new Date(a.project.endDate);
  const dateB = new Date(b.project.endDate);
  return dateA > dateB ? 1 : -1;
}

export default function SortProjects(
  sortVal: string,
  projectsArr: IFullProjectData[]
): IFullProjectData[] {
  if (sortVal) {
    let sortedProjects: IFullProjectData[] = [];

    switch (sortVal) {
      case "startDateAsc":
        {
          const startDateAsc = projectsArr.sort(sortStartDate);
          sortedProjects = [...startDateAsc];
        }
        break;
      case "startDateDes":
        {
          const startDateDes = projectsArr.sort(sortStartDate);
          startDateDes.reverse();
          sortedProjects = [...startDateDes];
        }
        break;
      case "endDateAsc":
        {
          const endDateAsc = projectsArr.sort(sortEndDate);
          sortedProjects = [...endDateAsc];
        }
        break;
      case "endDateDes":
        {
          const endDateDesc = projectsArr.sort(sortEndDate);
          endDateDesc.reverse();
          sortedProjects = [...endDateDesc];
        }
        break;
      case "sizeAsc":
        {
          const sizeAsc = projectsArr.sort(
            (a, b) => parseFloat(b.project.size) - parseFloat(a.project.size)
          );
          sizeAsc.reverse();
          sortedProjects = [...sizeAsc];
        }
        break;
      case "sizeDes":
        {
          const sizeDesc = projectsArr.sort(
            (a, b) => parseFloat(b.project.size) - parseFloat(a.project.size)
          );
          sortedProjects = [...sizeDesc];
        }
        break;
    }

    return sortedProjects;
  }

  return projectsArr;
}
