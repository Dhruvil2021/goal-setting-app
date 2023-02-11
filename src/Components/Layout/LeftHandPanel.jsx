import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import LogoutIcon from "@mui/icons-material/Logout";
import DashboardIcon from "@mui/icons-material/Dashboard";
import QuizIcon from "@mui/icons-material/Quiz";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import TrackChangesIcon from "@mui/icons-material/TrackChanges";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import RedeemIcon from "@mui/icons-material/Redeem";
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import "./style.css";
import { Button } from "@mui/material";
import Main from "../Main/Main";

const drawerWidth = 240;

const LeftHandPanel = () => {
  return (
    <div>
      <Box className="root">
        <Box className="toolbar">
          <Box className="right-toolbar">
          <Typography color="grey" noWrap component="span">
            Label > 
          </Typography>
          <Typography sx={{color:"rgb(175, 137, 235)"}} noWrap component="span">
             Label
          </Typography>
          </Box>
          <Box className="left-toolbar">
          <div className="toolbar-button2"><Inventory2Icon  />
            </div>
            <div className="toolbar-button4" variant="outlined">
              $ 327 * 22
            </div>
          <Button className="toolbar-button" variant="outlined" startIcon={<RedeemIcon />}>
              Premium
          </Button>
            <div className="toolbar-button2"><NotificationsActiveIcon  />
            </div>
            <div className="toolbar-button3" variant="outlined">
              DC
            </div>
          </Box>
        </Box>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          variant="permanent"
          anchor="left"
        >
          <Typography className="logo" style={{ color: "black" }} variant="h5">
            SSD
          </Typography>
          <Toolbar />
          <List sx={{ mt: -10 }}>
            {["Dashboard", "Tests", "Results", "Goals", "Settings"].map(
              (text, index) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      {index === 0 ? (
                        <DashboardIcon />
                      ) : index === 1 ? (
                        <QuizIcon />
                      ) : index === 2 ? (
                        <WorkspacePremiumIcon />
                      ) : index === 3 ? (
                        <TrackChangesIcon />
                      ) : (
                        <SettingsSuggestIcon />
                      )}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              )
            )}
            <ListItem sx={{ mt: 58 }} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <LogoutIcon />
                </ListItemIcon>
                <ListItemText primary="Logout" />
              </ListItemButton>
            </ListItem>
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
        >
          <Toolbar />
        </Box>
      </Box>
      <Box
        sx={{
          width: 300,
          height: 300,
          backgroundColor: "primary.dark",
          "&:hover": {
            backgroundColor: "primary.main",
            opacity: [0.9, 0.8, 0.7],
          },
        }}
      >
        <Box className="goal-box">
          <Typography variant="h4">Goals </Typography>
          <br />

          <Typography sx={{color:"grey"}} variant="p">
            In publishing and graphic design, Lorem ipsum is
            <br />
            the visual form of a document or meaningful content.
          </Typography>
        </Box>
      </Box>
      <Main />
    </div>
  );
};

export default LeftHandPanel;
