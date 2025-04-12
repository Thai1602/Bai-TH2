import React from "react";
import { useParams, Link } from "react-router-dom";
import models from "../../modelData/models";
import { Card, CardMedia, CardContent, Typography, List, ListItem, ListItemText, Paper } from "@mui/material";

const UserPhotos = () => {
  const { userId } = useParams();
  const photos = models.photoOfUserModel(userId);
  const user = models.userModel(userId); // Lấy thông tin người dùng

  // Kiểm tra nếu không có ảnh hoặc dữ liệu không hợp lệ
  if (!photos || photos.length === 0) {
    return (
      <Paper style={{ padding: "16px", margin: "16px" }}>
        <Typography variant="h5" gutterBottom>
          No photos available for this user.
        </Typography>
      </Paper>
    );
  }

  return (
    <Paper style={{ padding: "16px", margin: "16px" }}>
      <Typography variant="h5" gutterBottom>
        Photos of {user ? `${user.first_name} ${user.last_name}` : `User ${userId}`}
      </Typography>
      {photos.map((photo) => (
        <Card key={photo._id} style={{ marginBottom: "16px" }}>
          <CardMedia
            component="img"
            image={`/images/${photo.file_name}`}
            alt={`Photo uploaded on ${photo.date_time}`}
            style={{
              maxHeight: "300px",
              maxWidth: "100%",
              objectFit: "contain",
              margin: "0 auto",
            }}
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary">
              <strong>Date:</strong> {photo.date_time}
            </Typography>
            <Typography variant="h6" gutterBottom>
              Comments:
            </Typography>
            <List>
              {photo.comments && photo.comments.length > 0 ? (
                photo.comments.map((comment) => (
                  <ListItem key={comment._id} alignItems="flex-start">
                    <ListItemText
                      primary={
                        <Typography variant="body1">
                          <strong>
                            <Link to={`/users/${comment.user._id}`} style={{ textDecoration: "none", color: "blue" }}>
                              {comment.user.first_name} {comment.user.last_name}
                            </Link>
                          </strong>: {comment.comment}
                        </Typography>
                      }
                      secondary={
                        <Typography variant="body2" color="textSecondary">
                          <strong>Date:</strong> {comment.date_time}
                        </Typography>
                      }
                    />
                  </ListItem>
                ))
              ) : (
                <Typography variant="body2" color="textSecondary">
                  No comments available.
                </Typography>
              )}
            </List>
          </CardContent>
        </Card>
      ))}
    </Paper>
  );
};

export default UserPhotos;