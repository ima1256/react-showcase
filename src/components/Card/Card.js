import "./Card.scss";
import { useState, useEffect } from "react";
import Prueba from "../Prueba/Prueba";
import axios from "axios";
import ProfileImage from "../ProfileImage/ProfileImage";
import { Rating, Stack, Box, Switch } from '@mui/material'
import ProfileSkills from "../ProfileSkills/ProfileSkills";
import Loading from "../Loading/Loading";
import { Opacity } from "@mui/icons-material";

const Card = ({ name, email, phone }) => {

  const [loading, setLoading] = useState(true)

  const [loading2, setLoading2] = useState(false)

  const [data, setData] = useState(null)

  const [error, setError] = useState(null)

  const [isClicked, setIsClicked] = useState(false)

  const handleCardClick = () => {
    setIsClicked(true)

    setTimeout(() => {
      setLoading2(true)
    }, 2000)

    setTimeout(() => {
      setIsClicked(false)
      setLoading2(false)
    }, 10000)
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setData(response.data);
      } catch (err) {
        setError(err.message);
      }
    };

    setTimeout(() => {
      setLoading(false);
    }, 3000);

    fetchData();
  }, []);

  return (
    <div style={{ width: "40%", height: 'auto' }} className="relative transition-transform duration-300">
      
      <Prueba style={{ display: loading ? "flex" : "none" }} />

      <Loading show={loading2}  />

      {/* <Switch className="absolute" checked={isClicked} onChange={() => setIsClicked(false)} /> */}

      <Box
        onClick = {() => handleCardClick()}
        sx={{
          animation: isClicked ? 'scaleAndMoveUp 2s ease forwards' : 'none',
          transform: 'scale(0.8)'
        }}
        style={{ display: !loading ? "flex" : "none" }}
        className="flex flex-col relative card font-digital transition-display duration-300 font-bold text-white border-[#00FF9C] border-4 px-6 pb-6 rounded-lg
        shadow-lg shadow-[#00FF9C] hover:shadow-[0_0_20px_5px_rgba(0,255,156,0.6)] transition-shadow hover:cursor-pointer"
      >

        <div className="text-[#cccccc] text-2xl mt-3 font-black uppercase profile-name">
          <span style={{textAlign: 'left'}}>{name}</span>
        </div>
        
        <ProfileImage />

        <Stack spacing={1} className="text-[#cccccc] text-xlfont-digital">
          <span style={{textAlign: 'center'}}>{email}</span>
          <span style={{textAlign: 'center'}}>{phone}</span>
        </Stack>

        <ProfileSkills />

        <div className="bottom-card flex flex-row">

          <Box
            // sx={{
            //   animation: 'ambarText 0.1s infinite ease forwards'
            // }}
            className="text-[#B22222] card-content text-xl font-digital">
            Complete programmer
          </Box>

          <Rating name="read-only" value={2} readOnly className="my-0 mx-auto" >

          </Rating>

        </div>

        
      </Box>
    </div>
  );
};

export default Card;
