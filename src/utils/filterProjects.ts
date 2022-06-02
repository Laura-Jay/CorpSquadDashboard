import { IFullProjectData } from "../Interfaces";


function splitDates(dateRange: string ): Date[] {
 const dateRangeArr = [];
  const arr = dateRange.split("-");
 dateRangeArr.push(new Date(arr[0]))
 dateRangeArr.push(new Date(arr[1]))
 return dateRangeArr;
}

export default function filterProjects(
  filterType: string,
  filterVal: string,
  projectsArr: IFullProjectData[]
): IFullProjectData[] {
  let filteredProjects: IFullProjectData[] = [];


  if (filterType) {
    switch (filterType) {
      case "startDate": {
     const  datesArrStart = splitDates(filterVal)
      filteredProjects = projectsArr.filter(
        (project) =>  {
         return ((datesArrStart[0] <= new Date(project.project.startDate)) && (new Date(project.project.startDate) <= datesArrStart[1]))
        })
      } break;
      case "endDate": {
        const datesArrEnd = splitDates(filterVal)
        filteredProjects = projectsArr.filter(
          (project) => 
           ((datesArrEnd[0] <= new Date(project.project.endDate)) && (new Date(project.project.endDate) <= datesArrEnd[1]))
          )
         } break;
      case "size":
          filteredProjects = projectsArr.filter(
            (project) => 
            (parseInt(filterVal) - 10000) <= parseFloat(project.project.size) && parseFloat(project.project.size) <= parseInt(filterVal)
          )
        break;
      case "employee":
        for (const project of projectsArr) {
          for (const employee of project.team) {
            if (
              employee.id === filterVal ||
              employee.name.toLowerCase().includes(filterVal.toLowerCase()) ||
              employee.role.toLowerCase().includes(filterVal.toLowerCase())
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
            project.client.name.toLowerCase().includes(filterVal.toLowerCase())
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

export const filterCostOptions = [
  {name: "£0 - £10,000", value: "10000" },
  {name: "£10,000 - £20,000", value: "20000" },
  {name: "£20,000 - £30,000", value: "30000" },
  {name: "£30,000 - £40,000", value: "40000" },
  {name: "£40,000 - £50,000", value: "50000" },
  {name: "£50,000 - £60,000", value: "60000" },
  {name: "£60,000 + ", value: "70000" }
]
