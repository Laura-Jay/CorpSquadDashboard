import { IClient, IFullProjectData } from "../Interfaces";

export default function findClient(
  projects: IFullProjectData[],
  clientId: string
): IClient {
  const defaultClient = {
    id: "not found",
    name: "not found",
  };

  for (const project of projects) {
    if (project.client.id === clientId) {
      return project.client;
    }
  }

  return defaultClient;
}
