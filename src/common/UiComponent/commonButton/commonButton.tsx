// import { Button } from '@material-ui/core'
import React from 'react'
import { Text } from '../../styles/common'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import styles from '../ui.module.css'
import { Button } from '@mui/material';
const CommonButton = (props: any) => {
  return (
    <div>
      {props.fillbutton && <div>
        <Button variant="contained">
          <Text>
            {props.name}
          </Text>
        </Button>
      </div>}
      {props.button && <div>
        <Button variant="outlined" className={styles.button}>
          {props.arrowForward && <ArrowForwardIosIcon />}
          {props.ArrowBackward && <ArrowBackIosIcon />}
        </Button>
      </div>}
      {props.button2 && <div>
        <button className={styles.button} >
          {props.arrowForward && <ArrowForwardIosIcon />}
          {props.ArrowBackward && <ArrowBackIosIcon />}
          </button>
      </div>}
    </div>
  )
}

export default CommonButton