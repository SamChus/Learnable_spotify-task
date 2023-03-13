import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import axios from "axios";
import { useState, useContext } from "react";
import { DataContext } from "../contexts/DataContext";

const SearchBox = () => {
  const { dispatch } = useContext(DataContext);
  // const { tracks } = state;
  const [searchQuery, setSearchQuery] = useState("");
  const token = window.localStorage.getItem("token");
  // console.log(tracks[1]);



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
        const tracks = data.tracks.items.map(item => {
          return {
            image: item.album.images[0].url,
            artist: item.artists[0].name,
            album: item.album.name,
            trackLength: item.duration_ms,
            trackName: item.name,
            previewUrl: item.preview_url
          };
        });
        dispatch({ type: 'UPDATE_TRACKS', payload: tracks });
    
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


