import { Box } from '@chakra-ui/react';
import { ReactNode } from 'react'

interface Props {
    children: ReactNode;
}

const CardContainer = ({ children }: Props) => {
  return (
    <Box my={8}>
        {children}
    </Box>
  )
}

export default CardContainer