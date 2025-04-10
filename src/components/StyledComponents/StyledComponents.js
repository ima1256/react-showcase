import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material";

// Custom Button that uses the `useNavigate` hook for navigation
const ButtonLink = ({ to, variant, children }) => {
  const theme = useTheme();

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(to);
  };

  return (
    <Button
    //   sx={{
    //     color: "white",
    //     fontWeight: 'bold',
    //     backgroundColor: theme.palette.primary.main
    //   }}
      className="text-white"
      onClick={handleClick}
      variant={variant}
    >
      {children}
    </Button>
  );
};

const Input = styled.input`
  font-family: inherit;
  display: flex;
  outline: none;
  border: solid 1px #ccc;
  padding: 10px;
  border-radius: 10px;
`;

export { Button, ButtonLink, Input };
