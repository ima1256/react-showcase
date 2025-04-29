import { forwardRef, useState } from "react";
import { Box, Typography, Stack, Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Projects = forwardRef(({ onProjectChange }, ref) => {
  const [projectId, setProjectId] = useState(0);

  const handleChange = (project) => {
    setProjectId(project.id);
    onProjectChange(projectList.find((p) => p.id == project.id));
  };

  const projectList = [
    {
      id: 1,
      name: "project1",
      description:
        "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
      thumbnail: "https://i.imgur.com/389fePD.jpg",
      videoUrl: "https://www.youtube.com/embed/gwF9hKUCPCo?si=g4iZDphHLmHHDCfE",
      url: "https://nextjs.org/",
    },
    {
      id: 2,
      name: "project2",
      description:
        "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
      thumbnail: "https://i.imgur.com/389fePD.jpg",
      videoUrl: "https://www.youtube.com/embed/gwF9hKUCPCo?si=g4iZDphHLmHHDCfE",
      url: "https://play.tailwindcss.com/",
    },
    {
      id: 3,
      name: "project3",
      description:
        "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
      thumbnail: "https://i.imgur.com/389fePD.jpg",
      videoUrl: "https://www.youtube.com/embed/gwF9hKUCPCo?si=g4iZDphHLmHHDCfE",
      url: "https://swr.vercel.app/",
    },
  ];

  return (
    <div ref={ref} className="h-[100vh] flex items-center justify-center">
      <Stack direction="row" spacing={3}>
        {projectList.map((project, index) => {
          return (
            <Card key={project.id} sx={{ maxWidth: 345 }}>
              {/* <CardMedia sx={{ height: 200 }} image={project.thumbnail} /> */}
              <Box sx={{ position: "relative", height: 200 }}>
                {/* Embed Wistia Video */}
                <iframe
                  width="100%"
                  height="100%"
                  src={project.videoUrl}
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                  style={{ borderRadius: "8px", objectFit: "cover" }}
                ></iframe>
              </Box>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {project.name}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {project.description}
                </Typography>
              </CardContent>
              <CardActions className="justify-around">
                <KeyboardArrowDownIcon />
                <Button size="small" onClick={() => handleChange(project)}>
                  Show Right Below
                </Button>
                <KeyboardArrowDownIcon />
                {/* <Button size="small" onClick={() => handleChange(project)}>Go to project site</Button> */}
              </CardActions>
            </Card>
          );
        })}
      </Stack>
    </div>
  );
});

export default Projects;
