import React from "react";
import clsx from "clsx";
import { makeStyles } from "@mui/styles";
import { useRouter } from "next/router";
import {
  AddToQueue,
  ContactPageOutlined,
  FavoriteOutlined,
  Home,
  HomeOutlined,
  Movie,
  NewspaperOutlined,
  People,
  PersonOutlined,
  Search,
  Tv,
  WebOutlined,
  Whatshot,
} from "@mui/icons-material";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
  button: {
    width: 30,
    height: 30,
  },
  text: {
    color: "#303030",
    fontWeight: "bold",
  },
  icon: {
    color: "#ff4627",
  },
  paper: {
    background: "#eee",
  },
});

export default function SideDrawer({ children, user, setAlert }) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false,
  });

  const history = useRouter();

  const itemsList = [
    {
      text: "HOME",
      icon: <HomeOutlined />,
      onClick: () => history.push("/"),
    },
    {
      text: "BLOGS",
      icon: <WebOutlined />,
      onClick: () => history.push("/blogs"),
    },
    {
      text: "NEWS",
      icon: <NewspaperOutlined />,
      onClick: () => history.push("/"),
    },
    {
      text: "ABOUT",
      icon: <PersonOutlined />,
      onClick: () => history.push("/"),
    },
    {
      text: "CONTACT",
      icon: <ContactPageOutlined />,
      onClick: () => history.push("/"),
    },
  ];

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {itemsList.map((item, index) => {
          const { text, icon, onClick } = item;
          return (
            <ListItem button key={index} onClick={onClick}>
              {icon && (
                <ListItemIcon className={classes.icon}>{icon}</ListItemIcon>
              )}
              <ListItemText primary={text} className={classes.text} />
            </ListItem>
          );
        })}
      </List>
    </div>
  );

  return (
    <div>
      <React.Fragment key={"right"}>
        <div onClick={toggleDrawer("right", true)}>{children}</div>
        <Drawer
          classes={{ paper: classes.paper }}
          anchor={"right"}
          open={state["right"]}
          onClose={toggleDrawer("right", false)}
        >
          {list("right")}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
