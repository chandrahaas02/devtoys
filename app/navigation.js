'use client'
import * as React from 'react';
import {
  Toolbar, AppBar, Box, IconButton, Typography, Drawer,
  List, ListItem, ListItemText, ListItemButton,
  Button
} from '@mui/material/';
import MenuIcon from '@mui/icons-material/Menu';
import { useRouter } from 'next/navigation';

const toolsData = [
  {
    title: "Base 64",
    description: "Base64 encoder decoder",
    path: "/base64"
  },
  {
    title: "JSON viewer",
    description: "Prettify JSON",
    path: "/json"
  },
  {
    title: "Cron Job",
    description: "Explains Cron Schedule",
    path: "/cron"
  }
]


function DrawerList({props}) {
  const {toggleDrawer} = props
  const router = useRouter();
  return (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {toolsData.map((tool, index) => (
          <ListItem key={tool.title} disablePadding>
            <ListItemButton onClick={() => router.push(tool.path)}>
              <ListItemText primary={tool.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )
}



const SearchAppBar = ({ title }) => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Drawer open={open} onClose={toggleDrawer(false)}>
            <DrawerList props={{toggleDrawer}} />
          </Drawer>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

module.exports = { toolsData, SearchAppBar }