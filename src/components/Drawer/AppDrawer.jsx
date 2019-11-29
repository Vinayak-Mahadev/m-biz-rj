import React from 'react';
import { Link } from "react-router-dom";
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MenuIcon from '@material-ui/icons/Menu';
import HomeSharp from '@material-ui/icons/HomeSharp';
import Divider from '@material-ui/core/Divider';
import DashboardStyle from '../style/DashboardStyle';



export default function AppDrawer() {
  const classes = DashboardStyle();
  const [open, setOpen] = React.useState(false);

  const handleDrawerClose = () => {
    setOpen(!open);
  };

  return (

    <Drawer
      variant="permanent"
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: open,
        [classes.drawerClose]: !open,
      })}
      classes={{
        paper: clsx({
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        }),
      }}
      open={open}
    >

      <div className={classes.toolbar}>
        <IconButton onClick={handleDrawerClose}>
          <MenuIcon />
        </IconButton>
      </div>

      <Divider />

      <List>

        <Link to="/home">
          <ListItem button key='Home'>
            <ListItemIcon>{<HomeSharp />}</ListItemIcon>
            <ListItemText primary='Home' />
          </ListItem>
        </Link>

        <Link to="/topic">
          <ListItem button key='Interface'>
            <ListItemIcon>{<InboxIcon />}</ListItemIcon>
            <ListItemText primary='Interface' />
          </ListItem>
        </Link>

      </List>

    </Drawer>



  );
}

