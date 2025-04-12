import React from "react";
import { Link } from "react-router-dom";
import models from "../../modelData/models";
import { List, ListItem, ListItemText, Typography, Paper } from "@mui/material";

const UserList = () => {
  const users = models.userListModel();

  return (
    <Paper style={{ padding: "16px", margin: "16px" }}>
      <Typography variant="h5" gutterBottom>
        User List
      </Typography>
      <List>
        {users.map((user) => (
          <ListItem key={user._id} style={{ padding: "8px 0" }}>
            <ListItemText
              primary={
                <Link to={`/users/${user._id}`} style={{ textDecoration: "none", color: "blue" }}>
                  {user.first_name} {user.last_name}
                </Link>
              }
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default UserList;