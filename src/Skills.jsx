import { Box, Grid, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import mongo from "./assets/mongodb-svgrepo-com.svg";
import {
  Css,
  Express,
  Figma,
  Githuh,
  Html,
  Js,
  Mui,
  Mysql,
  Node,
  Npm,
  Postman,
  React
} from "./svg";

export function Skills() {
  const theme = useTheme();
  const matchmd = useMediaQuery(theme.breakpoints.down("md"));

  const skillsText = {
    color: "whitesmoke",
    textAlign: "center",
    marginTop: "5px",
  };

  const skillBox = { width: "50px", height: "50px" };

  return (
    <Grid
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "120px 0",
      }}
    >
      <Typography
        sx={{
          fontSize: "16px",
          fontWeight: 400,
          color: "whitesmoke",
          width: "min-content",
          whiteSpace: "nowrap",
        }}
      >
        Skills
      </Typography>
      <Typography
        sx={{
          fontSize: matchmd ? "20px" : "28px",
          color: "#2ECC71",
          textAlign: "center",
          fontWeight: 500,
          marginTop: "20px",
        }}
      >
        The Skills, tools and technologies
        <br />I am really good at :
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          maxWidth: "600px",
          flexWrap: "wrap",
          gap: "30px",
          marginTop: "40px",
        }}
      >
        <Box>
          <Box sx={skillBox}>
            <Html />
          </Box>
          <Typography sx={skillsText}>Html</Typography>
        </Box>
        <Box>
          <Box sx={skillBox}>
            <Css />
          </Box>
          <Typography sx={skillsText}>Css</Typography>
        </Box>
        <Box>
          <Box sx={skillBox}>
            <Js />
          </Box>
          <Typography sx={skillsText}>Javascript</Typography>
        </Box>
        <Box>
          <Box sx={skillBox}>
            <React />
          </Box>
          <Typography sx={skillsText}>React Js</Typography>
        </Box>
        <Box>
          <Box sx={skillBox}>
            <Mui />
          </Box>
          <Typography sx={skillsText}>Material UI</Typography>
        </Box>
        <Box>
          <Box sx={skillBox}>
            <Node />
          </Box>
          <Typography sx={skillsText}>Node Js</Typography>
        </Box>
        <Box>
          <Box sx={skillBox}>
            <Express />
          </Box>
          <Typography sx={skillsText}>Express Js</Typography>
        </Box>
        <Box>
          <Box sx={skillBox}>
            <Mysql />
          </Box>
          <Typography sx={skillsText}>MySql</Typography>
        </Box>
        <Box>
          <Box sx={skillBox}>
            <img src={mongo} alt="" style={{ width: "100%" }} />
          </Box>
          <Typography sx={skillsText}>MongoDB</Typography>
        </Box>
        <Box>
          <Box sx={skillBox}>
            <Figma />
          </Box>
          <Typography sx={skillsText}>Figma</Typography>
        </Box>
        <Box>
          <Box sx={skillBox}>
            <Postman />
          </Box>
          <Typography sx={skillsText}>Postman</Typography>
        </Box>
        <Box>
          <Box sx={skillBox}>
            <Githuh />
          </Box>
          <Typography sx={skillsText}>Github</Typography>
        </Box>
        <Box>
          <Box sx={skillBox}>
            <Npm />
          </Box>
          <Typography sx={skillsText}>Npm</Typography>
        </Box>
      </Box>
    </Grid>
  );
}
