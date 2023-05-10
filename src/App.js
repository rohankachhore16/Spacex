import "./App.css";
import Appbar from "./Components/Pages/Header/indes";
import { Box, Container } from "@mui/material";
import LanuchOption from "./Components/Pages/option_Filter";
import Table from "./Components/Pages/Table";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Axios from "axios";
function App() {
  const baseUrl = process.env.REACT_APP_BASE_URL;
  Axios.defaults.baseURL = baseUrl || "https://api.spacexdata.com/v3";

  return (
    <BrowserRouter>
      <Appbar />
      <Container maxWidth="lg" sx={{ mt: 5 }}>
        <LanuchOption />
        <Box sx={{ mt: 5 }}>
          <Routes>
            <Route path="/" element={<Table />}></Route>
          </Routes>
        </Box>
      </Container>
    </BrowserRouter>
  );
}

export default App;
