import React from "react";
import PropTypes from "prop-types";
import { InputAdornment, TextField } from "@mui/material";
import { ErrorOutlined } from "@mui/icons-material";


function TextFieldInput(props: any) {
  /**
   * clickEnter for enter button
   * @param e
   */
  const clickEnter = (e: any) => {
    if (e.key === "Enter") {
      // Do code here
      e.preventDefault();
      props.clickEnter();
    }
  };
  const onChange = (event: any) => {
    if (props.onChange) {
      let start = event.target.selectionStart;
      let end = event.target.selectionEnd;
      // console.log(start, end, 'start,end');

      let value = event.target.value;
      let newValue = value.replace(/^\s+/g, "");
      event.target.value = newValue;
      event.target.selectionStart = start;
      props.onChange(event);
    }
  };

  return (
    <div className={` flex flex-col ${props.extracls}`}>
      <label>{props.label}</label>
      <TextField
        autoFocus={props.autoFocus}
        onChange={(e) => onChange(e)}
        disabled={props.disabled}
        id={props.id}
        // variant="outlined"
        label={props.inputLabel}
        defaultValue={props.defaultValue}
        className={`textfieldclass ${
          props.textnewclass ? props.textnewclass : ""
        }`}
        type={props.type}
        autoComplete="off"
        name={props.textinputname}
        multiline={props.multiline}
        rows={props.rows}
        fullWidth={props.fullwidthState}
        placeholder={props.placeholder}
        error={props.error}
        value={props.value}
        inputProps={props.inputProps}
        helperText={props.helperText}
        onKeyPress={(e) => clickEnter(e)}
        required={props.required}
        data-cy={props.dataCy}
        InputProps={{
          endAdornment: props.email ? (
            <InputAdornment position="end">
              <ErrorOutlined className="erroricon" />
            </InputAdornment>
          ) : null,
          startAdornment: props.startAdorment && (
            <InputAdornment position="start"></InputAdornment>
          ),
        }}
      />
    </div>
  );
}
TextFieldInput.prototype = {
  inputLabel: PropTypes.string,
  extralabelcls: PropTypes.string,
  textnewclass: PropTypes.string,
  textinputname: PropTypes.string,
  disabled: PropTypes.bool,
  defaultValue: PropTypes.string,
  error: PropTypes.bool,
  fullwidthState: PropTypes.bool,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  inputProps: PropTypes.object,
  required: PropTypes.bool,
  value: PropTypes.string,
  clickEnter: PropTypes.func,
  startAdorment: PropTypes.node,
  helperText: PropTypes.string,
  startIcon: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  dataCy: PropTypes.string,
};

export default TextFieldInput;
