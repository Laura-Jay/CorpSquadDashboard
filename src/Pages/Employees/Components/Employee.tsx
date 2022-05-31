import { IEmployee } from "../../../Interfaces";

export default function Employee(props: IEmployee): JSX.Element {
    return (
      <div className="team-details" key={props.id}>
        <div className="profile-image">
          <img className="avatar" src={props.avatar} alt="employee avatar" />
        </div>
        <p>
          <strong>Name: </strong>
        </p>
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
  