import * as React from 'react';
import Link from 'next/link';
import {IconButton, Typography, Menu, MenuItem, Box} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { NAVBAR_MENU } from '../../constants/navbar';

export default function MenuOnHide() {  
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorElNav(event.currentTarget);
    };
  
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };
    return (
        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
            >
                <MenuIcon />
            </IconButton>
            <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                    display: { xs: 'block', md: 'none' },
                }}
            >
                {NAVBAR_MENU.map(({name, href}) => (
                    <Link href={href} key={name}>
                        <MenuItem onClick={handleCloseNavMenu}>
                                <Typography textAlign="center">{name}</Typography>
                        </MenuItem>
                    </Link>
                ))}
            </Menu>
        </Box>
    );
};