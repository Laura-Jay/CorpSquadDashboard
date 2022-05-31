import { IEmployee, IFullProjectData } from "../../Interfaces";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Employee from "./Components/Employee";
import findProjectsFromEmployee from "../../utils/findProjectsFromEmployee"
import findEmployee from "../../utils/findEmployees"
import Project from "../../Project";

interface Iprops {
  projectData: IFullProjectData[]
}

export default function EmployeePage(props: Iprops): JSX.Element {
  const { employeeId } = useParams() as { employeeId: string };

  const currentEmployee: IEmployee = findEmployee(props.projectData, employeeId);

  const employeeProjects: IFullProjectData[] = findProjectsFromEmployee(props.projectData, employeeId)

  const currentEmployeeData = 
    <Employee 
    id={currentEmployee.id}
    name={currentEmployee.name}
    role={currentEmployee.role}
    avatar={currentEmployee.avatar}
    />

  const employeeProjectsData = employeeProjects.map((project) => {
    return (
    <Project
    key={project.project.id}
    project={project.project}
    team={project.team}
    client={project.client}
    />)
    
  })
  

  return (
    <>
      <nav>
        <button>
          <Link to="/" className="link-button">
            Dashboard Home
          </Link>
        </button>
      </nav>
      <section className="responsive-wrapper">
        <h1>Employee Bio</h1>
        <div className="employee-data">{currentEmployeeData}</div>
        <div className="project-grid">{employeeProjectsData}</div>
      </section>
    </>
  );
}