import { Skeleton } from '@chakra-ui/react'
import backdropHeight from '../utilities/backdropHeight'

const CardSkeleton = () => {
  return (
    <Skeleton h={backdropHeight} m={1}/>
  ) 
}

export default CardSkeleton