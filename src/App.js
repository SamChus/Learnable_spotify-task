// import { useContext } from "react";
// import { AuthContext } from "./contexts/AuthContext";
import Home from "./pages/Home";
import Login from "./pages/Login";
import GlobalStyle from "./styles/Global";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  
  return (
    <>
      <GlobalStyle />

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Login />} exact />
      </Routes>
    </>
    // <>
    //   {!state.isAuthenticated ? <Login /> : <Home />}
    // </>
  );
}

export default App;
