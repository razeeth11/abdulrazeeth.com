import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TelegramIcon from "@mui/icons-material/Telegram";
import XIcon from "@mui/icons-material/X";
import { Box, Grid, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import boy from "./assets/avatar.png";

export function AboutPage() {

  const theme = useTheme();
  const matchmd = useMediaQuery(theme.breakpoints.down("md"));

  const iconStyle = {
    color: "#373939",
    fontSize: "14px",
    background: "whitesmoke",
    padding: "4px",
    borderRadius: "50px",
  };
  return (
    <Grid
      sx={{
        display: "flex",
        flexDirection: matchmd && "column-reverse",
        gap: matchmd ? "70px" : "30px",
        margin: "150px 0",
        alignItems: matchmd ? "center" : "end",
      }}
    >
      <Grid>
        <Grid
          sx={{
            height: "300px",
            objectFit: "cover",
            width: "100%",
            overflowY: "hidden",
          }}
        >
          <img src={boy} style={{ width: "100%" }} />
        </Grid>
        <Stack
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "0px",
            alignItems: "center",
            padding: "5px 50px 10px 50px",
            width: "min-content",
            margin: "0 auto",
            borderRight: "2px solid #2ECC71",
            borderRadius: "10px",
            background: " linear-gradient(to left, rgba(66, 73, 73 , 0.1), #2ECC71)",
          }}
        >
          <Typography
            sx={{
              fontSize: "18px",
              color: "whitesmoke",
              fontWeight: 300,
              marginTop: 0,
            }}
          >
            Abdul Razeeth
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <InstagramIcon sx={iconStyle} />
            <FacebookIcon sx={iconStyle} />
            <GitHubIcon sx={iconStyle} />
            <TelegramIcon sx={iconStyle} />
            <XIcon sx={iconStyle} />
            <LinkedInIcon sx={iconStyle} />
          </Box>
        </Stack>
      </Grid>
      <Grid>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: 400,
              color: "whitesmoke",
              borderLeft: "3px solid #2ECC71",
              paddingLeft: "10px",
              width: "min-content",
              whiteSpace: "nowrap",
            }}
          >
            About me
          </Typography>
          <Typography
            sx={{ fontSize: matchmd ? "20px" : "28px", color: "#2ECC71", fontWeight: 500 }}
          >
            Bringing Your Creative Designs to
            {!matchmd && <br />}
            {" "}Reality through Code Implementation
          </Typography>
          <Box
            sx={{ display: "flex", flexDirection: "column", maxWidth: "900px" }}
          >
            <Typography
              sx={{ color: "whitesmoke", fontSize: matchmd ? "14px" : "16px", fontWeight: 300 }}
            >
              As a seasoned Full Stack MERN developer, I specialize in frontend development, leveraging my expertise in MongoDB, Express.js, React.js, and Node.js. With a blend of design principles and coding skills, I translate innovative concepts into polished, functional web solutions. Passionate about merging aesthetics with functionality, I craft code that transforms creative visions into dynamic, user-centric experiences, creating visually stunning interfaces that captivate users and leave a lasting impression.
            </Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
