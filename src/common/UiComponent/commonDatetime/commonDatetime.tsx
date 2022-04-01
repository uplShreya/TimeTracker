import { Box, Stack, TextField } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { WeeklyCalendar } from 'react-week-picker'
import styles from '../ui.module.css'
import 'react-week-picker/src/lib/calendar.css'
import { DateRange, DateRangePicker, LocalizationProvider } from '@mui/lab'
// import { DateRangePicker, DateRangePickerComponent } from '@syncfusion/ej2-react-calendars'
// import { DateRange } from '@mui/icons-material'
// import TextField from '@mui/material/TextField';
// import DateRangePicker, { DateRange } from '@mui/lab/DateRangePicker';
// import AdapterDateFns from '@mui/lab/AdapterDateFns';
// import LocalizationProvider from '@mui/lab/LocalizationProvider';
// import Box from '@mui/material/Box';
// import { AnyObject } from 'chart.js/types/basic'
import AdapterDateFns from '@mui/lab/AdapterDateFns';
const CommonDate = (props: any) => {
    const [value, setValue] = React.useState<DateRange<Date>>([null, null]);

    return (
        <div>
            {props.Date && <div>
                <Stack component="form" className={styles.date} noValidate>
                    <TextField
                        id="date"
                        // label="This Week"
                        type="date"
                        // defaultValue="2022-03-29"
                        sx={{ width: 220 }}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </Stack>
            </div>}
            {props.date2 && <div className={styles.date2}>
                <div className={styles.dateinput_fild}>
                <Image src='/image/calendar.svg' width={20} height={30} className={styles.date2I_mage} />
                <LocalizationProvider dateAdapter={AdapterDateFns} className={styles.data_fild}>
                    <DateRangePicker
                        label="Advanced keyboard"
                        value={value}
                        onChange={(newValue) => setValue(newValue)}
                        renderInput={(startProps, endProps) => (
                            <React.Fragment>
                                <input
                                    className={styles.dateinput}
                                    ref={startProps.inputRef as React.Ref<HTMLInputElement>}
                                    {...startProps.inputProps}
                                />
                                <Box sx={{ mx: 1 }}> - </Box>
                                <input
                                    className={styles.dateinput}
                                    ref={endProps.inputRef as React.Ref<HTMLInputElement>}
                                    {...endProps.inputProps}
                                />
                            </React.Fragment>
                        )}
                    />
                </LocalizationProvider>
                </div>
            </div>}
        </div>
    )
}

export default CommonDate