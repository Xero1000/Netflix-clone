import { Skeleton } from '@chakra-ui/react'
import backdropHeight from '../utilities/backdropHeight'

// displayed when page content is loading
const CardSkeleton = () => {
  return (
    <Skeleton h={backdropHeight} m={1}/>
  ) 
}

export default CardSkeleton