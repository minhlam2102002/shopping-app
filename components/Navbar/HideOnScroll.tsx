import Slide from '@mui/material/Slide';
import useScrollTrigger from '@mui/material/useScrollTrigger';

type Props = {
    children: React.ReactElement,
}

export default function HideOnScroll({ children }: Props) {
    const trigger = useScrollTrigger();

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}