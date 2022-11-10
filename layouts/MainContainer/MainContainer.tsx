import { Box } from '@mui/material'
import React from 'react'

const MainContainer = ({
    children
}) => {
  return (
    <Box marginBottom="2rem">{children}</Box>
  )
}

export default MainContainer