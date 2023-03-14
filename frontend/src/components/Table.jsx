import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ReportIcon from "@mui/icons-material/Report";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import styled from "styled-components";

export default function CollapsibleTable(props) {
  const [alldata, setalldata] = React.useState([]);
  const [tempdata, settempdata] = React.useState({});
  function createData(
    customername,
    phonenumber,
    amount,
    pid,
    sellerstatus,
    alldata
  ) {
    return {
      customername,
      phonenumber,
      amount,
      pid,
      sellerstatus,
      alldata,
    };
  }

  React.useEffect(() => {
    console.log(props.propsdata);
    const arraylist = [];
    props.propsdata.addresslist.map((address) => {
      const tempobj = props.propsdata.productlist.filter((data) => {
        return data.id === address.prodid;
      });
      const userobj = props.propsdata.userlist.filter((data) => {
        return data.id === tempobj[0].userid;
      });
      arraylist.push([address, tempobj[0], userobj[0]]);
      setalldata(arraylist);
      console.log(alldata);
    });
  }, []);
  function Row(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);
    return row.map((data) => (
      <React.Fragment>
        <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
          <TableCell>
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpen(!open)}
            >
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>
          <TableCell component="th" scope="row">
            {data.customername}
          </TableCell>
          <TableCell align="right">{data.phonenumber}</TableCell>
          <TableCell align="right">{data.amount}</TableCell>
          <TableCell align="right">
            {data.pid ? (
              <CheckCircleIcon sx={{ color: "green" }} />
            ) : (
              <ReportIcon sx={{ color: "red" }} />
            )}
          </TableCell>
          <TableCell
            align="right"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {data.sellerstatus ? (
              <CheckCircleIcon sx={{ color: "green" }} />
            ) : (
              <ReportIcon sx={{ color: "red" }} />
            )}
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box sx={{ margin: 1 }}>
                <Innertable>
                  <div className="leftcontent">
                    <h1>Address</h1>
                    <p>
                      <b>buildingaddress : </b>
                      {data.alldata[0].buildingaddress}
                    </p>
                    <p>
                      <b>address : </b>
                      {data.alldata[0].address}
                    </p>
                    <p>
                      <b>city : </b>
                      {data.alldata[0].city}
                    </p>
                    <p>
                      <b>state : </b>
                      {data.alldata[0].state}
                    </p>
                    <p>
                      <b>pincode : </b>
                      {data.alldata[0].pincode}
                    </p>
                    <p>
                      <b>landmark : </b>
                      {data.alldata[0].landmark}
                    </p>
                  </div>
                  <div className="rightcontent">
                    <h1>Customer Details</h1>
                    <p>
                      <b>username : </b>
                      {data.alldata[2].username}
                    </p>
                    <p>
                      <b>email : </b>
                      {data.alldata[2].email}
                    </p>
                    <p>
                      <b>phonenumber : </b>
                      {data.alldata[2].phonenumber}
                    </p>
                    <p>
                      <b>registertime : </b>
                      {data.alldata[2].registertime}
                    </p>
                    <p>
                      <b>unique_id : </b>
                      {data.alldata[2].unique_id}
                    </p>
                    <p>
                      <b>isseller : </b>
                      {data.alldata[2].isseller}
                    </p>
                  </div>
                </Innertable>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </React.Fragment>
    ));
  }

  Row.propTypes = {
    row: PropTypes.shape({
      customername: PropTypes.string.isRequired,
      pid: PropTypes.string.isRequired,
      phonenumber: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      sellerstatus: PropTypes.string.isRequired,
    }).isRequired,
  };
  const rows = [
    alldata.map((data) =>
      createData(
        data[2].username,
        data[2].phonenumber,
        data[1].productprice,
        data[1].paymentcompletion,
        data[1].sellerstatus,
        data
      )
    ),
  ];
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Customer Name</TableCell>
            <TableCell align="right">Phone Number</TableCell>
            <TableCell align="right">amount</TableCell>
            <TableCell align="right">Payment status</TableCell>
            <TableCell align="right">Seller status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.pid} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

const Innertable = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  .leftcontent {
    width: 50%;
  }
  .rightcontent {
    width: 50%;
  }
`;
