import './App.css';

import React from "react";
import { Grid } from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TopBar from "./components/TopBar";
import UserList from "./components/UserList";
import UserPhotos from "./components/UserPhotos";
import UserDetail from "./components/UserDetail";

const App = () => {
  return (
    <Router>
      <div>
        <TopBar />
        <Grid container spacing={2} style={{ marginTop: "16px" }}>
          <Grid item xs={12} sm={3}>
            <UserList />
          </Grid>
          <Grid item xs={12} sm={9}>
            <Routes>
              <Route path="/users/:userId" element={<UserDetail />} />
              <Route path="/photos/:userId" element={<UserPhotos />} />
              <Route path="/users" element={<UserList />} />
            </Routes>
          </Grid>
        </Grid>
      </div>
    </Router>
  );
};

export default App;