import styled from "styled-components";
import { FaPlus } from "react-icons/fa";

const StyledCard = styled.div`
  padding: 15px;
  background: #fff;
  border-radius: 20px;
  width: 300px;
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  align-items: center;

  img {
    width: 270px;
    border-radius: 20px;
  }
`;
const Flex = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-self: flex-start;
  margin: 20px 0;

  h3,
  p {
    margin: 0;
    line-height: 1.5;
  }

  & > div:last-of-type {
    border: 2px solid #666;
    border-radius: 8px;
    margin: 4px;
    color: #666;
    margin: 8px;
    width: 30px;
    height: 30px;
    text-align: center;

    &:hover {
      transform: scale(0.9);
    }

    svg {
      margin-top: 4px;
    }
  }
`;

const ArtistCard = ({ name, music }) => {
  return (
    <StyledCard>
      <img src="./assets/avatar2.jpg" alt="artist profile" />

      <Flex>
        <div>
          <h3>{name}</h3>
          <p>{music}</p>
        </div>
        <div title="More Info">
          <FaPlus />
        </div>
      </Flex>
    </StyledCard>
  );
};

export default ArtistCard;
