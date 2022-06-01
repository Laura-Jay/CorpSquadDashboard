import { IEmployee, IClient } from "./Interfaces";
import { useState } from "react";
import { Link } from "react-router-dom";
import TeamDetails from "./TeamDetails";

interface IProjectProps {
  project: {
    endDate: string;
    id: string;
    size: string;
    startDate: string;
  };
  team: IEmployee[];
  client: IClient;
}

export default function Project(props: IProjectProps): JSX.Element {
  const [toggleDetails, setToggleDetails] = useState(false);

  const teamMembers = props.team.map((employee: IEmployee) => {
    return (
      <TeamDetails
        key={employee.id}
        id={employee.id}
        avatar={employee.avatar}
        role={employee.role}
        name={employee.name}
      />
    );
  });

  function handleShowDetails() {
    setToggleDetails((prev) => !prev);
  }

  return (
    <section className="project">
      <div className="project-header">
        <p>
          <strong>Project ID:</strong> {props.project.id}
        </p>
      </div>
      <div className="project-body">
        <p>
          <strong>Client ID:</strong> {props.client.id}
        </p>
        <p>
          <strong>Client Name:</strong>
        </p>
        <Link to={`/clients/${props.client.id}`}>{props.client.name}</Link>
        <p>
          <strong>Start Date:</strong> {props.project.startDate}
        </p>
        <p>
          <strong>End Date:</strong> {props.project.endDate}
        </p>
        <p>
          <strong>Project Size:</strong> {props.project.size}
        </p>
      </div>
      <div className="project-footer">
        {toggleDetails ? (
          <button onClick={handleShowDetails}>Hide Team Member Details</button>
        ) : (
          <button onClick={handleShowDetails}>Show Team Member Details</button>
        )}
        <div className="team-details-grid">{toggleDetails && teamMembers}</div>
      </div>
    </section>
  );
}
