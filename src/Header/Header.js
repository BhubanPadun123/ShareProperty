import { useState } from 'react'
import React from 'react'
import { Link } from "react-router-dom"
import styled from 'styled-components'
import { FaBars } from "react-icons/fa"
import { Button } from "@mui/material"

const StyledHeader = styled.header`
  background-color: #74c0fc;
  width: 100%;
  padding: 10px 12px 8px 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .nav_logo {
    padding: 0 12px;
    .nav-logo-link {
      text-decoration: none;
      font-size: 24px;
      color: #fab005;
      font-weight: bold;
    }
  }
  .menuToggleBtn {
    display: none;
    color: white;
    font-size: 24px;
    position: absolute;
    right: 20px;
    top: 15px;
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    .menuToggleBtn {
      display: block;
    }
  }
`;

const NavManu = styled.ul`
  list-style: none;
  display: flex;
  justify-content:center;
  align-items:center;

  li {
    &:hover {
      cursor: pointer;
      background: #44a8f4;
      border-radius: 4px;
    }
  }
  .nav-menu-list {
    text-decoration: none;
    color: white;
    display: block;
    padding: 10px 10px;
  }
  @media screen and (max-width: 768px) {
    display: ${(props) => (props.isToggleOpen ? "block" : "none")};
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-top: 5px;
    li {
        display:flex;
        justify-content:center;
        font-size:30px;
        &:hover{
            background:#44a8f4;
        }
    }
  }
`;

const Header = () => {
    const [isToggleOpen, setIsToggleOpen] = useState(false);

    const handleToggleOpen = () => {
        setIsToggleOpen(!isToggleOpen);
    };
    return (
        <>
            <StyledHeader>
                <div className="nav_logo">
                    <Link to={"/"} className="nav-logo-link">
                        Logo
                    </Link>
                </div>

                <NavManu isToggleOpen={isToggleOpen}>
                    <li>
                        <Link onClick={() => { handleToggleOpen() }} to={"/"} className="nav-menu-list">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link onClick={() => { handleToggleOpen() }} to={"/news"} className="nav-menu-list">
                            News
                        </Link>
                    </li>
                    <li>
                        <Link onClick={() => { handleToggleOpen() }} to={"/about-us"} className="nav-menu-list">
                            About Us
                        </Link>
                    </li>
                    <li>
                        <Link onClick={() => { handleToggleOpen() }} to={"/post"} className="nav-menu-list">
                            Post
                        </Link>
                    </li>
                    <li>
                        <Link onClick={() => { handleToggleOpen() }} to={"/signup"} className="nav-menu-list">
                            <Button variant='contained'>
                                Get Started
                            </Button>
                        </Link>
                    </li>
                </NavManu>
                <FaBars className="menuToggleBtn" onClick={handleToggleOpen} />
            </StyledHeader>
        </>
    );
};

export default Header;