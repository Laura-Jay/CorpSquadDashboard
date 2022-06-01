import { IClient, IEmployee, IFullProjectData, IProject } from "../Interfaces";

export default function stitchData(
  projectData: IProject[],
  employeeData: IEmployee[],
  clientData: IClient[]
): IFullProjectData[] {
  const fullProjectData = [];

  for (const project of projectData) {
    const teamMembers = [];
    let teamMember;

    for (const employeeId of project.employeeIds) {
      teamMember = employeeData.filter((element) => {
        return element.id === employeeId;
      });
      teamMembers.push(teamMember[0]);
    }


    let clientDetails = {
      id: "",
      name: "",
    };

    for (const client of clientData) {
      if (client.id === project.clientId) {
        clientDetails = client;
      }
    }

    fullProjectData.push({
      project: {
        id: project.id,
        startDate: project.contract.startDate,
        endDate: project.contract.endDate,
        size: project.contract.size,
      },
      client: {
        id: clientDetails.id,
        name: clientDetails.name,
      },
      team: teamMembers,
    });
  }

  return fullProjectData;
}
