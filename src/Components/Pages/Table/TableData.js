import { Chip } from "@mui/material";

export const columns = [
  {
    name: "flight_number",
    label: "No",
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: "launch_date_utc",
    label: "Launched(UTC)",
    options: {
      filter: true,
      sort: false,
    },
  },
  {
    name: "launch_site",
    label: "Location",
    options: {
      filter: true,
      sort: false,
      customBodyRender: (value) => {
        return <div> {value.site_name}</div>;
      },
    },
  },
  {
    name: "mission_name",
    label: "Mission",
    options: {
      filter: true,
      sort: false,
    },
  },
  {
    name: `rocket.second_stage`,
    label: "Orbit",
    options: {
      filter: true,
      sort: false,
      customBodyRender: (value) => {
        return <div>{value?.payloads[0]?.orbit}</div>;
      },
    },
  },
  {
    name: "launch_success",
    label: "Launch Status",
    options: {
      filter: true,
      sort: false,
      customBodyRender: (value) => {
        return (
          <div>
            {value === true ? (
              <Chip
                label="succes"
                sx={{
                  color: "green",
                  padding: "5px 10px",
                  background: "#E6FFE6",
                }}
              />
            ) : (
              <Chip
                label="failed"
                sx={{
                  background: "#FFCCCB",
                  padding: "5px 10px",
                  color: "red",
                }}
              />
            )}
          </div>
        );
      },
    },
  },
  {
    name: "rocket",
    label: "Rocket",
    options: {
      filter: true,
      sort: false,
      customBodyRender: (value) => {
        return <div>{value.rocket_name}</div>;
      },
    },
  },
];

