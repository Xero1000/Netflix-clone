import { Box } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import ContentGrid from '../components/ContentGrid'

const SearchResultPage = () => {
    const params = useParams()

  return (
    <Box paddingX={10}>
      <ContentGrid type="search" searchText={params.searchText} />
    </Box>
  )
}

export default SearchResultPage