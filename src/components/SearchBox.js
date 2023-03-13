import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import axios from "axios";
import { useState, useEffect } from "react";

const SearchBox = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [preview, setPreview] = useState(null);
  const [tracks, setTracks] = useState(null);
  const token = window.localStorage.getItem("token");

  const searchArtist = async () => {
    const apiUrl = `https://api.spotify.com/v1/search?q=${encodeURIComponent(
      searchQuery
    )}&type=artist,track`;

    fetch(apiUrl, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        const tracks = data.tracks.items;
        // const previewUrls = tracks.map((track) => track.preview_url);
        console.log(tracks);
        console.log(data);

        // setPreview(previewUrls[4])
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <StyledBox>
        <FaSearch size={20} onClick={searchArtist} />
        <input
          type="text"
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search for artist, songs and ..."
        />
      </StyledBox>
      {tracks && <SpotifyTrack track={tracks} />}
    </div>
  );
};

export default SearchBox;
const StyledBox = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  background: #fff;
  padding: 10px 20px;
  width: 80%;
  border-radius: 20px;
  margin: 10px auto;

  input {
    all: unset;
    width: 100%;
    margin-left: 12px;
    font-size: 14px;
  }

  svg {
    cursor: pointer;
  }
`;

// const AudioPlayer = ({ src }) => {
//   return (
//     <div>
//       <audio src={src} controls />
//     </div>
//   );
// };

const SpotifyTrack = ({ track }) => {
  const { name: trackName, artists, album, duration_ms, preview_url } = track;
  const artistNames = artists.map((artist) => artist.name).join(", ");

  // Convert track length in milliseconds to mm:ss format
  const trackLength = new Date(duration_ms).toISOString().substr(14, 5);

  return (
    <div>
      <img src={album.images[0].url} alt={album.name} />
      <h3>{trackName}</h3>
      <p>{artistNames}</p>
      <p>{album.name}</p>
      <p>{trackLength}</p>
      <audio src={preview_url} controls />
    </div>
  );
};
