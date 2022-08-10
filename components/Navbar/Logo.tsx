import Link from 'next/link';
import { Toolbar, Typography } from '@mui/material';
import AdbIcon from '@mui/icons-material/Adb';

type Props = {
  display: object,
}

export default function Logo({ display } : Props) {
  return (
    <Link href="/">
      <Toolbar style={{cursor: "pointer"}}>
        <AdbIcon sx={{ display, mr: 1 }} />
        <Typography
          variant="h6"
          noWrap
          sx={{
            mr: 2,
            display,
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
          Lucyer
        </Typography>
      </Toolbar>
    </Link>
  )
}