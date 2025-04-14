import React, { useState } from "react";
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
import Autentication from "./components/Autentication/Autentication";

function App() {
  const messages = useSelector((state) => state.messages.value);

  const [open, setOpen] = useState(false);

  const toggleDrawer = (value) => {
    setOpen(value);
  };

  return (
      <ThemeProvider theme={theme}>
        <Router>
          <nav
            className={
              "z-50 py-2 px-3 navigation-bar flex flex-row justify-between items-center h-[64px] w-[100%]"
            }
          >
            <div className="left-elements flex flex-row items-center justify-between gap-1">
              <IconButton onClick={() => toggleDrawer(true)}>
                <MenuIcon
                  className="text-white cursor-pointer"
                />
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
              {routes.map(route => {
                return (
                  <ButtonLink key={route.id} to={route.id} variant="contained">
                    {route.value}
                  </ButtonLink>
                )
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

          <Routes>
            <Route path="*" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/todolist" element={<TodoList />} />
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/habitgame" element={<HabitGame />} />
            <Route path="/calendarhabit" element={<CalendarHabit />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/trivial" element={<Trivial />} />
            <Route path="/animations" element={<Animations />} />
            <Route path="/cars" element={<Cars />} />
            <Route path="/autentication" element={<Autentication />} />
          </Routes>
        </Router>
      </ThemeProvider>
  );
}

export default App;
