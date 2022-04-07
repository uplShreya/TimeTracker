import { FormControl, FormControlLabel, FormGroup, FormLabel, Switch } from '@mui/material'
import React from 'react'

const SwitchLabelPlacement = (props: any) => {
    return (
        <div>
            <FormControl component="fieldset">
                <FormGroup aria-label="position" row>
                    {props.Switch_top &&
                        <FormControlLabel
                            value={props.value}
                            control={<Switch color="primary" />}
                            label={props.label}
                            labelPlacement="top"
                            disabled={props.disabled}
                        />}
                    {props.Switch_start &&
                        <FormControlLabel
                            value={props.value}
                            control={<Switch color="primary" />}
                            label={props.label}
                            labelPlacement="start"
                            disabled={props.disabled}
                        />}
                    {props.Switch_bottom &&
                        <FormControlLabel
                            value={props.value}
                            control={<Switch color="primary" />}
                            label={props.label}
                            labelPlacement="bottom"
                            disabled={props.disabled}
                        />}
                    {props.Switch_end &&
                        <FormControlLabel
                            value={props.value}
                            control={<Switch color="success" />}
                            label={props.label}
                            labelPlacement="end"
                            disabled={props.disabled}
                        />}
                </FormGroup>
            </FormControl>
        </div>
    )
}

export default SwitchLabelPlacement