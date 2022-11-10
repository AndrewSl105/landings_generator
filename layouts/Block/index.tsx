import React from 'react'
import { Box, Typography } from '@mui/material';
import { blockStyles } from './styles';

interface Block {
  title: string,
  backdround: string,
  type: string,
  id: number,
  position: string,
}

const Block = (props: Block) => {
  const { backdround, title } = props;

  return (
    <Box sx={{
      ...blockStyles,   
      backgroundImage: `url('${backdround}')`,
    }}>
      <Box padding="1rem" sx={{ backdropFilter: 'blur(10px)' }}>
        <Typography fontSize="3rem" variant="h1"  sx={{ color: 'white' }}>
          {title}
        </Typography>
        <Typography fontSize="1.5rem" variant="h3"  sx={{ color: 'white', marginTop: '2rem' }}>
          Descri
        </Typography>
      </Box>
    </Box>
  )
}

export default Block