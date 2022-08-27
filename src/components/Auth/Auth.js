import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "./Input";

import { useDispatch } from "react-redux";
import { authGoogleLogin, signIn, signUp } from "../../actions/auth";
import { CLIENT_ID } from "../../constants/actionTypes";

import {
  // Avatar,
  // Paper,
  Button,
  Grid,
  Typography,
  Container,
} from "@mui/material";
import {
  // CenterFocusStrong,
  LockOutlined,
} from "@mui/icons-material";

import {
  AvatarStyled,
  FormStyled,
  PaperStyled,
  ButtomSubmitStyled,
  // ButtonGoogleStyled,
} from "./styles";
// import Icon from "./Icon";

const initialFormData = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Auth = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState(initialFormData);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignup) dispatch(signUp(formData, navigate));
    else dispatch(signIn(formData, navigate));
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleShowPassword = () =>
    setShowPassword((prevShowPassword) => !prevShowPassword);

  const switchMode = () => setIsSignup((prevIsSignup) => !prevIsSignup);

  const handleGoogleCallback = async (res) => {
    const token = res?.credential;

    try {
      dispatch(authGoogleLogin(token));
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: CLIENT_ID,
      callback: handleGoogleCallback,
    });

    google.accounts.id.renderButton(
      document.getElementById("googleSignInButton"),
      { theme: "filled_blue", size: "large", width: 365 }
    );

    return google.accounts.id.cancel();
  }, []);

  return (
    <Container component="main" maxWidth="xs">
      <PaperStyled>
        <AvatarStyled elevation={3}>
          <LockOutlined />
        </AvatarStyled>
        <Typography variant="h5">{isSignup ? "Sign Up" : "Sign In"}</Typography>
        <FormStyled onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {isSignup && (
              <>
                <Input
                  name="firstName"
                  label="First Name"
                  handleChange={handleChange}
                  autoFocus
                  half
                />
                <Input
                  name="lastName"
                  label="Last Name"
                  handleChange={handleChange}
                  half
                />
              </>
            )}
            <Input
              name="email"
              label="Email Address"
              handleChange={handleChange}
              type="email"
            />
            <Input
              name="password"
              label="password"
              handleChange={handleChange}
              type={showPassword ? "text" : "password"}
              handleShowPassword={handleShowPassword}
            />
            {isSignup && (
              <Input
                name="confirmPassword"
                label="Repeat Password"
                handleChange={handleChange}
                type="password"
              />
            )}
          </Grid>
          <ButtomSubmitStyled
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
          >
            {isSignup ? "Sign Up" : "Sign In"}
          </ButtomSubmitStyled>
          {/* <GoogleLogin
            clientId="457551835700-l4n9n84761r64b7281990t04gqjj5hk9.apps.googleusercontent.com"
            render={(renderProps) => (
              <ButtonGoogleStyled
                color="primary"
                fullWidth
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                startIcon={<Icon />}
                variant="contained"
              >
                Google Sign In
              </ButtonGoogleStyled>
            )}
            buttonText="Login"
            onSuccess={googleSuccess}
            onFailure={googleFailure}
            cookiePolicy={"single_host_origin"}
            isSignedIn={true}
          /> */}
          <div id="googleSignInButton">
            {/* <ButtonGoogleStyled
              color="primary"
              fullWidth
              startIcon={<Icon />}
              variant="contained"
            >
              Google Sign In
            </ButtonGoogleStyled> */}
          </div>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Button onClick={switchMode}>
                {isSignup
                  ? "Already have account? sign in"
                  : "Don't have an account? sign up"}
              </Button>
            </Grid>
          </Grid>
        </FormStyled>
      </PaperStyled>
    </Container>
  );
};

export default Auth;
