import { IEmployee } from "./Interfaces";
import { Link } from "react-router-dom";

export default function TeamDetails(props: IEmployee): JSX.Element {
  return (
    <div className="team-details" key={props.id}>
      <div className="profile-image">
        <img className="avatar" src={props.avatar} alt="employee avatar" />
      </div>
      <p>
        <strong>Name: </strong>
      </p>
      <Link to={`/employees/${props.id}`}>{props.name}</Link>
      <p>
        <strong>ID: </strong> {props.id}
      </p>
      <p>
        <strong>Role: </strong>
        {props.role}
      </p>
    </div>
  );
}