import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import TodoList from "./components/TodoList/TodoList";
import Calculator from "./components/Calculator/Calculator";
import "./App.css";
import HabitGame from "./components/HabitGame/HabitGame";
import { ButtonLink } from "./components/StyledComponents/StyledComponents";
import CalendarHabit from "./components/CalendarHabit/CalendarHabit";
import "./tailwind.css";
import { Settings } from "./components/Settings/Settings";
import Home from "./components/Home/Home";
import { Badge, Drawer, Stack, AppBar, IconButton } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import Chat from "./components/Chat/Chat";
import { useSelector } from "react-redux";
import Trivial from "./components/Trivial/Trivial";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import Animations from "./components/Animations/Animations";
import MenuIcon from "@mui/icons-material/Menu";
import { routes } from "./constants";
import Cars from "./components/Cars/Cars";
import Autentication from "./components/Authentication/Authentication";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import PrivateRoute from "./Routing/PrivateRoute";
import Portfolio from "./components/Portfolio/Portfolio";

function App() {
  const [user, setUser] = useState(null);

  const messages = useSelector((state) => state.messages.value);

  const [open, setOpen] = useState(false);

  const toggleDrawer = (value) => {
    setOpen(value);
  };

  useEffect(() => {
    // Listener to check if the user is logged in or logged out
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("User is logged in:", user);
        setUser(user); // Set the user state if logged in
      } else {
        console.log("No user is logged in");
        setUser(null); // Set the user state to null if logged out
      }
    });

    // Cleanup the listener on component unmount
    return () => unsubscribe();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        {/* <div className="wave-background"></div> Background Waves */}
        {false &&
        (process.env.REACT_APP_AUTH_REQUIRED !== "true" ||
          (user && user?.emailVerified)) ? (
          //NAVIGATION BAR START
          <nav
            className={
              "z-50 py-2 px-3 navigation-bar flex flex-row justify-between items-center h-[64px] w-[100%]"
            }
          >
            <div className="left-elements flex flex-row items-center justify-between gap-1">
              <IconButton onClick={() => toggleDrawer(true)}>
                <MenuIcon className="text-white cursor-pointer" />
              </IconButton>
              {/* <svg width='100' height="20" >
            <text fontFamily="Arial" fontSize="10" fill="white" >ICG</text>
          </svg> */}
              <div className="text-white text-3xl font-bold w-[100px] font items-center flex justify-center">
                ICG
              </div>
            </div>

            <Drawer open={open} onClose={() => toggleDrawer(false)}>
              <Stack className="w-[100px]">
                <div>hola</div>
              </Stack>
            </Drawer>

            <div className="links">
              {routes.map((route) => {
                return (
                  <ButtonLink key={route.id} to={route.id} variant="contained">
                    {route.value}
                  </ButtonLink>
                );
              })}
            </div>

            <div className="flex flex-row items-center right-elements">
              <div className="notifications mr-2">
                <Badge
                  badgeContent={messages}
                  sx={{
                    "& .MuiBadge-badge": {
                      backgroundColor: theme.palette.primary.main,
                      color: "white",
                    },
                  }}
                >
                  <MailIcon className="text-white" />
                </Badge>
              </div>

              <Settings />
            </div>
          </nav>
        ) : //NAVIGATION BAR FINISH
        null}
        {/* <div className="absolute z-50"> 
          <img src={`${require("./assets/img/message.png")}`} />
        </div> */}
        <Routes>
          <Route path="/portfolio" element={<Portfolio />} />
          <Route
            path="/home"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route
            path="/todolist"
            element={
              <PrivateRoute>
                <TodoList />
              </PrivateRoute>
            }
          />

          <Route
            path="/calculator"
            element={
              <PrivateRoute>
                <Calculator />
              </PrivateRoute>
            }
          />

          <Route
            path="/habitgame"
            element={
              <PrivateRoute>
                <HabitGame />
              </PrivateRoute>
            }
          />

          <Route
            path="/calendarhabit"
            element={
              <PrivateRoute>
                <CalendarHabit />
              </PrivateRoute>
            }
          />

          <Route
            path="/chat"
            element={
              <PrivateRoute>
                <Chat />
              </PrivateRoute>
            }
          />

          <Route
            path="/trivial"
            element={
              <PrivateRoute>
                <Trivial />
              </PrivateRoute>
            }
          />

          <Route
            path="/animations"
            element={
              <PrivateRoute>
                <Animations />
              </PrivateRoute>
            }
          />

          <Route
            path="/cars"
            element={
              <PrivateRoute>
                <Cars />
              </PrivateRoute>
            }
          />

          <Route path="/authentication" element={<Autentication />} />
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
