import { Stack, TextField } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import styles from '../ui.module.css'
const CommonDate = (props: any) => {
    return (
        <div>
            {props.Date && <div>
                <Stack component="form" className={styles.date} noValidate>
                    <TextField
                        id="date"
                        label="This Week"
                        type="date"
                        defaultValue="2022-03-29"
                        sx={{ width: 220 }}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </Stack>
            </div>}
            {props.date2 && <div >
                <input type='week' placeholder='' className={styles.date2}/>
                {/* <Image src='/image/calendar.svg' width={20} height={30} /> */}
            </div>}
        </div>
    )
}

export default CommonDate