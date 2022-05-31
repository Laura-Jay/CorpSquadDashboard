export interface IPageProps {
    projectData: IProject[];
    employeeData: IEmployee[];
    clientData: IClient[];
  }
  
  export interface IClient {
    id: string;
    name: string;
  }
  
  export interface IEmployee {
    id: string;
    name: string;
    role: string;
    avatar: string;
  }
  
  export interface IProject {
    id: string;
    clientId: string;
    employeeIds: string[];
    contract: {
      startDate: string;
      endDate: string;
      size: string;
    };
    teamData?: IEmployee[];
  }
  
  export interface APIResponse {
    isLoading: boolean,
    isError: boolean,
    data:  [IProject[], IEmployee[], IClient[]] | null
   }
  
  export interface IFullProjectData {
    
      client: {
        id: string,
        name: string
      }
      project: {
        endDate: string,
        id: string,
        size: string,
        startDate: string,
      },
      team: IEmployee[]
      
  }