import axios from "axios";
import { useEffect, useReducer } from "react";
import { APIResponse, IClient, IEmployee, IProject } from "../Interfaces";

// const ACTIONS = {
//   INIT: "INIT",
//   SUCCESS: "SUCCESS",
//   ERROR: "ERROR",
// };

interface IState {
  isLoading: boolean;
  isError: boolean;
  data: [IProject[], IEmployee[], IClient[]] | null;
}

interface ILoadAction {
  type: "INIT";
}

interface IErrorAction {
  type: "ERROR";
}

interface IUpdateAction {
  type: "SUCCESS";
  payload: [IProject[], IEmployee[], IClient[]];
}

type ActionType = ILoadAction | IErrorAction | IUpdateAction;

export default function useAxiosFetchAll(
  url: string,
  url2: string,
  url3: string
): APIResponse {
  const [state, dispatch] = useReducer(
    (state: IState, action: ActionType) => {
      switch (action.type) {
        case "INIT":
          return { ...state, isLoading: true, isError: false };
        case "SUCCESS":
          return {
            ...state,
            isLoading: false,
            isError: false,
            data: action.payload,
          };
        case "ERROR":
          return { ...state, isLoading: false, isError: true };
      }
    },
    {
      isLoading: false,
      isError: false,
      data: null,
    }
  );

  useEffect(() => {
    if (!url || !url2 || !url3) {
      return;
    }

    async function fetch() {
      dispatch({ type: "INIT" });

      try {
        const projects = axios.get(url);
        const employees = axios.get(url2);
        const clients = axios.get(url3);

        const results = await Promise.all([projects, employees, clients]);

        dispatch({
          type: "SUCCESS",
          payload: [results[0].data, results[1].data, results[2].data],
        });
      } catch (error) {
        dispatch({ type: "ERROR" });
      }
    }

    fetch();
  }, [url, url2, url3]);
  console.log(state);
  return state;
}
