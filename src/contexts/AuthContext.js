import { createContext, useReducer } from "react";

export const AuthContext = createContext()

const AuthContextProvider = (props) => {
    const initialState = {
        isAuthenticated: false,
        // user: null,
        // token: null,
      };
      const reducer = (state, action) => {
        switch (action.type) {
          case "LOGIN":
            // localStorage.setItem("user", JSON.stringify(action.payload.user));
            // localStorage.setItem("toke", JSON.stringify(action.payload.token));
            return {
              ...state,
              isAuthenticated: true,
            //   user: action.payload.user,
            //   token: action.payload.token
            };
          case "LOGOUT":
            localStorage.clear();
            return {
              ...state,
              isAuthenticated: false,
            //   user: null
            };
          default:
            return state;
        }
      };
      const [state, dispatch] = useReducer(reducer, initialState)
    return ( 
        <AuthContext.Provider value={{state, dispatch}}>
            {props.children}
        </AuthContext.Provider>
     );
}
 
export default AuthContextProvider;