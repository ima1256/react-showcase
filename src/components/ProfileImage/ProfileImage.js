import "./ProfileImage.scss";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import {
  MenuItem,
  Select,
  Button,
  Menu,
  MenuList,
  Paper,
  Avatar,
} from "@mui/material";
import { useState, useRef } from "react";
import { DEFAULT_IMAGE_URL } from "../../constants";

const ProfileImage = () => {
  const buttonRef = useRef(null);

  const [open, setOpen] = useState(false);

  const [imageUrl, setImageUrl] = useState("dfdsf");

  //File input
  const [file, setFile] = useState(null);
  const profileImage = Boolean(file);
  const fileInputRef = useRef(null);
  const handleFileSelect = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];

    if (selectedFile) {
      setFile(selectedFile)
      setOpen(false)

      const fileUrl = URL.createObjectURL(selectedFile)
      setImageUrl(fileUrl)
    }
  };

  const handleClick = (event) => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const menuItemStyles = {
    fontSize: "0.7rem",
    color: "#404040",
    fontWeight: "bold",
  };

  return (
    <div className="w-full flex items-center justify-center profile-image">
      <Tooltip
        title={profileImage ? "Change Image" : "No Profile Image"}
        placement="top"
        slotProps={{
          popper: {
            sx: {
              [`&.${tooltipClasses.popper}[data-popper-placement*="bottom"] .${tooltipClasses.tooltip}`]:
                {
                  marginTop: "0px",
                },
              [`&.${tooltipClasses.popper}[data-popper-placement*="top"] .${tooltipClasses.tooltip}`]:
                {
                  marginBottom: "-12px",
                },
              [`&.${tooltipClasses.popper}[data-popper-placement*="right"] .${tooltipClasses.tooltip}`]:
                {
                  marginLeft: "0px",
                },
              [`&.${tooltipClasses.popper}[data-popper-placement*="left"] .${tooltipClasses.tooltip}`]:
                {
                  marginRight: "0px",
                },
            },
          },
        }}
      >
        <button
          ref={buttonRef}
          onClick={(event) => handleClick(event)}
          className="transform scale-500 py-3"
        >
          <Avatar alt="Imanol Conde" src={imageUrl} sx={{width: 100, height: 100, fontSize: 50}}>
            {imageUrl ? 'IC' : ''}
          </Avatar>
          {/* // <AccountCircleIcon className="text-[#cccccc]" /> */}
        </button>
      </Tooltip>

      <Menu
        anchorEl={buttonRef.current}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
      >
        <MenuItem sx={menuItemStyles} onClick={() => handleFileSelect()}>
          Computer
        </MenuItem>
        <MenuItem sx={menuItemStyles}>Drive</MenuItem>
      </Menu>
      <input
        ref={fileInputRef}
        type="file"
        style={{ display: "none" }}
        onChange={(event) => handleFileChange(event)}
      />
    </div>
  );
};

export default ProfileImage;
