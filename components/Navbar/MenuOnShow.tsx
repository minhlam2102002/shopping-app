import Link from 'next/link';
import {Button, Box} from '@mui/material';
import { NAVBAR_MENU } from '../../constants/navbar';

export default function MenuOnShow() {
  return (
    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
      {NAVBAR_MENU.map(({name, href}) => (
        <Link href={href} key={name}>
          <Button sx={{ my: 2, color: 'white', display: 'block' }}>
            {name}
          </Button>
        </Link>
      ))}
    </Box>
  );
};