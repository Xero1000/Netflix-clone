import { Box } from '@chakra-ui/react';
import { ReactNode } from 'react'

interface Props {
    children: ReactNode;
}

// Meant to wrap either CardSkeletons or HoverCards
// Gives them both a common y-margin of 8
const CardContainer = ({ children }: Props) => {
  return (
    <Box my={8}>
        {children}
    </Box>
  )
}

export default CardContainer