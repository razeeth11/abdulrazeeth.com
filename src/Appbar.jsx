import ComputerIcon from "@mui/icons-material/Computer";
import HomeIcon from "@mui/icons-material/Home";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";
import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck";
import {
  Box,
  Button,
  Grid,
  IconButton, Typography
} from "@mui/material";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useState } from "react";

export function Appbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [menu, setMenu] = useState(false);
  const [language, setLanguage] = useState("EN");
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const theme = useTheme();
  const match1100 = useMediaQuery(theme.breakpoints.down(1100));
  const match900 = useMediaQuery(theme.breakpoints.down("md"));
  const matchsm = useMediaQuery(theme.breakpoints.down("sm"));
  const matchlg = useMediaQuery(theme.breakpoints.up("sm"));

  const navLinks = {
    fontSize: "16px",
    whiteSpace: "nowrap",
    cursor: "pointer",
    color: "#99A3A4",
    "&:hover": { color: "whitesmoke" },
  };

  const languageLinks = {
    padding: "10px 20px",
    "&:hover": { background: "lightgrey" },
  };

  return (
    <Grid
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: matchsm ? "space-between" : "space-around",
        border: "0.5px solid #424949",
        padding: "10px 15px",
        borderRadius: "5px",
        boxShadow:"1px 1px 7px #424949",
      }}
    >
      <Grid>
        <Box sx={{ display: "flex" }}>
          <Typography
            sx={{
              fontSize: "28px",
              fontWeight: 600,
              fontStyle: "italic",
              color: "#2ECC71",
            }}
          >
            &lt;{!matchsm && "R"}
          </Typography>
          <Typography
            sx={{
              fontSize: "28px",
              fontWeight: 600,
              fontStyle: "italic",
              color: "whitesmoke",
            }}
          >
            {!matchsm ? "azeeth" : "Ar"}
          </Typography>
          <Typography
            sx={{
              fontSize: "28px",
              fontWeight: 600,
              fontStyle: "italic",
              color: "#2ECC71",
            }}
          >
            /&gt;
          </Typography>
        </Box>
      </Grid>
      <Grid>
      {!match900 ? (
        <Grid sx={{ display: "flex", alignItems: "center", gap: "30px" }}>
          <Typography sx={navLinks}>Home</Typography>
          <Typography sx={navLinks}>About me</Typography>
          <Typography sx={navLinks}>Skills</Typography>
          <Typography sx={navLinks}>Projects</Typography>
          <Typography sx={navLinks}>Experience</Typography>
        </Grid>
      ) : (
        <IconButton
          onClick={() => {
            setMenu(!menu);
            setOpenDrawer(!openDrawer);
          }}
          sx={{ color: "white" }}
        >
          <MenuIcon sx={{ fontSize: "28px" }} />
        </IconButton>
      )}
      </Grid>
      {!match1100 && (
        <Grid
          sx={{ display: "flex" }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <Button
              sx={{
                textTransform: "capitalize",
                fontSize: "14px",
                fontWeight: 400,
                padding: "5px 15px",
                background: "#2ECC71",
                whiteSpace: "nowrap",
                color: "whitesmoke",
                "&:hover": { background: "#2ECC71", color: "whitesmoke" },
              }}
            >
              Contact Me
            </Button>
          </Box>
        </Grid>
      )}

      <TemporaryDrawer openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
    </Grid>
  );
}

export default function TemporaryDrawer({ openDrawer, setOpenDrawer }) {
  const DrawerList = (
    <Box
      sx={{ background: "#424949", height: "100%", width: 250 }}
      role="presentation"
      onClick={() => setOpenDrawer(false)}
    >
      <List>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            margin: "10px 0 15px 0",
          }}
        >
          <Typography
            sx={{
              fontSize: "28px",
              fontWeight: 600,
              fontStyle: "italic",
              color: "#2ECC71",
            }}
          >
            &lt;R
          </Typography>
          <Typography
            sx={{
              fontSize: "28px",
              fontWeight: 600,
              fontStyle: "italic",
              color: "whitesmoke",
            }}
          >
            azeeth
          </Typography>
          <Typography
            sx={{
              fontSize: "28px",
              fontWeight: 600,
              fontStyle: "italic",
              color: "#2ECC71",
            }}
          >
            /&gt;
          </Typography>
        </Box>
        <Divider />
        {["Home", "About me", "Skills", "Projects", "Experience"].map(
          (text, index) => (
            <ListItem sx={{ padding: "5px", color: "whitesmoke" }} key={text}>
              <ListItemButton>
                <ListItemIcon sx={{ maxWidth: "20px", marginRight: "-10px" }}>
                  {index == 0 && (
                    <HomeIcon sx={{ color: "whitesmoke", fontSize: "24px" }} />
                  )}
                  {index == 1 && (
                    <PersonIcon
                      sx={{ color: "whitesmoke", fontSize: "24px" }}
                    />
                  )}
                  {index == 2 && (
                    <PlaylistAddCheckIcon
                      sx={{ color: "whitesmoke", fontSize: "24px" }}
                    />
                  )}
                  {index == 3 && (
                    <ComputerIcon
                      sx={{ color: "whitesmoke", fontSize: "24px" }}
                    />
                  )}
                  {index == 4 && (
                    <HowToRegIcon
                      sx={{ color: "whitesmoke", fontSize: "24px" }}
                    />
                  )}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          )
        )}
      </List>
    </Box>
  );

  return (
    <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
      {DrawerList}
    </Drawer>
  );
}
