import React from "react";
import { useParams, Link } from "react-router-dom";
import models from "../../modelData/models";
import { Card, CardContent, Typography, Button } from "@mui/material";

const UserDetail = () => {
  const { userId } = useParams();
  const user = models.userModel(userId);

  return (
    <Card style={{ margin: "16px", padding: "16px" }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          {user.first_name} {user.last_name}
        </Typography>
        <Typography variant="body1">
          <strong>Location:</strong> {user.location}
        </Typography>
        <Typography variant="body1">
          <strong>Description:</strong> {user.description}
        </Typography>
        <Typography variant="body1">
          <strong>Occupation:</strong> {user.occupation}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          style={{ marginTop: "16px" }}
          component={Link}
          to={`/photos/${userId}`}
        >
          View Photos
        </Button>
      </CardContent>
    </Card>
  );
};

export default UserDetail;