/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import Person from "@mui/icons-material/Person";
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import { Divider } from "@mui/material";
import { Link } from "react-scroll";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      text: "Home",
      target: "home",
      icon: <HomeIcon />,
    },
    {
      text: "About",
      target: "about",
      icon: <Person />,
    },
    {
      text: "Experience",
      target: "experience",
      icon: <AutoGraphIcon />,
    },
    {
      text: "Contact",
      target: "contact",
      icon: <PhoneRoundedIcon />,
    },
  ];
  return (
    <nav>
      <div>
      </div>
      <div className="navbar-links-container">
        {/* <Link className="nav-button" to="home" smooth={true} duration={400}>Home</Link> */}
        <Link className="nav-button"k to="about" smooth={true} duration={400}>About</Link>
        <Link className="nav-button" to="experience" smooth={true} duration={400}>Experience</Link>
        <Link className="primary-button" to="contact" smooth={true} duration={400} >Contact</Link>
      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <Link to={item.target} smooth={true} duration={400}>
                  <ListItemButton onClick={() => setOpenMenu(false)}>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.text} />
                  </ListItemButton>
                </Link>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;
