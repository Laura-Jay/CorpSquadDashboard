import { IFullProjectData } from "../Interfaces";

export default function getAggregate(projects: IFullProjectData[]): number {
  let aggregate = 0;
  for (const project of projects) {
    aggregate += parseFloat(project.project.size);
  }
  return Math.round(aggregate * 100) / 100;
}
