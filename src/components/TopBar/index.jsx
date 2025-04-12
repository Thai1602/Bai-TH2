import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { useLocation, useParams } from "react-router-dom";
import models from "../../modelData/models";

const TopBar = () => {
  const location = useLocation();
  const { userId } = useParams();
  let context = "Photo Sharing App";

  // Xác định ngữ cảnh dựa trên URL
  if (userId) {
    console.log("User ID:", userId); // Kiểm tra userId
    const user = models.userModel(userId);
    console.log("User Data:", user); // Kiểm tra dữ liệu người dùng
    console.log("Current Pathname:", location.pathname); // Kiểm tra đường dẫn hiện tại

    if (user) {
      if (location.pathname.includes(`/photos/`)) {
        context = `Photos of ${user.first_name} ${user.last_name}`;
      } else if (location.pathname.includes(`/users/`)) {
        context = `${user.first_name} ${user.last_name}`;
      }
    } else {
      context = "User not found"; // Trường hợp không tìm thấy người dùng
    }
  }

  return (
    <AppBar position="static">
      <Toolbar>
        {/* Hiển thị tên của bạn ở bên trái */}
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Nguyễn Văn Thái
        </Typography>
        {/* Hiển thị ngữ cảnh ứng dụng ở bên phải */}
        <Typography variant="body1">
          {context}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;