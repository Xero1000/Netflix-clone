import { useParams } from 'react-router-dom'

const SearchResultPage = () => {
    const params = useParams()
    console.log(params.searchText)
  return (
    <div>{params.searchText}</div>
  )
}

export default SearchResultPage