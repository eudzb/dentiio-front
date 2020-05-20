import React from 'react'
import HomeIcon from '@material-ui/icons/Home';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import IconButton from "@material-ui/core/IconButton";
import { useHistory } from 'react-router-dom';
import NotificationsOutlinedIcon from "@material-ui/core/SvgIcon/SvgIcon";


const home = (props) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    let history = useHistory();

    if (props.target === "home"){
        return (
            <IconButton color="inherit" aria-label="menu">
                <HomeIcon fontSize={"large"} color={props.color} style={{fill: props.color}}/>
            </IconButton>
        )
    }
    return (
        <IconButton onClick={() => history.push("/cases")} color="inherit" aria-label="menu">
            <HomeOutlinedIcon fontSize={"large"} color={props.color} style={{fill: props.color}} />
        </IconButton>
    )
}

export default home