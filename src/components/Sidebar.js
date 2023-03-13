import { useState } from "react";
import styled from "styled-components";
import {
  FaHome,
  FaCompass,
  FaRegIdCard,
  FaCalendar,
  FaMusic,
  FaHeart,
  FaUsers,
  FaStar,
  FaArrowRight,
} from "react-icons/fa";
import { SideBtn, LogoutBtn } from "./SideBtn";
import { BiLineChart } from "react-icons/bi";
import { MdMenuOpen } from "react-icons/md";
import { CiLogout } from "react-icons/ci";
import { ToastContainer, toast } from "react-toastify";

const StyledNav = styled.nav`
  display: flex;
  background-color: ${(props) => (!props.open ? "transperent" : "#fff")};
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  top: 0;
  width: 250px;
  position: fixed;
  height: 1000vh;
  z-index: 9999;

  transform: ${(props) => (!props.open ? "translateX(-80%)" : "translateX(0)")};
  transition: all 0.5 ease-in-out;

  h2 {
    font-size: 16px;
    color: #ccc;
    margin: 5px 0;
    line-height: 1.6;
  }
`;

const StyledBar = styled.div`
  padding: 20px 10px 20px 10px;
  /* border-bottom: 1px solid #ccc ; */
`;

const Logo = styled.img`
  height: 30px;
  width: 130px;
  font-size: 89px;
`;

const Icon = styled.img`
  width: 50px;
  border-radius: 30px;
  border: 2px solid #e13f29;
  margin-right: 3px;

  &:hover {
    transform: scale(0.9);
    transition: transform 2ms ease-in-out;
  }
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 110%;
  margin-bottom: 13px;
`;

const Footer = styled.footer`
  background: transparent;
  width: 100%;
  padding: 20px 35px 0px 0px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  cursor: pointer;
  /* margin: 0 40px 0 0; */

  svg {
    margin: auto 10px;
  }
`;

const Sidebar = ({ setPage }) => {
  const [open, setOpen] = useState(false);

  const user = JSON.parse(localStorage.getItem("user"));

  // window.onload(setOpen(t))

  const handleLogout = () => {
    console.log("clicked");
    toast.success("logging out");
    window.localStorage.removeItem("token");

    setInterval(() => {
      window.location = "/";
    }, 2000);
  };
  return (
    <>
      <StyledNav open={open}>
        <StyledBar>
          <MdMenuOpen
            size={20}
            style={{ float: "right", padding: "0px" }}
            onClick={() => setOpen(!open)}
          />
          <Flex>
            <Logo src="./assets/logo.png" />
          </Flex>
          <span>
            <SideBtn setPage={setPage} icon={<FaHome />} name={"Home"} />
            <SideBtn icon={<BiLineChart />} name={"Trends"} />
            <SideBtn icon={<FaCompass />} name={"Feeds"} />
          </span>
          <span>
            <h2>Discover</h2>
            <SideBtn icon={<FaRegIdCard />} name={"New and Notable"} />
            <SideBtn icon={<FaCalendar />} name={"Release Calendar"} />
            <SideBtn icon={<FaMusic />} name={"Events"} />
          </span>
          <span>
            <h2>Your Collection</h2>
            <SideBtn icon={<FaHeart />} name={"Favourite Sonds"} />
            <SideBtn icon={<FaUsers />} name={"Artist"} />
            <SideBtn icon={<FaStar />} name={"Albums"} />
            <LogoutBtn
              icon={<CiLogout />}
              name={"Logout"}
              onclick={handleLogout}
            />
          </span>
        </StyledBar>
        <Footer>
          <Icon src="./assets/avatar.jpg" title="My Profile" />
          {user? <p>{user.name}</p> : <p>user</p>}
          <FaArrowRight />
        </Footer>
      </StyledNav>
    </>
  );
};

export default Sidebar;
