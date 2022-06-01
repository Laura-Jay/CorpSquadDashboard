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
    for (const client of project.team) {
      if (client.id === clientId) return client;
    }
  }

  return defaultClient;
}
