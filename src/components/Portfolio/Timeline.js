import { Box, Stack, Typography } from "@mui/material";
import { forwardRef } from "react";
import { useSpring, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";

// Sample Data for Timeline Events
const events = [
  {
    date: "January 2020",
    title: "Started Learning Web Development",
    description:
      "I took my first steps into the world of web development by learning HTML, CSS, and JavaScript.",
    image: "https://i.imgur.com/irbJaJ9.png", // Image 1
  },
  {
    date: "June 2021",
    title: "Built My First Website",
    description:
      "Created my first project – a personal portfolio website using React.",
    image: "https://i.imgur.com/389fePD.jpg", // Image 2
  },
  {
    date: "December 2022",
    title: "Joined a Software Development Team",
    description:
      "Became part of a development team and started working on real-world projects.",
    image: "https://i.imgur.com/dvqT1jz.png", // Image 3
  },
  {
    date: "March 2023",
    title: "Contributed to Open Source",
    description: "Started contributing to open-source projects on GitHub.",
    image: "https://i.imgur.com/irbJaJ9.png", // Image 1
  },
  {
    date: "August 2024",
    title: "Started Freelancing",
    description:
      "Began working as a freelancer and helping clients with web development projects.",
    image: "https://i.imgur.com/389fePD.jpg", // Image 2
  },
  {
    date: "January 2025",
    title: "Launched a New App",
    description:
      "Released my first mobile app and gained valuable experience in app development.",
    image: "https://i.imgur.com/dvqT1jz.png", // Image 3
  },
];

const Timeline = forwardRef((props, ref) => {
  const { ref: inViewRef, inView } = useInView({
    triggerOnce: true, // Only trigger once
    threshold: 0.2, // 20% of element visible triggers animation
  });

  const setRefs = (node) => {
    if (ref) {
      if (typeof ref === "function") ref(node);
      else ref.current = node;
    }
    inViewRef(node);
  };

  return (
    <Box
      ref={ref}
      // sx={{
      //   transform: inView ? "translateY(0)" : "translateY(100%)",
      //   opacity: inView ? 1 : 0,
      //   transition: "all 1s ease-out",
      // }}
      className="flex items-center justify-center py-10"
    >
      <Stack direction="column" spacing={5} className="w-full md:w-[80%]">
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            color: "primary.main",
          }}
        >
          My Journey
        </Typography>

        <Box position="relative" className="w-full">
          {/* Vertical Line */}
          <Box
            sx={{
              position: "absolute",
              left: "50%",
              top: 0,
              bottom: 0,
              width: "2px",
              backgroundColor: "text.primary",
            }}
          />

          {/* Events */}
          {events.map((event, index) => (
            <Box
              key={index}
              sx={{
                zIndex: 2,
                position: "relative",
                marginBottom: "3rem",
                display: "flex",
                justifyContent: "center",
              }}
            >
              {/* Tick Mark (Circle) */}
              <Box
                sx={{
                  position: "absolute",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                  backgroundColor: "primary.main",
                  border: "3px solid white",
                }}
              />
              <Box
                sx={{
                  marginLeft: "3rem",
                  display: "flex",
                  alignItems: "center",
                }}
                className="mt-6"
              >
                {/* Event Date and Image */}
                <Box sx={{ marginRight: "1rem" }}>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ fontWeight: "bold" }}
                  >
                    {event.date}
                  </Typography>
                  <img
                    src={event.image}
                    alt={event.title}
                    style={{
                      width: "60px",
                      height: "60px",
                      objectFit: "cover",
                      borderRadius: "50%",
                    }}
                  />
                </Box>

                {/* Event Title and Description */}
                <Stack spacing={1} direction="column">
                  <Typography
                    className="bg-white"
                    variant="h6"
                    sx={{
                      display: "inline", // Make the Typography element inline to fit tightly around the text
                      lineHeight: 1.2, // Set lineHeight to 1 to remove extra space around the text
                      padding: 0, // Ensure no padding around the text
                      margin: 0, // Ensure no margin around the text
                      fontWeight: "bold",
                      color: "primary.main",
                    }}
                  >
                    {event.title}
                  </Typography>
                  <Typography
                    className="bg-white"
                    sx={{
                      display: "inline", // Make the Typography element inline to fit tightly around the text
                      lineHeight: 1.2, // Set lineHeight to 1 to remove extra space around the text
                      padding: 0, // Ensure no padding around the text
                      margin: 0, // Ensure no margin around the text
                      fontWeight: "bold",
                      color: "text.secondary",
                    }}
                    variant="body2"
                  >
                    {event.description}
                  </Typography>
                </Stack>
              </Box>
            </Box>
          ))}
        </Box>
      </Stack>
    </Box>
  );
});

export default Timeline;
