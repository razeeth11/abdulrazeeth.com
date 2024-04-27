import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Box, Button, Grid, MenuList, Popover, Typography } from '@mui/material';
import { useState } from 'react';

export function Appbar() {

  const [anchorEl, setAnchorEl] = useState(null);
  const [language,setLanguage] = useState('English')

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const navLinks = {
    fontSize: '16px', cursor: 'pointer', color: "#99A3A4", "&:hover": { color: "whitesmoke" }
  };

  const languageLinks = { padding: "10px 20px", "&:hover": { background: 'lightgrey' } };

  return (
    <Grid container sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", border: "0.5px solid #424949", padding: "10px 15px", borderRadius: "5px" }}>
      <Grid xs={4}>
        <Box sx={{ display: "flex" }}>
          <Typography sx={{ fontSize: "28px", fontWeight: 600, fontStyle: "italic", color: "#2ECC71" }}>
            &lt;R
          </Typography>
          <Typography sx={{ fontSize: "28px", fontWeight: 600, fontStyle: "italic", color: "whitesmoke" }}>
            azeeth
          </Typography>
          <Typography sx={{ fontSize: "28px", fontWeight: 600, fontStyle: "italic", color: "#2ECC71" }}>
            /&gt;
          </Typography>
        </Box>
      </Grid>
      <Grid xs={4} sx={{ display: "flex", alignItems: "center", gap: "30px" }}>
        <Typography sx={navLinks}>
          Home
        </Typography>
        <Typography sx={navLinks}>
          About me
        </Typography>
        <Typography sx={navLinks}>
          Skills
        </Typography>
        <Typography sx={navLinks}>
          Projects
        </Typography>
        <Typography sx={navLinks}>
          Experience
        </Typography>
      </Grid>
      <Grid xs={4} sx={{ display: "flex", justifyContent: "end", marginLeft: "auto" }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <Typography onClick={handleClick} sx={{ display: "flex", alignItems: "center", color: "#99A3A4",fontSize:'14px', cursor: 'pointer', "&:hover": { color: "whitesmoke" } }}>
            {language} <ArrowDropDownIcon />
          </Typography>
          <Button sx={{ textTransform: 'capitalize', fontSize: '14px', fontWeight: 400, padding: "5px 15px", background: '#2ECC71', color: "whitesmoke", "&:hover": { background: '#2ECC71', color: "whitesmoke" } }}>
            Contact Me
          </Button>
        </Box>
      </Grid>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <Box>
          <MenuList onClick={()=>setLanguage(language == 'English' ? 'عربي' : 'English')} sx={languageLinks}>
            {language == 'English' ? 'عربي' : 'English'}
          </MenuList>
        </Box>
      </Popover>
    </Grid>
  );
}
