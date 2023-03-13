import styled from "styled-components";

const StyledCard = styled.div`
  padding: 20px;
  border-radius: 20px;
  max-width: 100%;
  background: linear-gradient(70deg, rgba(235, 235, 235, 1), rgba(0, 0, 0, 0.6)),
    url(./assets/card-bg.jpg);
  display: flex;
  justify-content: space-between;
  white-space: nowrap;
  

  & > div:last-of-type {
    align-self: flex-end;
    text-align: right;
    white-space: nowrap;
    margin: 0;
    font-size: 74%;

    h3{
        color: #fff;
        margin: 0;
        padding: 0;
    }
  }

  p{
    color: #ebebeb;
  }
`;

const Button = styled.div`
  all: unset;
  padding: 10px 30px;
  margin: 5px;
  background-color: #fff;
  border-radius: 30px;
  cursor: pointer;

  &:hover{
    background: #000;
    color: #fff;
  }
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const MusicCard = () => {
  return (
    <StyledCard>
      <div>
        <p>Artist</p>
        <h1>
          On Top <br /> Of The World
        </h1>
        <div>
          <Button>Play</Button>
          <Button>Follow</Button>
        </div>
      </div>
      <div>
        <p>Mothly Listener</p>
        <h3>32.092</h3>
      </div>
    </StyledCard>
  );
};

export default MusicCard;
