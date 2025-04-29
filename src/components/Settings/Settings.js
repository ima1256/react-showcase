import SettingsIcon from "@mui/icons-material/Settings";
import { IconButton, Menu, MenuItem, Avatar } from "@mui/material";
import { VolumeOff, VolumeUp } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { toggleVolume } from "../../redux/volumeSlice";
import { useState, useEffect } from "react";
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export const Settings = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const isVolumeEnabled = useSelector((state) => state.volume.isEnabled);

  const [anchorEl, setAnchorEl] = useState(null);

  const handleToggleVolume = () => {
    dispatch(toggleVolume()); // Dispatch the action to toggle the volume state
  };

  // Open the menu when the icon button is clicked
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Close the menu when an option is clicked
  const handleClose = (option) => {
    setAnchorEl(null);

    if (option) {
      if (option == "logout") {
        signOut(auth)
          .then(() => {
            console.log("User signed out successfully!");
            // Redirect the user to the login page or wherever you need after logging out
            // For example, if you're using React Router, you can use navigate():
            navigate("/authentication");
          })
          .catch((error) => {
            console.error("Error signing out: ", error);
          });
      }
    }
  };

  return (
    <div className="settings flex flex-row items-center">
      <div
        onClick={() => handleToggleVolume()}
        className="text-white volume cursor-pointer"
      >
        {isVolumeEnabled ? <VolumeUp /> : <VolumeOff />}
      </div>

      <div>
        <IconButton color="primary" onClick={handleClick}>
          <Avatar alt="Imanol Conde" src={auth.currentUser?.photoURL} />
        </IconButton>

        <Menu
          anchorEl={anchorEl} // Anchor the menu to the IconButton
          open={Boolean(anchorEl)} // Open if there's an anchor element
          onClose={handleClose} // Close when clicking outside or on a menu item
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
        >
          {/* Menu items */}
          <MenuItem onClick={() => handleClose("logout")}>Logout</MenuItem>
        </Menu>
      </div>
    </div>
  );
};

export default Settings;
