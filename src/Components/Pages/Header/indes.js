import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import Logo from "../../Assets/image/logo.png";
export default function Appbar() {
  return (
    <>
      <AppBar
        position="absolute"
        color="default"
        sx={{
          position: "relative",
          background: "#fff",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box>
            <img src={Logo} alt="" width={300} />{" "}
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}
