import { IEmployee, IFullProjectData } from "../Interfaces";

export default function findEmployees(projects: IFullProjectData[], employeeId: string): IEmployee { 

    const defaultEmployee = {
        id: "not found",
        name: "not found",
        avatar: "../../public/images/default.jpg",
        role: "not found"

    }


    for (const project of projects){
        for (const employee of project.team){
            if (employee.id === employeeId)
            return employee
        }
    }

    return defaultEmployee
}