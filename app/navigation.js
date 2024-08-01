'use client'
import * as React from 'react';
import {
  Toolbar, AppBar, Box, IconButton, Typography, Drawer,
  List, ListItem, ListItemText, ListItemButton,
  Breadcrumbs,Link,TextField
} from '@mui/material/';
import MenuIcon from '@mui/icons-material/Menu';
import { useRouter } from 'next/navigation';

const toolsData = [
  {
    title: "Home",
    description:"Home",
    path : "/"

  },
  {
    title: "Base 64 Tools",
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

function getPathByTitle(title) {
  // Find the tool object with the given title
  const tool = toolsData.find(tool => tool.title === title);

  // Return the path if found, otherwise return null
  return tool ? tool.path : "/";
}


function DrawerList({ props }) {
  const { toggleDrawer } = props
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

  const router = useRouter();
  const [open, setOpen] = React.useState(false);

  const path = getPathByTitle(title)
  const [text,setText] = React.useState(path.substring(1));

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const updateChange = (e) => {
    if (e.keyCode === 13){
      router.push("/"+ text)
    }
  }

  const handlechange = (e) => {
    setText(text => e.target.value)
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" elevation='0'>
        <Toolbar sx={{backgroundColor: "#121212"}}>
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
            <DrawerList props={{ toggleDrawer }} />
          </Drawer>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            {title}
          </Typography>
          <Breadcrumbs aria-label='bread crumbs'>
            <Link underline="hover" color="inherit" href="/">
              Home
            </Link>
            <TextField id="filled-basic" variant="standard" value={text} onKeyDown={updateChange} onChange={handlechange}/>
          </Breadcrumbs>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

module.exports = { toolsData, SearchAppBar }