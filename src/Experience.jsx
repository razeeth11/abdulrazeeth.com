import AddIcon from "@mui/icons-material/Add";
import HandshakeIcon from "@mui/icons-material/Handshake";
import LinkIcon from "@mui/icons-material/Link";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import RemoveIcon from "@mui/icons-material/Remove";
import {
  Box,
  Button,
  Collapse,
  Grid,
  IconButton,
  Typography
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useState } from "react";

export function Experience() {
  const theme = useTheme();
  const matchmd = useMediaQuery(theme.breakpoints.down("md"));

  const [open, setOpen] = useState(false);

  const exStyles = { color: "whitesmoke", fontSize: "13px" };

  return (
    <Grid
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
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
          Experience
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
          Here is a quick summary of
          <br />
          my most recent experiences
        </Typography>
      </Grid>
      <Grid
        sx={{
          border: "1px solid grey",
          width: "60%",
          padding: "10px 15px",
          borderRadius: "5px",
          marginTop: "40px",
        }}
      >
        <Grid
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography sx={exStyles}>
            Frontend React Developer
            <span style={{ color: "#2ECC71" }}> @ Compunet Connections</span>
          </Typography>
          <Typography sx={exStyles}>
            Aug 2023 - Present
            <IconButton onClick={() => setOpen(!open)}>
              {!open ? (
                <AddIcon sx={{ color: "#2ECC71", fontSize: "24px" }} />
              ) : (
                <RemoveIcon sx={{ color: "#2ECC71", fontSize: "24px" }} />
              )}
            </IconButton>
          </Typography>
        </Grid>
        <Collapse
          in={open}
          sx={{
            borderTop: "2px solid grey",
            marginTop: open && "10px",
            padding: open && "15px 0",
          }}
        >
          <Grid sx={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            <Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  width: "300px",
                  gap: "30px",
                }}
              >
                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    color: "whitesmoke",
                    fontSize: "13px",
                  }}
                >
                  <LocationOnIcon />
                  Chennai
                </Typography>
                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    color: "whitesmoke",
                    fontSize: "13px",
                  }}
                >
                  <LinkIcon />
                  Compunet Connections
                </Typography>
              </Box>
            </Box>
            <Typography
              sx={{ maxWidth: "600px", margin: "10px 5px", color: "lightgrey" }}
            >
              Specializing in UI implementation, bug fixing, API integration,
              and adept problem-solving for seamless web application
              development.
            </Typography>
            <Box sx={{ display: "flex" }}>
              {["HTML", "CSS", "Javascript", "React", "Material UI"].map(
                (item, index) => (
                  <Typography
                    key={index}
                    sx={{
                      whiteSpace: "nowrap",
                      padding: "1px 8px",
                      color: "grey",
                      width: "min-content",
                    }}
                  >
                    {item}
                  </Typography>
                )
              )}
            </Box>
          </Grid>
        </Collapse>
      </Grid>
      <Grid
        sx={{
          padding: "40px",
          width: "60%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderRadius: "15px",
          background: "#13315C",
          marginTop: "200px",
        }}
      >
        <Typography
          sx={{ color: "whitesmoke", fontSize: "22px", fontWeight: 500 }}
        >
          Start a project
        </Typography>
        <Typography
          sx={{
            color: "whitesmoke",
            fontSize: "14px",
            maxWidth: "350px",
            textAlign: "center",
          }}
        >
          Ready to start? Let's bring your project to life together!
        </Typography>
        <Button
          sx={{
            border: "1px solid #2ECC71",
            padding: "8px 25px",
            color: "lightgrey",
            borderRadius: "10px",
          }}
        >
          <HandshakeIcon sx={{ color: "#2ECC71", marginRight: "10px" }} />
          Let's do this
        </Button>
      </Grid>
    </Grid>
  );
}
