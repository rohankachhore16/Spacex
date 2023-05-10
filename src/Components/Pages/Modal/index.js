import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Avatar, Chip, Typography } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  border: "2px solid #000",
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
          sx={{ ...style, width: 400, border: "none", borderRadius: "10px" }}
        >
          <Box sx={{ display: "flex" }}>
            <Box sx={{ display: "flex", padding: "10px" }}>
              <Avatar
                alt="Remy Sharp"
                src={louchDetails?.links?.mission_patch}
                sx={{ width: 56, height: 56 }}
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
              </Box>
            </Box>
            <Box sx={{ padding: "10px" }}>
              <Chip
                label="success"
                color="success"
                size="small"
                sx={{
                  color: "green",
                  padding: "5px 10px",
                  background: "#E6FFE6",

                  mt: 1,
                }}
              />
            </Box>
          </Box>

          <Typography id="parent-modal-description">
            {louchDetails?.details}
          </Typography>

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
