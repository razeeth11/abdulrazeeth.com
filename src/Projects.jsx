import AirplayIcon from "@mui/icons-material/Airplay";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkIcon from "@mui/icons-material/Link";
import { Box, Button, Card, Grid, Link, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export function Projects() {
  const theme = useTheme();
  const matchmd = useMediaQuery(theme.breakpoints.down("md"));

  const linkStyle = {
    display: "flex",
    alignItems: "center",
    gap: "5px",
    color: "lightgrey",
    textDecoration: "underline",
    cursor: "pointer",
    fontSize: "10px",
  };

  const link = {
    textTransform: "capitalize",
    fontSize: "12px",
    padding: "5px 20px",
    color: "#2ECC71",
    background: "rgba(46, 204, 113, 0.1)",
    border: "1px solid rgba(46, 204, 113, 0.3)",
    borderRadius: "5px",
    cursor: "pointer",
  };

  const projectData = [
    {
      projectImg:
        "https://media.licdn.com/dms/image/D562DAQETQiIOJyvidQ/profile-treasury-image-shrink_1920_1920/0/1695208427097?e=1715410800&v=beta&t=avLj__QGRD-3qTLDa_M0hPEgYZmwTtlHk74idsBnedM",
      projectName: "Swiggy clone app",
      projectDescription:
        "A Swiggy-inspired web app UI displaying restaurant listings with API data for a simulated food ordering experience.",
      projectLan: [
        "HTML",
        "Css",
        "Javascript",
        "React",
        "Express Js",
        "MongoDB",
      ],
      projectlive: "https://swiggy-desktop-app.netlify.app/",
      projectCode: "https://github.com/razeeth11/Swiggy-Clone-Desktop-App",
    },
    {
      projectImg:
        "https://media.licdn.com/dms/image/D562DAQE6CmUfO9KTjw/profile-treasury-image-shrink_1920_1920/0/1695208686516?e=1715410800&v=beta&t=p0R-AKzZdwawQcgAUZCBxhtcfjjpUQuo8NNrWOGEILs",
      projectName: "React Movie app",
      projectDescription:
        "A full-stack movie app providing seamless browsing and database integration for movie enthusiasts without requiring user authentication.",
      projectLan: [
        "HTML",
        "Css",
        "Javascript",
        "React",
        "Express Js",
        "MongoDB",
      ],
      projectlive: "https://movie-app-react-express.netlify.app/",
      projectCode: "https://github.com/razeeth11/Movie-App",
    },
    {
      projectImg: "",
      projectName: "Tic Tac Toe Game",
      projectDescription:
        "A classic Tic Tac Toe game with intuitive UI, multiplayer support, and strategic gameplay for endless entertainment.",
      projectLan: ["HTML", "Css", "Javascript", "React"],
      projectlive: "https://tic-tac-toe-gamemodel.netlify.app/",
      projectCode: "https://github.com/razeeth11/Tic-Tac-Toe-Game",
    },
  ];

  return (
    <Grid
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "100px 0",
      }}
    >
      <Grid>
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: 400,
            color: "whitesmoke",
            width: "min-content",
            whiteSpace: "nowrap",
          }}
        >
          Projects
        </Typography>
      </Grid>
      <Grid>
        <Typography
          sx={{
            fontSize: matchmd ? "20px" : "28px",
            color: "#2ECC71",
            textAlign: "center",
            fontWeight: 500,
            marginTop: "20px",
          }}
        >
          Things I've built so far
        </Typography>
      </Grid>
      <Grid
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "60px",
          marginTop: "40px",
          flexWrap: "wrap",
        }}
      >
        {projectData?.map((item, index) => (
          <Card
            key={index}
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "260px",
              height: "360px",
              borderRadius: "15px",
              background: "#373939",
              boxShadow: "0.5px 0.5px 7px #666",
              padding: "8px",
            }}
          >
            <Box sx={{ width: "260px", height: "300px" }}>
              <img
                src={item.projectImg}
                alt=""
                style={{
                  height: "100%",
                  width: "100%",
                  borderRadius: "10px 10px 0 0",
                  objectFit: "cover",
                }}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                padding: "5px",
                cursor: "pointer",
              }}
            >
              <Typography sx={{ fontSize: "12px", color: "whitesmoke" }}>
                {item.projectName}
              </Typography>
              <Typography
                sx={{
                  height: "75px",
                  color: "grey",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  fontSize: "10px",
                }}
              >
                {item.projectDescription}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  flexWrap: "wrap",
                }}
              >
                {item.projectLan.map((item, index) => (
                  <Typography
                    key={index}
                    sx={{
                      padding: "1px 5px",
                      color: "whitesmoke",
                      fontSize: "10px",
                      background: "#666",
                      borderRadius: "3px",
                    }}
                  >
                    {item}
                  </Typography>
                ))}
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Link href={item.projectlive} sx={linkStyle}>
                  <LinkIcon />
                  Live preview
                </Link>
                <Link href={item.projectCode} sx={linkStyle}>
                  <GitHubIcon />
                  View Code
                </Link>
              </Box>
            </Box>
          </Card>
        ))}
      </Grid>
      <Grid
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
          flexWrap: "wrap",
          justifyContent: "center",
          marginTop: "80px",
        }}
      >
        <Button sx={link}>
          <GitHubIcon /> &nbsp;&nbsp; See more on GitHub
        </Button>
        <Button sx={link}>
          <AirplayIcon /> &nbsp;&nbsp; See more on Netlify
        </Button>
      </Grid>
    </Grid>
  );
}
