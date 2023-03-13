import { useState, useEffect, useContext } from "react";
import { BiUser, BiLock } from "react-icons/bi";
import { ToastContainer, toast } from "react-toastify";
import styled from "styled-components";

const CLIENT_ID = "972c19250b664b439f22bf56eaa0e49a";
const REDIRECT_URI = "http://localhost:3001/home";
const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
const RESPONSE_TYPE = "token";

const URL = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`;

const Login = () => {
  const [form, setForm] = useState({
    name: " ",
    password: " ",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    window.localStorage.setItem("user", JSON.stringify(form));

    toast.success("Redirecting to spotify");
    setTimeout(() => {
      window.location = URL;
    }, 1000);
  };
  return (
    <Container>
      <ToastContainer />
      <Form>
        <Flex>
          <BiUser color="#fff" />
          <input
            type="text"
            name="name"
            required
            placeholder="name"
            onChange={handleChange}
          />
        </Flex>
        <Flex>
          <BiLock color="#fff" />
          <input
            type="password"
            name="password"
            placeholder="password"
            onChange={handleChange}
          />
        </Flex>
        <Button
          onClick={handleSubmit}
          disabled={form.name.trim() && form.password.trim() ? false : true}
        >
          Login
        </Button>
      </Form>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.9)),
    url(./assets/bg4.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  position: relative;
`;

const Form = styled.form`
  position: absolute;
  width: 90%;
  top: 40%;
  right: 1%;
  margin: 0px 20px;

  input {
    width: 100%;
    padding: 10px 20px;
    /* all: unset; */

    border: none;
    outline: none;
    background: transparent;
    z-index: 30;
    color: #fff;
    line-height: 1.5;
    letter-spacing: 2px;
  }

  svg {
  }
`;
const Flex = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  border-bottom: 1px solid #666;
  padding-bottom: 2px;
`;

const Button = styled.button`
  all: unset;
  color: #fff;
  display: block;
  background: #f39611;
  padding: 14px 30px;
  margin: 20px 10%;
  width: 60%;
  text-align: center;
  letter-spacing: 2px;
  border-radius: 10px;
  cursor: pointer;
  font-weight: 600;
  letter-spacing: 3px;
  /* margin-top: 20px; */

  &:hover {
    background: #f39600;
    opacity: 0.9;
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;
