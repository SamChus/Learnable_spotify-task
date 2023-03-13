import styled from "styled-components";
import {
  FaHeart,
  FaMusic,
  FaSimCard,
  FaPlay,
  FaPause,
  FaClone,
  FaArrowCircleLeft,
  FaArrowAltCircleRight,
  FaReply,
  FaSpeakerDeck,
  FaSpotify,
} from "react-icons/fa";

const Container = styled.div`
  background: #fff;
  padding: 5px 15px;
  /* width: 109%; */
  white-space: nowrap;
  margin: 40px 10px;
  border-radius: 12px;
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  svg {
    margin: 0 3px;
  }
  & > svg:hover {
    transform: scale(0.9);
    cursor: pointer;
  }
  p {
    padding: 0px 10px;
  }
`;

const Progress = styled.div`
  width: 100%;
  height: 2px;
  align-self: center;
  /* border: 1px solid #ccc; */
  position: relative;
  border-radius: 3px;
  background: #ccc;
  cursor: pointer;

  &::after {
    content: "";
    position: absolute;
    width: 46%;
    height: 2px;
    top: 0;
    background: #333;
    border-bottom-left-radius: 4px;
    border-top-left-radius: 4px;
  }
`;

const Controller = styled.div`
  width: 100%;
  align-content: center;
  display: flex;
  justify-content: space-between;
`;

const ControlField = () => {
  return (
    <div>
      <Container>
        <Controller>
          <Flex>
            <FaHeart
              style={{
                background: "#ccc",
                padding: "4px",
                borderRadius: "5px",
              }}
              size={20}
            />
            <FaMusic
              style={{
                background: "#ccc",
                padding: "4px",
                borderRadius: "5px",
              }}
              size={20}
            />
            <FaSimCard
              style={{
                background: "#ccc",
                padding: "4px",
                borderRadius: "5px",
              }}
              size={20}
            />
          </Flex>
          <Flex>
            <FaClone title="Shuffle" />
            <FaArrowCircleLeft title="Prev" />
            <FaPause size={25} />
            <FaArrowAltCircleRight title="Next" />
            <FaReply title="Repeat" />
          </Flex>
          <Flex>
            <FaSpotify size={27} />
            <Progress />
            <FaSpeakerDeck size={27} />
          </Flex>
        </Controller>
        <Flex>
          <p>0:00</p>
          <Progress />
          <p>4:00</p>
        </Flex>
      </Container>
    </div>
  );
};

export default ControlField;
