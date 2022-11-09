import { SxProps } from "@mui/material";

export const getBlockStyles: SxProps = (backdround: string) => (
    p: '2rem',
    position: 'relative',
    background: `url('${backdround}')`,
    maxWidth: '800px',
    width: '100%',
    marginTop: '1rem',
    height: '400px'
)