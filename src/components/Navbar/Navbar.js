import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import decode from "jwt-decode";

import { Button } from "@mui/material";
import {
  AppNavBarStyled,
  ImgStyled,
  LinkBrandContainerStyled,
  ToolbarStyled,
  AvatarPurpleStyled,
  TypographyUserNameStyled,
  ButtonLogoutStyled,
  DivProfileStyled,
} from "./styles";

import memoriesLogo from "../../images/memories-Logo.png";
import memoriesText from "../../images/memories-Text.png";

import { authGoogleLogout } from "../../actions/auth";

const Navbar = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(authGoogleLogout());
    navigate("/");
    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) handleLogout();
    }

    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  return (
    <AppNavBarStyled position="static" color="inherit">
      <LinkBrandContainerStyled to="/">
        <img src={memoriesText} alt="icon" height="54px" />
        <ImgStyled src={memoriesLogo} alt="memories" height="40px" />
      </LinkBrandContainerStyled>
      <ToolbarStyled>
        {user ? (
          <DivProfileStyled>
            <AvatarPurpleStyled
              alt={user?.result?.name}
              src={user?.result?.picture}
            >
              {user?.result?.name.charAt(0)}
            </AvatarPurpleStyled>
            <TypographyUserNameStyled variant="h6">
              {user?.result?.name}
            </TypographyUserNameStyled>
            <ButtonLogoutStyled
              variant="contained"
              color="error"
              onClick={handleLogout}
            >
              Logout
            </ButtonLogoutStyled>
          </DivProfileStyled>
        ) : (
          <Button
            component={Link}
            to="/auth"
            variant="contained"
            color="primary"
          >
            Sign in
          </Button>
        )}
      </ToolbarStyled>
    </AppNavBarStyled>
  );
};

export default Navbar;
