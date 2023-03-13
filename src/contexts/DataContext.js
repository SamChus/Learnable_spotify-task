import { createContext, useReducer } from "react";

export const DataContext = createContext();

const DataContextProvider = (props) => {
  const initialState = {
    tracks: [],
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "UPDATE_TRACKS":
        return {
          ...state,
          tracks: action.payload,
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {props.children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
