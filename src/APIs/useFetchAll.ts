import axios from "axios";
import { useEffect, useReducer } from "react";
import { APIResponse } from "../Interfaces";

const ACTIONS = {
  INIT: "INIT",
  SUCCESS: "SUCCESS",
  ERROR: "ERROR",
};

export default function useAxiosFetchAll(
  url: string,
  url2: string,
  url3: string
): APIResponse {
  const [state, dispatch] = useReducer(
    (state: any, action: { type: any; payload?: any }) => {
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
      dispatch({ type: ACTIONS.INIT });

      try {
        const projects = axios.get(url);
        const employees = axios.get(url2);
        const clients = axios.get(url3);

        const result = await Promise.all([projects, employees, clients]);

        dispatch({
          type: ACTIONS.SUCCESS,
          payload: [result[0].data, result[1].data, result[2].data],
        });

        console.log(result)
      } catch (error) {
        dispatch({ type: ACTIONS.ERROR });
      }
    }

    fetch();
  }, [url, url2, url3]);

  return state;
}