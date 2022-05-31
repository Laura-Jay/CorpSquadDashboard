import { IFullProjectData } from "../Interfaces";

export default function findProjectsFromEmployee(
  projects: IFullProjectData[],
  id: string,
): IFullProjectData[] {
  const relevantProjects: IFullProjectData[] = [];

  for (const project of projects) {
    for (const employee of project.team)
    if (employee.id === id) {
      relevantProjects.push(project);
    }
  }

  return relevantProjects;
}