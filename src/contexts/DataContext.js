import { createContext, useReducer } from "react";

export const DataContext = createContext()

const DataContextProvider = (props) => {
    const initialState ={
        title: null,
        artist: null,
        time: null,
        album: null,
        plsrc: null,
        img: null,
        name: null,
        songs: null,
        src: null
    }
    const reducer = (state, action) =>{
        switch (action.type) {
            case "PLAYLIST":
                return {
                    ...state,
                    title: action.payload.title,
                    artist: action.payload.artist,
                    time: action.payload.time,
                    album: action.payload.album,
                    plsrc: action.payload.plsrc


                };
                case "FAVOURITE":
                return {
                    ...state,
                    img: action.payload.img,
                    name: action.payload.name,
                    songs: action.payload.songs

                };
                case "SEARCH":
                return {
                    ...state,
                    src: action.payload.src
                };
               
        
            default:
               return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    return (  
        <DataContext.Provider value={{state, dispatch}}>
            {props.children}
        </DataContext.Provider>
    );
}
 
export default DataContextProvider;