import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import models from "../../modelData/models";
import "./styles.css";

function TopBar() {
  const location = useLocation();
  const pathParts = location.pathname.split("/");

  let userId = null;
  let contextInfo = "";

  if (pathParts.length >= 3) {
    if (pathParts[1] === "users" || pathParts[1] === "photos") {
      userId = pathParts[2];

      if (userId) {
        const user = models.userModel(userId);
        if (user) {
          const userName = `${user.first_name} ${user.last_name || ""}`;

          if (pathParts[1] === "photos") {
            contextInfo = `Photos of ${userName}`;
          } else if (pathParts[1] === "users") {
            contextInfo = userName;
          }
        }
      }
    }
  }

  return (
    <AppBar position="static" >
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Nguyễn Văn Thái
        </Typography>
        {contextInfo && <Typography variant="body1">{contextInfo}</Typography>}
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;
