import React from 'react'
import { Box, SxProps, Typography } from '@mui/material';
import { getBlockStyles } from './styles';

interface Block {
    title: string,
    backdround: string,
    type: string,
    id: number,
    position: string,
}

const blockStyles: SxProps = {
    p: '2rem',
    position: 'relative',
    background: `url('${backdround}')`,
    maxWidth: '800px',
    width: '100%',
    marginTop: '1rem',
    height: '400px'
  }

const Block = (props: Block) => {
    const { backdround, title } = props;
  return (
    <Box sx={blockStyles}>
        <Typography sx={{
            color: 'red'
        }}>
            {title}
        </Typography>
    </Box>
  )
}

export default Block