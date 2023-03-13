import styled from "styled-components";
import ControlField from "./ControlField";
import MusicInfo from "./MusicInfo";

const Container = styled.div`
  width: 100%;
  padding: 0 6px;

  /* max-width: 400px; */
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px;
`;
const ListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin: 0 10px;
  padding: 0 20px;
  font-size: 14px;
  color: #777;
`;
const Playlist = () => {
  return (
    <Container>
      <Flex>
        <h1>My Playlist</h1>
        <p>Show All</p>
      </Flex>
      <ListHeader>
        <p>#</p>
        <p>TITLE</p>
        <p>ARTIST</p>
        <p>TIME</p>
        <p>ALBUM</p>
      </ListHeader>
      <MusicInfo
        title={"Priority"}
        artist={"Mos Def"}
        time={"1:25"}
        album={"The Ecstatic"}
      />{" "}
      <MusicInfo
        title={"Priority"}
        artist={"Mos Def"}
        time={"1:25"}
        album={"The Ecstatic"}
      />{" "}
      <MusicInfo
        title={"Priority"}
        artist={"Mos Def"}
        time={"1:25"}
        album={"The Ecstatic"}
      />
      <ControlField />
    </Container>
  );
};

export default Playlist;
