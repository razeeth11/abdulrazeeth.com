import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import CallIcon from "@mui/icons-material/Call";
import FaceRetouchingNaturalIcon from "@mui/icons-material/FaceRetouchingNatural";
import PhonelinkIcon from "@mui/icons-material/Phonelink";
import { Box, Button, Grid, Tooltip, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useEffect, useState } from "react";
import boy from "./assets/devBoy.png";

export function MainContent() {
  const theme = useTheme();
  const match1000 = useMediaQuery(theme.breakpoints.down(1000));
  const match500 = useMediaQuery(theme.breakpoints.down(500));
  const match400 = useMediaQuery(theme.breakpoints.down(400));
  const matchsm = useMediaQuery(theme.breakpoints.down("sm"));

  const contentText = {
    color: "whitesmoke",
    fontSize: "30px",
    fontWeight: 500,
  };
  const absoluteContent = {
    position: "absolute",
    display: "flex",
    alignItems: "center",
    gap: "10px",
    fontSize: "16px",
    color: "whitesmoke",
    border: "1.5px solid #2ECC71",
    borderRadius: "5px",
    padding: "8px 15px",
    backdropFilter: "blur(15px)",
    whiteSpace: "nowrap",
  };
  const eventButton = {
    display: "flex",
    alignItems: "center",
    gap: "5px",
    fontSize: "14px",
    whiteSpace: "nowrap",
    width: "min-content",
    background: "#2ECC71",
    marginTop: "20px",
    textTransform: "capitalize",
    padding: "5px 15px",
    color: "whitesmoke",
    "&:hover": { color: "white", background: "#2ECC71" },
  };

  const [career, setCareer] = useState("Full Stack MERN Developer/");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCareer((prevCareer) =>
        prevCareer === "Full Stack MERN Developer/"
          ? "Frontend React Developer/"
          : "Full Stack MERN Developer/"
      );
    }, 3000);

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  return (
    <Grid
      sx={{
        display: "flex",
        flexDirection: match1000 && "column",
        gap: match1000 && "40px",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: "50px",
      }}
    >
      <Grid sx={{ display: "flex", flexDirection: "column" }}>
        <Typography sx={contentText}>Hi, I'm</Typography>
        <Typography
          sx={{
            fontSize: match500 ? "28px" : "42px",
            color: "whitesmoke",
            fontWeight: 400,
            whiteSpace: "nowrap",
          }}
        >
          Abdul Razeeth,
        </Typography>
        <Typography
          sx={{
            color: "whitesmoke",
            fontSize: match500 ? "16px" : "20px",
            fontWeight: 400,
            color: "#B2BABB",
            maxWidth: "600px",
          }}
        >
          A Passionate{" "}
          <span
            style={{
              color: "#2ECC71",
              fontStyle: "italic",
              whiteSpace: "nowrap",
            }}
          >
            &lt;{career}&gt;
          </span>{" "}
          <br/>
          Building User-Friendly Websites & Applications.
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <Tooltip title={"+91 6383884482"}>
            <Button sx={eventButton}>
              <CallIcon /> call
            </Button>
          </Tooltip>
          <Tooltip title={"razeeth011@gmail.com"}>
            <Button sx={eventButton}>
              <AlternateEmailIcon /> Email
            </Button>
          </Tooltip>
        </Box>
      </Grid>
      <Grid sx={{ marginRight: !match1000 && "60px", position: "relative" }}>
        <Box>
          <img
            src={boy}
            alt=""
            style={{ width: "100%" }}
          />
        </Box>
        <Typography
          sx={absoluteContent}
          style={{ top: "150px", left: matchsm ? "0px" : "-50px" }}
        >
          {" "}
          <PhonelinkIcon sx={{ fontSize: "26px", color: "#2ECC71" }} />{" "}
          Responsive Design
        </Typography>
        <Typography
          sx={absoluteContent}
          style={{ top: "320px", left: matchsm ? "150px" : "250px" }}
        >
          {" "}
          <FaceRetouchingNaturalIcon
            sx={{ fontSize: "26px", color: "#2ECC71" }}
          />{" "}
          Best Quality
        </Typography>
      </Grid>
    </Grid>
  );
}
