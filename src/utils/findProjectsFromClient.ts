import { IFullProjectData } from "../Interfaces";

export default function findProjectsFromClient(
  projects: IFullProjectData[],
  id: string
): IFullProjectData[] {
  const relevantProjects: IFullProjectData[] = [];

  for (const project of projects) {
    if (project.client.id === id) {
      relevantProjects.push(project);
    }
  }

  return relevantProjects;
}
