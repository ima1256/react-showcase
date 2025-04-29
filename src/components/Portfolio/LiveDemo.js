import { Box, CircularProgress } from "@mui/material";
import { forwardRef, useState } from "react";

const LiveDemo = forwardRef(({ project }, ref) => {
  const [isLoaded, setIsLoaded] = useState(false);

  // Handle iframe load event
  const handleIframeLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div
      ref={ref}
      className="h-[100vh] flex items-center justify-center transition-opacity duration-500 p-[40px]"
      style={{ opacity: isLoaded ? 1 : 0 }} // Smooth fade-in effect
    >
      {/* Loader animation when the iframe is loading */}
      {!isLoaded && (
        <Box
          sx={{
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            width: "100%",
          }}
        >
          <CircularProgress />
        </Box>
      )}
       <Box sx={{ height: "100%", width: "100%" }}>
        {/* iframe with onLoad event to trigger loader removal */}
        <iframe
          src={project.url} // ✅ Real live demo hosted by Vercel
          style={{
            width: "100%",
            height: "100%",
            border: "none",
            opacity: isLoaded ? 1 : 0, // Fade-in effect for iframe
            transition: "opacity 1s", // Smooth transition for opacity
          }}
          title="Live Demo"
          onLoad={handleIframeLoad} // Trigger the load event
        />
      </Box>
    </div>
  );
});

export default LiveDemo;
