import { Box, Button, Stack, Typography, IconButton } from "@mui/material";
import { forwardRef, useState, useRef, useEffect } from "react";
import { GitHub, LinkedIn, Facebook } from "@mui/icons-material";

import ReactIcon from "@mui/icons-material/EmojiObjects"; // Example for React icon (replace with correct one)
import NodeIcon from "@mui/icons-material/Computer"; // Example for Node.js (replace with correct one)
import MongoDBIcon from "@mui/icons-material/Storage"; // Example for MongoDB (replace with correct one)

const VideoWithControls = () => {
  const [isMuted, setIsMuted] = useState(false); // State to manage the muted/unmuted status

  const [loading, setLoading] = useState(true); // State to track loading

  const handleVideoLoaded = () => {
    setLoading(false); // Hide spinner when the video has loaded enough to play
  };


  const toggleMute = () => {
    const video = videoRef.current;
    video.muted = !video.muted; // Toggle mute state
    setIsMuted(!isMuted); // Update state
  };

  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleStop = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
        justifyContent: "center",
        marginTop: {
          xs: "-40px",
          md: "0px",
        },
      }}
    >
      <div style={{ position: "relative", display: "inline-block" }}>
        <video
          ref={videoRef}
          width="500"
          height="auto"
          style={{
            borderRadius: "3%",
            objectFit: "cover",
          }}
          src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" // Replace with your video URL
          muted={isMuted} // Use state to control the muted state
          controls={false} // No default controls
          loop
        />
        {/* Overlay in top-right corner */}
        <div
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
            borderRadius: "50%",
            padding: "5px",
            cursor: "pointer",
          }}
          onClick={toggleMute}
        >
          {isMuted ? (
            <span style={{ color: "white", fontSize: "20px" }}>🔇</span> // Muted icon (🔊)
          ) : (
            <span style={{ color: "white", fontSize: "20px" }}>🔊</span> // Unmuted icon (🔇)
          )}
        </div>
      </div>

      <Box sx={{ display: "flex", gap: 2 }}>
        <Button
          variant="contained"
          color="primary"
          onClick={handlePlay}
          disabled={isPlaying}
        >
          Play
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={handleStop}
          disabled={!isPlaying}
        >
          Stop
        </Button>
      </Box>
    </Box>
  );
};

const Socials = () => {
  const socialLinks = {
    github: {
      url: "https://github.com/ima1256",
    },
    linkedin: {
      url: "https://www.linkedin.com/in/imanolcondegonzalez",
    },
    facebook: {
      url: "https://www.facebook.com/imanol.conde.37",
    },
  };

  return (
    <Stack direction="row">
      <IconButton
        color="inherit"
        onClick={() => window.open(socialLinks.github.url, "_blank")}
      >
        <GitHub />
      </IconButton>
      <IconButton
        color="inherit"
        onClick={() => window.open(socialLinks.linkedin.url, "_blank")}
      >
        <LinkedIn />
      </IconButton>
      <IconButton
        color="inherit"
        onClick={() => window.open(socialLinks.facebook.url, "_blank")}
      >
        <Facebook />
      </IconButton>
    </Stack>
  );
};

const About = forwardRef((props, ref) => {
  const videoRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    // Trigger animation after component mounts
    if (videoRef.current && textRef.current) {
      videoRef.current.classList.add("animate-left");
      textRef.current.classList.add("animate-right");
    }
  }, []);
  return (
    <Box
      ref={ref}
      className="flex items-start justify-center"
      sx={{ minHeight: { xs: "230vh", md: "130vh" } }}
    >
      <Stack
        direction={{ xs: "column", md: "row" }} // Responsive direction change
        spacing={{ xs: 3, md: 7 }} // Responsive spacing
        className="w-full md:w-[60%] items-center justify-center"
        sx={{ minHeight: "100vh" }}
      >
        <Box
          ref={videoRef}
          sx={{
            transform: "translateX(-100%)", // Start from the left
            animation: "moveLeft 2s forwards", // Apply animation
            transition: "all 2s ease-out",
            minHeight: "100vh",
          }}
          className="flex justify-center items-center"
        >
          <VideoWithControls />
        </Box>
        <Stack
          ref={textRef}
          sx={{
            transform: "translateX(-100%)", // Start from the left
            animation: "moveRight 2s forwards", // Apply animation
            transition: "all 2s ease-out",
            minHeight: "100vh",
          }}
          direction="column"
          spacing={2} // Added spacing between text elements
          alignItems="center" // Center text inside the stack
          className="justify-center h-full"
        >
          <Typography
            variant="h4" // Adjusted for a more prominent heading
            sx={{
              fontWeight: "bold",
              color: "primary.main",
              textAlign: "center",
              marginBottom: "0.5rem", // Reduced space for better flow
              marginLeft: "50%",
            }}
          >
            Imanol Conde González
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: "1.1rem",
              lineHeight: "1.8",
              color: "text.secondary",
              textAlign: "center",
              maxWidth: "600px", // Limit text width for better readability
            }}
          >
            As a Full Stack Developer, I specialize in creating responsive,
            user-friendly web apps using technologies like React, Node.js, and
            MongoDB. I focus on building scalable front-end interfaces and
            robust back-end systems, ensuring clean, maintainable code. I also
            leverage agile methodologies and modern dev tools to deliver
            efficient, high-quality solutions.
          </Typography>

          <Socials />
        </Stack>
      </Stack>
    </Box>
  );
});

export default About;
