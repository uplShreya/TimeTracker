import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextFieldInput from "../../formFields/TextFieldInput";
import PropTypes from "prop-types";
import Image from "next/image";
import style from "../dialogbox/DialogBox.module.css"
import { Select } from "@mui/material";
function Dialogbox(props: any) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <p onClick={handleClickOpen}>
        <div className={style.dialogbox}>
      <Image src="/image/plus-blue.svg" alt="icon" height={16} width={16}
      className={style.plusimg}/>
        <p className={style.textcolor}>{props.name}
        </p>
        </div>
      </p>
      <Select open={open} onClose={handleClose}>
        <Select>
          <TextFieldInput
            // label="text"
            type={"search"}
            id=""
            textinputname=""
            placeholder="Find project or Search project"
            // textnewclass={``}
          />
        </Select>
        <Select>
          {/* <DialogContentText>
          </DialogContentText> */}
          <ul>
            <li>project</li>
          </ul>
        </Select>
        {/* <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions> */}
      </Select>
    </div>
  );
}
Dialogbox.prototype = {
  name: PropTypes.string,
//   textclass: PropTypes.string,
  icon : PropTypes.object,
};

export default Dialogbox;
