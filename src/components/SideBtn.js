import styled from "styled-components";

const Button = styled.button`
  all: unset;
  cursor: pointer;
  text-align: left;
  padding: 10px 30px 10px 10px;
  margin: 5px 0;
  width: 70%;
  position: relative;

  span {
    margin-left: 15px;
    font-weight: 400;
    font-size: 14px;
    vertical-align: text-top;
  }

  &:hover {
    background: #000;
    color: #fff;
    border-radius: 7px;
  }

  &::after:hover {
    content: " ";
    height: 10px;
    width: 100px;
    background: #000;
    position: absolute;
    right: 10px;
  }
`;

export const SideBtn = ({ icon, name }) => {
  return (
    <Button>
      {icon}
      <span>{name}</span>
    </Button>
  );
};


export const LogoutBtn = ({ icon, name, onclick }) => {
  return (
    <Button onClick={onclick}>
      {icon}
      <span>{name}</span>
    </Button>
  );
};
