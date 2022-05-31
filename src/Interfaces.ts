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
    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    data: any;
    isError: boolean;
    isLoading: boolean;
  }
  
  export interface IFullProjectData {
    
      client: IClient
      project: {
        endDate: string,
        id: string,
        size: string,
        startDate: string,
      },
      team: IEmployee[]
      
  }