import { IClient } from "../../../Interfaces";

export default function Client(props: IClient): JSX.Element {
  return (
    <section className="client">
      <h3> {props.id}</h3>
      <h3> {props.name}</h3>
    </section>
  );
}
