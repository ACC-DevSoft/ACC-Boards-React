import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import useStyles from "./styles";

const Profile = () => {
  const classes = useStyles();
  return (
    <div className={classes.form}>
      <Card className={classes.formContent}>
        <h2 className={classes.title}>Pepe</h2>
        <hr />
        {/* <div class="form_content--picture">
      <img mat-card-image src="{{ userData.img }}" alt="Profile Picture" />
    </div> */}
        <hr />
        <CardContent className={classes.cardContent}>
          <List role="list">
            <ListItem className={classes.tags} role="listitem">
              Name :
            </ListItem>
            <ListItem className={classes.tags} role="listitem">
              Email :
            </ListItem>
            <ListItem className={classes.tags} role="listitem">
              User name :
            </ListItem>
            <ListItem className={classes.tags} role="listitem">
              Status :
            </ListItem>
          </List>
          <List role="list">
            <ListItem role="listitem">Pepe</ListItem>
            <ListItem role="listitem">pepe@gmail.com</ListItem>
            <ListItem role="listitem">pepe UwU</ListItem>
            <ListItem role="listitem">activo</ListItem>
          </List>
        </CardContent>
      </Card>
    </div>
  );
};

export default Profile;
