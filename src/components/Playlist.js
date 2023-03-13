import styled from "styled-components";
import ControlField from "./ControlField";
import { DataContext } from "../contexts/DataContext";
import { useContext } from "react";
import MusicInfo from "./MusicInfo";

const Container = styled.div`
  width: 100%;
  padding: 0 6px;
  max-height: 500px;
  overflow-y: scroll;
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
  const { state} = useContext(DataContext);

  const { tracks } = state;

  const duration = (dur) => {
    const tracklen = new Date(dur).toISOString().substr(14, 5);
    return tracklen;
  };

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
        {tracks && tracks.slice(0,5).map((track,i)=>(
          <MusicInfo key={i}
          title={track.trackName}
          artist={track.artist}
          time={duration(track.trackLength)}
          album={track.album}
        />
        ))}
    </Container>
  );
};

export default Playlist;
