import Typography from '@mui/material/Typography';
import AdbIcon from '@mui/icons-material/Adb';

type Props = {
  display: object,
}

export default function Logo({ display } : Props) {
  return (
    <>
      <AdbIcon sx={{ display, mr: 1 }} />
      <Typography
        variant="h6"
        noWrap
        component="a"
        href="/"
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
    </>
  )
}