import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllLunchAsyncThunk,
  getLaunchedDetailById,
} from "../../../Redux/asyncThunk/lunchAsyncThunk";
import ModalLaunch from "../Modal";
import MUIDataTable from "mui-datatables";
import { columns } from "./TableData";
const Table = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const [louchDetails, setLaouchDetails] = useState([]);
  const { launchData } = useSelector((state) => state?.allLaunch);
  // useEffect(() => {
  //   dispatch(getAllLunchAsyncThunk())
  // }, [dispatch]);
 
  const handleRowClick = (rowData) => {
    dispatch(getLaunchedDetailById({ id: rowData[0] }))
      .unwrap()
      .then((res) => {
        setOpen(true);
        setLaouchDetails(res?.data);
      })
      .catch((err) => {});
  };
 

  const options = {
    filterType: "checkbox",
    selectableRows: false,
    viewColumns: false,
    download: false,
    print: false,
    enableNestedDataAccess: ".",
    filter: false,
    columnfilter: false,
    sort: false,
    search: false,
    onRowClick: handleRowClick,
  };
  return (
    <>
      <ModalLaunch open={open} setOpen={setOpen} louchDetails={louchDetails}  />
      {launchData && (
        <MUIDataTable data={launchData} columns={columns} options={options} />
      )}
   
    </>
  );
};

export default Table;
