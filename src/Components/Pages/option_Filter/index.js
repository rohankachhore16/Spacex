import React, { useEffect, useState } from "react";
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { CalendarTodayOutlined, FilterAltOutlined } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import {
  getAllLunchAsyncThunk,
  getLatestLauchThunk,
  getNextLaouchThunk,
  getPastAsyncThunk,
  getUpcomingAsyncThunk,
} from "../../../Redux/asyncThunk/lunchAsyncThunk";
import { useNavigate, useSearchParams } from "react-router-dom";
const LanuchOption = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let [searchParams] = useSearchParams();
  const [filterValue, setFilterValue] = useState(searchParams.get("filter"));

  const handleChange = (event) => {
    navigate(
      {
        pathname: "/",
        search: `?filter=${event.target.value}`,
      },
      { state: { filter: event.target.value } }
    );
    setFilterValue(event.target.value);
  };

  useEffect(() => {
    if (filterValue === "All") {
      dispatch(getAllLunchAsyncThunk());
    } else if (filterValue === "Past") {
      dispatch(getPastAsyncThunk());
    } else if (filterValue === "Upcomming") {
      dispatch(getUpcomingAsyncThunk());
    } else if (filterValue === "Next") {
      dispatch(getNextLaouchThunk());
    } else if (filterValue === "Latest") {
      dispatch(getLatestLauchThunk());
    } else if (filterValue === "Success") {
      dispatch(getAllLunchAsyncThunk({ launch_success: true }));
    } else if (filterValue === "Failed") {
      dispatch(getAllLunchAsyncThunk({ launch_success: false }));
    }
  }, [filterValue,dispatch]);

  return (
    <>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box>
          <CalendarTodayOutlined sx={{ mt: 1 }} />
          <FormControl
            sx={{ minWidth: 150, border: "none", boxShadow: "none" }}
            size="small"
          >
            <InputLabel id="demo-select-small-label" sx={{ border: "none" }}>
              Past 6 Month{" "}
            </InputLabel>
            <Select
              sx={{
                boxShadow: "none",
                ".MuiOutlinedInput-notchedOutline": { border: 0 },
                "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                  {
                    border: 0,
                  },
                "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                  {
                    border: 0,
                  },
              }}
              labelId="demo-select-small-label"
              id="demo-select-small"
              label="Age"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box>
          <FilterAltOutlined sx={{ mt: 1 }} />

          <FormControl
            sx={{ minWidth: 150, border: "none", boxShadow: "none" }}
            size="small"
          >
            <InputLabel id="demo-select-small-label" sx={{ border: "none" }}>
              All Lunches{" "}
            </InputLabel>
            <Select
              value={filterValue}
              onChange={(e) => handleChange(e)}
              sx={{
                boxShadow: "none",
                ".MuiOutlinedInput-notchedOutline": { border: 0 },
                "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                  {
                    border: 0,
                  },
                "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                  {
                    border: 0,
                  },
              }}
              labelId="demo-select-small-label"
              id="demo-select-small"
            >
              <MenuItem value="All">All Launches</MenuItem>
              <MenuItem value="Upcomming">Upcoming Launches</MenuItem>
              <MenuItem value="Past">Past Launches</MenuItem>
              <MenuItem value="Success">Successfull Launches</MenuItem>
              <MenuItem value="Failed">Failed Launches</MenuItem>
              <MenuItem value="Next">Next Launches</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>
    </>
  );
};

export default LanuchOption;
