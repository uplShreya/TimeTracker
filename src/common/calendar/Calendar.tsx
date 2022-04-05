import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import { DesktopDatePicker } from '@mui/lab';
import { Box } from '@mui/material';


function Calendar() {
    const [value, setValue] = React.useState<Date | null>(null);
  return (
    <div>
    <LocalizationProvider dateAdapter={AdapterDateFns}>
    <DesktopDatePicker
      label="Custom input"
      value={value}
      onChange={(newValue) => {
        setValue(newValue);
      }}
      renderInput={({ inputRef, inputProps, InputProps }) => (
        <Box sx={{alignItems: 'center' }}>
          {/* <input ref={inputRef} {...inputProps} />  */}
          {InputProps?.endAdornment}
        </Box>
      )}
    />
  </LocalizationProvider></div>
  )
}

export default Calendar