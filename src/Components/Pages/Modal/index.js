import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Avatar, Chip, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Youtube from "../../Assets/image/youtube.png";
import Nasa from "../../Assets/image/satellite-tv .png";
import Wordpress from "../../Assets/image/wordpress-.png";
import useMediaQuery from "@mui/material/useMediaQuery";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  // width: 400,
  border: "2px solid #000",
  background: "#fff",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
 
};

const ModalLaunch = ({ open, setOpen, louchDetails, setFilterValue }) => {
  const handleClose = () => {
    setOpen(false);
  };

  const Tblestyle = {
    TableStyle: {
      display: "flex",
      justifyContent: "space-between",
      alignItem: "center",
      padding: "8px",
      width: "100%",
      fontWeight: 300,
      mt: 1,

      borderBottom: "1px solid #e4e4e4",
    },
    dataTable: {
      width: "50%",
    },
  };

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box
          sx={{
            ...style,
           
            maxHeight: "500px",
            overflowX: "hidden",
            border: "none",
            borderRadius: "10px",
          }}
        >
          <Box sx={{ display: "flex" }}>
            <Box sx={{ display: "flex", padding: "10px 0px" }}>
              <Avatar
                alt="Remy Sharp"
                src={louchDetails?.links?.mission_patch}
                sx={{ width: 60, height: 60 }}
              />

              <Box sx={{ padding: "5px 10px" }}>
                <Typography
                  variant="h5"
                  sx={{ fontWeight: 300 }}
                  id="parent-modal-title"
                >
                  {louchDetails?.mission_name}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ fontWeight: 300 }}
                  id="parent-modal-title"
                >
                  {louchDetails?.rocket?.rocket_name}
                </Typography>
                <Stack direction="row" spacing={1} mt={1}>
                  <Link to={louchDetails?.links?.article_link} target="_blank">
                    <img src={Nasa} alt="" width={15} />
                  </Link>
                  <Link to={louchDetails?.links?.wikipedia} target="_blank">
                    <img src={Wordpress} alt="" width={15} />
                  </Link>
                  <Link to={louchDetails?.links?.video_link} target="_blank">
                    <img src={Youtube} alt="" width={15} />
                  </Link>
                </Stack>
              </Box>
            </Box>
            <Box mt={1} sx={{ padding: "10px 0px" }}>
              {louchDetails?.launch_success === null ? (
                <Chip
                  label="Upcoming"
                  sx={{
                    color: "#ac242c",
                    padding: "5px 10px",
                    background: "#ffe4a2",
                  }}
                  size="small"
                />
              ) : louchDetails?.launch_success === true ? (
                <Chip
                  label="Success"
                  sx={{
                    color: "green",
                    padding: "5px 10px",
                    background: "#E6FFE6",
                  }}
                  size="small"
                />
              ) : (
                <Chip
                  label="Failed"
                  sx={{
                    background: "#FFCCCB",
                    padding: "5px 10px",
                    color: "red",
                  }}
                  size="small"
                />
              )}
            </Box>
          </Box>
          {/* <Stack direction="row"> */}
          <Typography id="parent-modal-description">
            {louchDetails?.details}
            <Link
              to={louchDetails?.links?.wikipedia}
              target="_blank"
              style={{ textDecoration: "none", color: "blue" }}
            >
              .Wikipedia
            </Link>
          </Typography>
          {/* </Stack> */}
          <Box sx={Tblestyle.TableStyle}>
            <Typography>Flight Number</Typography>
            <Typography sx={Tblestyle.dataTable}>
              {louchDetails?.flight_number}
            </Typography>
          </Box>
          <Box sx={Tblestyle.TableStyle}>
            <Typography>Mission name</Typography>
            <Typography sx={Tblestyle.dataTable}>
              {louchDetails?.mission_name}
            </Typography>
          </Box>
          <Box sx={Tblestyle.TableStyle}>
            <Typography>Rocket Type</Typography>
            <Typography sx={Tblestyle.dataTable}>
              {louchDetails?.rocket?.rocket_type}
            </Typography>
          </Box>
          <Box sx={Tblestyle.TableStyle}>
            <Typography>Rocket Name</Typography>
            <Typography sx={Tblestyle.dataTable}>
              {louchDetails?.rocket?.rocket_name}
            </Typography>
          </Box>
          <Box sx={Tblestyle.TableStyle}>
            <Typography>Manufasturer </Typography>
            <Typography sx={Tblestyle.dataTable}>
              {louchDetails?.rocket?.second_stage?.payloads[0]?.manufacturer}
            </Typography>
          </Box>
          <Box sx={Tblestyle.TableStyle}>
            <Typography>Nationality </Typography>
            <Typography sx={Tblestyle.dataTable}>
              {louchDetails?.rocket?.second_stage?.payloads[0]?.nationality}
            </Typography>
          </Box>
          <Box sx={Tblestyle.TableStyle}>
            <Typography>launch Date</Typography>
            <Typography sx={Tblestyle.dataTable}>
              {louchDetails?.launch_date_utc}
            </Typography>
          </Box>
          <Box sx={Tblestyle.TableStyle}>
            <Typography>Payload Type</Typography>
            <Typography sx={Tblestyle.dataTable}>
              {louchDetails?.rocket?.second_stage?.payloads[0]?.payload_id}
            </Typography>
          </Box>
          <Box sx={Tblestyle.TableStyle}>
            <Typography>Orbit </Typography>
            <Typography sx={Tblestyle.dataTable}>
              {louchDetails?.rocket?.second_stage?.payloads[0]?.orbit}
            </Typography>
          </Box>
          <Box sx={Tblestyle.TableStyle}>
            <Typography>launch Site</Typography>
            <Typography sx={Tblestyle.dataTable}>
              {louchDetails?.launch_site?.site_name}
            </Typography>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default ModalLaunch;
