import styled from "styled-components";
import ArtistCard from "./ArtistCard";
import Fav from "./FavArtist";
import Shortcut from "./Shortcuts";

const StyledAside = styled.aside`
  width: 75%;
  /* padding: 0 10px; */
  margin: 0 10px 0 auto;

  @media screen and (max-width: 768px) {
    display: none;
    align-items: flex-start;
  }
`;

const Aside = () => {
  return (
    <StyledAside>
      <div>
        <h2>Shortcuts</h2>
        <Shortcut img={"dash-2.svg"} name={"Chill Hits"} />
        <Shortcut img={"dash-3.svg"} name={"Hop"} />
        <Shortcut img={"dash-3.svg"} name={"Hop"} />
        <Shortcut img={"dash-3.svg"} name={"Hop"} />
        <Shortcut img={"dash-3.svg"} name={"Hop"} />
      </div>
      <div>
        <h2>Fav Artist</h2>
        <Fav
          img={"avatar.jpg"}
          name={"Taylor Swift"}
          desc={"196 songs in library"}
        />
        <Fav
          img={"avatar.jpg"}
          name={"Taylor Swift"}
          desc={"196 songs in library"}
        />
        <Fav
          img={"avatar.jpg"}
          name={"Taylor Swift"}
          desc={"196 songs in library"}
        />
       
      </div>
      <ArtistCard name={"Hillsong"} music={"Yasha"} />
    </StyledAside>
  );
};

export default Aside;
