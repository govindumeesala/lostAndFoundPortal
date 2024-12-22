import React, { useEffect } from "react";
import {
  AppBar,
  Avatar,
  Divider,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Tab,
  Tabs,
  Toolbar,
  useMediaQuery,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import CollegeIcon from "../assets/images.png";
import "../stylesheets/Nav.css";
import GoogleIcon from "../assets/google.png";
import DrawerComp from "./DrawerComp.jsx";
import { UserContext } from "../utils/UserContext.jsx";
import initializeApp from "../utils/initializeApp";
import { logout } from "../Api/Data";
import handleGoogleSignIn from "../utils/HandleGoogleSignIn";
import { Logout } from "@mui/icons-material";

const Nav = () => {
  const [user, setUser, pageNumber, setPageNumber] =
    React.useContext(UserContext);
  const isSmall = useMediaQuery("(max-width:900px)");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const location = useLocation(); // Get the current location

  useEffect(() => {
    initializeApp(setUser).then();
  }, []);

  useEffect(() => {
    if (user) {
      localStorage.setItem("userDataLost", JSON.stringify(user));
    }
  }, [user]);

  useEffect(() => {
    // Set the pageNumber based on the current route
    switch (location.pathname) {
      case "/":
        setPageNumber(0);
        break;
      case "/lost":
        setPageNumber(1);
        break;
      case "/found":
        setPageNumber(2);
        break;
      case "/report/form":
        setPageNumber(3);
        break;
      case "/about":
        setPageNumber(4);
        break;
      case "/heroes":
        setPageNumber(5);
        break;
      default:
        setPageNumber(0); // Default to home if no match
        break;
    }
  }, [location, setPageNumber]); // Re-run the effect when the location changes

  const handleLogout = async () => {
    await logout(setUser);
  };

  return (
    <>
      <AppBar
        position="static"
        sx={{
          background: "#fff",
          padding: "0.5em 2em",
        }}
      >
        <Toolbar>
          <IconButton
            sx={{ background: "#" }}
            component={Link}
            to={"/"}
            onClick={() => setPageNumber(0)}
          >
            <img src={CollegeIcon} alt="searchicon" />
          </IconButton>
          {!isSmall ? (
            <>
              <Tabs
                value={pageNumber}
                onChange={(e, val) => setPageNumber(val)}
                indicatorColor={"primary"}
              >
                <Tab
                  component={Link}
                  to={"/"}
                  label="Home"
                  sx={{
                    fontSize: "1.1vw",
                    margin: " 0 2vw",
                  }}
                />
                <Tab
                  component={Link}
                  to={"/lost"}
                  label="Items Lost"
                  sx={{
                    fontSize: "1.1vw",
                    margin: " 0 2vw",
                  }}
                />
                <Tab
                  component={Link}
                  to={"/found"}
                  label="Items Found"
                  sx={{
                    fontSize: "1.1vw",
                    margin: " 0 2vw",
                  }}
                />
                <Tab
                  component={Link}
                  to={"/report/form"}
                  label="Report New Item"
                  sx={{
                    fontSize: "1.1vw",
                    margin: " 0 2vw",
                  }}
                />
                <Tab
                  component={Link}
                  to={"/about"}
                  label="About"
                  sx={{
                    fontSize: "1.1vw",
                    margin: " 0 2vw",
                  }}
                />
                <Tab
                  component={Link}
                  to={"/heroes"}
                  label="Heroes"
                  sx={{
                    fontSize: "1.1vw",
                    margin: " 0 2vw",
                  }}
                />
              </Tabs>
              {user == null ? (
                <IconButton
                  sx={{
                    marginLeft: "auto",
                    height: "calc(max(3vw, 5vh))",
                    width: "calc(max(3vw, 5vh))",
                  }}
                  onClick={handleGoogleSignIn}
                >
                  <img src={GoogleIcon} alt={"Google Icon"} />
                </IconButton>
              ) : (
                <>
                  <IconButton
                    sx={{
                      marginLeft: "auto",
                      height: "calc(max(3vw, 5vh))",
                      width: "calc(max(3vw, 5vh))",
                    }}
                    onClick={handleClick}
                  >
                    <img
                      style={{ borderRadius: "50%" }}
                      src={user.picture}
                      referrerPolicy="no-referrer"
                      alt={"Google Icon"}
                    />
                  </IconButton>

                  <Menu
                    anchorEl={anchorEl}
                    id="account-menu"
                    open={open}
                    onClose={handleClose}
                    onClick={handleClose}
                    PaperProps={{
                      elevation: 0,
                      sx: {
                        overflow: "visible",
                        filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                        mt: 1.5,
                        "& .MuiAvatar-root": {
                          width: 32,
                          height: 32,
                          ml: -0.5,
                          mr: 1,
                        },
                        "&:before": {
                          content: '""',
                          display: "block",
                          position: "absolute",
                          top: 0,
                          right: 14,
                          width: 10,
                          height: 10,
                          bgcolor: "background.paper",
                          transform: "translateY(-50%) rotate(45deg)",
                          zIndex: 0,
                        },
                      },
                    }}
                    transformOrigin={{ horizontal: "right", vertical: "top" }}
                    anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                  >
                    <MenuItem component={Link} to={"/dashboard"}>
                      <Avatar /> Dashboard
                    </MenuItem>
                    <Divider />
                    <MenuItem onClick={handleLogout}>
                      <ListItemIcon>
                        <Logout fontSize="small" />
                      </ListItemIcon>
                      Logout
                    </MenuItem>
                  </Menu>
                </>
              )}
            </>
          ) : (
            <DrawerComp />
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Nav;
