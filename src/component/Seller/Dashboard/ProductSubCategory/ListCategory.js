import React, { useState } from "react";
import { Typography, Button} from "@mui/material";
import { CommonDataGrid } from "../../../common/table";



export const ListSubCategory = () => {
  const [rows, setRows] = useState([]);
  const [editableRow, setEditableRow] = useState(null);
  const [updatedFields, setUpdatedFields] = useState({});



  const handleEdit = (row) => {
    setEditableRow(row.id); // Set the ID of the row being edited
    setUpdatedFields({ name: row.name, email: row.email, role: row.role });
  };



  const handleFieldChange = (field, value) => {
    setUpdatedFields((prev) => ({ ...prev, [field]: value }));
  };


  const columns = [
    {
      field: "subCategoryName",
      headerName: "subCategoryName",
      width: 150,
      editable: true,
    },
    {
        field: "subCategoryName",
        headerName: "subCategoryName",
        width: 150,
        editable: true,
      },
    
    {
      field: "actions",
      headerName: "Actions",
      width: 300,
      renderCell: (params) => (
        <>
          {editableRow === params.row.id ? (
            <Button
              variant="outlined"
              color="primary"
              size="small"
              style={{ marginRight: 8 }}
            
            >
              Update
            </Button>
          ) : (
            <Button
              variant="outlined"
              color="primary"
              size="small"
              style={{ marginRight: 8 }}
              onClick={() => handleEdit(params.row)}
            >
              Edit
            </Button>
          )}
          <Button
            variant="outlined"
            color="secondary"
            size="small"
           
          >
            Delete
          </Button>
        </>
      ),
    },
  ];

  return (
    <>
      <Typography
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 2,
          fontWeight: "500",
          fontSize: "23px",
          marginTop: "80px",
        }}
      >
    Subcategory List
      </Typography>

      <CommonDataGrid
        rows={rows}
        columns={columns}
        editableRow={editableRow}
        updatedFields={updatedFields}
        onEdit={handleEdit}
        onUpdate={""}
        onFieldChange={handleFieldChange}
        onDelete={""}
      />
    </>
  );
};
