import axios from "axios";
import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import { Table } from "semantic-ui-react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
// import Modal from "../Admin/Modal";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
import UpdataData from "./UpdataData";
import CreateData from './CreateData'

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 20,
  p: 4,
};

export default function Read() {
  const [api, setAPI] = useState([]);

  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);

  //create
  const [openCreateModel, setCreateModel] = useState(false);

  const handleCreateModel = () => setCreateModel(true);
  const handleCloseCreateModel = () => setCreateModel(false);

  useEffect(() => {
    axios
      .get("https://65a75af094c2c5762da6894a.mockapi.io/api/fakeData")
      .then((res) => {
        setAPI(res.data);
        console.log("respone", res);
      })
      .catch((e) => {
        console("error", e);
      });
  }, []);
  const setData = (data) => {
    let { id, firstName, lastName, checkbox } = data;
    localStorage.setItem("ID", id);
    localStorage.setItem("First Name", firstName);
    localStorage.setItem("Last Name", lastName);
    localStorage.setItem("Checkbox Value", checkbox);
    setOpen(true);
  };
  const OnDelete = (id) => {
    axios
      .delete(`https://65a75af094c2c5762da6894a.mockapi.io/api/fakeData/${id}`)
      .then(() => {
        getData();
      });
  };

  const getData = () => {
    axios
      .get("https://65a75af094c2c5762da6894a.mockapi.io/api/fakeData")
      .then((getData) => {
        setAPI(getData.data);
      });
  };

  const updateTableData = (newData) => {
    setAPI([...api, newData]);
  };
//updat
const updateTableUpdate = (updatedData) => {
  setAPI(api.map(data => (data.id === updatedData.id ? updatedData : data)));
  
};


  return (
    <>
      <div className="dataTable">
        <p> Data Table </p>
        <div>
          <button
            type="button"
            className="addbtn"
            onClick={() => handleCreateModel()}
          >
            Add Records
          </button>
        </div>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={openCreateModel}
          onClose={handleCloseCreateModel}
          closeAfterTransition
          slots={{ backdrop: Backdrop }}
          slotProps={{
            backdrop: {
              timeout: 500,
            },
          }}
        >
          <Fade in={openCreateModel}>
            <Box sx={style}>
             <CreateData updateTableData={updateTableData} handleCloseCreateModel={handleCloseCreateModel} />
            </Box>
          </Fade>
        </Modal>
      </div>

      <div className="dtaContainer">
        <Table singleLine>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>First Name</Table.HeaderCell>
              <Table.HeaderCell>Last Name</Table.HeaderCell>
              <Table.HeaderCell>Checked</Table.HeaderCell>
              <Table.HeaderCell>Update</Table.HeaderCell>
              <Table.HeaderCell>Delete</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {api.map((data, index) => {
              return (
                <Table.Row key={index}>
                  <Table.Cell>{data.firstName}</Table.Cell>
                  <Table.Cell>{data.lastName}</Table.Cell>
                  <Table.Cell>
                    {data.checkbox ? "Checked" : "Unchecked"}
                  </Table.Cell>

                  <Table.Cell>
                    <EditIcon
                      onClick={() => setData(data)}
                      sx={{ color: " #151529" }}
                    />
                  </Table.Cell>
                  <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    open={open}
                    onClose={handleClose}
                    closeAfterTransition
                    slots={{ backdrop: Backdrop }}
                    slotProps={{
                      backdrop: {
                        timeout: 500,
                      },
                    }}
                  >
                    <Fade in={open}>
                      <Box sx={style}>
                        <UpdataData updateTableUpdate={updateTableUpdate} handleClose={handleClose} />
                      </Box>
                    </Fade>
                  </Modal>

                  <Table.Cell>
                    <DeleteIcon
                      onClick={() => OnDelete(data.id)}
                      sx={{ color: " #151529" }}
                    />
                  </Table.Cell>
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table>
      </div>
    </>
  );
}
