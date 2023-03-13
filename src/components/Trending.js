import styled from "styled-components";
import { FaFire } from "react-icons/fa";
import MusicCard from "./Card";

const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* margin: 20px; */

  h1{
    margin: 0px;
    margin-bottom: 10px;
  }
`;

const Container = styled.div`
    width: 100%;
    padding: 34px;
    line-height: 1.6;

    p{
        margin: 0;

    }
`


const Trending = () => {
  return (
    <Container>
        <p>What's hot<FaFire/></p>
        <Flex>
          <h1>Trending</h1>
          <p>More {'>'}</p>
        </Flex>
        <MusicCard />
    </Container>
  );
};

export default Trending;
