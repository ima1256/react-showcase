import React, { forwardRef } from "react";
import { Box, Typography, Container, Grid, Card, CardContent } from "@mui/material";

const LiveCoding = forwardRef((props, ref) => {
  const stats = {
    totalHours: 45, // Total hours coded this month
    totalProjects: 5, // Number of projects worked on
    totalFollowers: 1500, // Followers watching
    averageViewers: 120, // Average viewers per session
  };

  return (
    <div
      ref={ref}
      style={{
        backgroundColor: "#F9A8D4", // Light pink background
        padding: "2rem 0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container sx={{ maxWidth: "lg", textAlign: "center" }}>
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            marginBottom: "2rem",
            color: "#fff", // White text color for the title
          }}
        >
          Watch Me Code Live!
        </Typography>

        <Grid container spacing={4} sx={{ marginBottom: "3rem" }}>
          {/* Display Stats Cards */}
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ backgroundColor: "#fff", boxShadow: 3 }}>
              <CardContent>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", color: "primary.main" }}
                >
                  Total Hours Coded
                </Typography>
                <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                  {stats.totalHours} hrs
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ backgroundColor: "#fff", boxShadow: 3 }}>
              <CardContent>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", color: "primary.main" }}
                >
                  Projects Completed
                </Typography>
                <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                  {stats.totalProjects}
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ backgroundColor: "#fff", boxShadow: 3 }}>
              <CardContent>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", color: "primary.main" }}
                >
                  Total Followers
                </Typography>
                <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                  {stats.totalFollowers}
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ backgroundColor: "#fff", boxShadow: 3 }}>
              <CardContent>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", color: "primary.main" }}
                >
                  Avg. Viewers per Session
                </Typography>
                <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                  {stats.averageViewers}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Box
          sx={{
            position: "relative",
            width: "100%",
            paddingTop: "56.25%", // 16:9 aspect ratio for the iframe
            boxShadow: 4, // Add some shadow for depth
            borderRadius: 2, // Rounded corners
            overflow: "hidden", // Ensures iframe fits within container
          }}
        >
          <iframe
            src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fimanol.conde.37%2Fvideos%2F2102614720207693%2F&show_text=false&width=560&t=0"
            width="100%" // Make it responsive
            height="100%" // Make it responsive
            style={{
              position: "absolute",
              top: "0",
              left: "0",
              border: "none",
            }}
            scrolling="no"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            allowFullScreen="true"
          />
        </Box>
        <Typography
          variant="body1"
          sx={{
            marginTop: "1rem",
            color: "#fff",
            fontSize: "1.1rem",
            textAlign: "center",
          }}
        >
          Watch my coding sessions in real-time as I tackle exciting projects
          and challenges!
        </Typography>
      </Container>
    </div>
  );
});

export default LiveCoding;
