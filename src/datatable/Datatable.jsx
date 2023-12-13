import { Box } from "@mui/material";
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarExport,
} from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";

const Datatable = () => {
  const columns = [
    { field: "_id", headerName: "ID", width: 100 },
    {
      field: "name",
      headerName: "Name",
      width: 150,
      editable: true,
    },
    {
      field: "dateOfBirth",
      headerName: "Date Of Birth",
      width: 150,
      editable: true,
    },
    {
      field: "gender",
      headerName: "Gender",
      width: 100,
      editable: true,
    },
    {
      field: "age",
      headerName: "Age",
      width: 50,
      editable: true,
    },
    {
      field: "placeOfBirth",
      headerName: "Place of birth",
      width: 150,
      editable: true,
    },
    {
      field: "numChildrenUnder21",
      headerName: "N0 Children Under 21",
      width: 150,
      editable: true,
    },
    {
      field: "numChildrenAbove21",
      headerName: "N0 Children Above 21",
      width: 150,
      editable: true,
    },
    {
      field: "createdAt",
      headerName: "Registered date",
      width: 200,
      editable: true,
    },
  ];

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          "https://population-census-backend.onrender.com/user"
        );
        console.log(response.data.data);
        setUsers(response.data.data);
        setLoading(false);
        console.log(users);
      } catch (error) {
        console.error("Error fetching Books:", error);
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  function CustomToolbar() {
    return (
      <GridToolbarContainer>
        <GridToolbarExport />
      </GridToolbarContainer>
    );
  }
  const getRowId = (user) => user._id;

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
        <div className="bg-white shadow-md rounded-md p-[20px]">
          <h1>Registered User</h1>

          <Box sx={{ height: 400, width: "100%" }}>
            <DataGrid
              rows={users}
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: {
                    pageSize: 5,
                  },
                },
              }}
              pageSizeOptions={[5, 10, 25]}
              getRowId={getRowId}
              slots={{ toolbar: CustomToolbar }}
            />
          </Box>
        </div>
      )}
    </div>
  );
};

export default Datatable;
