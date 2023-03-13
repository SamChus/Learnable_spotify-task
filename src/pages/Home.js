import { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import styled from "styled-components";
import ArtistCard from "../components/ArtistCard";
import Aside from "../components/Aside";
import MusicCard from "../components/Card";
import ControlField from "../components/ControlField";
import Fav from "../components/FavArtist";
import Main from "../components/Main";
import MusicInfo from "../components/MusicInfo";
import Sidebar from "../components/Sidebar";

const Flex = styled.div`
  margin: 0 auto;
  max-width: 1400px;
  width: 100%;
  padding-left: 5px;

  main {
    /* width: 80%; */
    flex-grow: 1;
  }
  aside {
  }
  @media screen and (min-width: 768px) {
    display: flex;
    /* align-items: center; */
    justify-content: space-between;
  }
`;

const Home = () => {
  const [token, setToken] = useState("");

  useEffect(() => {
    const { hash } = window.location;
    let token = window.localStorage.getItem("token");

    
    if (!token && hash) {
      const urlParams = new URLSearchParams(hash.split('#')[1]);
      const token = urlParams.get('access_token');
      // token = hash
      //   .substring(1)
      //   .split("&")
      //   .find((e) => e.startsWith("access_token"))
      //   .split("=")[1];

      window.location.hash = "";
      window.localStorage.setItem("token", token);
    }
    setToken(token);
    
  }, []);

  return (
    <div>
      <Sidebar/>
          <ToastContainer />
      <Flex>
        <main>
          <Main/>
        </main>
        <aside>
          <Aside />
        </aside>
      </Flex>
    </div>
  );
};

export default Home;
