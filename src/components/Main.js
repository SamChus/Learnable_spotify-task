import styled from "styled-components";
import Playlist from "../components/Playlist";
import SearchBox from "../components/SearchBox";
import Trending from "../components/Trending";
import SearchPage from "../pages/SearchPage";
import ControlField from "./ControlField";

const StyledMain = styled.main`
  width: 100%;
  /* margin-left: 50px; */
`;
const Main = ({ page, setPage }) => {
  return (
    <StyledMain>
      <SearchBox setPage={setPage} />
      {page === "search" ? (
        <SearchPage />
      ) : (
        <>
          <Trending />
          <Playlist />
          <ControlField />
        </>
      )}
    </StyledMain>
  );
};

export default Main;
