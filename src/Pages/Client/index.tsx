import Client from "./Components/Client";
import Project from "../../Project";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { IFullProjectData } from "../../Interfaces";
import findClient from "../../utils/findClient";
import findProjectsFromClient from "../../utils/findProjectsFromClient";

interface Iprops {
  projectData: IFullProjectData[];
}

export default function ClientPage(props: Iprops): JSX.Element {
  const { clientId } = useParams() as { clientId: string };

  const currentClient = findClient(props.projectData, clientId);

  const clientProjects: IFullProjectData[] = findProjectsFromClient(
    props.projectData,
    clientId
  );

  const currentClientData = (
    <Client id={currentClient.id} name={currentClient.name} />
  );

  const clientProjectsData = clientProjects.map((project: IFullProjectData) => {
    return (
      <Project
        key={project.project.id}
        project={project.project}
        team={project.team}
        client={project.client}
      />
    );
  });

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
        <h1>Client Bio</h1>
        <div className="client-bio">{currentClientData}</div>
        <div className="project-grid">{clientProjectsData}</div>
      </section>
    </>
  );
}
