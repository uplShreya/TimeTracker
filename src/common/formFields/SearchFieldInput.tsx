
import React from "react";
// import "./FormField.css";
import PropTypes from 'prop-types';
import Image from "next/image";
import { ArrowDropDown } from "@mui/icons-material";
import style from '../../common/layouts/header/header.module.css'
import SearchImage from '../../../public/Image/search.svg'

function SearchFieldInput(props: any): JSX.Element {
    const [value, setValue] = React.useState('')
    const onKeyPress = (ev: any) => {

        if (props.onKeyPress) {
            if (ev.key === 'Enter') {
                ev.preventDefault();
                props.onKeyPress();
            }
        }
    }

    const onChange = (e: any) => {
        setValue(e.target.value)
        if (props.onChange) {
            props.onChange(e)
        }
    }

    return (

        <div className={`${props.searchFieldCls}`}>
            <div>
                <input 
                 type='Search' 
                 placeholder='Search'
                  />
            </div>
        </div>
    );

}
SearchFieldInput.prototype = {
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    onChange: PropTypes.func,
    onKeyPress: PropTypes.func,
    extracls: PropTypes.string,
    onBlur: PropTypes.func
}


export default SearchFieldInput;