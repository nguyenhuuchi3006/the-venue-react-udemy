import React from 'react';
import Button from '@material-ui/core/Button';
import TicketIcon from '../../resouces/images/icons/ticket.png'

const MyButton = (props) => {
    return (
        <Button 
            variant="contained" 
            href = {props.link} 
            size="small" 
            style = {{
                background: props.bck, 
                color: props.color,
            }}
        >
            <img src={TicketIcon} alt="button" className="iconImage"/>
            {props.text}
        </Button>
    );
};

export default MyButton;