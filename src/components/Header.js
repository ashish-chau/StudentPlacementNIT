import React from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Box,
    IconButton,
    Avatar,
    Menu,
    MenuItem,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar position="static" color="primary" sx={{ px: 2,}}>
            <Toolbar>
                {/* Logo + Title */}
                <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
                    <img src="nareshit.jpg" alt="Logo" height="40" style={{ marginRight: 10 }} />
                   
                </Box>

                {/* Rest of the nav / avatar code here... */}
            </Toolbar>

        </AppBar>
    );
};

export default Header;
