import React from "react";
import "./Header.css";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ChatIcon from '@mui/icons-material/Chat';
import IconButton from '@mui/material/IconButton';


function Header() {
    return (
        <div className="header">
    
            <IconButton>
                <AccountBoxIcon fontSize="large" className="icon-header" />
            </IconButton>

        <img className="logo"
             src="https://dl5zpyw5k3jeb.cloudfront.net/organization-photos/42559/2/?bust=1511995536"
             alt="Dog logo"
            />

            <IconButton>
                <ChatIcon fontSize="large" className="icon-header" />
            </IconButton>

        </div>
    )
}

export default Header
