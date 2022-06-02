import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/Home";
import ClientPage from "./Pages/Client";
import EmployeePage from "./Pages/Employees";
import { useEffect, useReducer, useState } from "react";
import useAxiosFetchAll from "./APIs/useFetchAll";
import { projectURL, employeeURL, clientURL } from "./APIs/URLs";
import stitchData from "./utils/stitchData";
import { IClient, IEmployee, IFullProjectData, IProject } from "./Interfaces";
import "./styles.css";

interface IState {
  loading: boolean;
  error: boolean;
  projectData: IProject[] | null;
  employeeData: IEmployee[] | null;
  clientData: IClient[] | null;
}

interface ILoadAction {
  type: "LOADING";
}

interface IErrorAction {
  type: "ERROR";
}

interface IUpdateAction {
  type: "UPDATEDATA";
  payload: [IProject[], IEmployee[], IClient[]];
}

type ActionType = ILoadAction | IErrorAction | IUpdateAction;

function App(): JSX.Element {
  const [fullData, setFullData] = useState<IFullProjectData[]>([]);

  const [state, dispatch] = useReducer(
    (state: IState, action: ActionType) => {
      switch (action.type) {
        case "LOADING":
          return { ...state, loading: true, error: false };
        case "UPDATEDATA":
          return {
            ...state,
            loading: false,
            error: false,
            projectData: action.payload[0],
            employeeData: action.payload[1],
            clientData: action.payload[2],
          };
        case "ERROR":
          return { ...state, loading: false, error: true };
      }
    },
    {
      loading: false,
      error: false,
      projectData: null,
      employeeData: null,
      clientData: null,
    }
  );

  const { data } = useAxiosFetchAll(projectURL, employeeURL, clientURL);

  useEffect(() => {
    dispatch({
      type: "LOADING",
    });

    if (data) {
      dispatch({
        type: "UPDATEDATA",
        payload: data,
      });
    } else {
      dispatch({
        type: "ERROR",
      });
    }
  }, [data]);

  useEffect(() => {
    if (state.projectData && state.employeeData && state.clientData) {
      const fullProjectsData = stitchData(
        state.projectData,
        state.employeeData,
        state.clientData
      );

      setFullData(fullProjectsData);
    }
  }, [state.projectData, state.employeeData, state.clientData]);

  return (
    <>
      {state.error && <div>Something went wrong ...</div>}

      {state.loading && <div>Loading ...</div>}

      <Router>
        <Routes>
          <Route path="/" element={<HomePage projectData={fullData} />} />
          <Route
            path="/employees/:employeeId"
            element={<EmployeePage projectData={fullData} />}
          />
          <Route
            path="/clients/:clientId"
            element={<ClientPage projectData={fullData} />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
